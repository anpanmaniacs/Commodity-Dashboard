Plotly.d3.csv("SOYB.csv",function(error,data){
    if(error) throw error;
    var name = "SOYB";
    prepData(data,name)
});

Plotly.d3.csv("USAG.csv",function(err,response){
    if(err) throw err;
    var name = "USAG"
    prepData(response,name)
});
Plotly.d3.csv("CORN.csv",function(err,result){
    if(err) throw err;
    var name = "CORN"
    prepData(result,name)
});

function prepData(data,name){
    var dates = [];
    var openPrice = [];
    var highPrice = [];
    var lowPrice = [];
    var closePrice = [];
    data.forEach(function(data){
        dates.push(new Date(data["Date"]));
        openPrice.push(data.Open)
        highPrice.push(data.High)
        lowPrice.push(data.Low)
        closePrice.push(data.Close)
    });
    trace(dates,openPrice,highPrice,lowPrice,closePrice,name);
}
function trace(dates,openPrice,highPrice,lowPrice,closePrice,name){
    var trace1={
        mode:"lines",
        x:dates,
        y:openPrice,
        name: name
    }
    var trace2 = {
        type:"candlestick",
        x:dates,
        open:openPrice,
        high:highPrice,
        low:lowPrice,
        close:closePrice,
        name: `${name} price range`
    }
    buildPlot(trace1,trace2)
}
function buildPlot(trace1,trace2){
    var data = [trace1, trace2];
    var layout={
        title:"Soybean ETF vs United State Argriculture Index",
        xaxis:{
            rangeselector: selectorOptions,
            rangeslider:{}
        },
        yaxis:{
            fixedrange:true
        }
    };
    Plotly.plot("plot",data,layout)
}
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
Plotly.d3.csv("soybean price.csv",function(err,data){
    if(err) throw err;
    var x = [];
    var y = [];
    data.forEach(function(d){
        x.push(new Date(d["Date"]));
        y.push(d["Price"]);
    });
    var trace1 = {
        type:"scatter",
        mode: "lines",
        x: x,
        y: y,
        name: "US Soybean Price"
    };
    // var trace2 = {
    //     type:"candlestick",
    //     x: x,
    //     open: openPrice,
    //     high: highPrice,
    //     low: lowPrice,
    //     close: openPrice
    // };
    var data = [trace1];
    var layout = {
        title:"United States Soybeans Price (currency in USD)",
        xaxis:{
            rangeselector:selectorOptions,
            rangeslider:{}
        },
        yaxis:{
            fixedrange:true
        }
    };
    Plotly.plot("plot1",data,layout)
})



