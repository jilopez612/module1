function sign_in(){
  var user = document.getElementById('user').value;
  var pass = document.getElementById('pass').value;
  var proceed1 = false;
  var proceed2 = false;


  var regex = /^[a-zA-Z0-9_.-]+$/;
  if(regex.test(user) === true){
    proceed1 = true;
    div = document.getElementById('userErr');
    div.textContent = "";
    var elem = document.getElementById("user");
    elem.classList.add("input-1");
    elem.classList.remove("input-2");
  }
  else{
    div = document.getElementById('userErr');
    div.textContent = "Please enter a username!";
    var elem = document.getElementById("user");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  }

  if(regex.test(pass) === true){
    proceed2 = true;
    div = document.getElementById('passErr');
    div.textContent = "";
    var elem = document.getElementById("pass");
    elem.classList.add("input-1");
    elem.classList.remove("input-2");
  }
  else{
    div = document.getElementById('passErr');
    div.textContent = "Please enter a password!";
    var elem = document.getElementById("pass");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  }

  if(proceed1==true && proceed2==true){
    if(user == 'admin' && pass == 'admin'){
      window.location = "about-a.html";
    }
    else if(user == 'student1' && pass == '1234'){
      window.location = "about-s.html";
    }
    else if(user == 'teacher1' && pass == '1234'){
      window.location = "about-t.html";
    }
    else{
      alert("The Username and the Password does not match try again!");
      div = document.getElementById('passErr');
      div.textContent = "Please enter again!";
      var elem = document.getElementById("pass");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");


      div = document.getElementById('userErr');
      div.textContent = "Please enter again!";
      var elem = document.getElementById("user");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    }
  }
  else{
    return false;
  }
}

function reset(){
  location.reload();
}
