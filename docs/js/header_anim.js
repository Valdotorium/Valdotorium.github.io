
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
    if (frm < 401){
        frm++
        //make one character of the string "Valdotorium" appear every 40 frames
        elem.innerHTML = "Valdotorium".slice(0, Math.ceil(frm/40));  // only show first goalLen characters, then repeat the string
        //put a random ASCII character at the end
        if (frm < 400){
            var randomAscii = String.fromCharCode(Math.floor(Math.random() * 256));
            elem.innerHTML += randomAscii;
        }
    
    } else {
        frm++
        elem.innerHTML = "Valdotorium"
        //add the icons to the header
        if (frm > 620){
            projectsIcon.src = "svg/apple-shortcuts.svg"
        }
        if (frm > 600){
            repoIcon.src = "svg/repository.svg"
        } 
        if (frm > 680){
            gitIcon.src = "img/github-mark.png"
        }

    }

  }
}

