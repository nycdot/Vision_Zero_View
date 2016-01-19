 ///////////////////////////////// new geocoder ///////////////////////////////////////////////////////////
 var boroCode, symbol, infoTemplate, address, fullAddress;


function LocationSearch() {

  $("#btnsearch").on(evt, function () {
      boroCode = "";
      boroCode = $("#searchBorough").text().trim();

      if (boroCode == "") { 
        alert("Please select a borough.");
        return;
      }
      address = $("#address").val();

      codeAddress(address) ;
  });
    
  $('#address').keydown(function(event){    
    if(event.keyCode==13){
        event.preventDefault();
        $('#btnsearch').trigger('click');
    }
  });
}

function LocationSearch1() {

  $("#btnsearch1").on(evt, function() {

    boroCode = "";
    boroCode = $("#searchBorough1").text().trim();

    if (boroCode == "") { 
      alert("Please select a borough.");
      return;
    }
    address = $("#address1").val();
    codeAddress(address) ;

  });

  $('#address1').keydown(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      $('#btnsearch1').trigger('click');

    }
  });

}


function codeAddress(address) {

  var nycSW = new google.maps.LatLng(40.495265, -74.255759);
  var nycNE = new google.maps.LatLng(40.916107, -73.717627);
  var bounds = new google.maps.LatLngBounds(nycSW, nycNE);

  address = address + ", " + boroCode + ", NY";


  geocoder.geocode({
    'address': address,  // ', NY',         
    'bounds': bounds,
    // 'components': locality | 'New York'
    'region': 'US'
  }, function (results, status) {

    var route ="", street_num =""; county = ""; boro =""; site="";
    var exactMatch = 0;
  		
  	if (status != google.maps.GeocoderStatus.OK) {alert("No matched location for this address in "+boroName+".");}
  	else {var test = results[0].formatted_address;}
  		
  	var loclength = results[0].address_components.length;
  		
  	for (var i=0; i<loclength; i++)
  	{
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
  		

    if (status == google.maps.GeocoderStatus.OK) 
    {

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
       	
       	alert("No address match in " + boroName + ".");
       	return;
      }
      if (boroCode != boro)
      {

        alert("Address not found in " + boroCode + ". Resubmit your entry, \nincluding road type (street, avenue etc.) and try again.");
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
					
					  if (lower == "street") {lower = "xxx";}
				    if (locAddy.indexOf(lower) ==-1) { /* nothing */}
					 else { exactMatch = 1; break;}
          }


        }

        if (exactMatch == 1) 
        {

          var lat = results[0].geometry.location.lat();
          var lon = results[0].geometry.location.lng();

          var thisAddress = results[0].formatted_address;

          fullAddress = thisAddress.substring(0, thisAddress.length-5);

          zoomTo(lat, lon)

        } 
        else
        {

          var lat = results[0].geometry.location.lat();
          var lon = results[0].geometry.location.lng();
		  
		            var thisAddress = results[0].formatted_address;

          fullAddress = thisAddress.substring(0, thisAddress.length-5);

          zoomTo(lat, lon)

        }

      }


      } 
      else 
      {
        alert("The address could not be validated, please try entering a different address.");
      }
  });
}


