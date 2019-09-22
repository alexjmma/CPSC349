// browser-sync start --server --browser "chrome.exe"  --files ".html, stylesheets/.css, scripts/*.js"
// D:\Github\CPSC349\Classwork_Week_4
(function(window) {
  'use strict'

  //no code here
  var App = window.App || {};

  function DataStore() {
    console.log('running the DataStore function');
  }

  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  }

  DataStore.prototype.get = function(key, val) {
    return this.data[key];
  }

  DataStore.prototype.getAll = function(key, val) {
    return this.data;
  }

  DataStore.prototype.remove = function(key, val) {
    delete this.data[key];
  }


  App.DataStore = DataStore;
  window.App = App;
})(window);
