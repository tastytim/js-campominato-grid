
// Seleziono valore della option
const option = document.getElementById("selectoption");
// Seleziono valore del pulsante play
const play = document.getElementById("start");
// Seleziono il contenitore camp
const camp = document.getElementById("camp");

// Aggiungo evento click al pulsante play
play.addEventListener("click" , function(){
    // dichiaro valore dealla option value
    const optionvalue = option.value;
    // con la function trovo il totale di celle
    const totalSquads = squadgenerator(optionvalue);
    console.log(totalSquads);
    // genero con la function il campo
    generateSquads(totalSquads);
});



// Seleziono valore della option
function squadgenerator(optionvalue){
    if(optionvalue==1){
        return 49;
    }else if(optionvalue==2){
        return 81;
    }else{
        return 100;
    }

}


function generateSquads(total){
    // resetto il campo
    camp.innerHTML = "";

    // Calcolo quante celle per riga
    const totalcellsrow = Math.sqrt(total);
    console.log(totalcellsrow);
    // Inserisco le celle nel campo cambiando le misure(style)
    for(let i = 1; i <= total; i++){
       let squad =  document.createElement("div");
       squad.classList.add("square");
       squad.style.width = totalcellsrow + "%";
       squad.style.height = totalcellsrow + "%";
       squad.innerText = i;
    //    Aggiungo functio che cambia colore quando clicco
       squad.addEventListener("click", changecoloronclick);
       camp.append(squad);

    }

}

function changecoloronclick(){
    this.classList.toggle("clicked");
}