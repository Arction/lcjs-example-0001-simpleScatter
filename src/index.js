/*
 * LightningChartJS example that showcases a simple scatter series.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, emptyLine, PointShape, emptyFill, LegendBoxBuilders, Themes } = lcjs

// Create a XY Chart.
const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        }).ChartXY({
    theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
})

// Modify the default X Axis to use DateTime TickStrategy, and set the axis interval
chart
    .getDefaultAxisX()
    .setTickStrategy(AxisTickStrategies.DateTime)
    .setInterval({
        start: new Date(2018, 6, 1).getTime(),
        end: new Date(2018, 8, 29).getTime(),
    })

chart.axisY
    .setScrollStrategy(undefined)
    .setTitle('Revenue')
    .setUnits('$')
    .setInterval({ start: 0, end: 2000, stopAxisAfter: false })

chart.setTitle('Product Sales').setCursor((cursor) => {
    cursor.setTickMarkerYVisible(false)
    cursor.setGridStrokeYStyle(emptyLine)
})

// Create a LegendBox as part of the chart.
const legend = chart
    .addLegendBox(LegendBoxBuilders.HorizontalLegendBox)
    // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
    .setAutoDispose({
        type: 'max-width',
        maxWidth: 0.8,
    })

// Create series.
const smartPhonesSeries = chart
    .addPointLineAreaSeries({ dataPattern: 'ProgressiveX' })
    .setAreaFillStyle(emptyFill)
    .setStrokeStyle(emptyLine)
    .setPointShape(PointShape.Circle)
    .setName('Smart Phones')
    .setPointSize(10)
const laptopsSeries = chart
    .addPointLineAreaSeries({ dataPattern: 'ProgressiveX' })
    .setAreaFillStyle(emptyFill)
    .setStrokeStyle(emptyLine)
    .setPointShape(PointShape.Star)
    .setName('Laptops')
    .setPointSize(10)
const smartTvSeries = chart
    .addPointLineAreaSeries({ dataPattern: 'ProgressiveX' })
    .setAreaFillStyle(emptyFill)
    .setStrokeStyle(emptyLine)
    .setPointShape(PointShape.Triangle)
    .setName('Smart TV')
    .setPointSize(10)

// Data for the plotting
const smartPhoneData = [
    { x: new Date(2018, 6, 1).getTime(), y: 200 },
    { x: new Date(2018, 6, 2).getTime(), y: 220 },
    { x: new Date(2018, 6, 3).getTime(), y: 260 },
    { x: new Date(2018, 6, 4).getTime(), y: 264 },
    { x: new Date(2018, 6, 5).getTime(), y: 280 },
    { x: new Date(2018, 6, 6).getTime(), y: 288 },
    { x: new Date(2018, 6, 7).getTime(), y: 280 },
    { x: new Date(2018, 6, 8).getTime(), y: 248 },
    { x: new Date(2018, 6, 9).getTime(), y: 292 },
    { x: new Date(2018, 6, 10).getTime(), y: 308 },
    { x: new Date(2018, 6, 11).getTime(), y: 316 },
    { x: new Date(2018, 6, 12).getTime(), y: 328 },
    { x: new Date(2018, 6, 13).getTime(), y: 344 },
    { x: new Date(2018, 6, 14).getTime(), y: 360 },
    { x: new Date(2018, 6, 15).getTime(), y: 388 },
    { x: new Date(2018, 6, 16).getTime(), y: 404 },
    { x: new Date(2018, 6, 17).getTime(), y: 432 },
    { x: new Date(2018, 6, 18).getTime(), y: 444 },
    { x: new Date(2018, 6, 19).getTime(), y: 432 },
    { x: new Date(2018, 6, 20).getTime(), y: 444 },
    { x: new Date(2018, 6, 21).getTime(), y: 452 },
    { x: new Date(2018, 6, 22).getTime(), y: 460 },
    { x: new Date(2018, 6, 23).getTime(), y: 464 },
    { x: new Date(2018, 6, 24).getTime(), y: 492 },
    { x: new Date(2018, 6, 25).getTime(), y: 508 },
    { x: new Date(2018, 6, 26).getTime(), y: 492 },
    { x: new Date(2018, 6, 27).getTime(), y: 520 },
    { x: new Date(2018, 6, 28).getTime(), y: 532 },
    { x: new Date(2018, 6, 29).getTime(), y: 548 },
    { x: new Date(2018, 6, 30).getTime(), y: 576 },
    { x: new Date(2018, 6, 31).getTime(), y: 600 },
    { x: new Date(2018, 7, 1).getTime(), y: 608 },
    { x: new Date(2018, 7, 2).getTime(), y: 628 },
    { x: new Date(2018, 7, 3).getTime(), y: 624 },
    { x: new Date(2018, 7, 4).getTime(), y: 640 },
    { x: new Date(2018, 7, 5).getTime(), y: 672 },
    { x: new Date(2018, 7, 6).getTime(), y: 692 },
    { x: new Date(2018, 7, 7).getTime(), y: 716 },
    { x: new Date(2018, 7, 8).getTime(), y: 732 },
    { x: new Date(2018, 7, 9).getTime(), y: 744 },
    { x: new Date(2018, 7, 10).getTime(), y: 760 },
    { x: new Date(2018, 7, 11).getTime(), y: 792 },
    { x: new Date(2018, 7, 12).getTime(), y: 840 },
    { x: new Date(2018, 7, 13).getTime(), y: 884 },
    { x: new Date(2018, 7, 14).getTime(), y: 880 },
    { x: new Date(2018, 7, 15).getTime(), y: 900 },
    { x: new Date(2018, 7, 16).getTime(), y: 928 },
    { x: new Date(2018, 7, 17).getTime(), y: 992 },
    { x: new Date(2018, 7, 18).getTime(), y: 980 },
    { x: new Date(2018, 7, 19).getTime(), y: 1004 },
    { x: new Date(2018, 7, 20).getTime(), y: 1032 },
    { x: new Date(2018, 7, 21).getTime(), y: 1056 },
    { x: new Date(2018, 7, 22).getTime(), y: 1072 },
    { x: new Date(2018, 7, 23).getTime(), y: 1080 },
    { x: new Date(2018, 7, 24).getTime(), y: 1108 },
    { x: new Date(2018, 7, 25).getTime(), y: 1136 },
    { x: new Date(2018, 7, 26).getTime(), y: 1160 },
    { x: new Date(2018, 7, 27).getTime(), y: 1188 },
    { x: new Date(2018, 7, 28).getTime(), y: 1200 },
    { x: new Date(2018, 7, 29).getTime(), y: 1204 },
    { x: new Date(2018, 7, 30).getTime(), y: 1220 },
    { x: new Date(2018, 7, 31).getTime(), y: 1244 },
    { x: new Date(2018, 8, 1).getTime(), y: 1272 },
    { x: new Date(2018, 8, 2).getTime(), y: 1308 },
    { x: new Date(2018, 8, 3).getTime(), y: 1340 },
    { x: new Date(2018, 8, 4).getTime(), y: 1364 },
    { x: new Date(2018, 8, 5).getTime(), y: 1388 },
    { x: new Date(2018, 8, 6).getTime(), y: 1400 },
    { x: new Date(2018, 8, 7).getTime(), y: 1420 },
    { x: new Date(2018, 8, 8).getTime(), y: 1480 },
    { x: new Date(2018, 8, 9).getTime(), y: 1460 },
    { x: new Date(2018, 8, 10).getTime(), y: 1484 },
    { x: new Date(2018, 8, 11).getTime(), y: 1520 },
    { x: new Date(2018, 8, 12).getTime(), y: 1552 },
    { x: new Date(2018, 8, 13).getTime(), y: 1568 },
    { x: new Date(2018, 8, 14).getTime(), y: 1600 },
    { x: new Date(2018, 8, 15).getTime(), y: 1620 },
    { x: new Date(2018, 8, 16).getTime(), y: 1632 },
    { x: new Date(2018, 8, 17).getTime(), y: 1660 },
    { x: new Date(2018, 8, 18).getTime(), y: 1680 },
    { x: new Date(2018, 8, 19).getTime(), y: 1740 },
    { x: new Date(2018, 8, 20).getTime(), y: 1728 },
    { x: new Date(2018, 8, 21).getTime(), y: 1772 },
    { x: new Date(2018, 8, 22).getTime(), y: 1792 },
    { x: new Date(2018, 8, 23).getTime(), y: 1788 },
    { x: new Date(2018, 8, 24).getTime(), y: 1800 },
    { x: new Date(2018, 8, 25).getTime(), y: 1808 },
    { x: new Date(2018, 8, 26).getTime(), y: 1840 },
    { x: new Date(2018, 8, 27).getTime(), y: 1872 },
    { x: new Date(2018, 8, 28).getTime(), y: 1900 },
    { x: new Date(2018, 8, 29).getTime(), y: 1932 },
]
const laptopsData = [
    { x: new Date(2018, 6, 1).getTime(), y: 70 },
    { x: new Date(2018, 6, 2).getTime(), y: 57.2 },
    { x: new Date(2018, 6, 3).getTime(), y: 88.4 },
    { x: new Date(2018, 6, 4).getTime(), y: 83.6 },
    { x: new Date(2018, 6, 5).getTime(), y: 80.8 },
    { x: new Date(2018, 6, 6).getTime(), y: 106 },
    { x: new Date(2018, 6, 7).getTime(), y: 117.2 },
    { x: new Date(2018, 6, 8).getTime(), y: 108.4 },
    { x: new Date(2018, 6, 9).getTime(), y: 95.6 },
    { x: new Date(2018, 6, 10).getTime(), y: 108.8 },
    { x: new Date(2018, 6, 11).getTime(), y: 118 },
    { x: new Date(2018, 6, 12).getTime(), y: 127.2 },
    { x: new Date(2018, 6, 13).getTime(), y: 138.4 },
    { x: new Date(2018, 6, 14).getTime(), y: 131.6 },
    { x: new Date(2018, 6, 15).getTime(), y: 128.8 },
    { x: new Date(2018, 6, 16).getTime(), y: 142 },
    { x: new Date(2018, 6, 17).getTime(), y: 157.2 },
    { x: new Date(2018, 6, 18).getTime(), y: 164.4 },
    { x: new Date(2018, 6, 19).getTime(), y: 163.6 },
    { x: new Date(2018, 6, 20).getTime(), y: 182.8 },
    { x: new Date(2018, 6, 21).getTime(), y: 192 },
    { x: new Date(2018, 6, 22).getTime(), y: 199.2 },
    { x: new Date(2018, 6, 23).getTime(), y: 204.4 },
    { x: new Date(2018, 6, 24).getTime(), y: 213.6 },
    { x: new Date(2018, 6, 25).getTime(), y: 226.8 },
    { x: new Date(2018, 6, 26).getTime(), y: 218 },
    { x: new Date(2018, 6, 27).getTime(), y: 229.2 },
    { x: new Date(2018, 6, 28).getTime(), y: 228.4 },
    { x: new Date(2018, 6, 29).getTime(), y: 243.6 },
    { x: new Date(2018, 6, 30).getTime(), y: 254.8 },
    { x: new Date(2018, 6, 31).getTime(), y: 264 },
    { x: new Date(2018, 7, 1).getTime(), y: 287.2 },
    { x: new Date(2018, 7, 2).getTime(), y: 266.4 },
    { x: new Date(2018, 7, 3).getTime(), y: 277.6 },
    { x: new Date(2018, 7, 4).getTime(), y: 278.8 },
    { x: new Date(2018, 7, 5).getTime(), y: 306 },
    { x: new Date(2018, 7, 6).getTime(), y: 311.2 },
    { x: new Date(2018, 7, 7).getTime(), y: 320.4 },
    { x: new Date(2018, 7, 8).getTime(), y: 333.6 },
    { x: new Date(2018, 7, 9).getTime(), y: 324.8 },
    { x: new Date(2018, 7, 10).getTime(), y: 330 },
    { x: new Date(2018, 7, 11).getTime(), y: 353.2 },
    { x: new Date(2018, 7, 12).getTime(), y: 378.4 },
    { x: new Date(2018, 7, 13).getTime(), y: 401.6 },
    { x: new Date(2018, 7, 14).getTime(), y: 396.8 },
    { x: new Date(2018, 7, 15).getTime(), y: 396 },
    { x: new Date(2018, 7, 16).getTime(), y: 413.2 },
    { x: new Date(2018, 7, 17).getTime(), y: 452.4 },
    { x: new Date(2018, 7, 18).getTime(), y: 441.6 },
    { x: new Date(2018, 7, 19).getTime(), y: 444.8 },
    { x: new Date(2018, 7, 20).getTime(), y: 462 },
    { x: new Date(2018, 7, 21).getTime(), y: 485.2 },
    { x: new Date(2018, 7, 22).getTime(), y: 492.4 },
    { x: new Date(2018, 7, 23).getTime(), y: 483.6 },
    { x: new Date(2018, 7, 24).getTime(), y: 494.8 },
    { x: new Date(2018, 7, 25).getTime(), y: 514 },
    { x: new Date(2018, 7, 26).getTime(), y: 531.2 },
    { x: new Date(2018, 7, 27).getTime(), y: 536.4 },
    { x: new Date(2018, 7, 28).getTime(), y: 535.6 },
    { x: new Date(2018, 7, 29).getTime(), y: 544.8 },
    { x: new Date(2018, 7, 30).getTime(), y: 556 },
    { x: new Date(2018, 7, 31).getTime(), y: 557.2 },
    { x: new Date(2018, 8, 1).getTime(), y: 566.4 },
    { x: new Date(2018, 8, 2).getTime(), y: 587.6 },
    { x: new Date(2018, 8, 3).getTime(), y: 602.8 },
    { x: new Date(2018, 8, 4).getTime(), y: 624 },
    { x: new Date(2018, 8, 5).getTime(), y: 639.2 },
    { x: new Date(2018, 8, 6).getTime(), y: 640.4 },
    { x: new Date(2018, 8, 7).getTime(), y: 645.6 },
    { x: new Date(2018, 8, 8).getTime(), y: 678.8 },
    { x: new Date(2018, 8, 9).getTime(), y: 660 },
    { x: new Date(2018, 8, 10).getTime(), y: 683.2 },
    { x: new Date(2018, 8, 11).getTime(), y: 694.4 },
    { x: new Date(2018, 8, 12).getTime(), y: 709.6 },
    { x: new Date(2018, 8, 13).getTime(), y: 712.8 },
    { x: new Date(2018, 8, 14).getTime(), y: 722 },
    { x: new Date(2018, 8, 15).getTime(), y: 745.2 },
    { x: new Date(2018, 8, 16).getTime(), y: 744.4 },
    { x: new Date(2018, 8, 17).getTime(), y: 755.6 },
    { x: new Date(2018, 8, 18).getTime(), y: 768.8 },
    { x: new Date(2018, 8, 19).getTime(), y: 792 },
    { x: new Date(2018, 8, 20).getTime(), y: 793.2 },
    { x: new Date(2018, 8, 21).getTime(), y: 820.4 },
    { x: new Date(2018, 8, 22).getTime(), y: 817.6 },
    { x: new Date(2018, 8, 23).getTime(), y: 820.8 },
    { x: new Date(2018, 8, 24).getTime(), y: 816 },
    { x: new Date(2018, 8, 25).getTime(), y: 831.2 },
    { x: new Date(2018, 8, 26).getTime(), y: 844.4 },
    { x: new Date(2018, 8, 27).getTime(), y: 853.6 },
    { x: new Date(2018, 8, 28).getTime(), y: 870.8 },
    { x: new Date(2018, 8, 29).getTime(), y: 886 },
]
const smartTvData = [
    { x: new Date(2018, 6, 1).getTime(), y: 10 },
    { x: new Date(2018, 6, 2).getTime(), y: 15.5 },
    { x: new Date(2018, 6, 3).getTime(), y: 21.1 },
    { x: new Date(2018, 6, 4).getTime(), y: 27 },
    { x: new Date(2018, 6, 5).getTime(), y: 30.8 },
    { x: new Date(2018, 6, 6).getTime(), y: 38 },
    { x: new Date(2018, 6, 7).getTime(), y: 40 },
    { x: new Date(2018, 6, 8).getTime(), y: 44.4 },
    { x: new Date(2018, 6, 9).getTime(), y: 47.6 },
    { x: new Date(2018, 6, 10).getTime(), y: 50.8 },
    { x: new Date(2018, 6, 11).getTime(), y: 52 },
    { x: new Date(2018, 6, 12).getTime(), y: 54.2 },
    { x: new Date(2018, 6, 13).getTime(), y: 59.4 },
    { x: new Date(2018, 6, 14).getTime(), y: 65.6 },
    { x: new Date(2018, 6, 15).getTime(), y: 57.8 },
    { x: new Date(2018, 6, 16).getTime(), y: 62 },
    { x: new Date(2018, 6, 17).getTime(), y: 74.2 },
    { x: new Date(2018, 6, 18).getTime(), y: 70.4 },
    { x: new Date(2018, 6, 19).getTime(), y: 82.6 },
    { x: new Date(2018, 6, 20).getTime(), y: 74.8 },
    { x: new Date(2018, 6, 21).getTime(), y: 84 },
    { x: new Date(2018, 6, 22).getTime(), y: 87.2 },
    { x: new Date(2018, 6, 23).getTime(), y: 98.4 },
    { x: new Date(2018, 6, 24).getTime(), y: 99.6 },
    { x: new Date(2018, 6, 25).getTime(), y: 98.8 },
    { x: new Date(2018, 6, 26).getTime(), y: 98 },
    { x: new Date(2018, 6, 27).getTime(), y: 102.2 },
    { x: new Date(2018, 6, 28).getTime(), y: 99.4 },
    { x: new Date(2018, 6, 29).getTime(), y: 111.6 },
    { x: new Date(2018, 6, 30).getTime(), y: 121.8 },
    { x: new Date(2018, 6, 31).getTime(), y: 117 },
    { x: new Date(2018, 7, 1).getTime(), y: 127.2 },
    { x: new Date(2018, 7, 2).getTime(), y: 117.4 },
    { x: new Date(2018, 7, 3).getTime(), y: 125.6 },
    { x: new Date(2018, 7, 4).getTime(), y: 131.8 },
    { x: new Date(2018, 7, 5).getTime(), y: 136 },
    { x: new Date(2018, 7, 6).getTime(), y: 138.2 },
    { x: new Date(2018, 7, 7).getTime(), y: 142.4 },
    { x: new Date(2018, 7, 8).getTime(), y: 148.6 },
    { x: new Date(2018, 7, 9).getTime(), y: 146.8 },
    { x: new Date(2018, 7, 10).getTime(), y: 157 },
    { x: new Date(2018, 7, 11).getTime(), y: 159.2 },
    { x: new Date(2018, 7, 12).getTime(), y: 168.4 },
    { x: new Date(2018, 7, 13).getTime(), y: 184.6 },
    { x: new Date(2018, 7, 14).getTime(), y: 181.8 },
    { x: new Date(2018, 7, 15).getTime(), y: 189 },
    { x: new Date(2018, 7, 16).getTime(), y: 195.2 },
    { x: new Date(2018, 7, 17).getTime(), y: 202.4 },
    { x: new Date(2018, 7, 18).getTime(), y: 197.6 },
    { x: new Date(2018, 7, 19).getTime(), y: 207.8 },
    { x: new Date(2018, 7, 20).getTime(), y: 218 },
    { x: new Date(2018, 7, 21).getTime(), y: 216.2 },
    { x: new Date(2018, 7, 22).getTime(), y: 221.4 },
    { x: new Date(2018, 7, 23).getTime(), y: 226.6 },
    { x: new Date(2018, 7, 24).getTime(), y: 231.8 },
    { x: new Date(2018, 7, 25).getTime(), y: 233 },
    { x: new Date(2018, 7, 26).getTime(), y: 241.2 },
    { x: new Date(2018, 7, 27).getTime(), y: 250.4 },
    { x: new Date(2018, 7, 28).getTime(), y: 246.6 },
    { x: new Date(2018, 7, 29).getTime(), y: 248.8 },
    { x: new Date(2018, 7, 30).getTime(), y: 251 },
    { x: new Date(2018, 7, 31).getTime(), y: 254.2 },
    { x: new Date(2018, 8, 1).getTime(), y: 267.4 },
    { x: new Date(2018, 8, 2).getTime(), y: 275.6 },
    { x: new Date(2018, 8, 3).getTime(), y: 282.8 },
    { x: new Date(2018, 8, 4).getTime(), y: 285 },
    { x: new Date(2018, 8, 5).getTime(), y: 291.2 },
    { x: new Date(2018, 8, 6).getTime(), y: 292.4 },
    { x: new Date(2018, 8, 7).getTime(), y: 292.6 },
    { x: new Date(2018, 8, 8).getTime(), y: 304.8 },
    { x: new Date(2018, 8, 9).getTime(), y: 307 },
    { x: new Date(2018, 8, 10).getTime(), y: 313.2 },
    { x: new Date(2018, 8, 11).getTime(), y: 317.4 },
    { x: new Date(2018, 8, 12).getTime(), y: 326.6 },
    { x: new Date(2018, 8, 13).getTime(), y: 327.8 },
    { x: new Date(2018, 8, 14).getTime(), y: 338 },
    { x: new Date(2018, 8, 15).getTime(), y: 342.2 },
    { x: new Date(2018, 8, 16).getTime(), y: 345.4 },
    { x: new Date(2018, 8, 17).getTime(), y: 350.6 },
    { x: new Date(2018, 8, 18).getTime(), y: 347.8 },
    { x: new Date(2018, 8, 19).getTime(), y: 371 },
    { x: new Date(2018, 8, 20).getTime(), y: 362.2 },
    { x: new Date(2018, 8, 21).getTime(), y: 376.4 },
    { x: new Date(2018, 8, 22).getTime(), y: 378.6 },
    { x: new Date(2018, 8, 23).getTime(), y: 378.8 },
    { x: new Date(2018, 8, 24).getTime(), y: 372 },
    { x: new Date(2018, 8, 25).getTime(), y: 375.2 },
    { x: new Date(2018, 8, 26).getTime(), y: 385.4 },
    { x: new Date(2018, 8, 27).getTime(), y: 390.6 },
    { x: new Date(2018, 8, 28).getTime(), y: 396.8 },
    { x: new Date(2018, 8, 29).getTime(), y: 406 },
]

// Adding points to the series
smartPhonesSeries.add(smartPhoneData)
laptopsSeries.add(laptopsData)
smartTvSeries.add(smartTvData)

// Add series to LegendBox and style entries.
legend.add(smartPhonesSeries)
legend.add(laptopsSeries)
legend.add(smartTvSeries)

chart.setCursor((cursor) => {
    cursor.setTickMarkerXVisible(false)
})
