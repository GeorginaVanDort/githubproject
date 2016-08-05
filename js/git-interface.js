var userProfile = require('./../js/git.js').gitSearchModule;

$(document).ready(function(){

  $("#makeSearch").click(function() {
    var username = $("#username").val();
    var profile = new userProfile(username);
    profile.GitSearch();

  });
});
