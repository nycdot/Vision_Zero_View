	// PLEASE ONLY CHANGE ENVIRONMENT VARIABLE FROM QA TO PROD & VICE VERSA
  var environment = "QA"; //QA or PROD


   //// the domain will need to be modified to run this code locally /////

	var port = "6080";
	var isSSL = document.location.protocol;
	// console.log(isSSL);
	if (isSSL == "http:") {port = ":6080";}
	else if (isSSL == "https:") {port = ":6443";}

  var domainName= window.location.host;
	var mapServiceDomain= window.location.host + port;
	arcgisserver = mapServiceDomain;





	
// var basemapURL = "//"  + arcgisserver + "/arcgis/rest/services/GISAPP_GAZETTEER/NYCDOT_Basemap_2013_Grey/MapServer";   // edit path for cloud

	///// change date in variables to last day of most recent update month ////////////////////


	var updateDate = "<a href='http://www.nyc.gov/html/dot/html/about/vz_datafeeds.shtml' target='blank'><b>Data</b></a> as of " + "2/28/2017";
	var updateDate2 = "As of " + "2/28/2017"; // for dropdown menu in mobile view - index.html
	var updateDate3 = "2/28/2017";
	var updateMessage = "";


	$(".lastUpdateDate").html(updateDate);
	$("#updateMobileDate").html(updateDate2);
	$(".lastUpdateDate2").html(updateDate3);
	$(".updateMessageDiv").html(updateMessage);
	$(".updateMessageDiv2").html(updateMessage);


	///// change these variable every month to value of most recent month of crash data

	// slidermonth == cur year (2009=0, 2015=6, 2016=7) * 12 + cur month  (Jan == 0, Dec == 11) so, 75 => April 2015 (6*12 = 72 + 3 = 75)
	// dropdownmonth == 0-11, Jan=0, Dec=11

	sliderMonth = 97; // Feb 2017
	dropdownMonth = 1; // Feb 2017
