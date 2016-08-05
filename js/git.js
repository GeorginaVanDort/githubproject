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
        $("#userResults").append("<br><li><h4>Repo Name: </h4>" + response[i].name + "<br><h4>Description: </h4>" + response[i].description + "</li>");
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

exports.gitSearchModule = userProfile;
