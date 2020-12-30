/* var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        })
    ],
    view: new ol.View({
        center: [14128579.82, 4512570.74],
        zoom: 7
    }),
});

var districtLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        url: 'http://163.180.5.115:8080/geoserver/webmap/wms?',
        params: {
            'LAYERS': 'webmap:test_boundary',
            'VERSION': '1.1.1',
            'FORMAT': 'image/png',
            'TILED': true
        },
        tileGrid: tileGrid
    })
});
map.addLayer(districtLayer);*/

	var layerName2 = 'webmap:boundary_3857';
	var wmsSource2 = new ol.source.TileWMS({
		url: 'http://163.180.5.115:8080/geoserver/webmap/wms',
        params: {'LAYERS' : layerName2,	'TILED'	:	'true'},
        serverType: 'geoserver'
	});

	var layer2 = new ol.layer.Tile({
        source : wmsSource2,
        minResolution: 0.1,
        maxResolution: 20,
        layerName : layerName2,
        layerCategory : 'WMS',
        type : 'WMS',
        visible : true,
        opacity :0.8
    });

	var olMap2 = new ol.Map({
    	target: 'map',
        layers: [
          	new ol.layer.Tile({
            	source: new ol.source.XYZ({
            		url: 'http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png'
            	})
          	}),
    	],
        view: new ol.View({
        	center: [14129599.82, 4512510.74],
            zoom: 8
    	}),

  	});
	map.addLayer(layer2);





/*var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary2",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 97,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap);



var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:hanriver_observe_point",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 99,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap);

var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:usint_river_basin",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 98,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap);

var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:point_2016_05_sample_table",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 100,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap);
*/

var leafletMap2 = L.map('map2').setView([37.8687987, 127.7148404], 8);
L.tileLayer('http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(leafletMap2);

var wmsLayer2 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary4",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 97,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap2);

var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:usint_river_basin",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 98,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap2);

var wmsLayer2 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:point_2016_05_sample_table",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 99,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap2);

var leafletMap3 = L.map('map3').setView([37.8687987, 127.7148404], 8);
L.tileLayer('http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png').addTo(leafletMap3);

var wmsLayer3 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary4",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 98,
    crs: L.CRS.EPSG4326

}).addTo(leafletMap3);




var leafletMap4 = L.map('map4').setView([37.8687987, 127.7148404], 8);
L.tileLayer('http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png').addTo(leafletMap4);


var wmsLayer4 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary4",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 98,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap4);

var leafletMap5 = L.map('map5').setView([37.8687987, 127.7148404], 8);
L.tileLayer('http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png').addTo(leafletMap5);


var wmsLayer5 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary4",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 98,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap5);
