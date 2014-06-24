
(function () {
    "use strict";

    var module = angular.module('app.services.MessageLog',[]);

    module.factory('MessageLog',[,function() {

        function MessageLog() {
            this.messages = [];

        }
        MessageLog.prototype.add = function(text) {
            var self = this,
                msg = new LogMessage(text);
            this.messages.push(msg);
            return msg;
        };
        return new MessageLog();

    }]);

})();

