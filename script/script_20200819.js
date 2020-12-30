var time_series_map = L.map('time_series_map').setView([37.3687987, 127.7148404], 8.4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //화면 오른쪽 하단 attributors
		}).addTo(time_series_map);

function onMapClick(e){
    alert("you clicked the map at" + e.latlng);
}

time_series_map.on('click', onMapClick);

var wmsLayer = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
    layers: "webmap:point_2016_05_sample_table",
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    tileSize: 256,
    zIndex: 100,
    crs: L.CRS.EPSG4326
}).addTo(time_series_map);

var marker1 = L.marker([37.432682, 128.658228]).addTo(time_series_map);
var marker2 = L.marker([37.005877, 127.984028]).addTo(time_series_map);
var marker3 = L.marker([37.289948, 127.652035]).addTo(time_series_map);
var marker4 = L.marker([37.383253, 127.545776]).addTo(time_series_map);
var marker5 = L.marker([37.472678, 127.490845]).addTo(time_series_map);
var marker6 = L.marker([38.078366, 127.762756]).addTo(time_series_map);
var marker7 = L.marker([37.820633, 127.677612]).addTo(time_series_map);
var marker8 = L.marker([37.668603, 127.380981]).addTo(time_series_map);
var marker9 = L.marker([37.535866, 127.243652]).addTo(time_series_map);
var marker10 = L.marker([37.568528, 127.161255]).addTo(time_series_map);
var marker11 = L.marker([37.533552, 127.038517]).addTo(time_series_map);
var marker12 = L.marker([37.524431, 127.017231]).addTo(time_series_map);
var marker13 = L.marker([37.549477, 126.89621]).addTo(time_series_map);
var marker14 = L.marker([37.594376, 126.816559]).addTo(time_series_map);
var marker15 = L.marker([37.650665, 126.722145]).addTo(time_series_map);


var popup = marker6.bindPopup('I am here');


$(document).ready(function () {
    $(marker1).click(function () {
            $('.time_tab1').css('display','block');

    });


});




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





function open_in_frame(url) {
	$('#my_iframe').attr('src', url);
}





