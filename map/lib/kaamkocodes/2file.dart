import 'dart:convert';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:map/kaamkocodes/13barLabel.dart';
import 'package:map/kaamkocodes/3file.dart';
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


late List<BarChartGroupData> chartData;

class BarChartSample6 extends StatelessWidget {
  List<BarChartGroupData> generateChartData(List<List<double>> data) {
    List<BarChartGroupData> chartData = [];

    for (int i = 0; i < data.length; i++) {
      chartData.add(generateGroupData(i, data[i][0], data[i][1], data[i][2]));
    }

    return chartData;
  }

  final List<List<double>> data = data_for_graph;
  // =fetchDataFromMongoDB();
  //  [
  //   [2, 4, 6],
  //   [2, 5, 1.7],
  //   [1.3, 3.1, 2.8],
  //   [3.1, 4, 3.1],
  //   [0.8, 3.3, 3.4],
  //   [2, 5.6, 1.8],
  //   [1.3, 3.2, 2],
  // ];

  //final List<List<double>> data = List<List<dynamic>> allTrafficData
  BarChartSample6({Key? key}) : super(key: key) {
    // Initialize chartData here
    chartData = generateChartData(data);
  }
  final Trafficjamcolor = Color.fromARGB(255, 168, 0, 0);
  final NormalColor = Color.fromARGB(255, 0, 255, 85);
  final SlowColor = Color.fromARGB(255, 238, 255, 0);
  final betweenSpace = 0.2;

  BarChartGroupData generateGroupData(
    int x,
    double pilates,
    double quickWorkout,
    double cycling,
  ) {
    return BarChartGroupData(
      x: x,
      groupVertically: true,
      barRods: [
        BarChartRodData(
          fromY: 0,
          toY: pilates,
          color: Trafficjamcolor,
          width: 5,
        ),
        BarChartRodData(
          fromY: pilates + betweenSpace,
          toY: pilates + betweenSpace + quickWorkout,
          color: SlowColor,
          width: 5,
        ),
        BarChartRodData(
          fromY: pilates + betweenSpace + quickWorkout + betweenSpace,
          toY: pilates + betweenSpace + quickWorkout + betweenSpace + cycling,
          color: NormalColor,
          width: 5,
        ),
      ],
    );
  }

  Widget leftTitles(double value, TitleMeta meta) {
    const style = TextStyle(fontSize: 10);
    String text;
    switch (value.toInt()) {
      case 0:
        text = '5';
        break;
      case 1:
        text = '10';
        break;
      case 2:
        text = '15';
        break;
      case 3:
        text = '20';
        break;
      case 4:
        text = '25';
        break;
      case 5:
        text = '30';
        break;
      case 6:
        text = '35';
        break;
      case 7:
        text = '40';
        break;
      case 8:
        text = '45';
        break;
      case 9:
        text = '50';
        break;
      case 10:
        text = '55';
        break;
      case 11:
        text = '60';
        break;
      default:
        text = '';
    }
    return SideTitleWidget(
      axisSide: meta.axisSide,
      child: Text(text, style: style),
    );
  }

  String getFormattedTime(int hour, int minute) {
    String hourStr = hour.toString().padLeft(2, '0');
    String minuteStr = minute.toString().padLeft(2, '0');
    return '$hourStr:$minuteStr';
  }

  Widget bottomTitles(double value, TitleMeta meta) {
    const int expectedTime = 10; // 10 minutes interval
    int hour = 10; // Initial hour
    int minute = 0; // Initial minute
    switch (value.toInt()) {
      case 0:
        return Text(
          getFormattedTime(hour, minute),
          style: TextStyle(fontSize: 10),
        );
      case 1:
        minute += expectedTime;
        if (minute >= 60) {
          minute -= 60;
          hour += 1;
        }
        return Text(
          getFormattedTime(hour, minute),
          style: TextStyle(fontSize: 10),
        );
      case 2:
        minute += 2 * expectedTime;
        if (minute >= 60) {
          minute -= 60;
          hour += 1;
        }
        return Text(
          getFormattedTime(hour, minute),
          style: TextStyle(fontSize: 10),
        );
      case 3:
        minute += 3 * expectedTime;
        if (minute >= 60) {
          minute -= 60;
          hour += 1;
        }
        return Text(
          getFormattedTime(hour, minute),
          style: TextStyle(fontSize: 10),
        );
      case 4:
        minute += 4 * expectedTime;
        if (minute >= 60) {
          minute -= 60;
          hour += 1;
        }
        return Text(
          getFormattedTime(hour, minute),
          style: TextStyle(fontSize: 10),
        );
      case 5:
        minute += 5 * expectedTime;
        if (minute >= 60) {
          minute -= 60;
          hour += 1;
        }
        return Text(
          getFormattedTime(hour, minute),
          style: TextStyle(fontSize: 10),
        );
      case 6:
        minute += 6 * expectedTime;
        if (minute >= 60) {
          minute -= 60;
          hour += 1;
        }
        return Text(
          getFormattedTime(hour, minute),
          style: TextStyle(fontSize: 10),
        );
      default:
        return SizedBox();
    }
  }

  void handleTouchCallback(BuildContext context) {
    showModalBottomSheet(
        context: context,
        builder: (context) {
          return Container(
            height: 200, // Adjust the height as needed
            child: TimingsChart(), // Replace TimingsChart with your widget
          );
        });
    // Navigator.of(context).push(MaterialPageRoute(
    //   builder: (context) => TimingsChart(),
    // ));
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: GestureDetector(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Activity',
              style: TextStyle(
                color: AppColors.contentColorBlue,
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            LegendsListWidget(
              legends: [
                Legend('Traffic_jam', Trafficjamcolor),
                Legend('Slow', SlowColor),
                Legend('Normal', NormalColor),
              ],
            ),
            const SizedBox(height: 14),
            AspectRatio(
              aspectRatio: 2,
              child: BarChart(
                BarChartData(
                  alignment: BarChartAlignment.spaceBetween,
                  titlesData: FlTitlesData(
                    leftTitles: AxisTitles(
                      sideTitles: SideTitles(
                        showTitles: true,
                        getTitlesWidget: leftTitles,
                      ),
                    ),
                    rightTitles: const AxisTitles(),
                    topTitles: const AxisTitles(),
                    bottomTitles: AxisTitles(
                      sideTitles: SideTitles(
                        showTitles: true,
                        getTitlesWidget: bottomTitles,
                        reservedSize: 20,
                      ),
                    ),
                  ),
                  borderData: FlBorderData(show: false),
                  gridData: const FlGridData(show: false),
                  barGroups: chartData,
                  maxY: 11 + (betweenSpace * 3),
                  extraLinesData: ExtraLinesData(
                    horizontalLines: [
                      HorizontalLine(
                        y: 3.3,
                        color: Trafficjamcolor,
                        strokeWidth: 1,
                        dashArray: [20, 4],
                      ),
                      HorizontalLine(
                        y: 8,
                        color: SlowColor,
                        strokeWidth: 1,
                        dashArray: [20, 4],
                      ),
                      HorizontalLine(
                        y: 11,
                        color: NormalColor,
                        strokeWidth: 1,
                        dashArray: [20, 4],
                      ),
                    ],
                  ),

//                   barTouchData: BarTouchData(
//       enabled: true,
// touchCallback: (FlTouchEvent event,BarTouchResponse? barTouchResponse) {
//       if (event == PointerDownEvent) {
//         handleTouchCallback(context);
//         Navigator.of(context).push(MaterialPageRoute(
//     builder: (context) => BarDetailsScreen(),
//   ));
//       }
//     },
//     ),
                  barTouchData: BarTouchData(
                    enabled: true,
                    touchCallback: (FlTouchEvent event,
                        BarTouchResponse? barTouchResponse) {
                      // Navigate to BarDetailsScreen with relevant data (error handling included)
                      try {
                        // (group, groupIndex, rod, rodIndex) {
                        // final barData = chartData[group.x.toInt()];
                        Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) =>
                              //  BarDetailsScreen(barData: barData),

                              TaskManager(),
                          // BarLabelScreen(
                          //    chartData: chartData,//chart ko data vanda  pani each bar ko bottom time pathaune ho
                          // ),
                        ));
                        // };
                      } catch (error) {
                        print('Error navigating to barLabelScreen: $error');
                        // Handle navigation error gracefully (e.g., show a snackbar)
                      }
                    },
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

