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
