
import 'dart:convert';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:map/kaamkocodes/4file.dart';
import 'package:map/kaamkocodes/13barLabel.dart';
import 'package:map/routeapi_json_output/kamlagnecodes/bar_chart_sample6.dart';
import 'package:map/kaamkocodes/11inside_bottom_sheet.dart';
import 'package:map/kaamkocodes/12taskmanager.dart';
import 'package:map/kaamkocodes/19main.dart';
import 'package:map/kaamkocodes/resources/app_colors.dart';
import 'package:map/kaamkocodes/widgets/legend_widget.dart';
import 'package:mongo_dart/mongo_dart.dart' as mongo;
import 'package:getwidget/getwidget.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:getwidget/getwidget.dart';
import 'package:intl/intl.dart';












Future<List<List<double>>> fetchDataFromMongoDB() async {
  late mongo.Db _db;
  String connectionString =
      "mongodb+srv://legolasbhatia123:legolas@cluster0.f1w1qjx.mongodb.net/traffic?retryWrites=true&w=majority";
  _db = await mongo.Db.create(connectionString);
  await _db.open();
  print("Db connected");

  // var collection = _db.collection('represent_data');
  final collection = _db.collection('represent_data');

  final data = await collection.find().toList();

  final List<List<double>> chartData = [];

  for (var item in data) {
    double normalDistance = item['normalDistance'];
    double slowDistance = item['slowDistance'];
    double jamDistance = item['jamDistance'];

    // Check if distanceMeters matches any duration element
    String distanceMeters =
        (item['distanceMeters'] as double).toStringAsFixed(1);
    print("distance meters i :$distanceMeters");
    List<dynamic> durations = item['duration'];
    List<double> array = [];
    // for(int i = 0; i< durations.length;i++){

    for (var duration in durations) {
      var duration_in_km = (duration[1] / 1000 as double).toStringAsFixed(1);
      print("Duration in ktm haru : $duration_in_km");
      if (duration_in_km == distanceMeters) {
        array = [jamDistance, slowDistance, normalDistance];
        break;
      }
    }

    if (array.isNotEmpty) {
      chartData.add(array);
    }
  }

  await _db.close();

  return chartData;
}



Future<void> checkAndRemoveDuplicate() async {
  late mongo.Db _db;
  String connectionString =
      "mongodb+srv://legolasbhatia123:legolas@cluster0.f1w1qjx.mongodb.net/traffic?retryWrites=true&w=majority";
  _db = await mongo.Db.create(connectionString);
  await _db.open();
  print("Db connected");
  final datasforgraph = _db.collection('represent_data');
  // Fetch all documents from the collection
  var allDocs = await datasforgraph.find({}).toList();

  // Keep track of encountered documents to ensure only one copy of each unique document
  var uniqueDocIds = <String>{};

  // Remove redundant data while keeping one copy of each unique document
  for (var doc in allDocs) {
    var docId = doc['_id'].toString();
    if (uniqueDocIds.contains(docId)) {
      // Remove redundant document
      await datasforgraph.remove({'_id': doc['_id']});
    } else {
      // Add this document's ID to the set of encountered IDs
      uniqueDocIds.add(docId);
    }
  }
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

  