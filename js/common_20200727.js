        $(document).ready(function () {
            $("div#first_screen").click(function () {
                $("div#container1").css("position", "relative");
                $("div#container1").css("top", "0");
                $("div#container2").css("position", "absolute");
                $("div#container2").css("top", "-1500px");
                $("div#container3").css("position", "absolute");
                $("div#container3").css("top", "-1500px");
                $("div#container4").css("position", "absolute");
                $("div#container4").css("top", "-1500px");
                $("div#container5").css("position", "absolute");
                $("div#container5").css("top", "-1500px");
            });
        });

        $(document).ready(function () {
            $("nav#basin").click(function () {
                $("div#container2").css("position", "relative");
                $("div#container2").css("top", "0");
                $("div#container1").css("position", "absolute");
                $("div#container1").css("top", "-1500px");
                $("div#container3").css("position", "absolute");
                $("div#container3").css("top", "-1500px");
                $("div#container4").css("position", "absolute");
                $("div#container4").css("top", "-1500px");
                $("div#container5").css("position", "absolute");
                $("div#container5").css("top", "-1500px");
            });
        });

        $(document).ready(function () {
            $("nav#anti").click(function () {
                $("div#container3").css("position", "relative");
                $("div#container3").css("top", "0");
                $("div#container1").css("position", "absolute");
                $("div#container1").css("top", "-1500px");
                $("div#container2").css("position", "absolute");
                $("div#container2").css("top", "-1500px");
                $("div#container4").css("position", "absolute");
                $("div#container4").css("top", "-1500px");
                $("div#container5").css("position", "absolute");
                $("div#container5").css("top", "-1500px");
            });
        });

        $(document).ready(function () {
            $("nav#spatial").click(function () {
                $("div#container4").css("position", "relative");
                $("div#container4").css("top", "0");
                $("div#container1").css("position", "absolute");
                $("div#container1").css("top", "-1500px");
                $("div#container2").css("position", "absolute");
                $("div#container2").css("top", "-1500px");
                $("div#container3").css("position", "absolute");
                $("div#container3").css("top", "-1500px");
                $("div#container5").css("position", "absolute");
                $("div#container5").css("top", "-1500px");
            });
        });

        $(document).ready(function () {
            $("nav#intro").click(function () {
                $("div#container5").css("position", "relative");
                $("div#container5").css("top", "0");
                $("div#container1").css("position", "absolute");
                $("div#container1").css("top", "-1500px");
                $("div#container2").css("position", "absolute");
                $("div#container2").css("top", "-1500px");
                $("div#container3").css("position", "absolute");
                $("div#container3").css("top", "-1500px");
                $("div#container4").css("position", "absolute");
                $("div#container4").css("top", "-1500px");
            });
        });


        $(function () {
            $("#basin,#anti,#spatial,#intro").click(function () {
                $(".gis_header_debs_2 nav").removeClass('on');
                $(".container").removeClass('on');
                $(this).addClass('on');
                $("#" + $(this).data('id')).addClass('on');
            });
        });

        $(function () {
            $("#first_screen").click(function () {
                $(".gis_header_debs_1 div").removeClass('on');
                $(".container").removeClass('on');
                $(this).addClass('on');
                $("#" + $(this).data('id')).addClass('on');
            });
        });

        $(function () {
            $("#anti_button button").click(function () {
                $("#anti_button button").removeClass('on');
                $(this).addClass('on');
                $("#" + $(this).data('id')).addClass('on');
                $(".tap nav:nth-child(5)").css("position", "absolute");
                $(".tap nav:nth-child(5)").css("opacity", "0");
                $(".tap nav:nth-child(5)").css("top", "-500px");
            });

            $("#back").click(function () {
                $(".tap nav:nth-child(5)").css("position", "relative");
                $(".tap nav:nth-child(5)").css("opacity", "1");
                $(".antia").removeClass('on');
                $(".tap nav:nth-child(5)").css("top", "0");
            });
        });

        $(function () {
            $("#anti_button1 button").click(function () {
                $("#anti_button1 button").removeClass('on');
                $(this).addClass('on');
                $("#" + $(this).data('id')).addClass('on');
                $(".tap2 nav:nth-child(6)").css("position", "absolute");
                $(".tap2 nav:nth-child(6)").css("opacity", "0");
                $(".tap2 nav:nth-child(6)").css("top", "-500px");
            });

            $(".back1").click(function () {
                $(".tap2 nav:nth-child(6)").css("position", "relative");
                $(".tap2 nav:nth-child(6)").css("opacity", "1");
                $(".antib").removeClass('on');
                $(".tap2 nav:nth-child(6)").css("top", "0");
            });
        });

        $(document).ready(function () {
            $('#selectBox').change(function () {
                var state = $('#selectBox option:selected').val();
                if (state == 'river_basin') {
                    $('#p1').show();
                    $('.pp1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').show();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();

                } else if (state == 'stream') {
                    $('#p2').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').show();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                }
            });
        });

        $(document).ready(function () {
            $('#selectBox1').change(function () {
                var state = $('#selectBox1 option:selected').val();
                if (state == 'dem') {
                    $('#p3').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').show();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();

                } else if (state == 'slope') {
                    $('#p4').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').show();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                } else if (state == 'aspect') {
                    $('#p5').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').show();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                } else if (state == 'hillshade') {
                    $('#p6').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').show();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                }
            });
        });

        $(document).ready(function () {
            $('#selectBox2').change(function () {
                var state = $('#selectBox2 option:selected').val();
                if (state == 'landuse1') {
                    $('#p7').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').show();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                } else if (state == 'landuse2') {
                    $('#p7').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').show();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                } else if (state == 'landuse3') {
                    $('#p7').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').show();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                } else if (state == 'landuse4') {
                    $('#p7').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

$('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').show();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                } else if (state == 'bound') {
                    $('#p8').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').show();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                } else if (state == 'road') {
                    $('#p9').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').show();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();
                }
            });
        });

        $(document).ready(function () {
            $('#selectBox3').change(function () {
                var state = $('#selectBox3 option:selected').val();
                if (state == 'rain1') {
                    $('#p10').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').show();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();

                } else if (state == 'rain2') {
                    $('#p10').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').show();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();

                } else if (state == 'rain3') {
                    $('#p10').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').show();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();

                } else if (state == 'rain4') {
                    $('#p10').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').show();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();

                }
            });
        });

        $(document).ready(function () {
            $('#selectBox4').change(function () {
                var state = $('#selectBox4 option:selected').val();
                if (state == 'forest_type') {
                    $('#p11').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p12').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').show();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').hide();


                } else if (state == 'kung') {
                    $('#p12').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p13').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').show();
                    $('#yung').hide();
                    $('#forest_density').hide();

                } else if (state == 'yung') {
                    $('#p13').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p14').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').show();
                    $('#forest_density').hide();

                } else if (state == 'forest_density') {
                    $('#p14').show();
                    $('.pp1').hide();
                    $('#p1').hide();
                    $('#p2').hide();
                    $('#p3').hide();
                    $('#p4').hide();
                    $('#p5').hide();
                    $('#p6').hide();
                    $('#p7').hide();
                    $('#p8').hide();
                    $('#p9').hide();
                    $('#p10').hide();
                    $('#p11').hide();
                    $('#p12').hide();
                    $('#p13').hide();

                    $('#map2').hide();
                    $('#river_basin').hide();
                    $('#stream').hide();
                    $('#dem').hide();
                    $('#slope').hide();
                    $('#aspect').hide();
                    $('#hillshade').hide();
                    $('#landuse1').hide();
                    $('#landuse2').hide();
                    $('#landuse3').hide();
                    $('#landuse4').hide();
                    $('#bound').hide();
                    $('#road').hide();
                    $('#rain1').hide();
                    $('#rain2').hide();
                    $('#rain3').hide();
                    $('#rain4').hide();
                    $('#forest_type').hide();
                    $('#kung').hide();
                    $('#yung').hide();
                    $('#forest_density').show();
                }
            });
        });


        $(document).ready(function () {
            $('#smart_anti_selectbox').change(function () {
                var state = $('#smart_anti_selectbox option:selected').val();
                if (state == 'sm_160526') {

                    var smart_anti_layer1 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2016_05_smartchip_antibiotic_data_table",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326

                    }).addTo(leafletMap3);

                } else if (state == 'sm_160830') {

                    var smart_anti_layer2 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2016_08_smartchip_antibiotic_data_table",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'sm_170216') {

                    var smart_anti_layer3 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2017_02_smartchip_antibiotic_data_table",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'sm_170522') {

                    var smart_anti_layer4 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2017_05_smartchip_antibiotic_data_table",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                }

            });

        });

        $(document).ready(function () {
            $('#smart_anti_selectbox2').change(function () {
                var state = $('#smart_anti_selectbox2 option:selected').val();
                if (state == 'ma_160526') {

                    var smart_anti_layer5 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2016_05_metagenome_antibiotic_data_table",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'ma_160830') {

                    var smart_anti_layer6 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2016_08_metagenome_antibiotic_data_table",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'ma_170216') {

                    var smart_anti_layer7 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2017_02_metagenome_antibiotic_data_table",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'ma_170522') {

                    var smart_anti_layer8 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2017_05_metagenome_antibiotic_data_table",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                }

            });

        });

        $(document).ready(function () {
            $('#smart_anti_selectbox3').change(function () {
                var state = $('#smart_anti_selectbox3 option:selected').val();
                if (state == 'sa_160526') {

                    var smart_anti_layer9 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2016_05_smartchip_arg_table_sum",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'sa_160830') {

                    var smart_anti_layer10 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2016_08_smartchip_arg_table_sum",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                }

            });

        });

        $(document).ready(function () {
            $('#smart_anti_selectbox4').change(function () {
                var state = $('#smart_anti_selectbox4 option:selected').val();
                if (state == 'mar_160526') {

                    var smart_anti_layer11 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2016_05_metagenome_arg_data_table_sum",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'mar_160830') {

                    var smart_anti_layer12 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2016_08_metagenome_arg_data_table_sum",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'mar_170216') {

                    var smart_anti_layer13 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2017_02_metagenome_arg_data_table_sum",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                } else if (state == 'mar_170522') {

                    var smart_anti_layer14 = L.tileLayer.wms('http://163.180.5.115:8080/geoserver/webmap/wms?', {
                        layers: "webmap:point_2017_05_metagenome_arg_data_table_sum",
                        format: 'image/png',
                        transparent: true,
                        version: '1.1.0',
                        tileSize: 256,
                        zIndex: 98,
                        crs: L.CRS.EPSG4326
                    }).addTo(leafletMap3);

                }

            });

        });

        $(document).ready(function () {
            $('#spatial_selectBox').change(function () {
                var state = $('#spatial_selectBox option:selected').val();
                if (state == 'capacity') {
                    $('#analysis1').show();
                    $('.analysis0').hide();
                    $('#analysis2').hide();
                    $('#analysis3').hide();
                    $('#analysis4').hide();
                    $('#analysis5').hide();
                    $('#analysis6').hide();
                    $('#analysis7').hide();

                    $('#capacity').show();
                    $('.map_container5').hide();
                    $('#population').hide();
                    $('#fee').hide();
                    $('#hospital').hide();
                    $('#pharmachy').hide();
                    $('#cost').hide();
                    $('#amount').hide();
                }
            });
        });

        $(document).ready(function () {
            $('#spatial_selectBox2').change(function () {
                var state = $('#spatial_selectBox2 option:selected').val();
                if (state == 'population') {
                    $('#analysis2').show();
                    $('.analysis0').hide();
                    $('#analysis1').hide();
                    $('#analysis3').hide();
                    $('#analysis4').hide();
                    $('#analysis5').hide();
                    $('#analysis6').hide();
                    $('#analysis7').hide();

                    $('#capacity').hide();
                    $('.map_container5').hide();
                    $('#population').show();
                    $('#fee').hide();
                    $('#hospital').hide();
                    $('#pharmachy').hide();
                    $('#cost').hide();
                    $('#amount').hide();

                } else if (state == 'fee') {
                    $('#analysis3').show();
                    $('.analysis0').hide();
                    $('#analysis1').hide();
                    $('#analysis2').hide();
                    $('#analysis4').hide();
                    $('#analysis5').hide();
                    $('#analysis6').hide();
                    $('#analysis7').hide();

                    $('#capacity').hide();
                    $('.map_container5').hide();
                    $('#population').hide();
                    $('#fee').show();
                    $('#hospital').hide();
                    $('#pharmachy').hide();
                    $('#cost').hide();
                    $('#amount').hide();
                }
            });
        });

        $(document).ready(function () {
            $('#spatial_selectBox3').change(function () {
                var state = $('#spatial_selectBox3 option:selected').val();
                if (state == 'hospital') {
                    $('#analysis4').show();
                    $('.analysis0').hide();
                    $('#analysis1').hide();
                    $('#analysis2').hide();
                    $('#analysis3').hide();
                    $('#analysis5').hide();
                    $('#analysis6').hide();
                    $('#analysis7').hide();

                    $('#capacity').hide();
                    $('.map_container5').hide();
                    $('#population').hide();
                    $('#fee').hide();
                    $('#hospital').show();
                    $('#pharmachy').hide();
                    $('#cost').hide();
                    $('#amount').hide();

                } else if (state == 'pharmachy') {
                    $('#analysis5').show();
                    $('.analysis0').hide();
                    $('#analysis1').hide();
                    $('#analysis2').hide();
                    $('#analysis3').hide();
                    $('#analysis4').hide();
                    $('#analysis6').hide();
                    $('#analysis7').hide();

                    $('#capacity').hide();
                    $('.map_container5').hide();
                    $('#population').hide();
                    $('#fee').hide();
                    $('#hospital').hide();
                    $('#pharmachy').show();
                    $('#cost').hide();
                    $('#amount').hide();
                }
            });
        });

        $(document).ready(function () {
            $('#spatial_selectBox4').change(function () {
                var state = $('#spatial_selectBox4 option:selected').val();
                if (state == 'cost') {
                    $('#analysis6').show();
                    $('.analysis0').hide();
                    $('#analysis1').hide();
                    $('#analysis2').hide();
                    $('#analysis3').hide();
                    $('#analysis4').hide();
                    $('#analysis5').hide();
                    $('#analysis7').hide();

                    $('#capacity').hide();
                    $('.map_container5').hide();
                    $('#population').hide();
                    $('#fee').hide();
                    $('#hospital').hide();
                    $('#pharmachy').hide();
                    $('#cost').show();
                    $('#amount').hide();

                } else if (state == 'amount') {
                    $('#analysis7').show();
                    $('.analysis0').hide();
                    $('#analysis1').hide();
                    $('#analysis2').hide();
                    $('#analysis3').hide();
                    $('#analysis4').hide();
                    $('#analysis5').hide();
                    $('#analysis6').hide();

                    $('#capacity').hide();
                    $('.map_container5').hide();
                    $('#population').hide();
                    $('#fee').hide();
                    $('#hospital').hide();
                    $('#pharmachy').hide();
                    $('#cost').hide();
                    $('#amount').show();
                }
            });
        });


        $(document).ready(function () {
            $('#wq_selectbox').change(function () {
                var state = $('#wq_selectbox option:selected').val();
                if (state == 'wq_20160526') {
                    $('#wq_pic1').show();
                    $('#wq_pic2').hide();
                    $('#wq_pic3').hide();
                    $('#wq_pic4').hide();

                } else if (state == 'wq_20160830') {
                    $('#wq_pic1').hide();
                    $('#wq_pic2').show();
                    $('#wq_pic3').hide();
                    $('#wq_pic4').hide();
                } else if (state == 'wq_20170216') {
                    $('#wq_pic1').hide();
                    $('#wq_pic2').hide();
                    $('#wq_pic3').show();
                    $('#wq_pic4').hide();
                } else if (state == 'wq_20170522') {
                    $('#wq_pic1').hide();
                    $('#wq_pic2').hide();
                    $('#wq_pic3').hide();
                    $('#wq_pic4').show();
                }

            });
        });



        $(document).ready(function() {
            $('#ex5').wheelzoom();
            $('#ex6').wheelzoom();
            $('#ex7').wheelzoom();
            $('#ex8').wheelzoom();
            $('#ex9').wheelzoom();
            $('#ex10').wheelzoom();
            $('#ex11').wheelzoom();
            $('#ex12').wheelzoom();
            $('#ex13').wheelzoom();
            $('#ex14').wheelzoom();
            $('#ex15').wheelzoom();
            $('#ex16').wheelzoom();
            $('#ex17').wheelzoom();
            $('#ex18').wheelzoom();
            $('#ex19').wheelzoom();
            $('#ex20').wheelzoom();
            $('#ex21').wheelzoom();
            $('#ex22').wheelzoom();
            $('#ex23').wheelzoom();
            $('#ex24').wheelzoom();
        });



