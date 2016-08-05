var apiKey = require('./../.env').apiKey;

function userProfile (username) {
  this.username = username;
}
console.log("HI22");
userProfile.prototype.GitSearch = function () {
  $.get('https://api.github.com/users/' + this.username + '?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };


exports.gitSearchModule = userProfile;
