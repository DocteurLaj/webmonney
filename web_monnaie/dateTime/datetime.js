function afficheHuere(){
    let time = new Date();


    let hours = time.getHours();
    let minutes  = time.getMinutes();
    let secondes = time.getSeconds();

    let hoursFormat = hours < 10 ? "0" + hours : hours;
    let minutesFromat = minutes < 10 ? "0" + minutes : minutes;
    let secondesFormat = secondes < 10 ? "0" + secondes : secondes;

    let heures = `${hoursFormat}:${minutesFromat}:${secondesFormat}`;


    document.querySelector('#heure').textContent = heures;


}

setInterval(afficheHuere, 1000);
afficheHuere();