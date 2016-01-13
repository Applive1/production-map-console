// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-08-27 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/codemirror/lib/codemirror.js',
      'bower_components/angular-ui-codemirror/ui-codemirror.js',
      'bower_components/angular-ui-tree/dist/angular-ui-tree.js',
      'bower_components/x2js/xml2json.min.js',
      'bower_components/angular-x2js/dist/x2js.min.js',
      'bower_components/angular-xeditable/dist/js/xeditable.js',
      'bower_components/d3/d3.js',
      'bower_components/nvd3/nv.d3.js',
      'bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/lodash/dist/lodash.compat.js',
      'bower_components/underscore/underscore.js',
      'bower_components/backbone/backbone.js',
      'bower_components/graphlib/dist/graphlib.core.js',
      'bower_components/graphlib/dist/graphlib.core.min.js',
      'bower_components/dagre/dist/dagre.core.js',
      'bower_components/dagre/dist/dagre.core.min.js',
      'bower_components/jointjs/dist/joint.js',
      'bower_components/jstree/dist/jstree.js',
      'bower_components/webcomponentsjs/webcomponents.js',
      'bower_components/ngDraggable/ngDraggable.js',
      'bower_components/ng-codemirror-dictionary-hint/lib/ng-codemirror-dictionary-hint.js',
      'bower_components/fast-json-patch/src/json-patch-duplex.js',
      'bower_components/angular-local-storage/dist/angular-local-storage.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'bower_components/angular-file-upload/dist/angular-file-upload.min.js',
      'bower_components/jszip/dist/jszip.js',
      'bower_components/async/lib/async.js',
      'bower_components/moment/moment.js',
      'bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.js',
      'bower_components/angular-cron-jobs/dist/angular-cron-jobs.min.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
