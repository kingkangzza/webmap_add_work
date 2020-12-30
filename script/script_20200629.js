var leafletMap = L.map('map').setView([37.8687987,127.7148404], 8);
L.tileLayer('http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png').addTo(leafletMap);

var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
layers: "webmap:using_boundary",
format: 'image/png',
transparent: true,
version: '1.1.0',
tileSize: 256,
zIndex: 98,
crs: L.CRS.EPSG4326
}).addTo(leafletMap);



var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
layers: "webmap:hanriver_observe_point",
format: 'image/png',
transparent: true,
version: '1.1.0',
tileSize: 256,
zIndex: 100,
crs: L.CRS.EPSG4326
}).addTo(leafletMap);

var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
layers: "webmap:river_basin",
format: 'image/png',
transparent: true,
version: '1.1.0',
tileSize: 256,
zIndex: 99,
crs: L.CRS.EPSG4326
}).addTo(leafletMap);


var leafletMap2 = L.map('map2').setView([37.8687987,127.7148404], 8);
L.tileLayer('http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png').addTo(leafletMap2);

var leafletMap3 = L.map('map3').setView([37.8687987,127.7148404], 8);
L.tileLayer('http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png').addTo(leafletMap3);

var leafletMap4 = L.map('map4').setView([37.8687987,127.7148404], 8);
L.tileLayer('http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png').addTo(leafletMap4);
