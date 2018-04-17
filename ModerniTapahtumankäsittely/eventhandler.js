 var EventUtil = new Object;
                EventUtil.addEventHandler = function (oTarget, sEventType, fnHandler) {
                    if (oTarget.addEventListener) {
                        oTarget.addEventListener(sEventType, fnHandler, false);
                    } else if (oTarget.attachEvent) {
                        oTarget.attachEvent("on" + sEventType, fnHandler);
                    } else {
                        oTarget["on" + sEventType] = fnHandler;
                    }
                };
				
// tähän alas omat jutut

//terve funktio, mikä tulostaa alertin
function terve() {
    alert("Tämä käynnistyi modernisti");
}
//tapahtuman kuuntelu
window.onload = function () {
    var oDiv = document.getElementById("xxx");
    EventUtil.addEventHandler(oDiv, "click", terve);
    EventUtil.addEventHandler(oDiv, "click", title);
}
//lisätään toinen funktio
function title() {
    alert(document.title);
}