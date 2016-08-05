var apiKey = require('./../.env').apiKey;

function userProfile (username) {
  this.username = username;
}

userProfile.prototype.GitSearch = function () {
  $.get('https://api.github.com/users/' + this.username + '/repos?page=2&per_page=200/?access_token=' + apiKey).then(function(response){
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        $("#userResults").append("<li>" + response[i].name + "</li>");
      }




    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

exports.gitSearchModule = userProfile;
