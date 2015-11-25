'use strict';

/**
 * @ngdoc service
 * @name productionMapConsoleApp.extractAndParse
 * @description
 * # extractAndParse
 * Factory in the productionMapConsoleApp.
 */
angular.module('productionMapConsoleApp')
.factory("extractAndParse", ["$q", function ($q) {
  function unzip (zipfile) {
    var dfd = $q.defer();
    var reader = new FileReader();
    
    reader.onerror = dfd.reject.bind(dfd);
    reader.onload = function (e) {
      if (!reader.result) dfd.reject(new Error("Unknown error"));
      
      var zip = new JSZip(reader.result);
      var file = zip.files['config.json'];
      
      if(typeof file === 'undefined') {
        return dfd.reject(new Error('config.json does not exist'));
      }

      return dfd.resolve(file.asText());
    };
    
    reader.readAsArrayBuffer(zipfile);
    
    return dfd.promise;
  }
  
  function extractAndParse (zipfile) {
    return unzip(zipfile)
      .then(JSON.parse);
  }

  return extractAndParse;
}]);