function pos(x, y){
  if (L.Util.isArray(x)) {
    return L.latLng([x[1], x[0]]);
  }
  return L.latLng([y, x]);
}

function ready(){
  var map = L.map('mapid', {
    crs: L.CRS.Simple,
    minZoom: -5
  });
  var bounds = [[0,0],[1500,3000]];
  var image = L.imageOverlay("map/map.jpg", bounds).addTo(map);
  map.fitBounds(bounds);
  
  var bladehenge = pos(1027, 410);
  L.marker(bladehenge).addTo(map).bindPopup("Bladehenge");
}

$(document).ready(ready);
