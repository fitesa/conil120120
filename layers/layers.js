var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucionIndicedeHumedad_1 = new ol.format.GeoJSON();
var features_EvolucionIndicedeHumedad_1 = format_EvolucionIndicedeHumedad_1.readFeatures(json_EvolucionIndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucionIndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucionIndicedeHumedad_1.addFeatures(features_EvolucionIndicedeHumedad_1);
var lyr_EvolucionIndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucionIndicedeHumedad_1, 
                style: style_EvolucionIndicedeHumedad_1,
                interactive: false,
    title: 'Evolucion Indice de Humedad<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_0.png" /> -0,12 - -0,07<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_1.png" /> -0,07 - -0,01<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_2.png" /> -0,01 - 0,05<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_3.png" /> 0,05 - 0,11<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad_1_4.png" /> 0,11 - 0,17<br />'
        });
var format_IndicedeHumedad_2 = new ol.format.GeoJSON();
var features_IndicedeHumedad_2 = format_IndicedeHumedad_2.readFeatures(json_IndicedeHumedad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_2.addFeatures(features_IndicedeHumedad_2);
var lyr_IndicedeHumedad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_2, 
                style: style_IndicedeHumedad_2,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_2_0.png" /> -0,30 - -0,22<br />\
    <img src="styles/legend/IndicedeHumedad_2_1.png" /> -0,22 - -0,14<br />\
    <img src="styles/legend/IndicedeHumedad_2_2.png" /> -0,14 - -0,07<br />\
    <img src="styles/legend/IndicedeHumedad_2_3.png" /> -0,07 - 0,01<br />\
    <img src="styles/legend/IndicedeHumedad_2_4.png" /> 0,01 - 0,09<br />'
        });
var format_EvolucionIndicedeVegetacion_3 = new ol.format.GeoJSON();
var features_EvolucionIndicedeVegetacion_3 = format_EvolucionIndicedeVegetacion_3.readFeatures(json_EvolucionIndicedeVegetacion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucionIndicedeVegetacion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucionIndicedeVegetacion_3.addFeatures(features_EvolucionIndicedeVegetacion_3);
var lyr_EvolucionIndicedeVegetacion_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucionIndicedeVegetacion_3, 
                style: style_EvolucionIndicedeVegetacion_3,
                interactive: false,
    title: 'Evolucion Indice de Vegetacion<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_0.png" /> -0,24 - -0,14<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_1.png" /> -0,14 - -0,04<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_2.png" /> -0,04 - 0,06<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_3.png" /> 0,06 - 0,17<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion_3_4.png" /> 0,17 - 0,27<br />'
        });
var format_IndicedeVegetacion_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacion_4 = format_IndicedeVegetacion_4.readFeatures(json_IndicedeVegetacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacion_4.addFeatures(features_IndicedeVegetacion_4);
var lyr_IndicedeVegetacion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacion_4, 
                style: style_IndicedeVegetacion_4,
                interactive: false,
    title: 'Indice de Vegetacion<br />\
    <img src="styles/legend/IndicedeVegetacion_4_0.png" /> 0,19 - 0,26<br />\
    <img src="styles/legend/IndicedeVegetacion_4_1.png" /> 0,26 - 0,34<br />\
    <img src="styles/legend/IndicedeVegetacion_4_2.png" /> 0,34 - 0,41<br />\
    <img src="styles/legend/IndicedeVegetacion_4_3.png" /> 0,41 - 0,48<br />\
    <img src="styles/legend/IndicedeVegetacion_4_4.png" /> 0,48 - 0,56<br />'
        });
var format_ABONADOENTEC_5 = new ol.format.GeoJSON();
var features_ABONADOENTEC_5 = format_ABONADOENTEC_5.readFeatures(json_ABONADOENTEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ABONADOENTEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABONADOENTEC_5.addFeatures(features_ABONADOENTEC_5);
var lyr_ABONADOENTEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ABONADOENTEC_5, 
                style: style_ABONADOENTEC_5,
                interactive: true,
                title: '<img src="styles/legend/ABONADOENTEC_5.png" /> ABONADO ENTEC'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucionIndicedeHumedad_1.setVisible(true);lyr_IndicedeHumedad_2.setVisible(true);lyr_EvolucionIndicedeVegetacion_3.setVisible(true);lyr_IndicedeVegetacion_4.setVisible(true);lyr_ABONADOENTEC_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucionIndicedeHumedad_1,lyr_IndicedeHumedad_2,lyr_EvolucionIndicedeVegetacion_3,lyr_IndicedeVegetacion_4,lyr_ABONADOENTEC_5];
lyr_EvolucionIndicedeHumedad_1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedad_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucionIndicedeVegetacion_3.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacion_4.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_ABONADOENTEC_5.set('fieldAliases', {'id': 'id', 'Abonado': 'Abonado', });
lyr_EvolucionIndicedeHumedad_1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedad_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucionIndicedeVegetacion_3.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacion_4.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_ABONADOENTEC_5.set('fieldImages', {'id': 'TextEdit', 'Abonado': 'TextEdit', });
lyr_EvolucionIndicedeHumedad_1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedad_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucionIndicedeVegetacion_3.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacion_4.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_ABONADOENTEC_5.set('fieldLabels', {'id': 'header label', 'Abonado': 'header label', });
lyr_ABONADOENTEC_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});