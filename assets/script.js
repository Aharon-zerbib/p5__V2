const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Create the banner with JS

let bannerDiv = document.querySelector("#banner");
let basseImg = 0;

//intégration de la flèche  de gauche
let arrowLeft = document.createElement("img");
arrowLeft.classList.add("arrow", "arrow_left");
arrowLeft.src = "./assets/images/arrow_left.png";
//function sur le click left
arrowLeft.addEventListener("click", function () {
  basseImg = (basseImg - 1 + slides.length) % slides.length; // calcule reste division de la valeur précédente
  updateBanner();
});

let bannerImg = document.createElement("img");
bannerImg.className = "banner-img";
bannerImg.src = "./assets/images/slideshow/" + slides[basseImg].image;

let bannerTagline = document.createElement("p");
bannerTagline.innerHTML = slides[basseImg].tagLine;

//intégration de la flèche  de droite
let arrowRightImg = document.createElement("img");
arrowRightImg.classList.add("arrow", "arrow_right");
arrowRightImg.src = "./assets/images/arrow_right.png";
//function sur le click riggth
arrowRightImg.addEventListener("click", function () {
  basseImg = (basseImg + 1) % slides.length;
  updateBanner();
});

let dotsImg = document.createElement("div");
dotsImg.className = "dots";

function updateBanner() {
  bannerImg.src = "./assets/images/slideshow/" + slides[basseImg].image;

  if (bannerTagline) {
    bannerDiv.removeChild(bannerTagline); //si exsite alors parent suprim bannerDiv
  }

  bannerTagline = document.createElement("p");
  bannerTagline.innerHTML = slides[basseImg].tagLine;

  bannerDiv.appendChild(bannerTagline);

  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === basseImg);
  });
}

// Ajoute éléments a bannerGiv
bannerDiv.appendChild(arrowLeft);
bannerDiv.appendChild(bannerImg);
bannerDiv.appendChild(bannerTagline);
bannerDiv.appendChild(arrowRightImg);
bannerDiv.appendChild(dotsImg);

// la function sur le dots
let dots = [];
slides.forEach((_slide, index) => {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", function () {
    basseImg = index;
    updateBanner();
  });

  dotsImg.appendChild(dot);
  dots.push(dot);
});

updateBanner();
