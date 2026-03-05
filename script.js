const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if (currentScroll > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {

    thumb.addEventListener("click", () => {

        mainImage.src = thumb.src;

        thumbnails.forEach(t => t.classList.remove("active"));

        thumb.classList.add("active");

    });

});


const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0;

function updateImage() {

    mainImage.src = thumbnails[currentIndex].src;

    thumbnails.forEach(t => t.classList.remove("active"));
    thumbnails[currentIndex].classList.add("active");

}

if(prevBtn){
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = thumbnails.length - 1;
    }

    updateImage();

});
}

if(nextBtn){
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= thumbnails.length){
        currentIndex = 0;
    }

    updateImage();

});
}


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(f => {
            if(f !== item){
                f.classList.remove("active");
                const icon = f.querySelector(".faq-circle img");
                if(icon) icon.src = "assets/CaretDown.png";
            }
        });

        item.classList.toggle("active");

        const icon = item.querySelector(".faq-circle img");

        if(item.classList.contains("active")){
            icon.src = "assets/CaretUp.png";
        } else {
            icon.src = "assets/CaretDown.png";
        }

    });

});


const appContainer = document.querySelector(".applications-cards");
const leftArrow = document.querySelector(".arrow-btn:first-child");
const rightArrow = document.querySelector(".arrow-btn:last-child");

let scrollAmount = 0;

if(rightArrow){
rightArrow.addEventListener("click", () => {

    scrollAmount += 300;

    appContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });

});
}

if(leftArrow){
leftArrow.addEventListener("click", () => {

    scrollAmount -= 300;

    if(scrollAmount < 0){
        scrollAmount = 0;
    }

    appContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });

});
}

const steps = document.querySelectorAll(".step");

steps.forEach(step => {

    step.addEventListener("click", () => {

        steps.forEach(s => s.classList.remove("active"));

        step.classList.add("active");

    });

});


const processLeft = document.querySelector(".process-arrow.left");
const processRight = document.querySelector(".process-arrow.right");

const processImage = document.querySelector(".process-image img");

const processImages = [
    "assets/Fishnet Manufacturing Image.jpg",
    "assets/image1.jpg",
    "assets/image2.jpg"
];

let processIndex = 0;

function updateProcessImage(){

    processImage.src = processImages[processIndex];

}

if(processRight){
processRight.addEventListener("click", () => {

    processIndex++;

    if(processIndex >= processImages.length){
        processIndex = 0;
    }

    updateProcessImage();

});
}

if(processLeft){
processLeft.addEventListener("click", () => {

    processIndex--;

    if(processIndex < 0){
        processIndex = processImages.length - 1;
    }

    updateProcessImage();

});
}