// This part of code is for gallery buttons
let scrollContainer = document.querySelector(".gallery");
let backButton = document.getElementById("back-button");
let nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 1200;

    if (scrollContainer.scrollLeft % 1200 != 0) {
        var pageNumber = Math.round(scrollContainer.scrollLeft / 1200);
        var scrollCorrection = scrollContainer.scrollLeft - pageNumber * 1200;
        scrollContainer.scrollLeft -= scrollCorrection;
    }

    if (scrollContainer.scrollLeft < 0){
        logos = logos_buy_sell;
        logos_id = "buy-sell";
    }

    if (scrollContainer.scrollLeft == 0){
        logos = logos_evaluation;
        logos_id = "evaluation";
    }

    if (scrollContainer.scrollLeft == 1200){
        logos = logos_due;
        logos_id = "due";
    }

    if (scrollContainer.scrollLeft == 2400){
        logos = logos_money;
        logos_id = "money";
    }

    if (scrollContainer.scrollLeft == 3600){
        logos = logos_partner;
        logos_id = "partner";
    }

    startIndex = 0; 
    logoGrid = document.getElementById(logos_id);
    buttons.forEach(function(button){
        let message = `${1} / ${Math.ceil(logos.length / 6)}`;
        button.textContent = message;
    });
    displayLogos();
    console.log(scrollContainer.scrollLeft)
})

backButton.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 1200;
    scrollContainer.style.scrollBehavior = "smooth";

    if (scrollContainer.scrollLeft % 1200 != 0) {
        var pageNumber = Math.round(scrollContainer.scrollLeft / 1200);
        var scrollCorrection = scrollContainer.scrollLeft - pageNumber * 1200;
        scrollContainer.scrollLeft -= scrollCorrection;
    }

    if (scrollContainer.scrollLeft <= 1200){
        logos = logos_buy_sell;
        logos_id = "buy-sell";
    }

    if (scrollContainer.scrollLeft == 2400){
        logos = logos_evaluation;
        logos_id = "evaluation";
    }

    if (scrollContainer.scrollLeft == 3600){
        logos = logos_due;
        logos_id = "due";
    }

    if (scrollContainer.scrollLeft == 4800){
        logos = logos_money;
        logos_id = "money";
    }

    if (scrollContainer.scrollLeft == 6000){
        logos = logos_partner;
        logos_id = "partner";
    }

    

    startIndex = 0;
    logoGrid = document.getElementById(logos_id);
    
    displayLogos();
    buttons.forEach(function(button){
        let message = `${1} / ${Math.ceil(logos.length / 6)}`;
        button.textContent = message;
    });
})







// This fuction is for header to change when the page is scrolled down
window.addEventListener('scroll', function() {
    var topMenu = document.querySelector('.header');
    
    if (window.scrollY > 300) {
        topMenu.classList.add('scrolled');
    } else {
        topMenu.classList.remove('scrolled');
    }
});







// This function scrolls to right panel whn clicked on topmenu
function toSection(n){
    const divLibrary = document.getElementById("gallery-wrap");
    var distanceFromTop = 1200;
    var scrolledFromTop = window.scrollY;

    // lets scroll to library
    var toScroll = distanceFromTop - scrolledFromTop;
    window.scrollBy(0, toScroll - 250);

    // lets scroll to our page
    var pageStart = n * 1200;
    console.log(pageStart);
    // lets load logos to that page
    if (n == 0) {
        logos = logos_buy_sell;
        logos_id = "buy-sell";
    }

    if (n == 1) {
        logos = logos_evaluation;
        logos_id = "evaluation";
    }

    if (n == 2) {
        logos = logos_due;
        logos_id = "due";
    }

    if (n == 3) {
        logos = logos_money;
        logos_id = "money";
    }

    if (n == 4) {
        logos = logos_partner;
        logos_id = "partner";
    }

    

    startIndex = 0;
    logoGrid = document.getElementById(logos_id);
    buttons.forEach(function(button){
        let message = `${startIndex / 6 + 1} / ${Math.ceil(logos.length / 6)}`;
        button.textContent = message;
    });
    displayLogos();

    scrollContainer.scrollTo(pageStart, 0);
    scrollContainer.style.scrollBehavior = "smooth";

}








// This is a function to scroll to contact
function toContact(){
    const divLibrary = document.getElementById("contact");
    var distanceFromTop = 1600;
    var scrolledFromTop = window.scrollY;
    var toScroll = distanceFromTop - scrolledFromTop;

    window.scrollBy(0, toScroll + 250);
}









//This is a code for logo display logic
// An array of your logo URLs
const logos_buy_sell = [
    "../media/logod/ostu-müügi nõustamine/carglass.png",
    "../media/logod/ostu-müügi nõustamine/antalis.svg",
    "../media/logod/ostu-müügi nõustamine/sweep.png", // Vigane logo WE ARE SWEEP
    "../media/logod/ostu-müügi nõustamine/sanitex.png",
    "../media/logod/ostu-müügi nõustamine/mehiläinen.png",
    "../media/logod/ostu-müügi nõustamine/BAltCap.png",
    "../media/logod/ostu-müügi nõustamine/LDZ.png",
    "../media/logod/ostu-müügi nõustamine/Ühinenud-ajakirjad.png",
    "../media/logod/ostu-müügi nõustamine/3group.png"
];

const logos_evaluation = [
    "../media/logod/Ettevõtte-hindamine/carglass.png",
    "../media/logod/Ettevõtte-hindamine/meliva.svg",
    "../media/logod/Ettevõtte-hindamine/cybers.svg",
    "../media/logod/Ettevõtte-hindamine/kaupmees.png",
    "../media/logod/Ettevõtte-hindamine/man.png",
    "../media/logod/Ettevõtte-hindamine/BaltCap.png",
    "../media/logod/Ettevõtte-hindamine/Koduekstra.png",
    "../media/logod/Ettevõtte-hindamine/Fcrmedia.jpg",
    "../media/logod/Ettevõtte-hindamine/Wendre.png"
];

const logos_due = [
    "../media/logod/DUE DILIGENCE/auto24.svg",
    "../media/logod/DUE DILIGENCE/tradehouse.png",
    "../media/logod/DUE DILIGENCE/straumann.png",
    "../media/logod/DUE DILIGENCE/kidzone.png",
    "../media/logod/DUE DILIGENCE/vkge.svg",
    "../media/logod/DUE DILIGENCE/barrus.svg",
    "../media/logod/DUE DILIGENCE/toom-tekstiil.png",
    "../media/logod/DUE DILIGENCE/ttl.png",
    "../media/logod/DUE DILIGENCE/3group.png",
    "../media/logod/DUE DILIGENCE/lindstöm.png", 
    "../media/logod/DUE DILIGENCE/äripäev.png",
    "../media/logod/DUE DILIGENCE/tkm grupp.png",
    "../media/logod/DUE DILIGENCE/baltcap.png",
    "../media/logod/DUE DILIGENCE/ridango.png",
    "../media/logod/DUE DILIGENCE/mehiläinen.png",
    "../media/logod/DUE DILIGENCE/rahvaraamat.png",
    "../media/logod/DUE DILIGENCE/invalda.png",
    "../media/logod/DUE DILIGENCE/farmin.png",
    "../media/logod/DUE DILIGENCE/unimed.png",
    "../media/logod/DUE DILIGENCE/eesti keskkonnateenused.png",
    "../media/logod/DUE DILIGENCE/qualitas.png",
    "../media/logod/DUE DILIGENCE/regus.jpg",
    "../media/logod/DUE DILIGENCE/weekend.png"           
]

const logos_money = [
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/ejewels.png",
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/pirita-hambaravi.png",
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/windro.png",
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/skinest.jpg",
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/decowood.png",
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/purtse.png",
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/dodo pizza.png",
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/xella.png",
    "../media/logod/RAHASTUS JA MUU NÕUSTAMINE/rsteel.png"
    
]

const logos_partner = [
    "../media/logod/PEAMISED KOOSTÖÖPARTNERID/Ellex.png",
    "../media/logod/PEAMISED KOOSTÖÖPARTNERID/Cobalt.png",
    "../media/logod/PEAMISED KOOSTÖÖPARTNERID/Sorainen.png",  
    "../media/logod/PEAMISED KOOSTÖÖPARTNERID/evershed.png",      
    "../media/logod/PEAMISED KOOSTÖÖPARTNERID/TGS.png",    
    "../media/logod/PEAMISED KOOSTÖÖPARTNERID/triniti-logo.svg", 
    "../media/logod/PEAMISED KOOSTÖÖPARTNERID/BDO.png",
    "../media/logod/PEAMISED KOOSTÖÖPARTNERID/mazars-logo.png",
]




let startIndex = 0; // Initial index for displaying logos
let logos = logos_buy_sell
let logos_id = "buy-sell"
let logoGrid = document.getElementById(logos_id);

function displayLogos() {
    logoGrid.innerHTML = ''; // Clear the grid
    for (let i = startIndex; i < startIndex + 6 && i < logos.length; i++) {
        const container = document.createElement('div');
        const logo = document.createElement("img")
        logo.src = logos[i];
        container.className = "section-logo"
        container.appendChild(logo)
        logoGrid.appendChild(container);
    }
}

// Select all buttons with the class "my-button"
const buttons = document.querySelectorAll(".next-logos-button");

buttons.forEach(function (button) {
    button.addEventListener("click", () => {
    // Increment the starting index for the next set of logos
    startIndex += 6;
    if (startIndex >= logos.length) {
    // If we reach the end, loop back to the beginning
    startIndex = 0;
    }
    
    buttons.forEach(function(button){
        let message = `${startIndex / 6 + 1} / ${Math.ceil(logos.length / 6)}`;
        button.textContent = message;
    });
    displayLogos();
    console.log(logos_id, startIndex)
    });
});

// Initial display of logos
displayLogos();