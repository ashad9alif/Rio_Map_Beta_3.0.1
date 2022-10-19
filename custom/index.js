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



var map = L.map('map',{
    center:[-22.9645, -43.231],
    zoom: 13,
    scrollWheelZoom: false,
    touchZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
    dragging: false,
    attributionControl:false,
});




// L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
//     style:TileLayerStyle,
//     opacity:0.5,
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);


// Adding the Rio Ocean Base
// var OceanLayer = L.geoJson(OceanData,{


// }).addTo(map);




// Adding the Rio Zones Data on the Map
var RioLayer = L.geoJson(RioData,{
    style:RioStyle,
    onEachFeature: onEachZone,
    // zoomToFeature:zoomToFeature,

}).addTo(map);

// RioLayer.bindTooltip("My Label", {permanent: true, className: "my-label", offset: [0, 0] });


