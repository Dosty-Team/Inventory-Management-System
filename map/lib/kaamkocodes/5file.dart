import 'dart:convert';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:map/kaamkocodes/2file.dart';
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


//for graph representation widget
class ChartToggleWidget extends StatefulWidget {
  @override
  _ChartToggleWidgetState createState() => _ChartToggleWidgetState();
}

class _ChartToggleWidgetState extends State<ChartToggleWidget> {
  // Variable to control the visibility of BarChartSample6
  bool showChart1 = false;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ElevatedButton(
          onPressed: () {
            // Toggle visibility of BarChartSample6
            setState(() {
              showChart1 = !showChart1;
            });
          },
          child: Text(' Chart'),
        ),
        // Conditionally show BarChartSample6 based on showChart1 value
        if (showChart1) BarChartSample6(),
      ],
    );
  }
}
