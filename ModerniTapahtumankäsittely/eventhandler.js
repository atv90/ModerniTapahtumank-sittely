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