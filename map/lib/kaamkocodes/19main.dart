import 'dart:convert';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:map/kaamkocodes/3file.dart';
import 'package:map/kaamkocodes/4file.dart';
import 'package:map/kaamkocodes/5file.dart';
import 'package:map/kaamkocodes/6utils.dart';
import 'package:map/kaamkocodes/7json.dart';
import 'package:map/kaamkocodes/9storeindb.dart';
import 'package:map/kaamkocodes/13barLabel.dart';
import 'package:map/routeapi_json_output/kamlagnecodes/bar_chart_sample6.dart';
import 'package:map/kaamkocodes/11inside_bottom_sheet.dart';
import 'package:map/kaamkocodes/12taskmanager.dart';
import 'package:map/kaamkocodes/resources/app_colors.dart';
import 'package:map/kaamkocodes/widgets/legend_widget.dart';
import 'package:mongo_dart/mongo_dart.dart' as mongo;
import 'package:getwidget/getwidget.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:getwidget/getwidget.dart';
import 'package:intl/intl.dart';

List<List<double>> data_for_graph = [];
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  runApp(MaterialApp(
    home: PolylineMap(),
  ));
  // Delay execution of fetchDataFromMongoDB to ensure the app is built
  Future.delayed(Duration.zero, () async {
    data_for_graph = await fetchDataFromMongoDB();
    print("to show in the graph : $data_for_graph");
  });
  // Delay for 5 seconds before running the aggregate function
  Future.delayed(const Duration(seconds: 10), () async {
    // Run the aggregate function to remove redundant data
    await checkAndRemoveDuplicate();
  });
}

class PolylineMap extends StatefulWidget {
  @override
  _PolylineMapState createState() => _PolylineMapState();
}

class _PolylineMapState extends State<PolylineMap> {
  late mongo.Db _db;
  GoogleMapController? _controller;
  List<LatLng> _polylineCoordinates = [];
  Map<TrafficCondition, Color> _colorMap = {
    TrafficCondition.NORMAL: Colors.green,
    TrafficCondition.SLOW: Colors.yellow,
    TrafficCondition.TRAFFIC_JAM: Colors.red,
  };
  Set<Polyline> _polylines = {};
  void _handleMapTap(LatLng tapPosition) {
    // Check if any polyline contains the tapped position
    for (final polyline in _polylines) {
      final containsPoint = _containsPoint(polyline.points, tapPosition);
      if (containsPoint) {
        // Polyline tapped! Handle the event here
        print("Polyline with ID '${polyline.onTap}' was tapped!");
        _showBottomSheet(polyline);

        // You can show a dialog, navigate to a new screen, etc.
        break; // Exit the loop after finding the first matching polyline
      }
    }
  }

  void _showBottomSheet(Polyline polyline) {
    showModalBottomSheet(
      context: context,
      builder: (BuildContext context) {
        return Container(
          padding: EdgeInsets.all(16.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Text(
              //   'Polyline Details',
              //   style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
              // ),
              // SizedBox(height: 10.0),
              // Text('Distance: ${polyline.points}'),
              // SizedBox(height: 5.0),
              // Text('Duration: ${polyline.color}'),
              ChartToggleWidget(),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    _polylines = Set<Polyline>.of(_createPolylines());
    return Scaffold(
      appBar: AppBar(
        title: Text('Polyline Map'),
      ),
      body: GoogleMap(
        mapType: MapType.terrain,
        onTap: _handleMapTap,
        onMapCreated: _onMapCreated,
        initialCameraPosition: CameraPosition(
          target:
              LatLng(27.679807526706504, 85.32730017497411), // Initial position
          zoom: 12,
        ),
        polylines: Set<Polyline>.of(_createPolylines()),
      ),
      bottomSheet: GFBottomSheet(
        controller: GFBottomSheetController(),
        maxContentHeight: 500,
        enableExpandableContent: true,
        stickyHeaderHeight: 100,
        stickyHeader: Container(
          // color: Color.fromARGB(177, 126, 193, 255),
          decoration: BoxDecoration(
            color: Color.fromARGB(255, 75, 156, 199),
            boxShadow: [BoxShadow(color: Colors.black45, blurRadius: 0)],
          ),
          child: const GFListTile(
            avatar: GFAvatar(
              backgroundImage: AssetImage('asset image here'),
            ),
            titleText: 'Charles Aly',
          ),
        ),
        contentBody: SingleChildScrollView(
          controller: ScrollController(),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Buttons
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      // Button 1 functionality
                      // setState(() {
                      //   showChart1 =  true;
                      // });
                    },
                    child: Text('Button 1'),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      // Button 2 functionality
                    },
                    child: Text('Button 2'),
                  ),
                ],
              ),
              // Bar chart
              ChartToggleWidget(),
              TimingsChart(),
            ],
          ),
        ),
      ),
    );
  }

  void _onMapCreated(GoogleMapController controller) {
    _controller = controller;
  }

  List<Polyline> polylines = [];
  var inspectData;
  List<Polyline> _createPolylines() {
    // Parse the JSON data and create polylines
    //run 1 choti -> 10 choti -> 10 ota object euta collection. {expected departure_time : 11:00AM, user before 1 hourn notification chahiyo,
    //api:  departure_time = 10:05AM
    // 1 choti 10:00: [1,4,4.9] for 9.9km its duraiton is 50min., [1,4,3.5] for 8.5km it duration 45min,
    //2nd time : 10:10: [2,3,4.9] for 9.9km its duraiton is 65min., [1,4,3.5] for 8.5km it duration 45min,
    //3rd time : 10:20: [3,3,3.9] for 9.9km its duraiton is 75min., [1,4,3.5] for 8.5km it duration 45min,  }

    double degreesToRadians(double degrees) {
      return degrees * pi / 180;
    }

    String jsonData = json.encode(jsonDataobj);
    final jsonDataObj = json.decode(jsonData);
    List<List<dynamic>> unique_duration = [];
    List<dynamic> unique_distance = [];
    String concatenatedData = '';

    List<dynamic> some_final_to_another = [];

    List<dynamic> routes = jsonDataobj['routes']; //3
    print("routes ko total length:${routes.length}");
    bool ekchotimatra = true;
    int count = 0;
// List<dynamic> route = jsonDataObj['routes']['legs'];
// print("legs haru ko  ko total length:${route.length}");
    for (var route in routes) {
      print("legs haru kati choti chaleko xa?: ${route.length}"); //6
      List<dynamic> each_duration = [
        route['duration'],
        route['distanceMeters']
      ];
      dynamic each_distanceMeters = route['distanceMeters'];
      unique_distance.add(each_distanceMeters);
      unique_duration.add(each_duration);
      List<List<String>> speedsList = [];
      List<List<LatLng>> datastomongo = [];
      List<dynamic> legs = route['legs'];
      List<String> speeds = [];
      List<LatLng> decodedPolyline =
          _decodePolyline(route['polyline']['encodedPolyline']);
      datastomongo.add(decodedPolyline);

      for (var leg in legs) {
        List<dynamic> intervals =
            leg['travelAdvisory']['speedReadingIntervals'];
        for (var interval in intervals) {
          int start = interval['startPolylinePointIndex'];
          int end = interval['endPolylinePointIndex'];
          String speed = interval['speed'];

          // Add speed information to the list
          for (int i = start; i <= end; i++) {
            speeds.add(speed);
          }
        }
      }
      speedsList.add(speeds);

      // Parse traffic intervals and color polylines accordingly
      for (var interval in route['legs'][0]['travelAdvisory']
          ['speedReadingIntervals']) {
        int startIdx = interval['startPolylinePointIndex'];
        int endIdx = interval['endPolylinePointIndex'];
        List<LatLng> segmentCoordinates =
            decodedPolyline.sublist(startIdx, endIdx + 1);
        TrafficCondition condition = TrafficCondition.values.firstWhere(
            (e) => e.toString().split('.').last == interval['speed'],
            orElse: () => TrafficCondition.NORMAL);

        Color color = _colorMap[condition] ??
            Colors.grey; // Default to grey if no match found
        polylines.add(
          Polyline(
            polylineId: PolylineId('segment_${startIdx}_$endIdx'),
            color: color,
            points: segmentCoordinates,
            width: 5, // Adjust width as needed
          ),
        );
      }
// if(count == 0){
      storePolylineSegments(datastomongo, speedsList);
    }
    print("duration ko values haru:$unique_duration");
    print("distance ko values haru:$unique_distance");

// Call storePolylineSegments after the loop to ensure it's called only once with the complete data

    // print("speed ko values : $speed");
    // print("finalto database list list dynamic: $some_final_to_another");
    inspectData = polylines;

    return polylines;
  }

  List<LatLng> _decodePolyline(String encoded) {
    List<LatLng> points = [];
    int index = 0;
    int len = encoded.length;
    int lat = 0;
    int lng = 0;

    while (index < len) {
      int b;
      int shift = 0;
      int result = 0;
      do {
        b = encoded.codeUnitAt(index++) - 63;
        result |= (b & 0x1F) << shift;
        shift += 5;
      } while (b >= 0x20);
      int dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.codeUnitAt(index++) - 63;
        result |= (b & 0x1F) << shift;
        shift += 5;
      } while (b >= 0x20);
      int dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
      lng += dlng;

      points.add(LatLng((lat / 1E5).toDouble(), (lng / 1E5).toDouble()));
    }
    return points;
  }

  bool _containsPoint(List<LatLng> polygonPoints, LatLng tapPosition) {
    int crossings = 0;

    for (int i = 0; i < polygonPoints.length; i++) {
      final vertex1 = polygonPoints[i];
      final vertex2 = polygonPoints[(i + 1) % polygonPoints.length];

      if (vertex1.longitude == vertex2.longitude &&
          vertex1.longitude == tapPosition.longitude) {
        // Point is on the same longitude as a vertex; it's either on a vertex or on an edge.
        if (tapPosition.latitude >= vertex1.latitude &&
                tapPosition.latitude <= vertex2.latitude ||
            tapPosition.latitude >= vertex2.latitude &&
                tapPosition.latitude <= vertex1.latitude) {
          return true; // Point is on the edge
        }
      }

      if (tapPosition.longitude > vertex1.longitude &&
              tapPosition.longitude <= vertex2.longitude ||
          tapPosition.longitude > vertex2.longitude &&
              tapPosition.longitude <= vertex1.longitude) {
        final double edgeSlope = (vertex2.latitude - vertex1.latitude) /
            (vertex2.longitude - vertex1.longitude);
        final double pointSlope = (tapPosition.latitude - vertex1.latitude) /
            (tapPosition.longitude - vertex1.longitude);

        if (pointSlope <= edgeSlope) {
          crossings++;
        }
      }
    }

    return crossings % 2 == 1;
  }
}
