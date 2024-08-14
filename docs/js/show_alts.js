

setInterval(() => {
    let elems = document.getElementsByTagName("fieldset");
    let alts = document.getElementsByClassName("alt");
    
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].matches(":hover")){
            //display the elemnt
            alts[i].style.visibility = "visible";
            alts[i].style.fontSite = "2vw"

        } else {
            //hide the element
            alts[i].style.visibility = "hidden";
            alts[i].style.fontSite = "0vw"
        }
    }
}, 10);