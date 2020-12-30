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
                $(".tap2 nav:nth-child(5)").css("position", "absolute");
                $(".tap2 nav:nth-child(5)").css("opacity", "0");
                $(".tap2 nav:nth-child(5)").css("top", "-500px");
            });

            $(".back1").click(function () {
                $(".tap2 nav:nth-child(5)").css("position", "relative");
                $(".tap2 nav:nth-child(5)").css("opacity", "1");
                $(".antib").removeClass('on');
                $(".tap2 nav:nth-child(5)").css("top", "0");
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
                }
            });
        });

        $(document).ready(function () {
            $('#selectBox2').change(function () {
                var state = $('#selectBox2 option:selected').val();
                if (state == 'landuse') {
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
                }
            });
        });

        $(document).ready(function () {
            $('#selectBox3').change(function () {
                var state = $('#selectBox3 option:selected').val();
                if (state == 'rain') {
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
                }
                else if (state == 'forest_density') {
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
                }
            });
        });
