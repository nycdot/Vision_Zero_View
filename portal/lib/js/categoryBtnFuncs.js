
//// initial state after docuemtn.load ////////////

var activeCategory;

$('#InjuryModal, #SafetyModal, #OutreachModal, #SummaryModal, #SpeedLimitModal, #info-modal').on('show.bs.modal', function (e) {

	 map.infoWindow.hide();
});

function showLoading() {
	$('button').addClass('disabled');
    $('button').prop('disabled', true);

    $('a').addClass('disabled');
    $('a').prop('disabled', true);
    $('a').attr('disabled', true);


     //new June 2016
	/* function loading() { $("#loadingImg").show(); }


	  var timeout = function () {
	  setInterval(function(){ loading();  }, 4000);

	  clearInterval (timeout);
	 }


	  setTimeout(function(){
			$("#loadingImg").hide();
			alert("somethings up");
		}, 4000);

	   $("#loadingImg").show(0, '', function () {

		setTimeout(function(){
			$("#loadingImg").hide();
			alert("somethings up");
		}, 4000);
		});*/


		$("#loadingImg").show();
		/*  setTimeout(function(){
			//$("#loadingImg").hide();
			hideLoading();
			alert("somethings up");
		}, 6000);*/

}




//}

//show map loading image
function hideLoading() {

clearTimeout (timeout);
	$('button').removeClass('disabled');
    $('button').prop('disabled', false);

    $('a').removeClass('disabled');
    $('a').prop('disabled', false);
    $('a').attr('disabled', false);


    $("#loadingImg").hide();
}

function hideSlider() {

    $("#sliderDiv").hide();
     $(".jqx-slider-tickscontainer").hide();

}

function showSlider() {
    $("#sliderDiv").show();
    $(".jqx-slider-tickscontainer").show();
    $("#sliderDiv").css("opacity", 1);

}


$(document).ready(function () {
    $("#ArterialSlowZone").prop('checked', false);

    $("#SafeStreetsForSeniors").prop('checked', false);
    $("#NeighborhoodSlowZone").prop('checked', false);
    $("#EngineeringImprovements").prop('checked', false);
    $("#SpeedHump").prop('checked', false);
    //$("#LeadingPedestrianSignals").prop('checked', true);
  	//$("#LeadingPedestrianSignals").addClass('active');


    $("#SL25").prop('checked', true);
    $("#SL25").addClass('active');
    $("#SL25Unsigned").prop('checked', true);
    $("#SL25Unsigned").addClass('active');
    $("#SL20").prop('checked', false);
    $("#SL30").prop('checked', false);
    $("#SL35").prop('checked', false);
    $("#SL40").prop('checked', false);
    $("#SL45").prop('checked', false);
    $("#SL50").prop('checked', true);


    $("#Schools").prop('checked', true);
    $("#Schools").addClass('active');
    $("#TLC").prop('checked', false);
    $("#TownHallMeeting").prop('checked', false);
    $("#Workshops").prop('checked', false);
    $("#SeniorCenters").prop('checked', false);

    $("#summaryInjuries").prop('checked', true);
    $("#summaryInjuries").addClass('active');
    $("#allLabel").addClass('active');
    police = true, community = false, council = false, borough = false;
    injurySum = true, fatalitySum = false;
    all = true; ped = false, bike = false, motor = false; speedLimit = false;
	yearly = true; monthly = false;
});


$(".categoriesNav").on(evt, function () {
	map.graphics.clear();
    var id = this.id;
    activeCategory = id;

    allCrashLayersOff();
    removeLayer();
    allLayersOff();

    setTimeout(function () {
        CategoryNav(id);
    }, 1000);

});

function CategoryNav(id) {

    map.infoWindow.hide();
    var _layerURL, _layerID;

    if (id == "summaryCat") {
    	$("#sumLegendDiv").css("display", "block");
			// new Jan 2017 //
			$("#logo-stack").css("display", "none");

        _layerURL = "//"  + arcgisserver + "/arcgis/rest/services/Vision_Zero/SUMMARY_INJURIES/MapServer";
        _layerID = "summaryInjuryLayer";
        summaryInjuryLayer = AddDynamicLayer(_layerURL, _layerID, true);

        _layerURL = "//"  + arcgisserver + "/arcgis/rest/services/Vision_Zero/SUMMARY_FATALITIES/MapServer";
        _layerID = "summaryFatalityLayer";
        summaryFatalityLayer = AddDynamicLayer(_layerURL, _layerID, true);



        if (injurySum) { summaryInjuryLayer.setVisibility(true); summaryFatalityLayer.setVisibility(false); }
        else if (fatalitySum) { summaryInjuryLayer.setVisibility(false); summaryFatalityLayer.setVisibility(true); }
        $("#sliderDiv").css("display", "none");
        $("#jqxslider").css("display", "none");
        $("#jqxslider2").css("display", "none");
        $("#labelDiv").css("display", "none");
        $("#date3Label").css("display", "none");
        fatality = false;
        injury = false;
        monthly = false;
        yearly = false;
        //var summaryLayerIDs = [];
        setTimeout(function () { checkSummaryBtns(summaryLayerIDs); }, 20);


		} else if (id == "speedLimitCat") {

			// new Jan 2017 //
				$("#logo-stack").css("display", "none");

        _layerURL = "//"  + arcgisserver + "/arcgis/rest/services/Vision_Zero/speed_limits/MapServer";
        _layerID = "speedLimitLayer";
        speedLimitLayer = AddDynamicLayer(_layerURL, _layerID, true);

        speedLimit = true;
        speedLimitLayerIDs = [];
        setTimeout(function () {
            checkSpeedLimitBtns(speedLimitLayerIDs);
        }, 30);

        $("#sliderDiv").css("display", "none");
        $("#jqxslider").css("display", "none");
        $("#jqxslider2").css("display", "none");
        $("#labelDiv").css("display", "none");
        $("#date3Label").css("display", "none");



    } else if (id == "interventionCat") {

				// new Jan 2017 //
				$("#logo-stack").css("display", "none");

        _layerURL = "//"  + arcgisserver + "/arcgis/rest/services/Vision_Zero/SAFETY_INTERVENTIONS/MapServer";
        _layerID = "interventionLayer";
        interventionLayer = AddDynamicLayer(_layerURL, _layerID, true);

        interventions = true;
        interventionLayerIDs = [];
        setTimeout(function () {
            checkInterventionBtns(interventionLayerIDs);
        }, 30);

        $("#sliderDiv").css("display", "none");
        $("#jqxslider").css("display", "none");
        $("#jqxslider2").css("display", "none");
        $("#labelDiv").css("display", "none");
        $("#date3Label").css("display", "none");

    } else if (id == "outreachCat") {
			// new Jan 2017 //
			$("#logo-stack").css("display", "none");

        _layerURL = "//"  + arcgisserver + "/arcgis/rest/services/Vision_Zero/OUTREACH/MapServer";
        _layerID = "outreachLayer";
        outreachLayer = AddDynamicLayer(_layerURL, _layerID, true);


        outreach = true;
        outreachLayerIDs = [];

        setTimeout(function () {
            checkOutreachBtns(outreachLayerIDs);
        }, 30);

        $("#sliderDiv").css("display", "none");
        $("#jqxslider").css("display", "none");
        $("#jqxslider2").css("display", "none");
        $("#labelDiv").css("display", "none");
        $("#date3Label").css("display", "none");


    } else if (id == "injuryCat") {

        checkCrashCatState();
        $("#sliderDiv").css("display", "block");
        $("#labelDiv").css("display", "block");
        $("#date3Label").css("display", "block");


        if (monthly) {
            $("#jqxslider").css("display", "block");
            $("#jqxslider2").css("display", "none");
        } else if (yearly) {
            $("#jqxslider2").css("display", "block");
            $("#jqxslider").css("display", "none");

        }
       // toggleCrashLayers();
    }

}
function removeLayer() {
    var layer1 = map.getLayer("outreachLayer");
    var layer2 = map.getLayer("interventionLayer");
    var layer3 = map.getLayer("referenceLayer");
    var layer4 = map.getLayer("summaryInjuryLayer");
    var layer5 = map.getLayer("summaryFatalityLayer");
	var layer6 = map.getLayer("speedLimitLayer");
    if (layer1){
        map.removeLayer(layer1);

       }
    if (layer2){
        map.removeLayer(layer2);

     }
    if (layer3){
        map.removeLayer(layer3);
      }
    if (layer4){
        map.removeLayer(layer4);

        }
    if (layer5){
        map.removeLayer(layer5);

	}
	if (layer6){
        map.removeLayer(layer6);

    }
}

function allLayersOff() {
    fatality = false;
    injury = false;
    monthly = false;
    yearly = false;
    interventions = false;
    outreach = false;
	speedLimit = false;
	//police = false, community = false, council = false;

}

function disableCatButtons() {
    $("#injuryCat").attr("disabled", "disabled");
    $("#interventionCat").attr("disabled", "disabled");
    $("#outreachCat").attr("disabled", "disabled");
    $("#summaryCat").attr("disabled", "disabled");
	$("#speedLimitCat").attr("disabled", "disabled");
}



function enableCatButtons() {
    $("#injuryCat").removeAttr("disabled");
    $("#interventionCat").removeAttr("disabled");
    $("#outreachCat").removeAttr("disabled");
    $("#summaryCat").removeAttr("disabled");
	 $("#speedLimitCat").removeAttr("disabled");
}

function GhostLayerCleanup() {

	if (activeCategory == "interventionCat") {

		$('#map_layers img[src*=SUMMARY_INJURIES]').parent().remove();
		$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().remove();
		$('#map_layers img[src*=OUTREACH]').parent().remove();
		$('#map_layers img[src*=speed_limits]').parent().remove();
	}
	if (activeCategory == "outreachCat") {

		$('#map_layers img[src*=INTERVENTION]').parent().remove();
		$('#map_layers img[src*=SUMMARY_INJURIES]').parent().remove();
		$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().remove();
		$('#map_layers img[src*=speed_limits]').parent().remove();

	}
	if (activeCategory == "summaryCat") {

		$('#map_layers img[src*=INTERVENTION]').parent().remove();
		$('#map_layers img[src*=OUTREACH]').parent().remove();
		$('#map_layers img[src*=speed_limits]').parent().remove();
	}
	if (activeCategory == "injuryCat") {

		$('#map_layers img[src*=INTERVENTION]').parent().remove();
		$('#map_layers img[src*=SUMMARY_INJURIES]').parent().remove();
		$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().remove();
		$('#map_layers img[src*=OUTREACH]').parent().remove();
		$('#map_layers img[src*=speed_limits]').parent().remove();
	}

	if (activeCategory == "speedLimitCat") {

		$('#map_layers img[src*=INTERVENTION]').parent().remove();
		$('#map_layers img[src*=SUMMARY_INJURIES]').parent().remove();
		$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().remove();
		$('#map_layers img[src*=OUTREACH]').parent().remove();

	}

}

function LayerVisibility() {

	if (activeCategory == "interventionCat") {
		$('#map_layers img[src*=INTERVENTION]').parent().show();
		$('#map_layers img[src*=SUMMARY_INJURIES]').parent().hide();
		$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().hide();
		$('#map_layers img[src*=OUTREACH]').parent().hide();
		$('#map_layers img[src*=speed_limits]').parent().hide();
	}
	if (activeCategory == "outreachCat") {

		$('#map_layers img[src*=INTERVENTION]').parent().hide();
		$('#map_layers img[src*=SUMMARY_INJURIES]').parent().hide();
		$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().hide();
		$('#map_layers img[src*=OUTREACH]').parent().show();
		$('#map_layers img[src*=speed_limits]').parent().hide();
	}
	if (activeCategory == "summaryCat") {

		$('#map_layers img[src*=INTERVENTION]').parent().hide();
		//$('#map_layers img[src*=SUMMARY_INJURIES]').parent().show();
		//$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().show();
		$('#map_layers img[src*=OUTREACH]').parent().hide();
		$('#map_layers img[src*=speed_limits]').parent().hide();
	}
	if (activeCategory == "injuryCat") {

		$('#map_layers img[src*=INTERVENTION]').parent().hide();
		$('#map_layers img[src*=SUMMARY_INJURIES]').parent().hide();
		$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().hide();
		$('#map_layers img[src*=OUTREACH]').parent().hide();
		$('#map_layers img[src*=speed_limits]').parent().hide();
	}

	if (activeCategory == "speedLimitCat") {
		$('#map_layers img[src*=INTERVENTION]').parent().hide();
		$('#map_layers img[src*=SUMMARY_INJURIES]').parent().hide();
		$('#map_layers img[src*=SUMMARY_FATALITIES]').parent().hide();
		$('#map_layers img[src*=OUTREACH]').parent().hide();
		$('#map_layers img[src*=speed_limits]').parent().show();
	}

}
