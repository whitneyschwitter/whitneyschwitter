//get user selected text
const getUserSelectedText = () => {
    return window.getSelection().toString();
}

//detect if user is in dark mode
const isDarkMode = window.matchMedia('(preferes-color-scheme: dark').matches; 

//take user back to the top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

