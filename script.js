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
  
  markers = [
    [[1027, 410], "Bladehenge"],
    [[740, 760], "Crushing Pit"],
    [[565, 1010], "Thunderhorn"],
    [[445, 1100], "Spider Lair"],
    [[970, 840], "Razor Fields"],
    [[1060, 1260], "Screaming Wall"],
    [[1296, 755], "Cleave of the Impaler"],
    [[1565, 790], "Pleasure Tower"],
    [[1625, 1050], "Death's Clutch"],
    [[1997, 990], "Temple of the Zaulia"],
    [[2255, 720], "Dry Ice Mines"],
    [[2290, 270], "Sea of Black Tears"],
    [[2000, 900], "Infinite Mire"],
    [[2015, 550], "Bat Cave"]
  ];
  
  for (var i = 0; i < markers.length; i++){
    L.marker(pos(markers[i][0])).addTo(map).bindPopup(markers[i][1]);
  }

}

$(document).ready(ready);
