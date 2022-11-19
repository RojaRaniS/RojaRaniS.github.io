var data = [
    {
        username:"rojarani",
        password:"roja2001"    
    },
    {
        username:"monika",
        password:"moni2001"
    },
    {
        username:"pavithra",
        password:"pavi2001"
    },
    {
        username:"keerthana",
        password:"keerth2001"
    },
	{
        username:"vikki",
        password:"vikki1998"
    }
]
function login(){
    var uname = document.getElementById("username").value
    var pass = document.getElementById("password").value

    for (i = 0; i<data.length; i++){
        if (uname == data[i].username && pass == data[i].password){
            window.location.replace("home.html")
            return false
        }
    }
    alert("Incorrect password")
}
function register(){
    var runame = document.getElementById("username").value
    var rpass = document.getElementById("password").value
    var rpass1 = document.getElementById("password1").value

    if(runame == "")
    {
        alert("Enter value in name field");
        return;
    }
    if(rpass == "")
    {
        alert("Enter value in password field");
        return;
    }
    if(rpass1 == "")
    {
        alert("Enter value in confirm password field");
        return;
    }
    if (rpass == rpass1){
        var rdata = {
            username: runame,
            password: rpass
        }
    }else{
        alert("Password doesn't match")
        return
    }
    
    for (i = 0; i<data.length; i++){
        if (runame == data[i].username){
            alert("Username not available")
            return false
        }
    }
    data.push(rdata)
    alert("User created")
    window.location.replace("home.html")
}