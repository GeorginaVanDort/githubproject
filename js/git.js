var apiKey = require('./../.env').apiKey;

function userProfile (username) {
  this.username = username;
}

userProfile.prototype.GitSearch = function () {
  var usernameResult = this.username;
  $.get('https://api.github.com/users/' + this.username + '/repos?access_token=' + apiKey).then(function(response){
      console.log(response);
      $("#userResults").text("");
      $("#usernameResult").html("<h3>" + usernameResult + "</h3>");
      for (var i = 0; i < response.length; i++) {
        $("#userResults").append("<tr><th scope='row'></th><td>" + response[i].name + "</td><td>" + response[i].description + "</td></tr>");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

exports.gitSearchModule = userProfile;
