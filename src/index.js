/*
 * LightningChartJS example that showcases a simple scatter series.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    AxisTickStrategies,
    emptyLine,
    PointShape,
    SolidFill,
    ColorRGBA,
    UIElementBuilders,
    UIButtonPictures,
    UIOrigins,
    LegendBoxBuilders,
    Themes
} = lcjs

// Decide on an origin for DateTime axis.
const dateOrigin = new Date(2018, 6, 1)
// Create a XY Chart.
const chart = lightningChart().ChartXY({
    // theme: Themes.dark
})

// Modify the default X Axis to use DateTime TickStrategy, and set the origin for the DateTime Axis.
chart.getDefaultAxisX().setTickStrategy(AxisTickStrategies.DateTime, (tickStrategy) => tickStrategy.setDateOrigin(dateOrigin))

chart.setTitle('Product Sales')
    .setAutoCursor(cursor => {
        cursor.disposeTickMarkerY()
        cursor.setGridStrokeYStyle(emptyLine)
    })

// Create a LegendBox as part of the chart.
const legend = chart.addLegendBox(LegendBoxBuilders.HorizontalLegendBox)

// Apply Style color for each group
const smartPhonesColor = new SolidFill({ color: ColorRGBA(200, 0, 200) })
const laptopColor = new SolidFill({ color: ColorRGBA(0, 200, 200) })
const smartTvColor = new SolidFill({ color: ColorRGBA(200, 200, 0) })

// Create series.
const smartPhonesSeries = chart.addPointSeries({ pointShape: PointShape.Circle })
    .setName('Smart Phones')
    .setPointFillStyle(smartPhonesColor)
    .setPointSize(10)

const laptopsSeries = chart.addPointSeries({ pointShape: PointShape.Square })
    .setName('Laptops')
    .setPointFillStyle(laptopColor)
    .setPointSize(10)

const smartTvSeries = chart.addPointSeries({ pointShape: PointShape.Triangle })
    .setName('Smart TV')
    .setPointFillStyle(smartTvColor)
    .setPointSize(10)

// Generate some points using for each day of 3 months
const dataFrequency = 1000 * 60 * 60 * 24

// Setup view nicely.
chart.getDefaultAxisX()
    .setInterval(0, 92 * dataFrequency)

chart.getDefaultAxisY()
    .setScrollStrategy(undefined)
    .setInterval(0, 2000)
    .setTitle('Units Sold')

// Data for the plotting
const smartPhoneData = [
    { x: 0, y: 200 },
    { x: 1, y: 220 },
    { x: 2, y: 260 },
    { x: 3, y: 264 },
    { x: 4, y: 280 },
    { x: 5, y: 288 },
    { x: 6, y: 280 },
    { x: 7, y: 248 },
    { x: 8, y: 292 },
    { x: 9, y: 308 },
    { x: 10, y: 316 },
    { x: 11, y: 328 },
    { x: 12, y: 344 },
    { x: 13, y: 360 },
    { x: 14, y: 388 },
    { x: 15, y: 404 },
    { x: 16, y: 432 },
    { x: 17, y: 444 },
    { x: 18, y: 432 },
    { x: 19, y: 444 },
    { x: 20, y: 452 },
    { x: 21, y: 460 },
    { x: 22, y: 464 },
    { x: 23, y: 492 },
    { x: 24, y: 508 },
    { x: 25, y: 492 },
    { x: 26, y: 520 },
    { x: 27, y: 532 },
    { x: 28, y: 548 },
    { x: 29, y: 576 },
    { x: 30, y: 600 },
    { x: 31, y: 608 },
    { x: 32, y: 628 },
    { x: 33, y: 624 },
    { x: 34, y: 640 },
    { x: 35, y: 672 },
    { x: 36, y: 692 },
    { x: 37, y: 716 },
    { x: 38, y: 732 },
    { x: 39, y: 744 },
    { x: 40, y: 760 },
    { x: 41, y: 792 },
    { x: 42, y: 840 },
    { x: 43, y: 884 },
    { x: 44, y: 880 },
    { x: 45, y: 900 },
    { x: 46, y: 928 },
    { x: 47, y: 992 },
    { x: 48, y: 980 },
    { x: 49, y: 1004 },
    { x: 50, y: 1032 },
    { x: 51, y: 1056 },
    { x: 52, y: 1072 },
    { x: 53, y: 1080 },
    { x: 54, y: 1108 },
    { x: 55, y: 1136 },
    { x: 56, y: 1160 },
    { x: 57, y: 1188 },
    { x: 58, y: 1200 },
    { x: 59, y: 1204 },
    { x: 60, y: 1220 },
    { x: 61, y: 1244 },
    { x: 62, y: 1272 },
    { x: 63, y: 1308 },
    { x: 64, y: 1340 },
    { x: 65, y: 1364 },
    { x: 66, y: 1388 },
    { x: 67, y: 1400 },
    { x: 68, y: 1420 },
    { x: 69, y: 1480 },
    { x: 70, y: 1460 },
    { x: 71, y: 1484 },
    { x: 72, y: 1520 },
    { x: 73, y: 1552 },
    { x: 74, y: 1568 },
    { x: 75, y: 1600 },
    { x: 76, y: 1620 },
    { x: 77, y: 1632 },
    { x: 78, y: 1660 },
    { x: 79, y: 1680 },
    { x: 80, y: 1740 },
    { x: 81, y: 1728 },
    { x: 82, y: 1772 },
    { x: 83, y: 1792 },
    { x: 84, y: 1788 },
    { x: 85, y: 1800 },
    { x: 86, y: 1808 },
    { x: 87, y: 1840 },
    { x: 88, y: 1872 },
    { x: 89, y: 1900 },
    { x: 90, y: 1932 }
]
const laptopsData = [
    { x: 0, y: 70 },
    { x: 1, y: 57.2 },
    { x: 2, y: 88.4 },
    { x: 3, y: 83.6 },
    { x: 4, y: 80.8 },
    { x: 5, y: 106 },
    { x: 6, y: 117.2 },
    { x: 7, y: 108.4 },
    { x: 8, y: 95.6 },
    { x: 9, y: 108.8 },
    { x: 10, y: 118 },
    { x: 11, y: 127.2 },
    { x: 12, y: 138.4 },
    { x: 13, y: 131.6 },
    { x: 14, y: 128.8 },
    { x: 15, y: 142 },
    { x: 16, y: 157.2 },
    { x: 17, y: 164.4 },
    { x: 18, y: 163.6 },
    { x: 19, y: 182.8 },
    { x: 20, y: 192 },
    { x: 21, y: 199.2 },
    { x: 22, y: 204.4 },
    { x: 23, y: 213.6 },
    { x: 24, y: 226.8 },
    { x: 25, y: 218 },
    { x: 26, y: 229.2 },
    { x: 27, y: 228.4 },
    { x: 28, y: 243.6 },
    { x: 29, y: 254.8 },
    { x: 30, y: 264 },
    { x: 31, y: 287.2 },
    { x: 32, y: 266.4 },
    { x: 33, y: 277.6 },
    { x: 34, y: 278.8 },
    { x: 35, y: 306 },
    { x: 36, y: 311.2 },
    { x: 37, y: 320.4 },
    { x: 38, y: 333.6 },
    { x: 39, y: 324.8 },
    { x: 40, y: 330 },
    { x: 41, y: 353.2 },
    { x: 42, y: 378.4 },
    { x: 43, y: 401.6 },
    { x: 44, y: 396.8 },
    { x: 45, y: 396 },
    { x: 46, y: 413.2 },
    { x: 47, y: 452.4 },
    { x: 48, y: 441.6 },
    { x: 49, y: 444.8 },
    { x: 50, y: 462 },
    { x: 51, y: 485.2 },
    { x: 52, y: 492.4 },
    { x: 53, y: 483.6 },
    { x: 54, y: 494.8 },
    { x: 55, y: 514 },
    { x: 56, y: 531.2 },
    { x: 57, y: 536.4 },
    { x: 58, y: 535.6 },
    { x: 59, y: 544.8 },
    { x: 60, y: 556 },
    { x: 61, y: 557.2 },
    { x: 62, y: 566.4 },
    { x: 63, y: 587.6 },
    { x: 64, y: 602.8 },
    { x: 65, y: 624 },
    { x: 66, y: 639.2 },
    { x: 67, y: 640.4 },
    { x: 68, y: 645.6 },
    { x: 69, y: 678.8 },
    { x: 70, y: 660 },
    { x: 71, y: 683.2 },
    { x: 72, y: 694.4 },
    { x: 73, y: 709.6 },
    { x: 74, y: 712.8 },
    { x: 75, y: 722 },
    { x: 76, y: 745.2 },
    { x: 77, y: 744.4 },
    { x: 78, y: 755.6 },
    { x: 79, y: 768.8 },
    { x: 80, y: 792 },
    { x: 81, y: 793.2 },
    { x: 82, y: 820.4 },
    { x: 83, y: 817.6 },
    { x: 84, y: 820.8 },
    { x: 85, y: 816 },
    { x: 86, y: 831.2 },
    { x: 87, y: 844.4 },
    { x: 88, y: 853.6 },
    { x: 89, y: 870.8 },
    { x: 90, y: 886 }
]
const smartTvData = [
    { x: 0, y: 10 },
    { x: 1, y: 15.5 },
    { x: 2, y: 21.1 },
    { x: 3, y: 27 },
    { x: 4, y: 30.8 },
    { x: 5, y: 38 },
    { x: 6, y: 40 },
    { x: 7, y: 44.4 },
    { x: 8, y: 47.6 },
    { x: 9, y: 50.8 },
    { x: 10, y: 52 },
    { x: 11, y: 54.2 },
    { x: 12, y: 59.4 },
    { x: 13, y: 65.6 },
    { x: 14, y: 57.8 },
    { x: 15, y: 62 },
    { x: 16, y: 74.2 },
    { x: 17, y: 70.4 },
    { x: 18, y: 82.6 },
    { x: 19, y: 74.8 },
    { x: 20, y: 84 },
    { x: 21, y: 87.2 },
    { x: 22, y: 98.4 },
    { x: 23, y: 99.6 },
    { x: 24, y: 98.8 },
    { x: 25, y: 98 },
    { x: 26, y: 102.2 },
    { x: 27, y: 99.4 },
    { x: 28, y: 111.6 },
    { x: 29, y: 121.8 },
    { x: 30, y: 117 },
    { x: 31, y: 127.2 },
    { x: 32, y: 117.4 },
    { x: 33, y: 125.6 },
    { x: 34, y: 131.8 },
    { x: 35, y: 136 },
    { x: 36, y: 138.2 },
    { x: 37, y: 142.4 },
    { x: 38, y: 148.6 },
    { x: 39, y: 146.8 },
    { x: 40, y: 157 },
    { x: 41, y: 159.2 },
    { x: 42, y: 168.4 },
    { x: 43, y: 184.6 },
    { x: 44, y: 181.8 },
    { x: 45, y: 189 },
    { x: 46, y: 195.2 },
    { x: 47, y: 202.4 },
    { x: 48, y: 197.6 },
    { x: 49, y: 207.8 },
    { x: 50, y: 218 },
    { x: 51, y: 216.2 },
    { x: 52, y: 221.4 },
    { x: 53, y: 226.6 },
    { x: 54, y: 231.8 },
    { x: 55, y: 233 },
    { x: 56, y: 241.2 },
    { x: 57, y: 250.4 },
    { x: 58, y: 246.6 },
    { x: 59, y: 248.8 },
    { x: 60, y: 251 },
    { x: 61, y: 254.2 },
    { x: 62, y: 267.4 },
    { x: 63, y: 275.6 },
    { x: 64, y: 282.8 },
    { x: 65, y: 285 },
    { x: 66, y: 291.2 },
    { x: 67, y: 292.4 },
    { x: 68, y: 292.6 },
    { x: 69, y: 304.8 },
    { x: 70, y: 307 },
    { x: 71, y: 313.2 },
    { x: 72, y: 317.4 },
    { x: 73, y: 326.6 },
    { x: 74, y: 327.8 },
    { x: 75, y: 338 },
    { x: 76, y: 342.2 },
    { x: 77, y: 345.4 },
    { x: 78, y: 350.6 },
    { x: 79, y: 347.8 },
    { x: 80, y: 371 },
    { x: 81, y: 362.2 },
    { x: 82, y: 376.4 },
    { x: 83, y: 378.6 },
    { x: 84, y: 378.8 },
    { x: 85, y: 372 },
    { x: 86, y: 375.2 },
    { x: 87, y: 385.4 },
    { x: 88, y: 390.6 },
    { x: 89, y: 396.8 },
    { x: 90, y: 406 }
]

// Adding points to the series
smartPhonesSeries.add(smartPhoneData.map((point) => ({ x: point.x * dataFrequency, y: point.y })))
laptopsSeries.add(laptopsData.map((point) => ({ x: point.x * dataFrequency, y: point.y })))
smartTvSeries.add(smartTvData.map((point) => ({ x: point.x * dataFrequency, y: point.y })))

// Add series to LegendBox and style entries.
legend.add(
    smartPhonesSeries,
    {
        builder: UIElementBuilders.CheckBox
            .setPictureOff(UIButtonPictures.Circle)
            .setPictureOn(UIButtonPictures.Circle)
    }
)
legend.add(
    laptopsSeries,
    {
        builder: UIElementBuilders.CheckBox
            .setPictureOff(UIButtonPictures.Rectangle)
            .setPictureOn(UIButtonPictures.Rectangle)
    }
)
legend.add(
    smartTvSeries,
    {
        builder: UIElementBuilders.CheckBox
            .setPictureOff(UIButtonPictures.Diamond)
            .setPictureOn(UIButtonPictures.Diamond)
    }
)

// Enable AutoCursor auto-fill.
chart.setAutoCursor((cursor) => {
    cursor
        .setResultTableAutoTextStyle(true)
        .disposeTickMarkerX()
        .setTickMarkerXAutoTextStyle(false)
        .setTickMarkerYAutoTextStyle(false)
})
