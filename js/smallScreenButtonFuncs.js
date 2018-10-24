
$("#smallScreenGeolocate").on(evt, function() {

		evt.stopPropagation();
	getCurrentLocation();
});



$("#smallScreenInfo").on(evt, function() {


	if ((fatality)||(injury)){

			var crashInfo ="Crash data is obtained from the Traffic Accident Management System (TAMS), which is maintained by the New York City Police Department (NYPD).  All midblock crashes are mapped to the nearest intersection. Injuries and fatalities are grouped by intersection and summarized by time of day and month and year. This data is queried and aggregated on a monthly basis and is current as of the query date.  Current year data is January to the end of the latest full month."
			crashInfo += "All crash data is mapped to a simplified NYC street model.  Crashes occurring at complex intersections with multiple roadways are mapped onto a single point.  Injury and fatality crashes occurring on highways are excluded from this data.";
			crashInfo += "<br><br>The “% change” row in the table in the lower left corner shows the percent change from the pre-Vision Zero time period (2009-2013) to the year of crash data displayed on the map. This function is only enabled for full years of crash data, 2014 to the present.";
			crashInfo +=  "<b><br><br>Please note that this data is preliminary and may contain errors, accordingly, the data on this site is for informational purposes only.  Although all attempts to provide the most accurate information are made, errors may be present and any person who relies upon this data does so at their own risk.</b>";

			$("#smallScreenModalInfo").html(crashInfo);
		}
		else if (interventions){

			var interventionInfo = "<i>Leading Pedestrian Interval Signals</i><br>Intersections where DOT adjusts signal timing to show a walk sign for pedestrians before showing a green light to vehicle traffic. The goal of these signals is to improve street safety by giving pedestrians a chance to establish their presence in the crosswalk before vehicles make turns across that crosswalk.";
			interventionInfo += "<br><br><i>Major Safety Projects</i><br>Safety-oriented engineering projects that use multiple treatments (signals, markings, concrete etc) on both corridors and intersections. Improvements are generally aimed at calming and better organizing traffic, creating shorter, safer pedestrian crossings, expanding pedestrian space, improving travel times and creating safe routes for bicycle travel. The map displays operational (non-capital) projects from the start of Vision Zero onward: 2014 to present.";
			interventionInfo += "<br><br><i>Arterial Slow Zones</i><br>The Arterial Slow Zone program uses a combination of a lower speed limit, signal timing changes, distinctive signs and increased enforcement to improve safety on some of New York City's most high-crash corridors.";
	    interventionInfo += "<br><br><i>Speed Humps</i><br>Speed Humps are a raised area of a roadway designed to reduce vehicle speeds. Dates reflect the first time a speed hump was installed at a location, subsequent removals and/or reinstallations are not included.";
	    interventionInfo += "<br><br><i>Neighborhood Slow Zones</i><br>The Neighborhood Slow Zone program is an application based program which takes a neighborhood area and reduces the speed limit to 20 mph. Areas are chosen based on crashes, presence of schools and other neighborhood amenities and community support. The treatments include a mixture of markings, signage, and speed humps.";
			interventionInfo += "<br><br><i>25MPH Signal Retiming</i><br>Priority Corridors where the signal progression has been changed to match the 25 MPH speed limit.";
			interventionInfo += "<br><br><i>Left Turn Traffic Calming</i><br>Intersections where DOT installs traffic calming measures that guide drivers to turn left at a safer speed and angle, as well as increase visibility for pedestrians in the crosswalk."
			interventionInfo +=	"<br><br><i>Enhanced Crossings</i><br>Enhanced Crossings are marked high-visibility crosswalks on calm streets with low vehicle volumes and a strong pedestrian desire to cross. Standard DOT toolbox treatments are used (ADA pedestrian ramps, pedestrian warning signs and high-visibility crosswalk markings) to improve the mobility and accessibility of pedestrians.";
			interventionInfo += "<br><br><i>Vision Zero Priority Intersections</i><br> The intersections with the highest number of pedestrian KSI (killed and severely injured) that cumulatively account for 15% of the borough’s total pedestrian KSI. Developed as part of the Borough Pedestrian Safety Action Plans.";
			interventionInfo +=	"<br><br><i>Vision Zero Priority Corridors</i><br>All corridors in each borough were ranked on a pedestrian KSI (killed and severely injured)  per-mile basis. Corridors were selected from the top of this list until the cumulative number of KSI reached half of the borough’s total. Developed as part of the Borough Pedestrian Safety Action Plans.";
			interventionInfo +=	"<br><br><i>Vision Zero Priority Areas</i><br>Areas in each borough were ranked on a pedestrian KSI density basis. Areas were selected from most dense to least, such that, when combined, account for half of all of pedestrian KSI in the borough. Developed as part of the Borough Pedestrian Safety Action Plans.";
			interventionInfo += "<br><br><i>Safe Streets for Seniors</i><br>The Safe Streets for Seniors program is an initiative aimed at increasing safety for older New Yorkers. Based on factors such as senior population density, injury crashes, and senior trip generators, DOT has selected and studied Senior Pedestrian Focus Areas. Within these areas, DOT evaluates potential safety improvements and also conducts educational outreach to senior centers.";
			interventionInfo += "<br><br><i>Priority Bicycle Districts</i><br>Priority Bicycle Districts are neighborhoods with comparatively high numbers of cyclist KSI and few dedicated bicycle facilities. These districts, seven in Brooklyn and three in Queens, represent 14% of the City’s bicycle lane network and 23% of cyclist KSI. NYC DOT identified these areas in the 2017 report “Safer Cycling: Bicycle Ridership and Safety in New York City.” The agency has prioritized these areas for bicycle network expansion.";
			interventionInfo +=	"<br><br><b>Please note that the data and information on this website is for informational purposes only. While we seek to provide accurate information, please note that errors may be present and information presented may not be complete. Accordingly, the City of New York or the New York City Department of Transportation make no representation as to the accuracy of the information or its suitability for any purpose and disclaim any liability for omissions or errors that may be contained therein.";


	$("#smallScreenModalInfo").html(interventionInfo);
}

else if (outreach){
	var outreachInfo = " <i>Schools</i><br> DOT is conducting outreach to numerous schools in the five boroughs, using age-appropriate materials to educate school children about traffic safety. <br><br>";
		outreachInfo += "<i>Senior Centers</i><br>DOT is partnering with Senior Centers across New York City to increase communication and obtain specific feedback from older New Yorkers about the challenges they face and potential street safety improvements. <br><br>";
		outreachInfo += "<i>Taxi & Car Service Trainings</i><br>Taxi fleets, for-hire vehicle bases, and industry associations have been welcoming TLC into their establishments to discuss Vision Zero and traffic safety.  TLC staff use a presentation to guide this discussion, and at the end of the session drivers sign the TLC Safe Driver Pledge.<br><br>";
		outreachInfo += "<i>Town Hall Meetings</i><br>In Spring 2014, DOT partnered with New York City Councilmembers across the five boroughs to host a number of Town Halls, where community members could come learn more about Vision Zero and give specific suggestions or concerns regarding traffic safety in their neighborhoods.<br><br>";
		outreachInfo +="<i>Workshops</i><br>In Spring 2014, DOT hosted nine pedestrian safety workshops across the five boroughs aimed at gathering community feedback on areas in need of safety improvements. This feedback will be used to shape the Borough Pedestrian Safety Action Plans, to be released later in 2014.<br><br>";
		outreachInfo +="<i>Street Teams</i><br>Street Team members trained the general public with Vision Zero hands-on safety exercises including safe walking and biking, car safety tips and an opportunity to get inside of large delivery trucks to experience their blind spots.  Vision Zero promotional materials were handed out along with educational handouts.";
	$("#smallScreenModalInfo").html(outreachInfo);
}

else if ((fatalitySum)||(injurySum)){
	var summaryInfo = "<i>Police Precinct</i><br>New York City is divided into a number of police precincts with officers who manage enforcement within that area.<br><br>";
	summaryInfo += "<i>Community District</i><br>New York City is comprised of five boroughs, containing 59 community districts citywide established by local law in 1975. Local communities are represented by community boards that create opportunity for active participation in the political process and provision of services to address evolving community needs. <br><br>";
		summaryInfo += "<i>City Council District</i><br>New York City is divided into 51 City Council districts, each represented by a councilmember elected by residents of the district.<br><br>";
		summaryInfo +="<i>Density of Injuries by (Police Precinct, Community District, City Council District)</i><br>Number of traffic injuries and fatalities occurring in a given area, normalized by the population of that area.";

	$("#smallScreenModalInfo").html(summaryInfo);

}

});



$("#smallScreenLegend").on(evt, function() {
	  var locScale = map.getScale();
	  var legendModal;
	     if (injury){
            if (yearly){
              	 //if (locScale > 64000) {
              	 //	legendModal = "Density of All Injuries By Year<br>";
              	//	legendModal += "<img src='img/legend/Injury_Heat.svg' class='img-responsive text-center' alt='Responsive image' style='width: 100%; margin-top: 1em;'>";
                 //	legendModal += "<h6><span style='margin-left: 0.2em;' class='pull-left'>Low</span><span class='pull-right'>High</span></h6>";
                // }
                // else if (locScale < 64001) {

                 	legendModal = "Number of Injuries and Fatalities: Yearly<br>";
                 	legendModal += "<h6>Injuries</h6>";
                 	legendModal += "<img src='img/legend/Injury_Leg.svg' class='img-responsive text-center' alt='Responsive image' style='width: auto; margin-top: 0.3em;'><br>";
                 	legendModal += "<h6>Fatalities</h6>";
                 	legendModal += "<img src='img/legend/Fatal_Leg.svg' class='img-responsive text-center' alt='Responsive image' style='width: auto; margin-top: 1.7em;'>";
				//}
			}
			else if (monthly){

                 	legendModal = "Number of Injuries and Fatalities: Monthly";
                 	legendModal += "<h6>Injuries</h6>";
                 	legendModal += "<img src='img/legend/Injury_Leg.svg' class='img-responsive text-center' alt='Responsive image' style='width: auto; margin-top: 0.3em;'><br>";
                 	legendModal += "<h6>Fatalities</h6>";
                 	legendModal += "<img src='img/legend/Fatal_Leg.svg' class='img-responsive text-center' alt='Responsive image' style='width: auto; margin-top: 1.7em;'>";

      		}
		}
	 	else if (fatality){
	 		if (yearly){

				   legendModal = "Number of Fatalities: Yearly";
				   legendModal += "<h6>Fatalities</h6>";
				   legendModal += "<img src='img/legend/Fatal_Leg.svg' class='img-responsive text-center' alt='Responsive image' style='width: auto; margin-top: 1.7em;'>";
				  }
			else if (monthly) {

				   legendModal = "Number of Fatalities: Monthly";
				   legendModal += "<h6>Fatalities</h6>";
				   legendModal += "<img src='img/legend/Fatal_Leg.svg' class='img-responsive text-center' alt='Responsive image' style='width: auto; margin-top: 1.7em;'>";
				  }
		}

else if(outreach){
		legendModal = "<img src='img/legend/Outreach_leg.svg' class='img-responsive text-center' alt='Responsive image' style='width: 100%; margin-top: 1em;'>";
	}

	else if(interventions){
		//legendModal = "<img src='img/legend/Intervention_Leg.svg' class='text-center' alt='Responsive image' style='width: 100%; margin-top: 1em;'>";

		// new Oct 2017
		legendModal = "<ul style='list-style: none;'>" +
            "<li><span><svg class='LPILeg legSize'><use xlink:href='#icon-circle'/></svg></span>&nbsp<b>Leading Pedestrian Intervals</b></li>" +
            "<li><span><svg class='SafetyLeg legSize'><use xlink:href='#icon-line-dot'/></svg></span>&nbsp<b>Major Safety Projects</b></li>" +
            "<li><span><svg class='ASZLeg legSize'><use xlink:href='#icon-line'/></svg></span>&nbsp<b>Arterial Slow Zones</b></li>" +
            "<li><span><svg class='BumpLeg legSize'><use xlink:href='#icon-line'/></svg></span>&nbsp<b>Speed Humps</b></li>" +
            "<li><span><svg class='SSFSLeg legSize'><use xlink:href='#icon-square'/></svg></span>&nbsp<b>Safe Streets For Seniors</b></li>" +
            "<li><span><svg class='NSZLeg legSize'><use xlink:href='#icon-square'/></svg></span>&nbsp<b>Neighborhood Slow Zones</b></li>" +
            "<li><span><svg class='SignalLeg legSize'><use xlink:href='#icon-line'/></svg></span>&nbsp<b>Signal Timing</b></li>" +
            "<li><span><svg class='VZIntLeg legSize'><use xlink:href='#icon-circle'/></svg></span>&nbsp<b>Priority Intersection</b></li>" +
            "<li><span><svg class='VZCorridorLeg legSize'><use xlink:href='#icon-line'/></svg></span>&nbsp<b>Priority Corridors</b></li>" +
            "<li><span><svg class='VZZoneLeg legSize'><use xlink:href='#icon-square'/></svg></span>&nbsp<b>Priority Zones</b></li>" +
            "<li><span><svg class='LeftTurnLeg legSize'><use xlink:href='#icon-circle'/></svg></span>&nbsp<b>Left Turn Traffic Calming</b></li>" +
            "<li><span><svg class='CrossingsLeg legSize'><use xlink:href='#icon-circle'/></svg></span>&nbsp<b>Enhanced Crossings</b></li>" +
            "<li><span><svg class='VZBikeLeg legSize'><use xlink:href='#icon-square'/></svg></span>&nbsp<b>Bike Priority Zones</b></li>" +
            "</ul>";
//// end new ///

	}

	else if (speedLimit)
	{
		legendModal = "<img src='img/legend/SpeedLimit_Legend.svg' class='text-center' alt='Responsive image' style='width: 100%; margin-top: 1em;'>";
	}
	else if (injurySum){

		if (police) {
			legendModal = "Density of Injuries by Police Precinct<br>";

		}
		else if (community) {
			legendModal = "Density of Injuries by Community District<br>";

		}
		else if (council) {
			legendModal = "Density of Injuries by City Council District<br>";


		}
		else if (borough) {
			legendModal = "Density of Injuries by Borough<br>";


		}
		legendModal+= "<img src='img/legend/Injury_Sum.svg' class='img-responsive text-center' alt='Responsive image' style='width: 100%; margin-top: 1em;'>";
        legendModal +="<h6><span style='margin-left: 0.2em;' class='pull-left'>Low</span><span class='pull-right'>High</span></h6>";
	}
	else if (fatalitySum){

		if (police) {
			legendModal = "Density of Fatalities by Police Precinct<br>";

		}
		else if (community) {
			legendModal = "Density of Fatalities by Community District<br>";

		}
		else if (council) {
			legendModal = "Density of Fatalities by City Council District<br>";

		}
		legendModal+= "<img src='img/legend/Fatal_Sum.svg' class='img-responsive text-center' alt='Responsive image' style='width: 100%; margin-top: 1em;'>";
        legendModal +="<h6><span style='margin-left: 0.2em;' class='pull-left'>Low</span><span class='pull-right'>High</span></h6>";
	}

	$("#smallScreenModalLegend").html(legendModal);

});

var selectMonthVal, selectYearVal;

$("#monthSelect, #yearSelect").on('change', function() {

       var monthVal = $("#monthSelect").val();
       var yearVal = $("#yearSelect").val();
       selectMonthVal = parseInt(monthVal);
       selectYearVal = parseInt(yearVal);

       checkStats();

});

// new March 2017

$("#street_yearSelect").on('change', function() {

      var yearVal = $("#street_yearSelect").val();
      street_slider = parseInt(yearVal);
			interventionLayerIDs = [];
			checkInterventionBtns(interventionLayerIDs);
});


function smallScreenCrashLayer(){
	var monthVal = $("#monthSelect").val();
	var yearVal = $("#yearSelect").val();
	selectMonthVal = parseInt(monthVal);
	selectYearVal = parseInt(yearVal);

   if (monthly){
      var layerNum = ((selectYearVal * 12) + selectMonthVal);
   }
   else if (yearly){
	 		var layerNum = (selectYearVal );
   }
   return layerNum;

}
