const menuButton = document.getElementsByClassName('menuButton')[0];
const navLinks = document.getElementsByClassName('navLinks')[0];

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    console.log("Menu button clicked!")
})

function myFunction(){
    var copyText = document.getElementById('link');
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);

    var toolTip = document.getElementById('mytoolTip');
    toolTip.innerHTML = "Copied";
}

function outFunc(){
    var toolTip = document.getElementById('mytoolTip');
    toolTip.innerHTML = "Copy link to clipboard";
}

