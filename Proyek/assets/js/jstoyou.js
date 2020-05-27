function welcome()
{
alert("Selamat datang di Website To You Cake!");
}

welcome();


function salam() {
	var nama = prompt("Boleh tahu nama kamu?", "");
	var bahasa = prompt("Kamu berbahasa Inggris, Perancis, atau Indonesia?","");
    if(bahasa === "Inggris") {
        alert("Welcome " + nama + "!" + " " + "Hope You Like This Website!");
    } else if (bahasa === "Perancis") {
        alert("Bonjour " + nama + "!" + " " + "J'espère que vous aimez ce site!");
    } else {
        alert("Selamat Pagi " + nama + "!" + " " + "Semoga kamu suka website ini!");
    }
}
 
salam();



