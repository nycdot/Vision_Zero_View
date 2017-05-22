///////////////////// SAFETY INTERVENTIONS //////////////////////////////////////////////////////////////

//$(".interventionBtns").on("touchstart  click", function() {
$(".interventionBtns").bind("click", function() {
map.infoWindow.hide();
	interventionLayerIDs = [];
	var test = this;

	interventionLayerIDs.length = 0;
	setTimeout(function() {
		if ($(test).hasClass('active')) {
			$(test).css("background-color", "#e4e4e4");
						$( test ).find( "i" ).css( "opacity", 1);
			$( test ).find( "span" ).css( "opacity", 1);
		} else {
			$(test).css("background-color", "white");
									$( test ).find( "i" ).css( "opacity", .6);
			$( test ).find( "span" ).css( "opacity", .6);

		}
	}, 20);


	setTimeout(function() {
		checkInterventionBtns(interventionLayerIDs);
	}, 20);

});
/// new MArch 2017

 // new scope


function checkInterventionBtns(interventionLayerIDs) {

	 	if ($("#jqxslider_street").is(':visible')) {
		 street_slider = $('#jqxslider_street').jqxSlider('getValue');
		} else if ($("#street_yearSelect").is(':visible')){
			street_slider = parseInt($("#street_yearSelect").val());
	 	}

	 if (street_slider == 10){
	 	//$('#sliderDiv_street').css('background-color', 'rgba(0,0,0,.9)');
		$('#street_dateLabel').css('font-weight', 'bold');
		$('#street_dateLabel').css('border', '1px solid rgba(242,101,34,.9)');
		$('.jqx-slider-slider-horizontal').css('background-color', 'rgba(242,101,34,.9)');

	 }
	 else if  (street_slider == 9){
		 //$('#sliderDiv_street').css('background-color', 'rgba(0,0,0,.9)');
	 	$('#street_dateLabel').css('font-weight', 'bold');
		$('#street_dateLabel').css('border', '1px solid rgba(242,101,34,.9)');
		$('.jqx-slider-slider-horizontal').css('background-color', 'rgba(242,101,34,.9)');
	 }
	 else {
		//$('#sliderDiv_street').css('background-color', 'rgba(0,0,0,.7)');
		$('#street_dateLabel').css('font-weight', 'normal');
		$('#street_dateLabel').css('border', 'none');
		$('.jqx-slider-slider-horizontal').css('background-color', 'rgb(239,239,239)');
	 }

	if (hasClass('LPIBtn', 'active')){

		var locID = 0 +  street_slider;
		interventionLayerIDs.push(locID);
	}
	if (hasClass('engineeringBtn', 'active')){
		//var locID = 1;
		//var locID2 = 2;
		var locID = 11 +  street_slider;
		var locID2 = 22 +  street_slider;
		interventionLayerIDs.push(locID, locID2);
	}
	if (hasClass('ASZBtn', 'active')){

		//var locID = 3;
		var locID = 33 +  street_slider;
		interventionLayerIDs.push(locID);

	}
	if (hasClass('speedHumpsBtn', 'active')){

		//var locID = 4;
		var locID = 44 +  street_slider;
		interventionLayerIDs.push(locID);
	}

	/*if (hasClass('SSFSBtn', 'active')){

		//var locID = 5;
		var locID = 55 +  street_slider;
		interventionLayerIDs.push(locID);
	}*/

	if (hasClass('slowZonesBtn', 'active')){

		//var locID = 5;
		var locID = 55  +  street_slider;
		interventionLayerIDs.push(locID);

	}


if (hasClass('signalTimingBtn', 'active')){

	//var locID = 6;
	var locID = 66 +  street_slider;
	interventionLayerIDs.push(locID);

}

if (hasClass('leftTurnTrafficCalmingBtn', 'active')){

	//var locID = 7;
	var locID = 77 +  street_slider;
	interventionLayerIDs.push(locID);

}



// new July 2016



if (hasClass('VZ_IntersectionsBtn', 'active')){

	//var locID = 8;
	var locID = 88 +  street_slider;
	interventionLayerIDs.push(locID);
}

if (hasClass('VZ_Corridors', 'active')){

	//var locID = 9;
	var locID = 99 +  street_slider;
	interventionLayerIDs.push(locID);
}

if (hasClass('VZ_Zones', 'active')){

	//var locID = 10;
	var locID = 110 +  street_slider;
	interventionLayerIDs.push(locID);
}

	if (hasClass('SSFSBtn', 'active')){

		//var locID = 5;
		var locID = 121 +  street_slider;
		interventionLayerIDs.push(locID);
	}

	if(interventionLayerIDs.length === 0){

	  interventionLayerIDs.push(-1);
	}


	interventionLayer.setVisibleLayers(interventionLayerIDs);

	var streetDate = street_sliderLookup(street_slider);
	$("#street_dateLabel").text(streetDate);

}

/////////////////////////  OUTREACH /////////////////////////////////////////////////////////////////////////////////


//$(".outreachBtns").on("touchstart  click", function() {
$(".outreachBtns").bind("click", function() {
	map.infoWindow.hide();
	outreachLayerIDs = [];

	outreachLayerIDs.length = 0;


	var test = this;

	setTimeout(function() {
		if ($(test).hasClass('active')) {
			$(this).removeClass('active');
			$(test).css("background-color", "#e4e4e4");
			$( test ).find( "i" ).css( "opacity", 1);
			$( test ).find( "span" ).css( "opacity", 1);

		} else {
			$(this).addClass('active');
			$(test).css("background-color", "white");
			$( test ).find( "i" ).css( "opacity", .6);
			$( test ).find( "span" ).css( "opacity", .6);

		}
	}, 30);

	setTimeout(function() {
		checkOutreachBtns(outreachLayerIDs);
	}, 20);

});

function checkOutreachBtns(outreachLayerIDs) {

	if (hasClass('SchoolBtn', 'active')) {
		var locID = 0;
		outreachLayerIDs.push(locID);
		//$("#Schools").prop('checked', 'checked');

	}

	if (hasClass('SeniorBtn', 'active')) {

		var locID = 1;
		outreachLayerIDs.push(locID);

	}
	if (hasClass('TLCBtn', 'active')) {

		var locID = 2;
		outreachLayerIDs.push(locID);

	}
	if (hasClass('TownHallBtn', 'active')) {

		var locID = 3;
		outreachLayerIDs.push(locID);

	}
	if (hasClass('WorkshopBtn', 'active')) {

		var locID = 4;
		outreachLayerIDs.push(locID);

	}
	if (hasClass('StreetTeamBtn', 'active')) {

		var locID = 5;
		outreachLayerIDs.push(locID);

	}

	if (hasClass('HandsOnSafetyDemosBtn', 'active')) {

		var locID = 6;
		outreachLayerIDs.push(locID);

	}

	if(outreachLayerIDs.length === 0){

	  outreachLayerIDs.push(-1);
	}


	outreachLayer.setVisibleLayers(outreachLayerIDs);




}


/////////////////////////  new 2016/////////////////////////////////////////////////////////////////////////////////


//$(".outreachBtns").on("touchstart  click", function() {
$(".speedLimitBtns").bind("click", function() {
	map.infoWindow.hide();
	speedLimitLayerIDs = [];

	speedLimitLayerIDs.length = 0;


	var test = this;

	setTimeout(function() {
		if ($(test).hasClass('active')) {
			$(this).removeClass('active');
			$(test).css("background-color", "#e4e4e4");
			$( test ).find( "i" ).css( "opacity", 1);
			$( test ).find( "span" ).css( "opacity", 1);


		} else {
			$(this).addClass('active');
			$(test).css("background-color", "white");
			$( test ).find( "i" ).css( "opacity", .6);
			$( test ).find( "span" ).css( "opacity", .6);

		}
	}, 30);

	setTimeout(function() {
		checkSpeedLimitBtns(speedLimitLayerIDs);
	}, 20);

});

function checkSpeedLimitBtns(speedLimitLayerIDs) {



	if (hasClass('20Btn', 'active')) {

		var locID = 1;
		speedLimitLayerIDs.push(0,1,2,3);

	}
	if (hasClass('25Btn', 'active')) {

		var locID = 2;
		speedLimitLayerIDs.push(4,5,6,7);

	}
	if (hasClass('25UnsignedBtn', 'active')) {

		var locID = 2;
		speedLimitLayerIDs.push(8,9,10,11);

	}
	if (hasClass('30Btn', 'active')) {

		var locID = 3;
		speedLimitLayerIDs.push(12,13,14,15);

	}
	if (hasClass('35Btn', 'active')) {

		var locID = 4;
		speedLimitLayerIDs.push(16,17,18,19);

	}
	if (hasClass('40Btn', 'active')) {

		var locID = 5;
		speedLimitLayerIDs.push(20,21,22,23);

	}

	if (hasClass('45Btn', 'active')) {

		var locID = 6;
		speedLimitLayerIDs.push(24,25,26,27);

	}

	if (hasClass('50Btn', 'active')) {

		var locID = 6;
		speedLimitLayerIDs.push(28,29,30,31);

	}

	if(speedLimitLayerIDs.length === 0){

	  speedLimitLayerIDs.push(-1);
	}

	//speedLimitLayerIDs.push(32,33,34,35);   // unsigned 25 mph

	speedLimitLayer.setVisibleLayers(speedLimitLayerIDs);




}


///////////////////////////////// end new 2016 ////////////////////////////////////////////////////////////////////

function hasClass(elementID, className)
{
var classList = document.getElementById(elementID).className.split(/\s+/);
for (var i = 0; i < classList.length; i++) {
   if(classList[i]==className)
   {
	return true;
   }
     //do something
   }
   return false;
}



///////////////////////////////// SUMMARY ////////////////////////////////////////////////////////////////////

function checkSummaryLegend() {


	if (injurySum) {

		if (police) {
			$("#injurySumLegendType").text("Police Precinct");

		} else if (community) {
			$("#injurySumLegendType").text("Community District");

		} else if (council) {
			$("#injurySumLegendType").text("City Council District");

		} else if (borough) {
					$("#injurySumLegendType").text("Borough");

	}

		$("#injurySumLegend").css("display", "block");
		$("#fatalitySumLegend").css("display", "none");
	} else if (fatalitySum) {

		if (police) {
			$("#fatalSumLegendType").text("Police Precinct");

		} else if (community) {
			$("#fatalSumLegendType").text("Community District");

		} else if (council) {
			$("#fatalSumLegendType").text("City Council District");

		} else if (borough) {
					$("#fatalSumLegendType").text("Borough");

	}
		$("#injurySumLegend").css("display", "none");
		$("#fatalitySumLegend").css("display", "block");
	}

}


$(".summarySwitchBtns").on("touchstart  click", function() {
	map.infoWindow.hide();

	summaryLayerIDs.length = 0;

	setTimeout(function() {
		if ($("#summaryInjuries").hasClass('active')) {
			$("#summaryFatalities").css("color", "#777");
			$("#summaryInjuries").css("color", "white");
			injurySum = true;
			fatalitySum = false;

		} else if ($("#summaryFatalities").hasClass('active')) {
			$("#summaryInjuries").css("color", "#777");
			$("#summaryFatalities").css("color", "white");
			fatalitySum = true;
			injurySum = false;

		}
	}, 20);

	setTimeout(function() {
		checkSummaryBtns(summaryLayerIDs);
	}, 20);

});

$(".districtBtns").on("touchstart  click", function() {
	map.infoWindow.hide();

	var sumView = ($(this).find('input').attr('id'));

	summaryLayerIDs.length = 0;
	var locID; ($('.districtBtns').css("background-color", "rgb(255,255,255)"));
	$('.districtBtns').css("color", "#777"); ($(this).css("background-color", "#3276b1")); ($(this).css("color", "white"));

	if (sumView == "policePrecinct") {
		police = true, community = false, council = false, borough = false;

		setTimeout(function() {
			checkSummaryBtns(summaryLayerIDs);
		}, 20);
	} else if (sumView == "communityDistrict") {
		police = false, community = true, council = false, borough = false;

		setTimeout(function() {
			checkSummaryBtns(summaryLayerIDs);
		}, 20);
	} else if (sumView == "cityCouncilDistrict") {
		police = false, community = false, council = true, borough = false;

		setTimeout(function() {
			checkSummaryBtns(summaryLayerIDs);
		}, 20);
	} else if (sumView == "borough") {
		police = false, community = false, council = false, borough = true;

		setTimeout(function() {
			checkSummaryBtns(summaryLayerIDs);
		}, 20);
	}
});

function checkSummaryBtns(summaryLayerIDs) {

	summaryLayerIDs.length = 0;

	if (police)
		summaryLayerIDs.push(0);
	else if (community)
		summaryLayerIDs.push(1);
	else if (council)
		summaryLayerIDs.push(2);
	else if (borough)
		summaryLayerIDs.push(3);

	if (injurySum) {
		summaryInjuryLayer.setVisibility(true);
		summaryFatalityLayer.setVisibility(false);
		summaryInjuryLayer.setVisibleLayers(summaryLayerIDs);
	} else if (fatalitySum) {
		summaryInjuryLayer.setVisibility(false);
		summaryFatalityLayer.setVisibility(true);
		summaryFatalityLayer.setVisibleLayers(summaryLayerIDs);
	}

	checkSummaryLegend();


}
