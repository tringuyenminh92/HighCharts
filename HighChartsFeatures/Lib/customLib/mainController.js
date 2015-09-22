﻿

angular.module("GlobalModule").controller("mainController", mainController);
mainController.$inject = ['$scope'];

function mainController($scope) {

    $scope.initLSxChart = function () {
        $('#LSx4yChart').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'LSx 4.y'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', ''],
                crosshair: true,
                title: {
                    text: 'Date'
                }
            }],
            yAxis: [
                { // Primary yAxis
                    title: {
                        text: 'Temperature'
                    },
                    opposite: false,
                    min: 0
                },
                { // Secondary yAxis
                    title: {
                        text: 'Rainfall'
                    },
                    opposite: true,
                    min: 0
                }
            ],
            tooltip: {
                shared: true
            },
            legend: {
                reversed: true

            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'LSF 4.x',
                type: 'column',
                yAxis: 1,
                data: [3, 4, 5, 12],
                //tooltip: { valueSuffix: ' mm' }

            }, {
                name: 'LSU + ADV',
                type: 'column',
                yAxis: 1,
                data: [7, 8, 9, 24],
                //tooltip: { valueSuffix: ' mm' }

            },
             {
                 name: 'Total YTD',
                 type: 'column',
                 yAxis: 1,
                 data: [11, 12, 13, 36],
                 //tooltip: { valueSuffix: ' mm' }

             }
            //, {
            //    name: 'Temperature',
            //    type: 'spline',
            //    data: [7.0, 6.9, 9.5],
            //    tooltip: { valueSuffix: '°C' }
            //}
            ]
        });
    };
}