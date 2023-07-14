//parameter = färg som trycks på (se html sida i nav med buttons)
//använder onclick vid call för att skicka med parameter med viss färg till darkmode
//Onclick används för simpel visning till vilken färg som hänvisar till vilken, 
// Kan också göras som eventlystnare men går smidigt på såhär vis
//  i syfte att ändra färg beroende på vilken färg man trycker på
//------------------------------------------------------------------------------------------
function darkmode (bg_color) {
    // Get the root element
    var r = document.querySelector(':root');
    r.style.setProperty('--background', bg_color);

    //if bg is dark, fix text
    if (bg_color === '#36454F') {   
        r.style.setProperty('--h1', 'rgb(255, 255, 38)');
    }// else fix back text to normal
    else {
        r.style.setProperty('--color-temp', 'rgb(46, 61, 99)');
        r.style.setProperty('--h1', 'rgb(46, 61, 99)');
    }
}