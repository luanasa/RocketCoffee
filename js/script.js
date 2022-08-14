function openMenu(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
        closeMenu();
}

function closeMenu() {
   
    var display = document.getElementById('menu').style.display;

    if(display == "block")
    document.getElementById('open').src ='./assets/close.svg';
    else
    document.getElementById('open').src ='./assets/Menu Hambúrguer.svg';
}

/* menuDiv = document.getElementById('menu').style.display;
while (menuDiv.style.display === "block") {
    div1 = document.getElementById('header').style.display;
    div1.style.display = "none";
}
*/