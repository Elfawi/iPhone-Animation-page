///   Pining the first page

const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "25%",
    end: "75%",
    // markers: true,
    scrub: true,
    pin: true,
    pinSpacing: false,
  },
});
tlIntro.fromTo("nav", { opacity: 1 }, { opacity: 0, duration: 1 });

/////////////////////////////////////
////////////////// Highlight page

const tLH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    // markers: { startColor: "blue", endColor: "blue" },
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

tLH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255,0.4)" },
  { color: "rgba(255, 255, 255, 1)", stagger: 1 }
);

const tLHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    // markers: { startColor: "pink", endColor: "pink" },
    scrub: true,
    start: "-20%",
    end: "60%",
  },
});

tLHRemove.to(".highlight", { color: "rgba(255,255,255,0.4)", stagger: 1 });

//////////////// Page 3
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-25%",
    end: "30%",
    // markers: true,
    scrub: true,
  },
});
if (!window.matchMedia("(min-width: 1100px)").matches) {
  console.log("false");

  tlSplit.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

  tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" });
  tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");
  tlSplit.fromTo(
    ".product-text-left",
    { x: 100, opacity: 0 },
    { x: -60, opacity: 1 },
    "<"
  );
  tlSplit.fromTo(
    ".product-text-right",
    { x: -100, opacity: 0 },
    { x: 60, opacity: 1 },
    "<"
  );
}
/////
const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});
/////////////////////////////////////
// if (window.matchMedia("(max-width: 1100px)").matches) {
//   console.log("trueee");

//   tlSplit.fromTo(".large-phone", { x: "20%" }, { x: "60%" });
//   tlSplit.fromTo(".small-phone", { x: "60%" }, { x: "-20%" }, "<");
//   tlSplit.fromTo(
//     ".product-text-left",
//     { x: 0, opacity: 0 },
//     { x: -20, opacity: 1 },
//     "<"
//   );
//   tlSplit.fromTo(
//     ".product-text-right",
//     { x: 0, opacity: 0 },
//     { x: -60, opacity: 1 },
//     "<"
//   );
// }
/// Careosel

const swatches = [...document.querySelectorAll(".swatches img")];
const gallery = document.querySelector(".phone-gallery");
const slides = [...document.querySelectorAll(".phone-gallery-container")];

let currentSwatch = "blue";
let topIndex = 2;

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;
  swatch.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("swatch");
    if (swatchName === currentSwatch) return;
    const closeUp = document.querySelector(`.${swatchName}`);
    gsap.set(closeUp, { zIndex: topIndex++ });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.to(gallery, {
      x: -coord,
      duration: 1,
      ease: "back.out(1)",
    });
    currentSwatch = swatchName;
  });
});

///// page 5

const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    scrub: true,
    start: "0%",
    end: "150%",
    pin: true,
    // pinSpacing: false,
  },
});
tlVideo.to("nav", { opacity: 0 });

tlVideo.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);

tlVideo.fromTo(
  ".product-info-container h3",
  { opacity: 0 },
  { opacity: 1, stagger: 0.25, duration: 0.5 },
  "<"
);

///////// page 6

const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    scrub: true,
    start: "-25%",
    end: "50%",
    // markers: true,
  },
});

tlParallax.fromTo(".photo-description", { y: 0 }, { y: -80 });
tlParallax.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
tlParallax.fromTo(
  ".phone-video",
  { y: 0, scale: 0.8 },
  { y: -200, scale: 1 },
  "<"
);
