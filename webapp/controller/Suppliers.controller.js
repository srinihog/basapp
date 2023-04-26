sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.businesspartners.controller.Suppliers", {
            onInit: function () {

            },
            onButtonPress: function(){
                var arr1 = [true, true];
                var arr2 = [1, 2];
                var arr3 = ['a', 'b'];
                this.callBackFunction({a:1,b:2,c:3},'b')
            },
            callBackFunction: function(a,b){

            },
            onAlertPress: function(){
                alert("Good, Keep on reading. You are doing great!!");
            }
        });
    });
