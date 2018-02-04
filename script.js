function ready(){
  var map = L.map('mapid', {
    crs: L.CRS.Simple,
    minZoom: -5
  });
  var bounds = [[0,0],[1500,3000]];
  var image = L.imageOverlay("map/map.jpg", bounds).addTo(map);
  map.fitBounds(bounds);
  
  var bladehenge = L.latLng([410,1027]);
  L.marker(bladehenge).addTo(map);
}

$(document).ready(ready);
