// function zoomToFeature(e) {
//     window.open('https://www.google.co.uk','_parent');
// }


// var SDDF = feature.properties.URL_EN;


function onEachZone(feature, layer){

    layer.on('mouseover', function(e) {
        this.setStyle({
            'fillColor': '#074f1a'
    });
});


    layer.on('mouseout',function(e) {
        this.setStyle({
            'fillColor': '#3e3f41'
        });
    });

    // layer.on({click: zoomToFeature
    // })
    // };

    layer.on('click',function(e) {
        window.open(feature.properties.URL_EN,'_parent');

    });

    layer.bindTooltip(feature.properties.NAME, {permanent: true,
         className: "label-tooltip",
          offset: [0, 0],
          sticky:false,
          opacity:1,
          direction:'center',
         });

    }



