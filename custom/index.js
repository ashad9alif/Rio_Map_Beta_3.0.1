// // Initialize the map object
// var map = new L.Map('map', {
//     // Some basic options to keep the map still and prevent 
//     // the user from zooming and such.
//     scrollWheelZoom: false,
//     touchZoom: false,
//     doubleClickZoom: false,
//     zoomControl: false,
//     dragging: false,
// });

//         // Prep the background tile layer graciously provided by stamen.com
//         var stamenUrl = 'https://api.mapbox.com/styles/v1/ashad9alif/cl5u2dfba001715o5ijak0qqx/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXNoYWQ5YWxpZiIsImEiOiJjbDV1MmJieXYwOWRyM2ttaXFvbGVzamQzIn0.9sxrMUoQuuOYrkhJc73mJw';
//         var stamenAttribution = '';
//         var stamenLayer = new L.TileLayer(stamenUrl, {maxZoom: 18, attribution: stamenAttribution});
//         // Set the center on our city of angels
//         var center = new L.LatLng(-22.9618391285272, -43.21383404586581);
//         map.setView(center, 14);

//         // Load the background tiles
//         map.addLayer(stamenLayer);



var map = L.map('map', {
  center: [-22.9645, -43.231],
  zoom: 13,
  scrollWheelZoom: false,
  touchZoom: false,
  doubleClickZoom: false,
  zoomControl: false,
  dragging: false,
  attributionControl: false,
});




// L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
//   opacity: 0.5,
//   // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);


// L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer'
// ).addTo(map);


// const apiKey = "AAPKc86e10a8ff874b94af5eb323a6b2a1a3_9RbjH-k6Y1LnCUB63Nz4PXldf_ANVXwFvSLcbC4fjfr2oIUhsA2MUhT2Fnrhv2J";

// L.esri
//   .tiledMapLayer({
//     // url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer",
//     url: "https://tiles.arcgis.com/tiles/Oc3X6QMh6DDjqWcH/arcgis/rest/services/background_WebM_102100__AGOL/MapServer",
//     pane: "overlayPane",
//     opacity: 0.75,
//   })
//   .addTo(map);








var imageUrl = 'https://live.staticflickr.com/65535/52450664014_cb5e524b3c_h.jpg',
  imageBounds = [[-22.8580100, -43.4795681], [-23.0689946, -42.9822988]];

// 43.4795681°W 22.8580100°S   ** Left Top
// 42.9822988°W 23.0689946°S ** Right Down 
L.imageOverlay(imageUrl, imageBounds, {
  opacity: 1,
})
  .addTo(map);


// Adding the Rio Ocean Base **

// var OceanLayer = L.geoJson(OceanData,{
// }).addTo(map);




// Adding the Rio Zones Data on the Map
var RioLayer = L.geoJson(RioData, {
  style: RioStyle,
  onEachFeature: onEachZone,
  // zoomToFeature:zoomToFeature,

}).addTo(map);

// RioLayer.bindTooltip("My Label", {permanent: true, className: "my-label", offset: [0, 0] });



