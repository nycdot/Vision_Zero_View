	// PLEASE ONLY CHANGE ENVIRONMENT VARIABLE FROM QA TO PROD & VICE VERSA
  var environment = "QA"; //QA or PROD
  
  var port = "6080";
  var isSSL = document.location.protocol;
  console.log(isSSL);
  if (isSSL == "http:") {port = ":6080";}
  else if (isSSL == "https:") {port = ":6443";}
  console.log(port);

  

	var basemapURL = "//a841-dotweb01.nyc.gov/arcgis/rest/services/GAZETTEER/NYCDOT_Basemap_2013_Grey/MapServer";
	
        
 
       
		
		 var domainName= window.location.host;
		 var mapServiceDomain= window.location.host + port;
		 var arcgisserver = mapServiceDomain;
		  console.log(arcgisserver);

		 
	// change date in variables to last day of most recent update month
		  
	var updateDate = "<a href='//www.nyc.gov/html/dot/html/about/vz_datafeeds.shtml' target='blank'><b>Data</b></a> as of " + "2/29/2016";
	var updateDate2 = "As of " + "2/29/2016"; // for dropdown menu in mobile view - index.html
	var updateDate3 = "2/29/2016";
	
	
	$(".lastUpdateDate").html(updateDate);
	$("#updateMobileDate").html(updateDate2);
	$(".lastUpdateDate2").html(updateDate3);
	
	
	// change these variable every month to value of most recent month of crash data
	
	// slidermonth == cur year (2009=0, 2015=6) * 12 + cur month  (Jan == 0, Dec == 11) so, 75 => April 2015 (6*12 = 72 + 3 = 75)
	// dropdownmonth == 0-11, Jan=0, Dec=11
	
	sliderMonth = 85; // January
	dropdownMonth = 1;