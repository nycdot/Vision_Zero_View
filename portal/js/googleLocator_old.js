 ///////////////////////////////// new geocoder ///////////////////////////////////////////////////////////
	function fireAddress() 
    {  // callback from buttonClick event
   
    	address = dojo.byId("address").value;
    	if (!address)
    	{
    		alert("Please enter a street address or intersection.");
    		return;
    	}

    	boroCode = dojo.byId("searchBorough").value;
    	
    	if (boroCode == 1)
   		{
   			alert("Please select a borough from the dropdown list.");
   			return;
   		}
   		if (address.indexOf(", NY")==-1 && address.indexOf(", ny")==-1 && address.indexOf(" NY")==-1 && address.indexOf(" ny")==-1
   			&& address.indexOf(",NY")==-1 && address.indexOf(",ny")==-1)
    	{  /* continue   */ }
    	else
    	{
    		alert("Please enter a street address only.  Search is limited to New York City.");
    		return;
    	}
    	
   		if (address && boroCode !=1)
   		{
   				codeAddress(address);
   		}

	
   	// $('#address').blur();
  // 	dojo.byId("searchBorough").innerHTML = "select Borough";

	}
  
											
    function codeAddress(address) 
    {
    switch(boroCode)
    {
    	
    	case "2": boroName = "Manhattan"; break;
    	case "3": boroName = "Bronx"; break;
    	case "4": boroName = "Brooklyn"; break;
    	case "5": boroName = "Queens"; break;
    	case "6": boroName = "Staten Island"; break;

    }
  
    var nycSW = new google.maps.LatLng(40.495265, -74.255759);
    var nycNE = new google.maps.LatLng(40.916107, -73.717627);
    var bounds = new google.maps.LatLngBounds(nycSW, nycNE);

    	address = address + ", " + boroName + ", NY";

    geocoder.geocode({
        'address': address,  // ', NY',         
        'bounds': bounds,
       // 'components': locality | 'New York'
        'region': 'US'
    }, function (results, status) {
    	
    		var route ="", street_num =""; county = ""; boro =""; site="";
    		var exactMatch = 0;
    		//var routeIndex =""; var streetNumIndex ="";
    		
    		if (status != google.maps.GeocoderStatus.OK) {alert("No matched location for this address in "+boroName+".");}
    		else {var test = results[0].formatted_address;}
    		
    		var loclength = results[0].address_components.length;
    		
    		for (var i=0; i<loclength; i++)
    		{
    			console.log("type at pos " + i + ": " + "\t " + results[0].address_components[i].types + "\t\tval: " +results[0].address_components[i].long_name );
    			var curString = results[0].address_components[i].types;

    			if (results[0].address_components[i].types == "route")
    			{
    				route = results[0].address_components[i].long_name;
    				
    			}
    			if (results[0].address_components[i].types == "street_number")
    			{
    				street_num  = results[0].address_components[i].long_name;
    			}//
    			if (results[0].address_components[i].types == "administrative_area_level_2,political")
    			{
    				county  = results[0].address_components[i].long_name;

    			}
    			if (results[0].address_components[i].types ==  "sublocality_level_1,sublocality,political")
    			{
    				boro  = results[0].address_components[i].long_name;

    			}
    			if (results[0].address_components[i].types == "subway_station,train_station,transit_station,establishment")
    			{
    				site  = results[0].address_components[i].long_name;

    			}
    			
    			
    			
    			else {continue;}  
    		}  
    		

         if (status == google.maps.GeocoderStatus.OK) {
         	
         	if ((results[0].geometry.location.lat() > 40.916107) || (results[0].geometry.location.lat() < 40.495265)
         	|| (results[0].geometry.location.lng() > -73.717627) || (results[0].geometry.location.lng() < -74.255759))
         	{
         		
         		alert ("Address is outside of NYC area. Please re-enter a local address or intersection.");
         		return;
         	}
         	if (route =="" && street_num == "" && site =="")
    		{
    			alert("Address not found.");
    			return;
    		}
         	if (county !="Richmond County" && county !="Queens County" && county !="New York County" && county !="Bronx County" && county != "Kings County")
           	{
         		//console.log("outside of NYC");
         		alert("No address match in " + boroName + ".");
         		return;
         	}
        	if (boroName != boro)
        	{
        		 console.log("boroName : " + boroName);
        		 console.log("boro: " + boro);
        		 alert("Address not found in " + boroName + ". Resubmit your entry, \nincluding road type (street, avenue etc.) and try again.");
        		return;
        	}

         	else
			{
				if (route  && route!=address)
				{
					var routeParse = route.split(" ");
					var loclL = routeParse.length; 
					for (var i =0; i<loclL; i++)
					{
						var lower = routeParse[i].toLowerCase(); var locAddy = address.toLowerCase();
						//console.log(lower + " ::: " + locAddy);
						if (lower == "street") {lower = "xxx";}
					if (locAddy.indexOf(lower) ==-1) { /* nothing */}
						else { exactMatch = 1; break;}
					}


				}

					if (exactMatch == 1) {
						showLocatorResults(results[0].geometry.location);
						dojo.byId("matchInfo").innerHTML = " Matched Address:";
						dojo.byId("matchedGeoCodeAddress").innerHTML = results[0].formatted_address;

						dojo.style(dijit.byId('matched').domNode, {
							visibility : ('visible' ),
							display : ('block'
							)
						});
					} else {
						showLocatorResults(results[0].geometry.location);
						dojo.byId("matchInfo").innerHTML = " No exact match. \nClosest Matched Address:";
						dojo.byId("matchedGeoCodeAddress").innerHTML = results[0].formatted_address;

						dojo.style(dijit.byId('matched').domNode, {
							visibility : ('visible' ),
							display : ('block')
						});
					}

			}
          //  toggleAddressBar();

        } else {
            alert("The address could not be validated, please try entering a different address.");
        }
    });
	}
    
 	/// adds graphic to located address or intersection
 	/// uncomment text code to add graphic label to map
    function showLocatorResults(candidate) 
    {
	    map.graphics.clear();
	    console.log("get here?");
	 //   var candidate;
        var symbol = new esri.symbol.SimpleMarkerSymbol();
       // var infoTemplate = new esri.InfoTemplate("Location", "Address: ${address}<br />Score: ${score}<br />Source locator: ${locatorName}");

        symbol.setStyle(esri.symbol.SimpleMarkerSymbol.STYLE_SQUARE);
        symbol.setColor(new dojo.Color([153, 0, 51, 0.75]));

        var graphic, newPoint;
		// new code for Google geocoder
		// connvert LatLong from Google locator to NAD NY/LI StatePlane coordinate system
        	  
        var lat = candidate.lat();
        var lng = candidate.lng();
        console.log (lat, lng);
        	  
        var pt = new esri.geometry.Point(lng, lat, new esri.SpatialReference({ wkid: 4326 }));
    	var nysp = new esri.SpatialReference({ wkid: 2263 });
    	gsvc.project([pt], nysp, function (projectedPoint) {
                var locX = projectedPoint[0].x;
                var locY = projectedPoint[0].y;
                
                console.log("projPoint : " + locX + "  " + locY);
                                    
               	newPoint = new esri.geometry.Point(locX, locY, nysp);
				console.log(newPoint);
               	graphic = new esri.Graphic(newPoint, symbol); 
                // add a graphic to the map at the geocoded location
                map.graphics.add(graphic);

                var attributes = { address: candidate.address, score: candidate.score, locatorName: candidate.Loc_name };
 
              //  graphic = new esri.Graphic(locPoint, symbol); //attributes
                // add a graphic to the map at the geocoded location
              //  map.graphics.add(graphic);
                //add a text symbol to the map listing the location of the matched address.
                var displayText = candidate.address;
                // var font = new esri.symbol.Font("16pt", esri.symbol.Font.STYLE_NORMAL, esri.symbol.Font.VARIANT_NORMAL, esri.symbol.Font.WEIGHT_BOLD, "Helvetica");
                // var textSymbol = new esri.symbol.TextSymbol(displayText, font, new dojo.Color("#666633"));
                // textSymbol.setOffset(0, 8);
                // map.graphics.add(new esri.Graphic(geom, textSymbol));
               // return false; //break out of loop after one candidate with score greater  than 80 is found.

       			var xmin = newPoint.x - .001;
        		var ymin = newPoint.y - .001;
        		var xmax = newPoint.x + .001;
        		var ymax = newPoint.y  + .001;  
        
        		var pointExtent = new esri.geometry.Extent(xmin, ymin, xmax, ymax, map.spatialReference);
				map.setExtent(pointExtent);
    			//}// do nothing
 
    		}); // end GSRV function
		
    } // end showLocatorResults
    