console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";
const IS_POINT = "isPoint";
const SOUND = document.querySelector(".sounds");
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
    SOUND.setAttribute('src', anchor.getAttribute('data-details-audio'));
}

for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
        console.log("event - click on ", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    })
}
function showDetails() {
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
        playAudio();
        setTimeout(function() {
            pauseAudio();
        }, 5000)
    },1)
    
    

}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
    pauseAudio();
}
function playAudio() {
        SOUND.play();
    

}
function pauseAudio() {
         SOUND.pause();
}