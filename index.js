function continueButtFunc(){
    passwordText = document.getElementById("password").value;
    if (passwordText == "D0saEAt!ng!nd1vidual$"){
        window.location.href="home.html"
    }
    else{
        document.getElementById("tagline").innerHTML = "Incorrect passcode";
        document.getElementById("tagline").style.color = "red";
    }
}