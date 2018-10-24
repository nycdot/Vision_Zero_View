function addCrashLayers() {
//	debugger;

	var _layerURL = "//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/allFatalities_monthly/MapServer";
	var _layerID = "fatality_monthly_all_Layer";
	//console.log('adding fatal month all layer');
	fatality_monthly_all_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL ="//"  + arcgisserver + "/arcgis/rest/services/Vision_Zero/pedFatalities_monthly/MapServer";
	_layerID = "fatality_monthly_ped_Layer";
	fatality_monthly_ped_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL ="//" + arcgisserver + "/arcgis/rest/services/Vision_Zero/bikeFatalities_monthly/MapServer";
	_layerID = "fatality_monthly_bike_Layer";
	fatality_monthly_bike_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL ="//"  + arcgisserver + "/arcgis/rest/services/Vision_Zero/motorFatalities_monthly/MapServer";
	_layerID =  "fatality_monthly_motor_Layer";
	fatality_monthly_motor_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	/******************************************** YEARLY FATALITY ************************************************************/

	_layerURL = "//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/allFatalities_yearly/MapServer";
	 _layerID = "fatality_yearly_all_Layer";
	fatality_yearly_all_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL ="//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/pedFatalities_yearly/MapServer";
	 _layerID = "fatality_yearly_ped_Layer";
	fatality_yearly_ped_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL = "//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/bikeFatalities_yearly/MapServer";
	 _layerID = "fatality_yearly_bike_Layer";
	fatality_yearly_bike_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL ="//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/motorFatalities_yearly/MapServer";
	 _layerID = "fatality_yearly_motor_Layer";
	fatality_yearly_motor_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	/********************************************* INJURY MONTHLY ***********************************************************************************/

	_layerURL ="//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/all_monthly_Injuries_and_fatalities/MapServer";
	_layerID ="injury_monthly_all_Layer";
	injury_monthly_all_Layer = AddDynamicLayer(_layerURL, _layerID,true);

    _layerURL ="//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/pedFatalities_and_Injuries_monthly/MapServer";
    _layerID ="injury_monthly_ped_Layer";
	injury_monthly_ped_Layer = AddDynamicLayer(_layerURL, _layerID,true);

    _layerURL ="//"  + arcgisserver + "/arcgis/rest/services/Vision_Zero/bikeFatalities_and_Injuries_monthly/MapServer";
    _layerID ="injury_monthly_bike_Layer";
	injury_monthly_bike_Layer = AddDynamicLayer(_layerURL, _layerID,true);

    _layerURL =	"//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/motorFatalities_and_Injuries_monthly/MapServer";
    _layerID ="injury_monthly_motor_Layer";
	injury_monthly_motor_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	/***************************************************** INJURY YEARLY ***************************************************************************************/

	_layerURL ="//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/allInjury_yearly/MapServer";
	_layerID = "injury_yearly_all_Layer";
	injury_yearly_all_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL ="//"+  arcgisserver + "/arcgis/rest/services/Vision_Zero/pedInjury_yearly/MapServer";
	_layerID = "injury_yearly_ped_Layer";
	injury_yearly_ped_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL =	"//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/bikeInjury_yearly/MapServer";
	_layerID = "injury_yearly_bike_Layer";
	injury_yearly_bike_Layer = AddDynamicLayer(_layerURL, _layerID,true);

	_layerURL ="//"+   arcgisserver + "/arcgis/rest/services/Vision_Zero/motorInjury_yearly/MapServer";
	_layerID = "injury_yearly_motor_Layer";
	injury_yearly_motor_Layer = AddDynamicLayer(_layerURL, _layerID,true);

} // end addLayers

function AddLayer(layerName, visible) {

    layerName.setDisableClientCaching(false);
    map.addLayer(layerName);
	//	console.log('loading here?');

    layerName.setVisibility(visible);

		layerName.on('error', function () {
			alert("error loading service");

		})


    layerName.on("update-start", function () {
        showLoading();
    });

    layerName.on("update-end", function () {
        hideLoading();
    });
}



function AddDynamicLayer(layerURL, layerID, visible) {
imageParameters = new esri.layers.ImageParameters();
        imageParameters.format = "jpeg";

	var DynamicLayer = new esri.layers.ArcGISDynamicMapServiceLayer(layerURL, {
		id : layerID
		,opacity:.8,
		"imageParameters" : imageParameters,
		visible: visible
	});





  //  DynamicLayer.setDisableClientCaching(true);
		DynamicLayer.setDisableClientCaching(false);


  //  map.addLayer(DynamicLayer);

		try {
			  map.addLayer(DynamicLayer);
			}
		catch(err) {
			  console.log(err);
					$(".modal-alert-body").text("Could not load map services. Check your network settings.");
				$('#alertModal').modal('show');
			}





  //  DynamicLayer.setVisibility(visible);

   	DynamicLayer.on("load", function() {
			//console.log('loaded here : '  + DynamicLayer.id)
			DynamicLayer.minScale = 0; DynamicLayer.maxScale = 0;
		});

   	DynamicLayer.on("error", function() {
		//	$(".modal-alert-body").text("Could not load map services. Check your network settings.");
		// $('#alertModal').modal('show');
		 });

	DynamicLayer.on('visibility-change', function() {
		//console.log(DynamicLayer.id + ' changed')
	});

    DynamicLayer.on("update-start", function () {
	map.infoWindow.hide();
        showLoading();
    });


    DynamicLayer.on("update-end", function () {

        hideLoading();
      LayerVisibility();
    });


    return DynamicLayer;
}
