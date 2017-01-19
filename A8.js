function createAccount(){
  var loginInfo = "Name=" + createUser.value +
	             "&Password=" + createPassword.value;
  var ajax = new XMLHttpRequest();
	ajax.responseType = "json";
	ajax.addEventListener("load", function() {
		 console.log("server response =", this.response[0]);
    } );
	ajax.open('POST', '//cse.taylor.edu/~cos143/users.php');
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(loginInfo);
}

function login(username, password) {
	var params = "Name="+ username + "&Password=" + password;
	var ajax = new XMLHttpRequest();
	ajax.responseType = "json";
	ajax.addEventListener("load", function() { 
		 console.log("server response =", this.response[0]);
    } );
	ajax.open('POST', '//cse.taylor.edu/~cos143/sessions.php');
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(params);
}
