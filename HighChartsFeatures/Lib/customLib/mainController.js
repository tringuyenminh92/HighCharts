/*************************************************************
 *
 *	Created By: Nguyen Minh Tri - UR81HC
 *  Created Date: 23-09-2015
 *	Description: add comment header
 *	
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 23-09-2015
 *	Description: demo controller for stacked column chart
 *
 *************************************************************/


angular.module("GlobalModule").controller("lsx4yChartController", lsx4yChartController);
lsx4yChartController.$inject = ['$scope'];

function lsx4yChartController($scope) {

    $scope.initLSxChart = function () {
        $('#LSx4yChart').highcharts({
            chart: {},
            title: {
                text: 'LSx 4.y'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total'],
                crosshair: true,
                title: {
                    text: 'Date'
                }
            },
            yAxis: [
                {
                    min: 0,
                    title: {
                        text: 'Quantity'
                    },
                    stackLabels: { enabled: true }
                },
                {
                    min: 0,
                    title: {
                        text: 'Quantity'
                    },
                    stackLabels: { enabled: false },
                    opposite: true
                }
            ],
            tooltip: {
                shared: true
            },
            legend: {},
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
                    }
                }
            },
            series: [
                {
                    name: 'LSU + ADV',
                    type: 'column',
                    yAxis: 0,
                    data: [13, 29, 36, 16, 18, 19, 43, 76, 44, 25, 23, 17],
                    color: '#4169e1'
                },
                {
                    name: 'LSF 4.x',
                    type: 'column',
                    yAxis: 0,
                    data: [19, 24, 35, 12, 35, 7, 33, 64, 33, 77, 32, 13],
                    color: '#a52a2a'
                },
                {
                    name: 'Total/Month',
                    type: 'spline',
                    data: [32, 53, 71, 28, 53, 26, 76, 140, 77, 102, 55, 30]
                },
                {
                    name: 'Total LSU & ADV',
                    type: 'column',
                    yAxis: 1,
                    data: [null, null, null, null, null, null, null, null, null, null, null, null, 359],
                    color: '#4169e1'
                },
                {
                    name: 'Total LSF 4.x',
                    type: 'column',
                    yAxis: 1,
                    data: [null, null, null, null, null, null, null, null, null, null, null, null, 384],
                    color: '#a52a2a'
                }
            ]
        });
    };

}


angular.module("GlobalModule").controller("xfourChartController", xfourChartController);
xfourChartController.$inject = ['$scope'];

function xfourChartController($scope) {
    $scope.initXFourChart = function () {
        $('#XFourChart').highcharts({
            chart: {},
            title: {
                text: 'XFour and LSU 5.1'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total'],
                crosshair: true,
                title: { text: 'Date' }
            },
            yAxis: [
                {
                    min: 0,
                    title: {
                        text: 'Quantity'
                    },
                    stackLabels: { enabled: true }
                },
                {
                    min: 0,
                    title: {
                        text: 'Quantity'
                    },
                    stackLabels: { enabled: false },
                    opposite: true
                }
            ],
            tooltip: { shared: true },
            legend: {},
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
                    }
                }
            },
            series: [
                {
                    name: 'LSU 5.1',
                    type: 'column',
                    yAxis: 0,
                    data: [13, 29, 36, 16, 18, 19, 43, 76, 44, 25, 23, 17, 0],
                    color: '#30889A'
                },
                {
                    name: 'XFour',
                    type: 'column',
                    yAxis: 0,
                    data: [19, 24, 35, 12, 35, 7, 33, 64, 33, 77, 32, 13, 0],
                    color: '#E5700F'
                },
                {
                    name: 'Total/Month',
                    type: 'spline',
                    data: [32, 53, 71, 28, 53, 26, 76, 140, 77, 102, 55, 30]
                },
                {
                    name: 'Total XFour',
                    type: 'column',
                    yAxis: 1,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 384],
                    color: '#30889A'
                },
                {
                    name: 'Total LSU',
                    type: 'column',
                    yAxis: 1,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 359],
                    color: '#E5700F'
                }
            ]
        });
    };

}


angular.module("GlobalModule").controller("allPlatformsYTDController", allPlatformsYTDController);
allPlatformsYTDController.$inject = ['$scope'];

function allPlatformsYTDController($scope) {

    $scope.initAllPlatformsYTDChart = function () {

        $('#allPlatformsYTDChart').highcharts({
            chart: { type: 'pie' },
            title: {
                text: 'All Platforms YTD'
            },
            xAxis: {
                categories: [' ', '  ', '   ', '    ']
            },
            yAxis: {
                gridLineColor: 'transparent',
                minorGridLineWidth: 0,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                stackLabels: { enabled: false }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.name} <br /> {point.percentage:.0f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                },
                column: {
                    stacking: 'normal',
                    maxPointWidth: 100,
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            if (this.point.percentage === 0) {
                                return ' ';
                            }
                            return this.series.name + '<br />'+ ((this.point.total * this.point.percentage) / 100).toFixed(0);
                        },
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
                    }
                }
            },
            series: [
                {
                    type: 'column',
                    name: 'EGS-PMx',
                    data: [null, null, 40, null],
                    color: '#4299B0'
                },
                {
                    type: 'column',
                    name: 'EGS-NX',
                    data: [null, null, 18, null],
                    color: '#DD8340'
                },
                {
                    name: " ",
                    data: [
                        {
                            name: "EGS xyz",
                            y: 58,
                            sliced: true,
                            color: '#95A8CF'
                        }, {
                            name: "LSF 4.x",
                            y: 4,
                            color: '#4672AD'
                        }, {
                            name: "LSU + ADV",
                            y: 17,
                            color: '#AA4644'
                        }, {
                            name: "Xfour",
                            y: 16,
                            color: '#8AA64E'
                        }, {
                            name: "LSU 5,1",
                            y: 5,
                            color: '#72578C'
                        }
                    ]
                }
            ]
        });

    };

}