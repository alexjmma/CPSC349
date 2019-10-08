// browser-sync start --server --browser "chrome.exe"  --files ".html, stylesheets/.css, scripts/*.js"
// D:\Github\CPSC349\Classwork_Week_6

(function(window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    this.data = {};
  }

  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };
  DataStore.prototype.getAll = function() {
    return this.data;
  };
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
