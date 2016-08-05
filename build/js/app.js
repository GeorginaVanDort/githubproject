(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1c4c6a84d54a78ada96a83bcba3605ad5a312785";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function userProfile (username) {
  this.username = username;
}

userProfile.prototype.GitSearch = function () {
  $.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + apiKey).then(function(response){
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        $("#userResults").append("<li> Repo Name: " + response[i].name + "<br>    Description: " + response[i].description + "</li>");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

exports.gitSearchModule = userProfile;

},{"./../.env":1}],3:[function(require,module,exports){
var userProfile = require('./../js/git.js').gitSearchModule;

$(document).ready(function(){

  $("#makeSearch").click(function() {
    var username = $("#username").val();
    var profile = new userProfile(username);
    profile.GitSearch();

  });
});

},{"./../js/git.js":2}]},{},[3]);
