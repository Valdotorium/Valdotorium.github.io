
var elem = document.getElementById("NAME");  
var projectsIcon = document.getElementById("projectsIcon")
var gitIcon = document.getElementById("gitIcon")
var repoIcon = document.getElementById("repoIcon")
var frm = 0;
var goalLen = 10
var id = setInterval(frame, 5);

function frame() {
  if (frm == 2147483647) {
    clearInterval(id);
  } else {
    if (frm < 201){
        frm++
        //make one character of the string "Valdotorium" appear every 40 frames
        elem.innerHTML = "Valdotorium".slice(0, Math.ceil(frm/20));  // only show first goalLen characters, then repeat the string
        //put a random ASCII character at the end
        if (frm < 200){
            var randomAscii = String.fromCharCode(Math.floor(Math.random() * 256));
            elem.innerHTML += randomAscii;
        }
    
    } else {
        frm++
        elem.innerHTML = "Valdotorium"
        //add the icons to the header
        if (frm > 200+Math.floor(Math.random() * 22)){
            projectsIcon.src = "svg/games.svg"
        }
        if (frm > 200+Math.floor(Math.random() * 80)){
            repoIcon.src = "svg/repository.svg"
        } 
        if (frm > 200+Math.floor(Math.random() * 38)){
            gitIcon.src = "img/github-mark.png"
        }

    }

  }
}

