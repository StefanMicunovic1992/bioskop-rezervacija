let seats = document.querySelectorAll(".row  .seat:not(.occupied)");
let movieSelect = document.getElementById("movie");
let container = document.querySelector(".container");
let brojacSedista = document.querySelector('#count');



window.addEventListener('load', proveraLocalStoriga);



movieSelect.addEventListener('change', proveraLocalStoriga);


function proveraLocalStoriga() {
    

        let slektovanaSedista = document.querySelectorAll(".row .seat.selected");
        slektovanaSedista.forEach(elem => {
            if (elem.classList.contains('selected')){
                elem.classList.remove('selected');
            }
        });
    
        let occupied = document.querySelectorAll(".row .seat.occupied");
    
        occupied.forEach(elem => {
            if (elem.classList.contains('occupied')){
                elem.classList.remove('occupied');
            }
        });




    let trenutniFilm = movieSelect.value;
    let selektSedisteLocalStorage = JSON.parse(localStorage.getItem(`${trenutniFilm}`));
    console.log(selektSedisteLocalStorage.length);

    if(selektSedisteLocalStorage !== null){
        selektSedisteLocalStorage.forEach(elem=>{
            seats[elem].classList.add('selected');
        });
    };

    let rezervisanaSedista = JSON.parse(localStorage.getItem(`${trenutniFilm}rezervisano`));
    if(rezervisanaSedista !== null){
        rezervisanaSedista.forEach(elem=>{

            seats[elem].classList.add('occupied');
        })
    }

    
};


seats.forEach(elem =>{

    elem.addEventListener('click', obelezavanjeSedista);
});

function obelezavanjeSedista() {

    
    
    if(this.classList.contains('selected')){
        this.classList.remove("selected");
    }else{

        this.classList.add("selected");
    }

    let slektovanaSedista = document.querySelectorAll(".row .seat.selected");
        let seatsIndex = [...slektovanaSedista].map(seat => [...seats].indexOf(seat));
        console.log(seatsIndex);

        let trenutniFilm = movieSelect.value;
        console.log(trenutniFilm);
        console.log(trenutniFilm);

        localStorage.setItem(`${trenutniFilm}`, JSON.stringify(seatsIndex));
        
};


let dugmeKrajRezervacije = document.querySelector('#rezervacija');


dugmeKrajRezervacije.addEventListener('click', krajRezervacije);


function krajRezervacije(){

    
    let slektovanaSedista = document.querySelectorAll(".row .seat.selected");
    let seatsIndex = [...slektovanaSedista].map(seat => [...seats].indexOf(seat));
    
        let sediste = document.querySelectorAll('.row .seat.selected');
        let trenutniFilm = movieSelect.value;
        
        sediste.forEach(elem=>{
            elem.classList.remove('selected');
            elem.classList.add('occupied');
        })
        
        
        localStorage.setItem(`${trenutniFilm}rezervisano`, JSON.stringify(seatsIndex));
};


