var leafletMap = L.map('map').setView([37.3687987, 127.7148404], 8.4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //화면 오른쪽 하단 attributors
		}).addTo(leafletMap);

var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
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


var leafletMap2 = L.map('map2').setView([37.3687987, 127.7148404], 8.3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //화면 오른쪽 하단 attributors
		}).addTo(leafletMap2);

var wmsLayer2 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary2",
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

/*var leafletMap3 = L.map('map3').setView([37.3687987, 127.7148404], 8.3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //화면 오른쪽 하단 attributors
		}).addTo(leafletMap3);

var wmsLayer3 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary4",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 98,
    crs: L.CRS.EPSG4326

}).addTo(leafletMap3);*/




var leafletMap4 = L.map('map4').setView([37.3687987, 127.7148404], 8.3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //화면 오른쪽 하단 attributors
		}).addTo(leafletMap4);


var wmsLayer4 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary4",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 98,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap4);

var leafletMap5 = L.map('map5').setView([37.3687987, 127.7148404], 8.3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //화면 오른쪽 하단 attributors
		}).addTo(leafletMap5);


var wmsLayer5 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:using_boundary2",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 97,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap5);

var wmsLayer5 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:usint_river_basin",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 98,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap5);

var wmsLayer5 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:point_2016_05_sample_table",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 99,
    crs: L.CRS.EPSG4326
}).addTo(leafletMap5);



