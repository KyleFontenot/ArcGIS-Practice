
require([
    "esri/Map",
    "esri/views/MapView"
  ], function(Map, MapView) {

  var map = new Map({
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-117.197401, 34.057397], // longitude, latitude
    zoom: 13
  });
});
