


var drawingOptions;
var drawingOptions2;
var locType;
var optionsArray = [];


function checkCrashLegend() {
    var locScale = map.getScale();

    if (injury) {

        $("#fatalityLegend").css("display", "block");
        $("#injuryLegend").css("display", "block");

    } else if (fatality) {

        $("#fatalityLegend").css("display", "block");
        $("#injuryLegend").css("display", "none");
    }

}


/*********************** listeners ***************************/


$(document).ready(function() {

		curScale = 64000; // intial scale

    $(".crashTypeSwitchBtns").on("touchstart click", function(e) {
      //  $(".crashButtons").on("touchstart click", function(e) {
        //console.log("get click");
        map.infoWindow.hide();

        setTimeout(function() {
            //if ($("#injuriesBtn").hasClass('active')) {
            if (hasClass('injuriesBtn', 'active')) {
                injury = true;
                fatality = false;
                $("#fatalitiesBtn").css("color", "#777");
                $("#injuriesBtn").css("color", "#FFF");

            } else if ($("#fatalitiesBtn").hasClass('active')) {
                injury = false;
                fatality = true;
                $("#injuriesBtn").css("color", "#777");
                $("#fatalitiesBtn").css("color", "rgb(255,255,255)");
            }
            //  toggleCrashLayers();
            toggleCrashLayers_new();

       }, 20);
   });
//});


//$(document).ready(function() {
    //  map.on('load', function () {
//  $(".crashButtons").on("touchstart click", function(e) {
    $(".crashTimeSwitchBtns").on("touchstart click", function(e) {
        map.infoWindow.hide();
        setTimeout(function() {
            if ($("#monthlyBtn").hasClass('active')) {
                monthly = true;
                yearly = false;
                $("#yearlyBtn").css("color", "#777");
                $("#monthlyBtn").css("color", "rgb(255,255,255)");

            } else if ($("#yearlyBtn").hasClass('active')) {
                monthly = false;
                yearly = true;
                $("#monthlyBtn").css("color", "#777");
                $("#yearlyBtn").css("color", "rgb(255,255,255)");
            }
            //  toggleCrashLayers();
            toggleCrashLayers_new();

        }, 20);
    });
//});


//$(document).ready(function() {
    //  map.on('load', function () {
    // test //
    all = true;
    $('.crashTypes').on(evt, function() {
        map.infoWindow.hide();
        ($('.crashTypes').css("background-color", "rgb(255,255,255)"));
        ($('.crashTypes').css("color", "#777"));
        ($(this).css("background-color", "#3276b1"));
        ($(this).css("color", "white"));
        var mode = ($(this).find('input').attr('id'));
        switch (mode) {
            case 'ped':
                ped = true;
                bike = false;
                motor = false;
                all = false;
                break;
            case 'motor':
                ped = false;
                bike = false;
                motor = true;
                all = false;
                break;
            case 'bike':
                ped = false;
                bike = true;
                motor = false;
                all = false;
                break;
            case 'all':
                ped = false;
                bike = false;
                motor = false;
                all = true;
                break;
            default:
                all = true;
        }
        toggleCrashLayers_new();
    });

//});


// new Jan 2018 //
//$(document).ready(function() {

    $('.crashTODSwitchBtns').on(evt, function() {
        map.infoWindow.hide();
        ($('.crashTODSwitchBtns').css("background-color", "rgb(255,255,255)"));
        ($('.crashTODSwitchBtns').css("color", "#777"));
        ($(this).css("background-color", "#3276b1"));
        ($(this).css("color", "white"));

        var time = ($(this).find('input').attr('id'));
        switch (time) {
            case 't_all':
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
            case 't12_3':
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
            case 't3_6':
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
            case 't6_9':
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
            case 't9_12':
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
            case 't12_15':
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
            case 't15_18':
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
            case 't18_21':
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
            case 't21_24':
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
        toggleCrashLayers_new();
    });

});

/*************************** layer toggle functions *****************************************************/


function crashSet(curInjuryValue, type) {

  var what, when, who;
  if (injury)  what = "Injuries and Fatalities";
  else if (fatality)  what = "Fatalities";

  if (yearly)  when = "Yearly";
  else if (monthly) when = "Monthly";

  if (all)  who = "All";  else if (ped)  who = "Pedestrian";
  else if (bike)  who = "Cyclist";  else if (motor)  who = "Motorist";

//  var currentCrashMap = "Number of " + who + " " + what + ": " + when; toolTipVal
var toolTipVal;

//console.log(curInjuryValue);
if (monthly) toolTipVal = sliderLookup(curInjuryValue);
else toolTipVal = slider2Lookup(curInjuryValue);
var currentCrashMap = who + " " + what + ": " + toolTipVal;

  $("#boxLabel").text("Citywide Total For");
  $("#layerLabel").text(currentCrashMap);


  //  console.log('get to crash set');
    var visibleInjuryLayerIds = [];
    var toolTipVal;
    if (monthly) toolTipVal = sliderLookup(curInjuryValue);
    else toolTipVal = slider2Lookup(curInjuryValue);
    $("#dateLabel").text(toolTipVal);;
    $("#date2Label").text(toolTipVal);
    $("#date3Label").text(toolTipVal);

    visibleInjuryLayerIds.length = 0;
    if (type == 'i') {
        curInjuryValue = (curInjuryValue * 2);
        visibleInjuryLayerIds.push(curInjuryValue, curInjuryValue + 1);
    } else if (type == 'f') {
      //console.log('curInjuryValue ' + curInjuryValue);
        visibleInjuryLayerIds.push(curInjuryValue);
    }

    // new Jan 2018 //
    //console.log('visibleInjuryLayerIds at setLayerDefs ' + visibleInjuryLayerIds);
  // if (t_all == true) setLayerDefs('t_all', visibleInjuryLayerIds)
    //visibleInjuryLayerIds = [];
    if(visibleInjuryLayerIds.length){
        if (t_all == true) setLayerDefs('t_all', visibleInjuryLayerIds);
        else if (t12_3 == true) setLayerDefs('t12_3', visibleInjuryLayerIds)
        else if (t3_6 == true) setLayerDefs('t3_6', visibleInjuryLayerIds)
        else if (t6_9 == true) setLayerDefs('t6_9', visibleInjuryLayerIds)
        else if (t9_12 == true) setLayerDefs('t9_12', visibleInjuryLayerIds)
        else if (t12_15 == true) setLayerDefs('t12_15', visibleInjuryLayerIds)
        else if (t15_18 == true) setLayerDefs('t15_18', visibleInjuryLayerIds)
        else if (t18_21 == true) setLayerDefs('t18_21', visibleInjuryLayerIds)
        else if (t21_24 == true) setLayerDefs('t21_24', visibleInjuryLayerIds)
    }
}



// new Feb 2018
function setRendererProps(attribute, type) {


//var fat1 =[7,10,12]; //>250,000 only
var fat1 =[4,6,8]; //>250,000 only
var fat2 =[9,12,14]; // <249999, >64000
var fat3 =[12,15,17]; // <63999, >16,000
var fat4 = [15,18,20] // <15,999

//var op = [0,1];
var curFatSymbol, curOp;

//console.log ('curScale in rernderer? ' + curScale);
if (curScale >=250000) { curFatSymbol = fat1; curOp = .9; }
else if (curScale<250000 && curScale>= 64000) { curFatSymbol = fat2; curOp = .9; }
else if (curScale <64000 && curScale>=16000) { curFatSymbol = fat3; curOp = .9; }
else if (curScale<16000) { curFatSymbol = fat4;  curOp = .9; }



    if (type == 'f') {
        drawingOptions = '';
        var baseSymbol = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 1); // dummy
        var renderer = new esri.renderer.UniqueValueRenderer(baseSymbol, attribute);

       renderer.addValue(0, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 10).setColor(new esri.Color([255, 0, 0,0])));
        renderer.addValue(1, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curFatSymbol[0],
            new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                new esri.Color([227, 26, 28, curOp]), 1), new esri.Color([227, 26, 28, curOp])));
        renderer.addValue(2, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curFatSymbol[1],
            new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                new esri.Color([194, 26, 28, curOp]), 1), new esri.Color([194, 26, 28, curOp])));
        for (var i = 3; i <= 7; i++) {
          renderer.addValue(i, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curFatSymbol[2],
            new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                new esri.Color([156, 26, 28, curOp]), 1), new esri.Color([156, 26, 28, curOp])));
        }

        drawingOptions = new esri.layers.LayerDrawingOptions();
        drawingOptions.renderer = renderer;
    }
    //else if (injury){
    else if (type == 'i') {
      //  console.log('injury?')
      //  console.log('scale : ' + curScale);

        var inj1 =[1,2,3,4,5,6]; //>34000,000 only
        var inj2 =[3,5,7,8,9,10]; //>125000only
        var inj3 =[6,8,10,11,12,13]; // 64000
        var inj4 =[9,11,13,14,15,16]; // <63999, >16,000
        var inj5 = [12,14,16,17,18, 20] // <15,999
        var inj6 =[2,4,6,7,8,10]; //>250,000 only
        var curInjSymbol; var curIOp;

      //  console.log ('curScale in renderer? ' + curScale);
        if (curScale >=340000) {
          if (yearly) {
            if (all && t_all){
              curInjSymbol = inj1; curIOp = 0.3;
            }
            else if (!all && t_all) {
              curInjSymbol = inj1; curIOp = 0.4;
            }
            else if (all && !t_all) {
              curInjSymbol = inj1; curIOp = 0.8;
            }
            else if (!all && !t_all) {
            //  console.log('not all not all');
              curInjSymbol = inj1; curIOp = 0.8;
            }
          } else if (monthly) {
              curInjSymbol = inj1; curIOp = 0.8;
          }
        }
        else if (curScale >=250000 && curScale < 340000) {
          if (yearly) {
            if (all && t_all){
            //  console.log('here 250-340');
              curInjSymbol = inj6; curIOp = 0.1;
            }
            else if (all && !t_all){
              curInjSymbol = inj6; curIOp = 0.5;
            }
            else if (!all && !t_all){
              curInjSymbol = inj6; curIOp = 0.8;
            }
            else if (!all && t_all){
                curInjSymbol = inj6; curIOp = 0.3;
            }

          } else if (monthly) {
            curInjSymbol = inj6; curIOp = 0.8;
          }
        }

        else if (curScale >=125000 && curScale < 250000) {
          if (yearly) {
            if (all && t_all){
          //    console.log('here 125-250');
              curInjSymbol = inj2; curIOp = 0.2;
            }
            else if (all && !t_all){
              curInjSymbol = inj2; curIOp = 0.5;
            }
            else if (!all && !t_all){
              curInjSymbol = inj2; curIOp = 0.8;
            }
            else if (!all && t_all){
                curInjSymbol = inj2; curIOp = 0.5;
            }

          } else if (monthly) {
            curInjSymbol = inj2; curIOp = 0.8;
          }
        }


        else if (curScale<125000 && curScale>= 64000) {
          if (yearly) {
            if (all && t_all){
              curInjSymbol = inj3; curIOp = 0.5;
            }
            else if (all && !t_all){
              curInjSymbol = inj3; curIOp = 0.7;
            }
            else if (!all && !t_all){
              curInjSymbol = inj3; curIOp = 0.8;
            }
            else if (!all && t_all){
              curInjSymbol = inj3; curIOp = 0.5;
            }
          } else if (monthly) {
            curInjSymbol = inj3; curIOp = 0.8;
          }
        }
        else if (curScale <64000 && curScale>=16000) { curInjSymbol = inj4; curIOp = .9; }
        else if (curScale<16000) { curInjSymbol = inj5; curIOp = .9; }

    //    else if (curScale <64000 && curScale>=16000) { curInjSymbol = inj4; curIOp = 1.0; }
      //  else if (curScale<16000) { curInjSymbol = inj5; curIOp = 1.0; }


        drawingOptions2 = '';
        var baseSymbol2 = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 1); // dummy
        var renderer2 = new esri.renderer.UniqueValueRenderer(baseSymbol2, attribute);
        renderer2.addValue(0, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 0).setColor(new esri.Color([0, 0, 0, 0])));
        renderer2.addValue(1, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curInjSymbol[0]).setColor(new esri.Color([255, 210, 128, curIOp ])));
        renderer2.addValue(2, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curInjSymbol[1]).setColor(new esri.Color([250, 189, 97, curIOp ])));
        for (var i = 3; i <= 5; i++) {
            renderer2.addValue(i, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curInjSymbol[2]).setColor(new esri.Color([242, 168, 70, curIOp ])));
        }
        for (var j = 6; j <= 9; j++) {
            renderer2.addValue(j, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curInjSymbol[3]).setColor(new esri.Color([235, 148, 42, curIOp ])));
        }
        for (var k = 10; k <= 25; k++) {
            renderer2.addValue(k, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curInjSymbol[4]).setColor(new esri.Color([224, 127, 0, curIOp ])));
        }
        for (var k = 26; k <= 70; k++) {
            renderer2.addValue(k, new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, curInjSymbol[5]).setColor(new esri.Color([222, 112, 0, curIOp ])));
        }
        drawingOptions2 = new esri.layers.LayerDrawingOptions();
        drawingOptions2.renderer = renderer2;

    }
}

function setLayerName() {
//  debugger;
//  console.log('monthly : ' + monthly + ' yearly : ' + yearly);
    cur_layer_name = '';
    cur_type = '';
    cur_timeframe = '';
    cur_mode = '';
    if (fatality) cur_type = 'fatality';
    else if (injury) cur_type = 'injury';
    if (monthly) cur_timeframe = 'monthly';
    else if (yearly) cur_timeframe = 'yearly';
    if (all) cur_mode = 'all';
    else if (ped) cur_mode = 'ped';
    else if (motor) cur_mode = 'motor';
    else if (bike) cur_mode = 'bike';

    cur_layer_name = cur_type + '_' + cur_timeframe + '_' + cur_mode + '_Layer';
    return cur_layer_name;
}

function setLayerDefs(timeslot, visibleInjuryLayerIds) {

    var slot = timeslot.substr(1);
    var layerDefs = [];
    var cur_mode;

    if (timeslot == 't_all') {
        if (all) cur_mode = '';
        else if (ped) cur_mode = 'Ped';
        else if (motor) cur_mode = 'MVO';
        else if (bike) cur_mode = 'Bike';
        var this_layer = setLayerName();

        optionsArray = [];
        setRendererProps((cur_mode + 'Fatalities'), 'f'); // all crash layers have fatality layers
        optionsArray[visibleInjuryLayerIds[0]] = drawingOptions;
        if (injury) { // in addition to fatality
            setRendererProps(cur_mode + 'Injuries', 'i');
            optionsArray[visibleInjuryLayerIds[1]] = drawingOptions2;
        }

        if (optionsArray) {
          map.getLayer(this_layer).setLayerDrawingOptions(optionsArray);
          map.getLayer(this_layer).setVisibleLayers(visibleInjuryLayerIds);
        //   map.setExtent(map.extent);
        //  map.getLayer(this_layer).show();
        //  map.resize();
           //  above seems to work best to push service along
           //  can also try:
             map.getLayer(this_layer).refresh();

        }

    } else {
        var this_layer = setLayerName();
        optionsArray = [];
        if (all) cur_mode = 'All_';
        else if (ped) cur_mode = 'Ped_';
        else if (motor) cur_mode = 'MV_';
        else if (bike) cur_mode = 'Bike_';
        var locslot = cur_mode + slot;
        setRendererProps(locslot, 'f');
        optionsArray[visibleInjuryLayerIds[0]] = drawingOptions;
        if (injury) { // in addition to fatality so func will run twice
            setRendererProps(locslot, 'i');
            optionsArray[visibleInjuryLayerIds[1]] = drawingOptions2;
        }

        if (optionsArray) {
          map.getLayer(this_layer).setLayerDrawingOptions(optionsArray);
          map.getLayer(this_layer).setVisibleLayers(visibleInjuryLayerIds);
          // map.setExtent(map.extent);
        //  map.getLayer(this_layer).show();
         map.getLayer(this_layer).refresh();

        //  map.resize();
      }
    }

}

function toggleCrashLayers_new() {

    allCrashLayersOff();
    var locLayer = setLayerName();
  //console.log(locLayer);
    if (injury) locType = 'i'; else locType = 'f';
    if (locLayer) map.getLayer(locLayer).setVisibility(true);

    if (monthly) {
        map.infoWindow.hide();
        $('#jqxslider').css("display", "block");
        $('#jqxslider2').css("display", "none");

        if ($('#monthSelect').is(':visible')) {
            map.infoWindow.hide();
            curInjuryValue = smallScreenCrashLayer();
            crashSet(curInjuryValue, locType);
        } else {
            curInjuryValue = $('#jqxslider').jqxSlider('getValue');
            crashSet(curInjuryValue, locType);
        }

    } else if (yearly) {
        map.infoWindow.hide();
        $('#jqxslider').css("display", "none");
        $('#jqxslider2').css("display", "block");
        if ($('#yearSelect').is(':visible')) {
            curInjuryValue = smallScreenCrashLayer();
            crashSet(curInjuryValue, locType);
        } else {
            curInjuryValue = $('#jqxslider2').jqxSlider('getValue');
            crashSet(curInjuryValue, locType);
        }
    }
    checkCrashLegend();
    checkStats();
}



function allCrashLayersOff() {
  //  console.log('all layers off');
    injury_yearly_all_Layer.setVisibility(false);
    injury_yearly_ped_Layer.setVisibility(false);
    injury_yearly_motor_Layer.setVisibility(false);
    injury_yearly_bike_Layer.setVisibility(false);
    injury_monthly_all_Layer.setVisibility(false);
    injury_monthly_ped_Layer.setVisibility(false);
    injury_monthly_motor_Layer.setVisibility(false);
    injury_monthly_bike_Layer.setVisibility(false);

    fatality_yearly_all_Layer.setVisibility(false);
    fatality_yearly_ped_Layer.setVisibility(false);
    fatality_yearly_motor_Layer.setVisibility(false);
    fatality_yearly_bike_Layer.setVisibility(false);
    fatality_monthly_all_Layer.setVisibility(false);
    fatality_monthly_ped_Layer.setVisibility(false);
    fatality_monthly_motor_Layer.setVisibility(false);
    fatality_monthly_bike_Layer.setVisibility(false);

}

function checkCrashCatState() {

    map.infoWindow.hide();
    setTimeout(function() {
        if ($("#injuriesBtn").hasClass('active')) {
            injury = true;
            fatality = false;
            $("#fatalitiesBtn").css("color", "#777");
            $("#injuriesBtn").css("color", "rgb(255,255,255)");

        } else if ($("#fatalitiesBtn").hasClass('active')) {
            injury = false;
            fatality = true;
            $("#injuriesBtn").css("color", "#777");
            $("#fatalitiesBtn").css("color", "rgb(255,255,255)");
        }
      //  toggleCrashLayers_new();
  //  }, 20);

  //  setTimeout(function() {
        if ($("#monthlyBtn").hasClass('active')) {
            monthly = true;
            yearly = false;
            $("#yearlyBtn").css("color", "#777");
            $("#monthlyBtn").css("color", "rgb(255,255,255)");

        } else if ($("#yearlyBtn").hasClass('active')) {
            monthly = false;
            yearly = true;
            $("#monthlyBtn").css("color", "#777");
            $("#yearlyBtn").css("color", "rgb(255,255,255)");
        }
        toggleCrashLayers_new();
    }, 20);

}


//}); // require
