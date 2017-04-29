function UserService($http) {
  this.getUser = function() {
    return $http.get('http://0.0.0.0:8882/rest/user')
  }

  this.updateUser = function(emailAddress){
   return $http.post('http://0.0.0.0:8882/rest/user', {email: emailAddress})
  }
}

angular
	.module('app')
	.service('UserService', UserService);