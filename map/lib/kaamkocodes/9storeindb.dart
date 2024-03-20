

import 'dart:convert';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:map/kaamkocodes/4file.dart';
import 'package:map/kaamkocodes/13barLabel.dart';
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










    void storePolylineSegments(List<List<LatLng>> datastomongo, List<List<String>> condition) async {
      int count = 0;
      // i++;
      int ct = 0;
      late mongo.Db _db;
      String connectionString =
          "mongodb+srv://legolasbhatia123:legolas@cluster0.f1w1qjx.mongodb.net/traffic?retryWrites=true&w=majority";
      _db = await mongo.Db.create(connectionString);
      await _db.open();
      print("Db connected");

      var collection = _db.collection('polyline_segments');

      List<Map<String, dynamic>> trafficAndPointsData = [];
      List<Map<String, dynamic>> points = [];
      List<String> traffic = [];
      List<Map<String, dynamic>> result = [];
      print("datastomongo ko length ${datastomongo.length}");
     

  
      for (int i = 0; i < datastomongo.length; i++) {
        List<TrafficPoint> points_param = [];

        for (int j = 0; j < datastomongo[i].length; j++) {
          print("inner loop ko length ${datastomongo[i].length}");

          try {
            Map<String, dynamic> point = {
              'latitude': datastomongo[i][j].latitude,
              'longitude': datastomongo[i][j].longitude,
              'traffic': condition[i][j]
            };
            points.add(point);
            traffic.add(condition[i][j]);
          } catch (e) {
            print('Error: $e, writing "traffic_jam"');
            Map<String, dynamic> point = {
              'latitude': 'traffic_jam',
              'longitude': 'traffic_jam',
              'traffic': 'traffic_jam'
            };
            points.add(point);
            traffic.add('traffic_jam');
          }
        }

        print("running $ct");
        ct++;

        // points_param.add(points);
        result = computeDistanceAndTraffic(points);

        print("resiults ahri:$result");
        // Compute total distance for each traffic type
      }
    }


    
    List<Map<String, dynamic>> computeDistanceAndTraffic(
        List<Map<String, dynamic>> points) {
      List<Map<String, dynamic>> result = [];

      for (int i = 0; i < points.length - 1; i++) {
        double lat1 = points[i]["latitude"];
        double lon1 = points[i]["longitude"];
        String traffic = points[i]["traffic"];

        double lat2 = points[i + 1]["latitude"];
        double lon2 = points[i + 1]["longitude"];

        TrafficPoint point1 = TrafficPoint(lat1, lon1, traffic);
        TrafficPoint point2 =
            TrafficPoint(lat2, lon2, points[i + 1]["traffic"]);

        double distance = calculateDistance(point1, point2);

        Map<String, dynamic> pointData = {
          'distance': distance,
          'traffic': traffic,
        };

        result.add(pointData);
      }

      return result;
    }

    
    double calculateDistance(TrafficPoint point1, TrafficPoint point2) {
      const double earthRadius = 6371; // in kilometers

      double lat1Rad = degreesToRadians(point1.latitude);
      double lat2Rad = degreesToRadians(point2.latitude);
      double lon1Rad = degreesToRadians(point1.longitude);
      double lon2Rad = degreesToRadians(point2.longitude);

      double deltaLat = lat2Rad - lat1Rad;
      double deltaLon = lon2Rad - lon1Rad;

      double a = pow(sin(deltaLat / 2), 2) +
          cos(lat1Rad) * cos(lat2Rad) * pow(sin(deltaLon / 2), 2);
      double c = 2 * atan2(sqrt(a), sqrt(1 - a));

      return earthRadius * c; // in kilometers
    }
