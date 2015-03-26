	// PLEASE ONLY CHANGE ENVIRONMENT VARIABLE FROM QA TO PROD & VICE VERSA
  var environment = "QA"; //QA or PROD
 

	var basemapURL = "http://a841-dotweb01.nyc.gov/arcgis/rest/services/GAZETTEER/NYCDOT_Basemap_2013_Grey/MapServer";
	//	var basemapURL = "http://www.nycdot.info:6080/arcgis/rest/services/GISAPP_GAZETTEER/NYCDOTBasemap14AGrey/MapServer";
	//var basemapURL = "http://arcgis-nycdotarcgis-1104193322.us-east-1.elb.amazonaws.com:6080/arcgis/rest/services/GISAPP_GAZETTEER/NYCDOTBasemap14AGrey/MapServer";
	
	if (environment == "PROD"){
		 var domainName= window.location.host;
		 var mapServiceDomain= window.location.host+":6080";

	} 
        
    var arcgisserver = "dotqagisiis03:6080";
    	//var domainName= window.location.host;
		 //var mapServiceDomain= window.location.host+":6080";
		 //var arcgisserver = mapServiceDomain;

	var updateDate = "<a href='http://www.nyc.gov/html/dot/html/about/vz_datafeeds.shtml' target='blank'><b>Data</b></a> as of " + "2/28/2015";
	var updateDate2 = "As of " + "2/28/2015"; // for dropdown menu in mobile view - index.html
	
	$(".lastUpdateDate").html(updateDate);
	$("#updateMobileDate").html(updateDate2);
	