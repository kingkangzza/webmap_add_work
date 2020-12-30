var time_series_map = L.map('time_series_map').setView([37.3687987, 127.7148404], 8.4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' //화면 오른쪽 하단 attributors
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


$(document).ready(function () {
    $(marker1).click(function () {
            $('.time_tab1').css('display','block');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab5').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
        });

       $(marker2).click(function () {
            $('.time_tab2').css('display','block');
           $('.time_tab1').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab5').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker3).click(function () {
            $('.time_tab3').css('display','block');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab5').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker4).click(function () {
            $('.time_tab4').css('display','block');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab5').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker5).click(function () {
            $('.time_tab5').css('display','block');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker6).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','block');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker7).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','block');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker8).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','block');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker9).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','block');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker10).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','block');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker11).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','block');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker12).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','block');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker13).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','block');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','none');
       });

        $(marker14).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','block');
        $('.time_tab15').css('display','none');
       });

        $(marker15).click(function () {
            $('.time_tab5').css('display','none');
           $('.time_tab1').css('display','none');
        $('.time_tab2').css('display','none');
        $('.time_tab3').css('display','none');
        $('.time_tab4').css('display','none');
        $('.time_tab6').css('display','none');
        $('.time_tab7').css('display','none');
        $('.time_tab8').css('display','none');
        $('.time_tab9').css('display','none');
        $('.time_tab10').css('display','none');
        $('.time_tab11').css('display','none');
        $('.time_tab12').css('display','none');
        $('.time_tab13').css('display','none');
        $('.time_tab14').css('display','none');
        $('.time_tab15').css('display','block');
       });


});

$('#my_iframe2').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe3').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})


$('#my_iframe4').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe5').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe6').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe7').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe8').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe9').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe10').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe11').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe12').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe13').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe14').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe15').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})

$('#my_iframe16').load(function() {
    $(this).contents().find('img').css({width: '100%', height: '100%'});
})




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







