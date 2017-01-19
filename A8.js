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

function login(username,password) {
    var username = document.getElementById("usernameDiv").value;
    var password = document.getElementById("passwordDiv").value;
	var params = "Name="+ username + "&Password=" + password;
	var ajax = new XMLHttpRequest();
	ajax.responseType = "json";
	ajax.addEventListener("load", function() { 
		 console.log("server response =", this.response[0]);
         window.alert("Login Successful")
    } );
	ajax.open('POST', '//cse.taylor.edu/~cos143/sessions.php');
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(params);
}

function showLogin(){
    document.getElementById("loginDiv").style.display = "block";
    document.getElementById("loginButtonDiv").style.display = "block";
    document.getElementById("welcomeOptionsDiv").style.display = "none";
}
function showRegister(){
    document.getElementById("loginDiv").style.display = "block";
    document.getElementById("registerButtonDiv").style.display = "block";
    document.getElementById("welcomeOptionsDiv").style.display = "none";
}
function validate(field) {
	console.log("validate(): field.value = " + field.value);
	var valid = /^[a-zA-Z0-9]+$/.test(field.value);
	if( valid ) {
		field.style.borderColor = "lightgreen";
	} else {
		field.style.borderColor = "#ff4c4c";
	}
}
