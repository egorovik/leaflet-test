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
  
  var crushing_pit = pos(740, 760);
  L.marker(crushing_pit).addTo(map).bindPopup("Crushing Pit");

  var thunderhorn = pos(565, 1010);
  L.marker(thunderhorn).addTo(map).bindPopup("Thunderhorn");

  var spider_lair = pos(445, 1100);
  L.marker(spider_lair).addTo(map).bindPopup("Spider Lair");

  var razor_fields = pos(970, 840);
  L.marker(razor_fields).addTo(map).bindPopup("Razor Fields");

  var screaming_wall = pos(1060, 1260);
  L.marker(screaming_wall).addTo(map).bindPopup("Screaming Wall");

  var cleave_of_the_impaler = pos(1296, 755);
  L.marker(cleave_of_the_impaler).addTo(map).bindPopup("Cleave of the Impaler");

  var pleasure_tower = pos(1565, 790);
  L.marker(pleasure_tower).addTo(map).bindPopup("Pleasure Tower");

  var deaths_clutch = pos(1625, 1050);
  L.marker(deaths_clutch).addTo(map).bindPopup("Death's Clutch");

  var temple_of_the_zaulia = pos(1997, 990);
  L.marker(temple_of_the_zaulia).addTo(map).bindPopup("Temple of the Zaulia");

  var dry_ice_mines = pos(2255, 720);
  L.marker(dry_ice_mines).addTo(map).bindPopup("Dry Ice Mines");

  var sea_of_black_tears = pos(2290, 270);
  L.marker(sea_of_black_tears).addTo(map).bindPopup("Sea of Black Tears");

  var infinite_mire = pos(2000, 900);
  L.marker(infinite_mire).addTo(map).bindPopup("Infinite Mire");

  var bat_cave = pos(2015, 550);
  L.marker(bat_cave).addTo(map).bindPopup("Bat Cave");
}

$(document).ready(ready);
