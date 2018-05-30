Plotly.d3.csv("../../data/soybean_futures.csv",function(error,data){
    if(error) throw error;
    var name = "SOYB";
    var dates = [];
    var openPrice = [];
    data.forEach(function(data){
        dates.push(new Date(data["Date"]));
        openPrice.push(data.Open)
    });
    var trace1 = {
        mode:"lines",
        x:dates,
        y:openPrice,
        name: name
    }
    Plotly.d3.csv("../../data/corn_futures.csv",function(err,response){
        if(err) throw err;
        var name = "CORN"
        var dates = [];
        var openPrice = [];
        response.forEach(function(data){
            dates.push(new Date(data["Date"]));
            openPrice.push(data.Open)
        });
        var trace2 = {
            mode:"lines",
            x:dates,
            y:openPrice,
            name: name,
            yaxis:'y2'
        }
        var layout = {
            legend:{"orientation":"h",
                x:0,
                y:-0.5,
                // traceorder: 'normal',
                // font: {
                // family: 'sans-serif',
                // size: 8,
                // color: '#000'
                // },
                // bgcolor: '#E2E2E2',
                // bordercolor: '#FFFFFF',
                // // borderwidth: 0
            },
            title:"Soybean Futures vs Corn Futures",
            xaxis:{
                rangeselector: selectorOptions,
                rangeslider:{}
            },
            yaxis:{
                fixedrange:true
            },
            yaxis2:{
                overlaying:'y',
                side:'right'
            }
        };
        
        var data = [trace1,trace2]
        Plotly.plot("plot1",data,layout)

    });
});
var xField = "Date",
        yField = "Price";
        var selectorOptions = {
            buttons:[{
                step:"month",
                stepmode:"backward",
                count:1,
                label: "1 month"
            },{
                step:"month",
                stepmode:"backward",
                count:6,
                label:"6 months"
            },{
                step:"year",
                stepmode:"backward",
                count:1,
                label:"1 year"
            },{
                step:"year",
                stepmode:"backward",
                count:5,
                label:"5 years"
            },{
                step:"all"
            },]
        };
// Plotly.d3.csv("../../csv/corn_futures.csv",function(err,response){
//     if(err) throw err;
//     var name = "corn"
//     prepData(response,name)
// });
// // Plotly.d3.csv("CORN.csv",function(err,result){
// //     if(err) throw err;
// //     var name = "CORN"
// //     prepData(result,name)
// // });

// function prepData(data,name){
//     var dates = [];
//     var openPrice = [];
//     data.forEach(function(data){
//         dates.push(new Date(data["Date"]));
//         openPrice.push(data.Open)
//     });
//     trace(dates,openPrice,name);
// }
// function trace(dates,openPrice,name){
//     var trace1={
//         mode:"lines",
//         x:dates,
//         y:openPrice,
//         name: name
//     }
//     buildPlot(trace1)
// }
// function buildPlot(trace1){
//     var data = [trace1];
//     var layout={
//         title:"Soybean ETF vs United State Argriculture Index",
//         xaxis:{
//             rangeselector: selectorOptions,
//             rangeslider:{}
//         },
//         yaxis:{
//             fixedrange:true
//         },
//         yaxis2:{
//             overlaying:'y',
//             side:'right'
//         }
//     };
//     Plotly.plot("plot1",data,layout)
// }
// var xField = "Date",
//     yField = "Price";

// var selectorOptions = {
//     buttons:[{
//         step:"month",
//         stepmode:"backward",
//         count:1,
//         label: "1 month"
//     },{
//         step:"month",
//         stepmode:"backward",
//         count:6,
//         label:"6 months"
//     },{
//         step:"year",
//         stepmode:"backward",
//         count:1,
//         label:"1 year"
//     },{
//         step:"year",
//         stepmode:"backward",
//         count:5,
//         label:"5 years"
//     },{
//         step:"all"
//     },]
// };




