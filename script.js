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
  
  var home_marker = L.icon({
    iconUrl: 'markers/marker_home.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var pickaxe_marker = L.icon({
    iconUrl: 'markers/marker_pickaxe.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var mountain_marker = L.icon({
    iconUrl: 'markers/marker_mountain.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var spider_marker = L.icon({
    iconUrl: 'markers/marker_spider.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var field_marker = L.icon({
    iconUrl: 'markers/marker_field.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var speaker_marker = L.icon({
    iconUrl: 'markers/marker_speaker.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var cave_marker = L.icon({
    iconUrl: 'markers/marker_cave.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var tower_marker = L.icon({
    iconUrl: 'markers/marker_tower.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var snow_marker = L.icon({
    iconUrl: 'markers/marker_snow.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var temple_marker = L.icon({
    iconUrl: 'markers/marker_temple.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var sea_marker = L.icon({
    iconUrl: 'markers/marker_sea.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });
  
  var bat_marker = L.icon({
    iconUrl: 'markers/marker_bat.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 37],
    popupAnchor:  [-3, -37]
  });

  
  markers = [
    [[1027, 410], "<b>Bladehenge</b><br><i>The home of all giant swords.</i>", home_marker],
    [[740, 760], "<b>Crushing Pit</b><br><i>It is where the strongest men are sent, given no tools, and forced to break down solid rock with nothing but their thick skulls.</i>", pickaxe_marker],
    [[565, 1010], "<b>Thunderhorn</b><br><i>Home to the Kill Master and his band of Thunderhogs.</i>", mountain_marker],
    [[445, 1100], "<b>Spider Lair</b><br><i>Home to the Metal Queen which is maintained by the Kill Master's band of bassists.</i>", spider_marker],
    [[970, 840], "<b>Razor Fields</b><br><i>Home of the Razorfire Boars.</i>", field_marker],
    [[1060, 1260], "<b>Screaming Wall</b><br><i>The Screaming Wall itself is a massive wall made of speakers and amplifiers, which sporadically blasts out sound, due to a sound loop created by the nearby seagulls, all of which have microphones for bodies, posing a danger to those who venture too close.</i>", speaker_marker],
    [[1296, 755], "<b>Cleave of the Impaler</b><br><i>It is a deep canyon beyond Battersmith that leads to General Lionwhyte's Pleasure Tower.</i>", cave_marker],
    [[1565, 790], "<b>Pleasure Tower</b><br><i>Here were captured all women of Bladehenge.</i>", tower_marker],
    [[1625, 1050], "<b>Death's Clutch</b><br><i>Home to the Hextadon. Tollusks and Raptor Elks.</i>", snow_marker],
    [[1997, 990], "<b>Temple of the Zaulia</b><br><i>This temple houses the Zaulia and their Metal Beasts, led by queen Rima.</i>", temple_marker],
    [[2255, 720], "<b>Dry Ice Mines</b><br><i>The mines are enveloped in a thick blanket of fog.</i>", snow_marker],
    [[2290, 270], "<b>Sea of Black Tears</b><br><i>It is a body of dark water from which the Drowning Doom drink, giving them their dark powers.</i>", sea_marker],
    [[2000, 900], "<b>Infinite Mire</b><br><i>Home to Laser Panthers and Metal Beasts.</i>", sea_marker],
    [[2015, 550], "<b>Bat Cave</b><br><i>The Dadbat and his family live here.</i>", bat_marker]
  ];
  
  for (var i = 0; i < markers.length; i++){
    L.marker(pos(markers[i][0]), {icon: markers[i][2]}).addTo(map).bindPopup(markers[i][1]);
  }

}

$(document).ready(ready);
