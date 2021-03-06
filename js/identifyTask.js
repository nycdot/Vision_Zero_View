function IdentifyTaskInit() {
       $(document).ready(function() {


              allIdentifyParams = new esri.tasks.IdentifyParameters();
              allIdentifyParams.tolerance = 6;
              allIdentifyParams.returnGeometry = true;
              allIdentifyParams.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_ALL;
              allIdentifyParams.width = map.width;
              allIdentifyParams.height = map.height;


              fatality_monthly_all_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/allFatalities_monthly/MapServer");
              fatality_monthly_ped_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/pedFatalities_monthly/MapServer");
              fatality_monthly_bike_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/bikeFatalities_monthly/MapServer");
              fatality_monthly_motor_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/motorFatalities_monthly/MapServer");

              fatality_yearly_all_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/allFatalities_yearly/MapServer");
              fatality_yearly_ped_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/pedFatalities_yearly/MapServer");
              fatality_yearly_bike_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/bikeFatalities_yearly/MapServer");
              fatality_yearly_motor_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/motorFatalities_yearly/MapServer");

              injury_monthly_all_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/all_monthly_Injuries_and_fatalities/MapServer");
              injury_monthly_ped_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/pedFatalities_and_Injuries_monthly/MapServer");
              injury_monthly_bike_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/bikeFatalities_and_Injuries_monthly/MapServer");
              injury_monthly_motor_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/motorFatalities_and_Injuries_monthly/MapServer");

              injury_yearly_all_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/allInjury_yearly/MapServer");
              injury_yearly_ped_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/pedInjury_yearly/MapServer");
              injury_yearly_bike_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/bikeInjury_yearly/MapServer");
              injury_yearly_motor_IdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/motorInjury_yearly/MapServer");


              interventionIdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/SAFETY_INTERVENTIONS/MapServer");
              outreachIdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/OUTREACH/MapServer");
              summaryInjIdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/SUMMARY_INJURIES/MapServer");
              summaryFatalIdentifyTask = new esri.tasks.IdentifyTask("//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/SUMMARY_FATALITIES/MapServer");

			  speedLimitIdentifyTask = new esri.tasks.IdentifyTask("http://" + arcgisserver + "/arcgis/rest/services/Vision_Zero/speed_limits/MapServer");

              dojo.connect(map, "onClick", executeIdentifyTask);
              dojo.connect(map, "touchend", executeIdentifyTask);
       });

}

function executeIdentifyTask(evt) {

  var locTime, locAttr, curMode, curAllmode, attributeField, slot;

  if (all) { curMode = 'All_'; curAllMode = ''; }
  else if  (ped) { curMode = 'Ped_'; curAllMode = 'Ped'; }
  else if  (motor) { curMode = 'MV_'; curAllMode = 'MVO'; }
  else if  (bike) { curMode = 'Bike_'; curAllMode = 'Bike'; }

  if (t_all==true) {
    locTime = 'all times';
    if (fatality) slot = 'Fatalities';
    else if (injury) slot = 'Injuries';
  } // set slot in fataliy or injury
  else if (t12_3 == true) {locTime = '12am-3am'; slot = '12_3';}
  else if (t3_6 == true) {locTime = '3am-6am';  slot = '3_6';}
  else if (t6_9 == true)  {locTime = '6am-9am'; slot = '6_9';}
  else if (t9_12 == true)  {locTime = '9am-12pm'; slot = '9_12';}
  else if (t12_15 == true)  {locTime = '12pm-3pm'; slot = '12_15';}
  else if (t15_18 == true)  {locTime = '3pm-6pm'; slot = '15_18';}
  else if (t18_21 == true) {locTime = '6pm-9pm'; slot = '18_21';}
  else if (t21_24 == true)  {locTime = '9pm-12am'; slot = '21_24';}

  if (slot != 'Fatalities' && slot != 'Injuries')  attributeField = curMode + slot;
  else attributeField = curAllMode + slot;
  locAttr = '${' + attributeField + '}';

  var locSliderVal;

  var wait = map.centerAt(evt.mapPoint);
  wait.addCallback(function (){

  if ($('#yearSelect').is(':visible') || $('#monthSelect').is(':visible'))  locSliderVal = smallScreenCrashLayer();
  else {
    if (yearly) locSliderVal = $('#jqxslider2').jqxSlider('getValue');
    else if (monthly) locSliderVal = $('#jqxslider').jqxSlider('getValue');
  }

  if (injury) {

        var locScale = map.getScale();
        if (locScale > 64000) {
              $(".modal-alert-body").text("Please zoom in to view feature information");
                  $('#alertModal').modal('show');
        } else {
             map.infoWindow.hide();
             var locVal, deferred;
             locVal = (locSliderVal * 2);
             allIdentifyParams.geometry = evt.mapPoint;
             allIdentifyParams.layerIds = [locVal, locVal + 1];
             allIdentifyParams.mapExtent = map.extent;
             allIdentifyParams.layerDefinitions = [];
            // allIdentifyParams.layerDefinitions[locVal] = curAllMode + 'Fatalities' + '>0'; // first layer should always be Fatalites
              if (t_all) allIdentifyParams.layerDefinitions[locVal] = curAllMode + 'Fatalities' + '>0';
              else  allIdentifyParams.layerDefinitions[locVal] = attributeField + '>0'
             allIdentifyParams.layerDefinitions[locVal + 1] = attributeField + '>0'; // 2nd is injuries

            // console.log(curAllMode + 'Fatalities' + '>0');
             //console.log(attributeField + '>0');

            if (yearly) {
             if (all)  deferred = injury_yearly_all_IdentifyTask.execute(allIdentifyParams);
             else if (ped) deferred = injury_yearly_ped_IdentifyTask.execute(allIdentifyParams);
             else if (motor) deferred = injury_yearly_motor_IdentifyTask.execute(allIdentifyParams);
             else if (bike)  deferred = injury_yearly_bike_IdentifyTask.execute(allIdentifyParams);
            } else if (monthly){
              if (all)  deferred = injury_monthly_all_IdentifyTask.execute(allIdentifyParams);
              else if (ped)  deferred = injury_monthly_ped_IdentifyTask.execute(allIdentifyParams);
              else if (motor)	deferred = injury_monthly_motor_IdentifyTask.execute(allIdentifyParams);
              else if (bike)  deferred = injury_monthly_bike_IdentifyTask.execute(allIdentifyParams);
            }

            deferred.addCallback(function(response) {

               if (response.length > 0)  map.infoWindow.show(evt.mapPoint);
               else   map.infoWindow.hide();

               return dojo.map(response, function(result) {
                     var feature = result.feature;
                      var locName = result.layerName;
                      var split, locParse;
                      if (monthly){
                             split = locName.split("_");
                             locParse = split[0];
                      }
                      else if (yearly){
                             split = locName.charAt(3);
                             locParse = split;
                      }

                      if (monthly)   var locDate = sliderLookup(locSliderVal);
                      else if (yearly) var locDate = slider2Lookup(locSliderVal);
                      var locTxt;
                      if ((locParse == "injuries")||(locParse == "I")) {

                          if (t_all==true) { locAttr = '${' + curAllMode + 'Injuries}'}
                            	if (all){
                                     locTxt = "<table><tr><td><b>Total Injuries, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
                             	} else if (ped){
                                    locTxt = "<table><tr><td><b>Pedestrian Injuries, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
                             	} else if (motor){
                                   locTxt = "<table><tr><td><b>Motorist Injuries, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
                             	} else if (bike){
                                    locTxt = "<table><tr><td><b>Cyclist Injuries, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
                             }
                            // console.log ('locAttr inj: ' + locAttr);
                      }
                      if ((locParse == "fatalities" )||(locParse == "F" )) {
                          if (t_all==true) {locAttr = '${' + curAllMode + 'Fatalities}'}
                            if (all) {
                                locTxt = "<table><tr><td><b>Total Fatalites, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
                            } else if (motor) {
                                    locTxt = "<table><tr><td><b>Motorist Fatalites, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
                            } else if (bike) {
                                    locTxt = "<table><tr><td><b>Cyclist Fatalites, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
                            } else if (ped) {
                                    locTxt = "<table><tr><td><b>Pedestrian Fatalites, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
                            }

                            //console.log ('locAttr fat: ' + locAttr);

                        }

                        var template = new esri.InfoTemplate();
                        template.setTitle(locDate);
                        template.setContent(locTxt);
                        feature.setInfoTemplate(template);
                        return feature;
                     });
               });

               map.infoWindow.setFeatures([deferred]);
        } // end else
 } else if (fatality) {
      var locVal, deferred;
      map.infoWindow.hide();
      locVal = locSliderVal;

      allIdentifyParams.geometry = evt.mapPoint;
      allIdentifyParams.layerIds = [locVal];
      allIdentifyParams.mapExtent = map.extent;
      allIdentifyParams.layerDefinitions = [];
      allIdentifyParams.layerDefinitions[locVal] = attributeField + '>0';

       if (yearly) {
         if (all) deferred = fatality_yearly_all_IdentifyTask.execute(allIdentifyParams);
         else if (ped) deferred = fatality_yearly_ped_IdentifyTask.execute(allIdentifyParams);
         else if (motor) deferred = fatality_yearly_motor_IdentifyTask.execute(allIdentifyParams);
         else if (bike) deferred = fatality_yearly_bike_IdentifyTask.execute(allIdentifyParams);
       } else if (monthly) {
         if (all) deferred = fatality_monthly_all_IdentifyTask.execute(allIdentifyParams);
         else if (ped) deferred = fatality_monthly_ped_IdentifyTask.execute(allIdentifyParams);
         else if (motor) deferred = fatality_monthly_motor_IdentifyTask.execute(allIdentifyParams);
         else if (bike) deferred = fatality_monthly_bike_IdentifyTask.execute(allIdentifyParams);
       }

       // allIdentifyParams.geometry = evt.mapPoint;
       // allIdentifyParams.layerIds = [locVal];
       // allIdentifyParams.mapExtent = map.extent;
       // allIdentifyParams.layerDefinitions = [];
       // allIdentifyParams.layerDefinitions[locVal] = attributeField + '>0';

       deferred.addCallback(function(response) {

         if (response.length > 0) {
               map.infoWindow.show(evt.mapPoint);
         } else {
               map.infoWindow.hide();
         }

         return dojo.map(response, function(result) {
             var feature = result.feature;
             if (monthly)
                    var locDate = sliderLookup(locSliderVal);
             else if (yearly)
                    var locDate = slider2Lookup(locSliderVal);

             if (t_all==true) locAttr = '${' + curAllMode + 'Fatalities}';
             var locTxt;
             if (all) {
               locTxt = "<table><tr><td><b>Total Fatalites, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";

              } else if (motor) {
                     locTxt = "<table><tr><td><b>Motorist Fatalites, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
              } else if (bike) {
                     locTxt = "<table><tr><td><b>Cyclist Fatalites, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
              } else if (ped) {
                       locTxt = "<table><tr><td><b>Pedestrian Fatalites, " + locTime  + ": </b>" + "&nbsp; " + "</td><td>"+locAttr+"</td></tr></table>";
              }

             var template = new esri.InfoTemplate();
             template.setTitle(locDate);
             template.setContent(locTxt);
             feature.setInfoTemplate(template);
             return feature;
          });
      });

      map.infoWindow.setFeatures([deferred]);

  } // end crash
  else if(interventions){

               var deferred;
               allIdentifyParams.geometry = evt.mapPoint;
               allIdentifyParams.layerIds = [interventionLayerIDs];
               allIdentifyParams.mapExtent = map.extent;
               deferred = interventionIdentifyTask.execute(allIdentifyParams);
               deferred.addCallback(function(response) {

               if (response.length > 0) {
                     map.infoWindow.show(evt.mapPoint);
               } else {
                     map.infoWindow.hide();
               }

               return dojo.map(response, function(result) {
                     var feature = result.feature;
                     var locName = result.layerName;
                     var pos = locName.lastIndexOf('_');
                     var newName= locName.substring(0,pos);
                     var locText;

                     var template = new esri.InfoTemplate();
                    switch (newName){
                            case  "ASZ_Final_Dissolve":
                            console.log('get here')
                            locTxt = "<table><tr><td><b>Corridor: </b>${CORRIDOR}</td></tr>";
                            locTxt += "<tr><td>From" + "&nbsp;" + "${FROM_STREET}";
                            locTxt += " To" + "&nbsp;"  + "${TO_STREET}</td></tr></table>";
                            template.setTitle("Arterial Slow Zones");
                            break;

                            case  "Safe_Streets_For_Seniors":
                            locTxt = "<table><tr><td><b>Name:</b>" + "&nbsp; " + "${Name}</td></tr>";
                            locTxt += "<tr><td><b>Year:</b>" + "&nbsp;  " + " ${Year}</td></tr></table>";
                            template.setTitle("Safe Streets For Seniors  <br>");
                            break;

                            case  "Neighborhood_Slow_Zones_pre_post_VZ":
                            locTxt = "<table><tr><td><b>Name:" + "&nbsp;" + " </b>${Name}</td></tr>";
                            locTxt += "<tr><td><b>Year:</b>" + "&nbsp;" + " ${Year}</td></tr></table>";
                            template.setTitle("Neighborhood Slow Zones  <br>");
                            break;

                            case  "SAFETY_ENGG_SIP_Corridors":
                            locTxt = "<table><tr><td><b>Project Name:" + "&nbsp;" + "</b>${Proj_Name}</td></tr>";
                            locTxt += "<tr><td><b>Project Type:</b>" + "&nbsp;" + "${SIP_Proj_T}</td></tr></table>";
                            template.setTitle("Safety Engineering Projects  <br>");
                            break;

          								  case "SAFETY_ENGG_SIP_Intersections":
          								  locTxt = "<table><tr><td><b>Project Name:" + "&nbsp;" + "</b>${Pjct_Name}</td></tr>";
                            locTxt += "<tr><td><b>Project Type:</b>" + "&nbsp;" + "${SIPProjTyp}</td></tr></table>";
                            template.setTitle("Safety Engineering Projects <br>");
                            break;

                            case  "Speed_Humps":
                            locTxt = "<table><tr><td><b>On Street:" + "&nbsp;" + " </b>${on_st}</td></tr>";
                            locTxt += "<tr><td>From" + "&nbsp;" + " ${from_st}";
                            locTxt += " To" + "&nbsp;" + "${to_st}</td></tr>";
                            locTxt += "<tr><td><b>Date Installed:</b> " + "&nbsp;" + "${date_insta}</td></tr>";
                            locTxt += "<tr><td><b>Num. of Humps:</b> " + "&nbsp;" + "${new_humps}</td></tr></table>";
                            template.setTitle("Speed Humps");
                            break;

                            case  "LPI":
                            locTxt = "<table><tr><td><b>Main Street:" + "&nbsp;" + " </b>${MainStreet}</td></tr>";
                            locTxt += "<tr><td><b>Cross Street:</b>" + "&nbsp;" + " ${CrossStree}</td></tr></table>";
                            template.setTitle("Leading Pedestrian Intervals <br>");
                            break;

                            case  "Signal_timing":
                            locTxt = "<table><tr><td><b>Corridor:" + "&nbsp;" + " </b>${OnStreet}</td></tr>";
                            locTxt += "<tr><td>From" + "&nbsp;" + "${FromStreet}";
                            locTxt += " To" + "&nbsp;" + "${ToStreet}</td></tr></table>";
                            template.setTitle("25MPH Signal Retiming <br>");
                            break;

                            case  "VZ_Priority_Intersections":
                            locTxt = "<table><tr><td><b>Intersection:" + "&nbsp;" + " </b>${Street1}";
                            locTxt += " and" + "&nbsp;" + "${Street2}</td></tr></table>";
                            template.setTitle("Priority Intersections <br>");
                            break;

                            case  "VZ_Priority_Corridors":
                            locTxt = "<table><tr><td><b>Corridor:" + "&nbsp;" + " </b>${OnStreet}</td></tr>";
                            locTxt += "<tr><td>From" + "&nbsp;" + "${FromStreet}";
                            locTxt += " To" + "&nbsp;" + "${ToStreet}</td></tr></table>";
                            template.setTitle("Priority Corridors <br>");
                            break;

                            case  "VZ_Priority_Zones":
                            locTxt = "<table><tr><td><b>Square miles: " + "&nbsp;" + " </b>${SqMi}</td></tr></table>";
                            template.setTitle("Priority Zones <br>");
                            break;

                            case  "Left_Turn_Traffic_Calming_Installed":
					                  locTxt = "<table><tr><td><b>Treatment:" + "&nbsp;" + "</b>${completion}</td></tr></table>";
                            template.setTitle("Left Turn Traffic Calming <br>");
                            break;

                            case  "Enhanced_Crossings":
                            locTxt = "<table><tr><td><b>Date Implemented: " + "&nbsp;" + " </b>${Date_Imple}</td></tr></table>";
                            template.setTitle("Enhanced Crossings <br>");
                            break;

                            case  "VZ_Priority_Bike_Districts":
                            locTxt = "<table><tr><td><b>Community District: " + "&nbsp;" + " </b>${BoroCD_code}</td></tr></table>";
                            template.setTitle("Bike Priority Zones <br>");
                            break;

                            default:
                            locTxt = "No data available";
                            break;
                     }

                     template.setContent(locTxt);
                     feature.setInfoTemplate(template);
                     return feature;
               });
        });

        map.infoWindow.setFeatures([deferred]);

    }

    else if (outreach){

             var deferred;
             allIdentifyParams.geometry = evt.mapPoint;
             allIdentifyParams.layerIds = [outreachLayerIDs];
             allIdentifyParams.mapExtent = map.extent;
             deferred = outreachIdentifyTask.execute(allIdentifyParams);
             deferred.addCallback(function(response) {


             if (response.length > 0) {
                   map.infoWindow.show(evt.mapPoint);
             } else {
                   map.infoWindow.hide();
             }

             return dojo.map(response, function(result) {
                   var feature = result.feature;
                   var locName = result.layerName;

                   var locText;
                   var template = new esri.InfoTemplate();
                   switch (locName){
                          case  "Outreach_schools":
                          locTxt = "<table><tr><td><b>School: </b>" + "&nbsp;" + "${SiteServed}</td></tr>";
                          locTxt += "<tr><td><b>Activity:</b> " + "&nbsp;" + " ${Activity}</td></tr>";
                          locTxt += "<tr><td><b>Event Date:</b> " + "&nbsp;" + "${EventDate}</td></tr>";
                          template.setTitle("School Outreach Events <br>");
                          break;

                          case  "TownHallLocations":
                          locTxt = "<table><tr><td><b>Location: </b>" + "&nbsp;" + "${Sheet1__NA}</td></tr>";
                          locTxt += "<tr><td><b>Address:</b>" + "&nbsp;" + " ${Sheet1__AD}</td></tr></table>";
                          template.setTitle("Town Halls");
                          break;

                          case  "workshop_locations":
                          locTxt = "<table><tr><td><b>Location:" + "&nbsp;" + " </b>${Name}</td></tr>";
                          locTxt += "<tr><td><b>Address:</b>" + "&nbsp;" + " ${Address}</td></tr></table>";
                          template.setTitle("Workshops");
                          break;

                          case  "Senior_Centers":
                          locTxt = "<table><tr><td><b>Location:" + "&nbsp;" + "</b>${Site_Serve}</td></tr>";
                          locTxt += "<tr><td><b>Event:" + "&nbsp; " + "</b>${Activity}</td></tr>";
                          locTxt += "<tr><td><b>Event Date:" + "&nbsp; " + "</b>${EventDate}</td></tr></table>";
                          template.setTitle("Senior Centers <br>");
                          break;

                          case  "tlc":
                          locTxt = "<table><tr><td><b>Event:" + "&nbsp;" + "</b>${Event}</td></tr>";
                          locTxt += "<tr><td><b>Address:" + "&nbsp;" + "</b>${Address}</td></tr>";
                          locTxt += "<tr><td><b>Date:" + "&nbsp;" + "</b>${Date}</td></tr></table>";
				                          template.setTitle("TLC");
                          break;

                          case  "Street_teams_flyers":
                          locTxt = "<table><tr><td><b>Date:" + "&nbsp;" + "</b>${Date}</td></tr>";
                          locTxt += "<tr><td><b>Total flyers:" + "&nbsp;" + "</b>${TotalFlyer}</td></tr></table>";
				                          template.setTitle("Street Teams");
                          break;

                          case  "Hands_On_Safety_Demos":
                          locTxt = "<table><tr><td><b>Date:" + "&nbsp;" + "</b>${Event_Date}</td></tr>";
                          locTxt += "<table><tr><td><b>Site:" + "&nbsp;" + "</b>${Site_Serve}</td></tr>";
                          locTxt += "<tr><td><b>Activity:" + "&nbsp;" + "</b>${Activity}</td></tr></table>";
				                          template.setTitle("Hands-On Safety Demos <br>");
                          break;

                           default:
                          locTxt = "No data available";
                          break;
                   }

                   template.setContent(locTxt);
                   feature.setInfoTemplate(template);
                   return feature;
             });
      });

      map.infoWindow.setFeatures([deferred]);

    }

	  else if(speedLimit) {

             var deferred;
             allIdentifyParams.geometry = evt.mapPoint;
             allIdentifyParams.layerIds = [speedLimitLayerIDs];
             allIdentifyParams.mapExtent = map.extent;
             deferred = speedLimitIdentifyTask.execute(allIdentifyParams);

             deferred.addCallback(function(response) {

             if (response.length > 0) {
                   map.infoWindow.show(evt.mapPoint);
             } else {
                   map.infoWindow.hide();
             }

             return dojo.map(response, function(result) {
                 var feature = result.feature;
                 var locName = result.layerName;
                 var locText;
                 var template = new esri.InfoTemplate();
                 locTxt = "<table><tr><td><b>Street: </b>" + "&nbsp;" + "${Street}</td></tr>";
                 locTxt += "<tr><td><b>Speed Limit:</b> " + "&nbsp;" + " ${postvz_sl}</td></tr>";
                 locTxt += "<tr><td><b>Signed:</b> " + "&nbsp;" + " ${postvz_sg}</td></tr></table>";

                 template.setTitle("Speed Limit");
                 template.setContent(locTxt);
                 feature.setInfoTemplate(template);
                 return feature;
             });
      });

      map.infoWindow.setFeatures([deferred]);

 }


 else if(injurySum || fatalitySum){

         var deferred;

         allIdentifyParams.geometry = evt.mapPoint;
         allIdentifyParams.layerIds = [summaryLayerIDs];
         allIdentifyParams.mapExtent = map.extent;
         if (injurySum) deferred = summaryInjIdentifyTask.execute(allIdentifyParams);
         if (fatalitySum) deferred = summaryFatalIdentifyTask.execute(allIdentifyParams);

         deferred.addCallback(function(response) {

         if (response.length > 0) {
               map.infoWindow.show(evt.mapPoint);
         } else {
               map.infoWindow.hide();
         }

         return dojo.map(response, function(result) {
               var feature = result.feature;
               var locName = result.layerName;
               var locText;
               var template = new esri.InfoTemplate();
               switch (locName){
                  case  "SUMMARY_PP_ALL_FATALITIES":  case  "SUMMARY_PP_ALL_INJURIES":
                  template.setTitle("Police Precinct ${Precinct} Summary <br>");
                  break;

                  case  "SUMMARY_CD_ALL_FATALITIES":  case  "SUMMARY_CD_ALL_INJURIES":
                  template.setTitle("Community District ${BoroCD} Summary <br>");
                  break;

                  case  "SUMMARY_CC_ALL_FATALITIES":  case  "SUMMARY_CC_ALL_INJURIES":
                  template.setTitle("City Council ${CounDist} Summary <br>");
                  break;

                  case  "SUMMARY_BB_ALL_FATALITIES":  case  "SUMMARY_BB_ALL_INJURIES":
                  template.setTitle("${Borough_name} Summary <br>");
                  break;

               }

               locTxt = "<table style='width:100%'><tr style='border-bottom: 1px solid black;'><td><span class='dateText'>note: mapped data only</span><b><h4>CRASH DATA</h4></b>YTD as of " + updateDate3   + "</td><td></td></tr>";
               locTxt += "<tr><td><b>Total fatalites:</b>" + "&nbsp;" + " </td><td>${SUM_Fatalities}</td></tr>";
               locTxt += "<tr><td><b>Total Injuries:</b>" + "&nbsp;" + " </td><td>${SUM_Injuries}</td></tr>";
               locTxt += "<tr><td><b>Pedestrian Fatalites:</b>" + "&nbsp;" + " </td><td>${SUM_PedFatalities}</td></tr>";
               locTxt += "<tr><td><b>Pedestrian Injuries:</b>" + "&nbsp; " + " </td><td>${SUM_PedInjuries}</td></tr>";
               locTxt += "<tr><td><b>Bicycle Fatalites:</b>" + "&nbsp;" + " </td><td> ${SUM_BikeFatalities}</td></tr>";
               locTxt += "<tr><td><b>Bicycle Injuries:</b>" + "&nbsp;" + " </td><td> ${SUM_BikeInjuries}</td></tr>";
               locTxt += "<tr><td><b>Motorist Fatalites:</b>" + " &nbsp;" + " </td><td>${SUM_MVOFatalities}</td></tr>";
               locTxt += "<tr><td><b>Motorist Injuries:</b>" + "&nbsp;" + " </td><td>${SUM_MVOInjuries}</td></tr><tr></tr>";

              if ((locName == "SUMMARY_PP_ALL_FATALITIES") || (locName == "SUMMARY_PP_ALL_INJURIES") ) {
                 locTxt += "<tr style='border-bottom: 1px solid black;'><td><b><h4>DEMOGRAPHIC DATA</h4></b>2010 Census" + "</td><td></td></tr>";
                 locTxt += "<tr><td><b>Total Population:</b>" + "&nbsp;" + " </td><td>${Total_Pop}</td></tr>";
                 locTxt += "<tr><td><b>Age Under 5:</b>" + "&nbsp;" + " </td><td>${Ages_Under}</td></tr>";
                 locTxt += "<tr><td><b>Age 5-9:</b>" + "&nbsp;" + " </td><td>${Ages_5_to_}</td></tr>";
                 locTxt += "<tr><td><b>Age 10-14:</b>" + "&nbsp; " + " </td><td>${Ages_10_to}</td></tr>";
                 locTxt += "<tr><td><b>Age 15-19:</b>" + "&nbsp;" + " </td><td> ${Ages_15_to}</td></tr>";
                 locTxt += "<tr><td><b>Age 20-24:</b>" + "&nbsp;" + " </td><td> ${Ages_20_to}</td></tr>";
                 locTxt += "<tr><td><b>Age 25-44:</b>" + " &nbsp;" + " </td><td>${Ages_25_to}</td></tr>";
                 locTxt += "<tr><td><b>Age 45-64:</b>" + "&nbsp;" + " </td><td>${Ages_45_to}</td></tr>";
                 locTxt += "<tr><td><b>Age 65 And Over:</b>" + "&nbsp;" + " </td><td>${Ages_65_an}</td></tr>";
             }
             else {
             	   locTxt += "<tr style='border-bottom: 1px solid black;'><td><b><h4>DEMOGRAPHIC DATA</h4></b>2010 Census" + "</td><td></td></tr>";
                 locTxt += "<tr><td><b>Total Population:</b>" + "&nbsp;" + " </td><td>${TotalPop}</td></tr>";
                 locTxt += "<tr><td><b>Age Under 5:</b>" + "&nbsp;" + " </td><td>${Ages_Under}</td></tr>";
                 locTxt += "<tr><td><b>Age 5-9:</b>" + "&nbsp;" + " </td><td>${Ages_5to9}</td></tr>";
                 locTxt += "<tr><td><b>Age 10-14:</b>" + "&nbsp; " + " </td><td>${Ages_10to1}</td></tr>";
                 locTxt += "<tr><td><b>Age 15-19:</b>" + "&nbsp;" + " </td><td> ${Ages_15to1}</td></tr>";
                 locTxt += "<tr><td><b>Age 20-24:</b>" + "&nbsp;" + " </td><td> ${Ages_20to2}</td></tr>";
                 locTxt += "<tr><td><b>Age 25-44:</b>" + " &nbsp;" + " </td><td>${Ages_25to4}</td></tr>";
                 locTxt += "<tr><td><b>Age 45-64:</b>" + "&nbsp;" + " </td><td>${Ages_45to6}</td></tr>";
                 locTxt += "<tr><td><b>Age 65 And Over:</b>" + "&nbsp;" + " </td><td>${Ages_65and}</td></tr>";

             }

               locTxt += "<tr style='border-bottom: 1px solid black;'><td><b><h4>INTERVENTION DATA</h4></b>" + "</td><td></td></tr>";
               locTxt += "<tr><td><b>LPIs Installed:</b><br><span class='dateText'>2009-YTD</span>" + "&nbsp;" + " </td><td>${SUM_LPI}</td></tr>";
               locTxt += "<tr><td><b>Safety Projects (Intersections):</b><br><span class='dateText'> 2009-YTD " + updateDate3 +  "</span>&nbsp;" + " </td><td>${SUM_SIPIntersections}</td></tr>";
               locTxt += "<tr><td><b>Safety Projects  (Corridors):</b><br><span class='dateText'> 2009-YTD " + updateDate3  + "</span>&nbsp;" + " </td><td>${SUM_SIPCorridors}" + "&nbsp;" + "miles</td></tr>";
               locTxt += "<tr><td><b>Speed Humps Installed:</b>" + " </td><td>${SUM_SpeedHumps}</td></tr>";
               locTxt += "<tr><td><b>Arterial Slow Zones:</b><br><span class='dateText'>2014</span>" + "&nbsp;" + " </td><td> ${SUM_ASZ}" + "&nbsp;" + "miles</td></tr>";
               locTxt += "<tr><td><b>VZ Priority Corridors:</b>" + "&nbsp;" + " </td><td> ${SUM_VZ_Priority_Corridors}" + "&nbsp;" + "miles</td></tr>";
              locTxt += "<tr><td><b>VZ Priority Intersections:</b>" + "&nbsp;" + " </td><td> ${SUM_VZ_Priority_Intersections}</td></tr>";
              locTxt += "<tr><td><b>VZ Priority Zones:</b><br><span class='dateText'>road miles</span>" + "&nbsp;" + " </td><td> ${SUM_VZ_Priority_Zones}" + "&nbsp;" + "miles</td></tr>";
                // newOct 2017
              locTxt += "<tr><td><b>VZ Bike Priority Zones:</b>" + "&nbsp;" + " </td><td> ${SUM_VZ_Bike}" + "&nbsp;" + "miles</td></tr>";
              locTxt += "<tr><td><b>Enhanced Crossings:</b><br><span class='dateText'>2012-YTD</span>" + "&nbsp;" + " </td><td>${SUM_Enhanced_Crossings}</td></tr>";
              locTxt += "<tr><td><b>Signal Timing:</b><br><span class='dateText'> 2014-YTD " + updateDate3 + "</span>&nbsp;" + " </td><td> ${SUM_SignalTiming}" + "&nbsp;" + "miles</td></tr>";
              locTxt += "<tr><td><b>Left Turn Traffic Calming:</b><br><span class='dateText'> 2016-YTD " + updateDate3   + "&nbsp;" + " </td><td> ${SUM_Left_Turn_Traffic_Calming}" + "&nbsp;" + "</td></tr>";
              locTxt += "<tr><td><b>Neighborhood Slow Zones:</b><br><span class='dateText'>road miles</span>" + "&nbsp;" + " </td><td> ${SUM_NeighSlowZones}" + "&nbsp;" + "miles</td></tr></table>";

               template.setContent(locTxt);
               feature.setInfoTemplate(template);
               return feature;
          });
      });

      map.infoWindow.setFeatures([deferred]);
  }

map.infoWindow.resize (270,180);
}); // wait callback

}

$('#searchNav1').on('click', function () {
       map.infoWindow.hide();
});
