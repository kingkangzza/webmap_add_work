$('document').ready(function () {
    $("input#btn_submit").click(function () {
        var a = $('#iframea').contents().find('#dc');
        a.click();
    });
    // 시/도 선택 박스 초기화
    $("select#wr_10").each(function () {
        $selsido = $(this);
        $.each(eval(area0), function () {
            $selsido.append("<option value='" + this + "'>" + this + "</option>");
        });
        $selsido.next().append("<option value=''>구/군 선택</option>");
    });
    // 시/도 선택시 구/군 설정
    $("select#wr_10").change(function () {
        var area = "area" + $("option", $(this)).index($("option:selected", $(this))); // 선택지역의 구군 Array
        var $gugun = $(this).next(); // 선택영역 군구 객체
        $("option", $gugun).remove(); // 구군 초기화
        if (area == "area0") $gugun.append("<option value=''>구/군 선택</option>");
        else {
            $.each(eval(area), function () {
                $gugun.append("<option value='" + this + "'>" + this + "</option>");
            });
        }
    });
});
data_1_1 = new Option("Actinobacteria_c");
data_1_1_1 = new Option("Corynebacteriales");
data_1_1_1_1 = new Option("Corynebacteriaceae");
data_1_1_1_1_1 = new Option("Corynebacterium");
data_1_1_1_1_1_1 = new Option("Amoxicillin");
data_1_1_1_1_1_2 = new Option("Cephalexin");
data_1_1_1_1_1_3 = new Option("Chloramphenicol");
data_1_1_1_1_1_4 = new Option("Ciprofloxacin");
data_1_1_1_1_1_5 = new Option("Clindamycin");
data_1_1_1_1_1_6 = new Option("Colistin");
data_1_1_1_1_1_7 = new Option("Erythromycin");
data_1_1_1_1_1_8 = new Option("Fosfomycin");
data_1_1_1_1_1_9 = new Option("Gentamicin");
data_1_1_1_1_1_10 = new Option("Linezolid");
data_1_1_1_1_1_11 = new Option("Meropenem");
data_1_1_1_1_1_12 = new Option("Rifampicin");
data_1_1_1_1_1_13 = new Option("Streptomycin");
data_1_1_1_1_1_14 = new Option("Sulfamethoxazole");
data_1_1_1_1_1_15 = new Option("Tetracycline");
data_1_1_1_1_1_16 = new Option("Trimethoprim");
data_1_1_1_1_1_17 = new Option("Tylosin");
data_1_1_1_1_1_18 = new Option("Vancomycin");















// fourth combo box
// other parameters
displaywhenempty = "-선택없음-"
valuewhenempty = ""
displaywhennotempty = "- 항목선택↓  -"
valuewhennotempty = ""

function change(currentbox) {
    numb = currentbox.id.split("_");
    currentbox = numb[1];
    i = parseInt(currentbox) + 1
    // I empty all combo boxes following the current one
    while ((eval("typeof(document.getElementById(\"combo_" + i + "\"))!='undefined'")) && (document.getElementById("combo_" + i) != null)) {
        son = document.getElementById("combo_" + i);
        // I empty all options except the first one (it isn't allowed)
        for (m = son.options.length - 1; m > 0; m--) son.options[m] = null;
        // I reset the first option
        son.options[0] = new Option(displaywhenempty, valuewhenempty)
        i = i + 1
    }
    // now I create the string with the "base" name ("stringa"), ie. "data_1_0"
    // to which I'll add _0,_1,_2,_3 etc to obtain the name of the combo box to fill
    stringa = 'data'
    i = 0
    while ((eval("typeof(document.getElementById(\"combo_" + i + "\"))!='undefined'")) && (document.getElementById("combo_" + i) != null)) {
        eval("stringa=stringa+'_'+document.getElementById(\"combo_" + i + "\").selectedIndex")
        if (i == currentbox) break;
        i = i + 1
    }
    // filling the "son" combo (if exists)
    following = parseInt(currentbox) + 1
    if ((eval("typeof(document.getElementById(\"combo_" + following + "\"))!='undefined'")) && (document.getElementById("combo_" + following) != null)) {
        son = document.getElementById("combo_" + following);
        stringa = stringa + "_"
        i = 0
        while ((eval("typeof(" + stringa + i + ")!='undefined'")) || (i == 0)) {
            // if there are no options, I empty the first option of the "son" combo
            // otherwise I put "-select-" in it
            if ((i == 0) && eval("typeof(" + stringa + "0)=='undefined'"))
                if (eval("typeof(" + stringa + "1)=='undefined'")) eval("son.options[0]=new Option(displaywhenempty,valuewhenempty)")
            else eval("son.options[0]=new Option(displaywhennotempty,valuewhennotempty)")
            else eval("son.options[" + i + "]=new Option(" + stringa + i + ".text," + stringa + i + ".value)")
            i = i + 1
        }
        //son.focus()
        i = 1
        combostatus = ''
        cstatus = stringa.split("_")
        while (cstatus[i] != null) {
            combostatus = combostatus + cstatus[i]
            i = i + 1
        }
        return combostatus;
    }
}
//-->
