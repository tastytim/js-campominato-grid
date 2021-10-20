// Seleziono valore della option
const option = document.getElementById("selectoption");
// Seleziono valore del pulsante play
const play = document.getElementById("start");
// Seleziono il contenitore camp
const camp = document.getElementById("camp");
// Seleziono punteggio
const points = document.getElementById("points");

let arrayBombs = [];
let totalecelle;
let punteggi = 0;

// Aggiungo evento click al pulsante play
play.addEventListener("click", function () {
  // dichiaro valore dealla option value
  const optionvalue = option.value;
  // con la function trovo il totale di celle
  const totalSquads = squadgenerator(optionvalue);
  console.log("totale di celle = " + totalSquads);
  // Il computer deve generare 16 numeri casuali (le bombe) tenendo conto della difficoltà scelta.
  arrayBombs = generateArray(totalSquads);
  // genero con la function il campo
  generateSquads(totalSquads);
});

// Seleziono valore della option
function squadgenerator(optionvalue) {
  if (optionvalue == 1) {
    totalecelle = 49;
    return 49;
  } else if (optionvalue == 2) {
    totalecelle = 81;
    return 81;
  } else {
    totalecelle = 100;
    return 100;
  }
}

function generateSquads(total) {
  // resetto il campo
  camp.innerHTML = "";

  // Calcolo quante celle per riga
  const totalcellsrow = Math.sqrt(total);
  const percent = 100 / totalcellsrow;
  console.log("totale di celle per riga = " + totalcellsrow);

  // Inserisco le celle nel campo cambiando le misure(style)
  for (let i = 1; i <= total; i++) {
    let squad = document.createElement("div");
    squad.classList.add("square");
    squad.style.width = percent + "%";
    console.log("width = " + percent + "%");
    squad.style.height = percent + "%";
    console.log("height = " + percent + "%");
    squad.innerText = i;
    //    Aggiungo function che cambia colore quando clicco
    squad.addEventListener("click", changecoloronclick);
    camp.append(squad);
  }
}

function changecoloronclick() {
  // se il numero è presente nella lista dei numeri generati
  console.log("array" + arrayBombs);
  if (arrayBombs.includes(parseInt(this.innerHTML))) {
    console.log("Cliccato bomba = " + parseInt(this.innerHTML));
    // - abbiamo calpestato una bomba
    this.classList.add("clickedbomb");
    alert("Hai perso");
    alert("Il tuo punteggio : " + parseInt(punteggi));
    punteggi = 0;
    camp.innerText = "";
    points.innerText = 0;
  } else {
    // altrimenti la cella cliccata si colora di azzurro
    this.classList.add("clicked");
    punteggi++;
    points.innerText = punteggi;
    console.log("Cliccato cella = " + parseInt(this.innerHTML));
    if (punteggi === totalecelle - 16) {
      alert("Hai vinto");
      alert(
        "Hai raggiunto puntegggio massimo : " + (parseInt(totalecelle) - 16)
      );
    }
  }
}
