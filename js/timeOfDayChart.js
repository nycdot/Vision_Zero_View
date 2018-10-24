//load data


var current_data;

/*
    functions for formatting data
*/

t_all = true;
t12_3 = false;
t3_6 = false;
t6_9 = false;
t9_12 = false;
t12_15 = false;
t15_18 = false;
t18_21 = false;
t21_24 = false;



function findData(year, month){
    //find data object the year and/or month in array
    var selected_data;

    if(month !== null){
    //    selected_data = month_time_of_day.find(function(i){
     selected_data = stats.find(function(i){
            return i.Year === year && i.MNTH === month;
         });
    }else if(year !== null){
    //    selected_data = year_time_of_day.find(function(i){
    selected_data = stats2.find(function(i){
            return i.Year === year;
        });
    }

    return selected_data;
}

var labels = ["12am-3am", "3am-6am", "6am-9am", "9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"];

function formatChartData(year, month, crashType, severely){
    var selected_data = findData(year, month);

    if(!selected_data){
        //send back dummy data, if data is not found
        return {
            labels: labels,
            datasets: [{
                data: [0,0,0,0,0,0,0,0],
                backgroundColor: ["#4575b4", "#4575b4","#4575b4","#4575b4","#4575b4","#4575b4","#4575b4","#4575b4"],
            }],
        }
    }

    var terms = {
        'ped': {
            'fatality': 'P_',
            'injury': 'Ped_'
        },
        'bike':{
            'fatality': 'B_',
            'injury': 'bike_'
        },
        'motor':{
            'fatality': 'MV_',
            'injury': 'MVO_'
        },
        'all':{
            'fatality': 'A_',
            'injury': 'All_'
        }
    }
    var order = ['12_3','3_6','6_9','9_12','12_15','15_18','18_21','21_24'];

    //generate keys from terms that reflect the crashType and severely
    var search_term = terms[crashType][severely];
    var keys = order.map(function(i){
        return search_term + i;
    });

    //get data from filter keys
    var data = keys.map(function(i){
        return selected_data[i];
    })

    current_data = data;

    //get sum and push to the end of array
    var sum_data = data.reduce(function(total, i){
        return total += i;
    });


    //get percentage of total
    var percent_data = data.map(function(i){
        return Math.round((i / sum_data) * 100);
    });

    return {
        labels: labels,
        datasets: [{
            data: percent_data,
            backgroundColor: ["#4575b4", "#4575b4","#4575b4","#4575b4","#4575b4","#4575b4","#4575b4","#4575b4"],
        }],
        metadata: year + month + crashType + severely
    }
}


/*
    update function
*/
function updateCharts(year, month, crashType, severely) {

    if(chart.config.data.metadata !== year + month + crashType + severely){ //only update if data is different
        var chart_data = formatChartData(year, month, crashType, severely);
        chart.config.data = chart_data;

        // var title;
        // if(month !== null){
        //     title = year + ' ' + month;
        // }else{
        //     title = year;
        // }
        // chart.options.title.text = title + ' ' + crashType + ' ' + severely;


        chart.update();
    }
}


/*
    init select, chart and global time state
*/

//set each time bar to false and all to true
var timeState = labels.reduce(function(timeState, label){
    timeState[label] = false;
    return timeState;
},{'all': true});

//init values for timeSelect
var timeSelect = document.getElementById('timeSelect');

/// test

timeSelect.value = 'all';

timeSelect.innerHTML = labels.reduce(function(innerHTML, label){
    return innerHTML += '<option value="' + label +'">' + label + '</option>';
},'<option value="" disabled="" selected="selected">Time</option><option value="all">All</option>')

//add custom positioner - attached to the right side of the left vertical axis
Chart.Tooltip.positioners.xScale = function(elements, eventPosition) {
    //get nearest feature
    var x = eventPosition.x;
    var y = eventPosition.y;
    var minDistance = Number.POSITIVE_INFINITY;
    var i, len, nearestElement;

    var distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};

    for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];
        if (el && el.hasValue()) {
            var center = el.getCenterPoint();
            var d = distanceBetweenPoints(eventPosition, center);

            if (d < minDistance) {
                minDistance = d;
                nearestElement = el;
            }
        }
    }

    return {
        x: nearestElement._xScale.left,
        y: nearestElement._model.y
    };
}




var ctx = document.getElementById("chart").getContext('2d');
//debugger;
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: formatChartData(2017, null, 'all', 'fatality'),
    responsive: false,
    options: {
        layout:{
            padding: {
                top: 16
            }
        },
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        tooltips: {
            position: 'xScale',
            displayColors : false,
            intersect: true, // hover window should only appear if the mouse is actually over the bar
            callbacks: {
                title: function() {}, //disable title
                label: function(tooltipItem, data){
                    var index = tooltipItem.index;
                    return tooltipItem.xLabel + '% (' + current_data[index] + ')';
                }
            }
        },
        //change values on bar click
        onClick: function(e) {
            var element = chart.getElementAtEvent(e)[0];
            if(element){
                var label = element._view.label;

                //set timeState of the label to true
                setTimeStateToLabel(label, true);

                //reset button
                $('#time-of-day-toggle').removeClass('btn-primary').addClass('btn-default');

                //update chart and timeSelect
                updateTimeSelect();
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                },
            }],
            yAxes: [{
                maxBarThickness : 15,
            }]
        }
    }
});





//color logic for bars being selected or not
var selectedColor = 'rgb(66, 139, 202)';
var unselectedColor = 'rgb(115, 106, 106)';


//$(document).ready(function() {
  //if (chartInstance){
  Chart.pluginService.register({

  	beforeUpdate: function(chartInstance) {

          var labels = chartInstance.data.labels;
        //  console.log('chartInstance.data.datasets: ' + chartInstance.data.datasets);
          chartInstance.data.datasets.forEach(function(dataset) {

              dataset.backgroundColor = dataset.data.map(function(data,i) {
                  return timeState[labels[i]] || timeState['all'] ? selectedColor : unselectedColor;
              });
          })
      }
  });

//}
//});



/*
    state change functions and listeners
*/
function setTimeStateToLabel(label,clear){
    if(clear){
        //sets everything in timeState but the label
        Object.keys(timeState).forEach(function(state){
            timeState[state] = false;
        });
    }
    timeState[label] = true;
}

//toggle to switch between default and show all times
$('#time-of-day-toggle').click(function(e){
    // // ACT LIKE TOGGLE
    // //check if there are other time values, if not don't toggle button
    // if(Object.keys(timeState).filter(function(key){ return key !== 'all'} ).some(function(key){ return timeState[key] })){

    // ACT LIKE A BUTTON
    if(timeState.all === false){
        $(this).toggleClass('btn-primary').toggleClass('btn-default');

        //if show all is selected then set timeState.all to true,
        if($(this).hasClass('btn-primary')){
            setTimeStateToLabel('all', false);
        }else{
            timeState.all = false;
        }
        //update chart and timeSelect
        updateTimeSelect();
    }else{
        console.log('no time value, click on a bar');
    }
})


function updateTimeSelect(){
//  console.log('update time');
    if(timeState.all){
        //if all is true set to all
        timeSelect.value = 'all';
    }else{
        //otherwise find the entry with the true and change select to it
        var currentValue = Object.keys(timeState).find(function(label){
           return timeState[label];
        });
        timeSelect.value = currentValue;
    }

    onTimeStateUpdate();
}

function onTimeStateUpdate(){
    /*
        ADD ACTIONS ON timeState Change
    */
   chart.update();
   //// new //////
   var time = timeSelect.value;
   switch (time) {
       case 'all':
           t_all = true;
           t12_3 = false;
           t3_6 = false;
           t6_9 = false;
           t9_12 = false;
           t12_15 = false;
           t15_18 = false;
           t18_21 = false;
           t21_24 = false;
           break;
       case '12am-3am':
           t_all = false;
           t12_3 = true;
           t3_6 = false;
           t6_9 = false;
           t9_12 = false;
           t12_15 = false;
           t15_18 = false;
           t18_21 = false;
           t21_24 = false;
           break;
       case '3am-6am':
           t_all = false;
           t12_3 = false;
           t3_6 = true;
           t6_9 = false;
           t9_12 = false;
           t12_15 = false;
           t15_18 = false;
           t18_21 = false;
           t21_24 = false;
           break;
       case '6am-9am':
           t_all = false;
           t12_3 = false;
           t3_6 = false;
           t6_9 = true;
           t9_12 = false;
           t12_15 = false;
           t15_18 = false;
           t18_21 = false;
           t21_24 = false;
           break;
       case '9am-12pm':
           t_all = false;
           t12_3 = false;
           t3_6 = false;
           t6_9 = false;
           t9_12 = true;
           t12_15 = false;
           t15_18 = false;
           t18_21 = false;
           t21_24 = false;
           break;
       case '12pm-3pm':
           t_all = false;
           t12_3 = false;
           t3_6 = false;
           t6_9 = false;
           t9_12 = false;
           t12_15 = true;
           t15_18 = false;
           t18_21 = false;
           t21_24 = false;
           break;
       case '3pm-6pm':
           t_all = false;
           t12_3 = false;
           t3_6 = false;
           t6_9 = false;
           t9_12 = false;
           t12_15 = false;
           t15_18 = true;
           t18_21 = false;
           t21_24 = false;
           break;
       case '6pm-9pm':
           t_all = false;
           t12_3 = false;
           t3_6 = false;
           t6_9 = false;
           t9_12 = false;
           t12_15 = false;
           t15_18 = false;
           t18_21 = true;
           t21_24 = false;
           break;
       case '9pm-12am':
           t_all = false;
           t12_3 = false;
           t3_6 = false;
           t6_9 = false;
           t9_12 = false;
           t12_15 = false;
           t15_18 = false;
           t18_21 = false;
           t21_24 = true;
           break;
       default:
           t_all = true;
   }

   ///////////////////////////////
   toggleCrashLayers_new();
   return timeSelect.value;
}

//add event listener to change state on selector value change
timeSelect.addEventListener('change', function(e){
    var label = e.target.value;
    if(label === 'all'){
        setTimeStateToLabel(label, false);
    }else{
        setTimeStateToLabel(label, true);
    }

    onTimeStateUpdate();
})
//set timeSelect to all
timeSelect.value = 'all';
