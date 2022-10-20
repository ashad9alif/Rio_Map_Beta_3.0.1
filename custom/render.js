// function zoomToFeature(e) {
//     window.open('https://www.google.co.uk','_parent');
// }


// var SDDF = feature.properties.URL_EN;
var popupOptions = {
    autoPan: false,
    closeButton: false,
    className: 'popupCustom',
    direction: 'center'
}

function onEachZone(feature, layer) {

    var popup = L.popup();
    let str_popup = feature.properties.NAME;
    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);

    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
        this.setStyle({
            'fillColor': '#fec057'
        });
    });


    layer.on('mouseout', function (e) {
        e.target.closePopup();
        this.setStyle({
            'fillColor': '#3e3f41'
        });
    });


    layer.on('click', function (e) {
        window.open(feature.properties.URL_EN, '_parent');




    // layer.on({
    //     click: zoomToFeature
    // })



    // Using Bind Tool Tip For Labels

     // layer.bindTooltip(feature.properties.NAME, {
    //     permanent: false,
    //     className: "label-tooltip",
    //     offset: [0, 0],
    //     sticky: false,
    //     opacity: 1,
    //     direction: 'center',
    // });
});
}




