	// PLEASE ONLY CHANGE ENVIRONMENT VARIABLE FROM QA TO PROD & VICE VERSA
  var environment = "QA"; //QA or PROD
  

  

	var basemapURL = "//a841-dotweb01.nyc.gov/arcgis/rest/services/GAZETTEER/NYCDOT_Basemap_2013_Grey/MapServer";
       
		
		 var domainName= window.location.host;
		 var mapServiceDomain= window.location.host+":6080";
		 var arcgisserver = mapServiceDomain;

		 
	// change date in variables to last day of most recent update month
		  
	var updateDate = "<a href='//www.nyc.gov/html/dot/html/about/vz_datafeeds.shtml' target='blank'><b>Data</b></a> as of " + "1/31/2016";
	var updateDate2 = "As of " + "1/31/2016"; // for dropdown menu in mobile view - index.html
	var updateDate3 = "1/31/2016";
	
	
	$(".lastUpdateDate").html(updateDate);
	$("#updateMobileDate").html(updateDate2);
	$(".lastUpdateDate2").html(updateDate3);
	

	
	sliderMonth = 84; // January
	dropdownMonth = 0;