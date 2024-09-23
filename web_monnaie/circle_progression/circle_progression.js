let circle = document.querySelector('.circle');
let valeur = document.querySelector('.valeurIncircle');

//entrer
let compte = 70;
//compteur
let conteur = 0;




//progression de la barre
let progression = setInterval(() => {
    conteur++;

    //affichage de valeur
    valeur.textContent = `${conteur}`;
     
    //affichage du gradient
    circle.style.background = background = `conic-gradient(#59cca6dc ${
        conteur * 3.6}deg, #89349E 0deg)`;
        //condition de sortie
    if (conteur == compte){
        clearInterval(progression);
    }
    
});




