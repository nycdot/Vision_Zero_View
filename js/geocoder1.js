

$(document).ready(function() {

	$(".dropdown-menu li a").on("touchstart click",function() {
		var selText = $(this).text();
		$(this).parents('.input-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
	});
	LocationSearch1();

});



function zoomTo(lat, lon) {

       require(["esri/geometry/Point", "esri/geometry/webMercatorUtils", "esri/graphic"], function(Point, webMercatorUtils, Graphic) {

              var point = new Point(lon, lat, map.spatialReference);


              var pt = new esri.geometry.Point(lon, lat, new esri.SpatialReference({ wkid: 4326 }));
              var nysp = new esri.SpatialReference({ wkid: 2263 });
              gsvc.project([pt], nysp, function (projectedPoint) {
                     var locX = projectedPoint[0].x;
                     var locY = projectedPoint[0].y;
                                    
                     newPoint = new esri.geometry.Point(locX, locY, nysp);
                     infoTemplate = new esri.InfoTemplate("Location");
                     graphic = new esri.Graphic(newPoint, symbol); 

                     map.graphics.add(graphic);

                     var xmin = newPoint.x - .001;
                     var ymin = newPoint.y - .001;
                     var xmax = newPoint.x + .001;
                     var ymax = newPoint.y  + .001;  
                     var pointExtent = new esri.geometry.Extent(xmin, ymin, xmax, ymax, map.spatialReference);

                     map.infoWindow.setTitle("Location");
                     map.infoWindow.setContent(fullAddress);
                     var wait = map.setExtent(pointExtent);
                     wait.addCallback(function(screenPnt) {

                            map.infoWindow.resize(200, 100);
                            map.infoWindow.show(newPoint);

                     });
              });
       });
}



function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}


