'use strict';

angular.module('productionMapConsoleApp').constant("consts", {
    serverUrl: "http://localhost:1337/",
    MapRunStatuses : {
        Running : 1,
        Done:2,
        Failed:3,
        Paused:4,
        Stopped : 5,
        NeverRun : 6
    }
});