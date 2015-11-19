// ==UserScript==
// @name         GPSortEnabler
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Enable to sort by Term, ClassNumber, ClassName and other elemetns on your Attendance Record page.
// @author       tacostea
// @match        https://www25.tsc.u-tokai.ac.jp/gpa/do/GP/GP*
// @grant        GM_setValue
// ==/UserScript==

document.getElementsByTagName("table")[2].innerHTML='<table border="0" cellpadding="6" cellspacing="0" id="list" width="98%">'+
"<tbody><tr>"+
        '<th width="12%" li style="cursor:pointer" onclick="vfcSingleSortSubmit(\'NendoGakkiOrder\')">年度・学期</th>'+
        '<th width="12%" li style="cursor:pointer" onclick="vfcSingleSortSubmit(\'KoushaToNoOrder\')">校舎・登録番号</th>'+
        '<th width="*"   li style="cursor:pointer" onclick="vfcSingleSortSubmit(\'KamokuNoOrder\')">科目名</th>'+
        '<th width="13%" li style="cursor:pointer" onclick="vfcSingleSortSubmit(\'YoubiJigenOrder\')">曜日・時限</th>'+
        '<th width="13%" li style="cursor:pointer" onclick="vfcSingleSortSubmit(\'JyugyoJigenOrder\')">授業日・時限</th>'+
        '<th width="10%"  li style="cursor:pointer" onclick="vfcSingleSortSubmit(\'SyussekiOrder\')">出欠</th>'+
"</tr></table>";
