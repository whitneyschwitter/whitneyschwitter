//get user selected text
const getUserSelectedText = () => {
    return window.getSelection().toString();
}

//detect if user is in dark mode
const isDarkMode = window.matchMedia('(preferes-color-scheme: dark').matches; 

//take user back to the top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}