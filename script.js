const preview = document.querySelector("#preview");
const previewScale = document.querySelector("#preview-scale");
const previewFlip = document.querySelector("#preview-flip");
const brightnessSlider = document.querySelector("#brightness");
const brightnessSliderValue = document.querySelector("#brightness-value");
const rotateSlider = document.querySelector("#rotate");
const rotateSliderValue = document.querySelector("#rotate-value");

let filters = ""
let brightnessFilter = ""

let flipedX = ""
let flipedY = ""

let rotateScale = ""
let rotateDeg = ""

const handleRotate = () => {

  const rotate = rotateSlider.value;
  rotateSliderValue.innerText = rotate;

  rotateRadian = (parseInt(rotate) * Math.PI/180).toFixed(5)

  const scale = (Math.abs(Math.sin(rotateRadian)) + Math.abs(Math.cos(rotateRadian)) ).toFixed(5)

  rotateScale = `scale(${scale})`
  rotateDeg = `rotate(${rotate}deg)`

  preview.style.transform = rotateScale + rotateDeg

};

const handleBrightness = () => {

  const brightness = brightnessSlider.value;
  brightnessSliderValue.innerText = brightness;

  brightnessFilter = `brightness(${brightness})`

  preview.style.filter =  filters + brightnessFilter

};

//i think i wrote this wrong
const filterFunctions = {
  "invert":"invert(1)",
  "sepia":"sepia(1)",
  "grayscale":"grayscale(1)",
  "hue-rotate":"hue-rotate(90deg)",
  "contrast":"contrast(2)",
  "saturate":"saturate(2)",
  "blur":"blur(2px)",
  "none":"",
}

const handleFilter = (e) => {

  const { target } = e;
  const { id: filter } = target;
  // filter: "grayscale" | "sepia" | "invert" | "hue-rotate" | "contrast" | "saturate" | "blur"

  filters = filterFunctions[filter]

  preview.style.filter = filters + brightnessFilter

};

const handleFlip = (flip) => {
  //  flip: "vertical" | "horizontal"

  if(flip == "horizontal") {
    if(flipedX.length == 0)
     flipedX = "scaleX(-1)"
    else
     flipedX = ""
  } else {
    if(flipedY.length == 0)
     flipedY = "scaleY(-1)"
    else
     flipedY = ""
  }

  previewFlip.style.transform = flipedX + flipedY

  // TODO: write your code here
};

const handleMouseEnter = () => {
  
  previewScale.style.transform = "scale(2)"

};

const handleMouseLeave = () => {
  
  previewScale.style.transform = "scale(1)"

};

const handleMouseMove = (e) => {

  const imageWidth = previewScale.offsetWidth;
  const imageHeight = previewScale.offsetHeight;
  const imageOffsetTop = previewScale.offsetTop;
  const imageOffsetLeft = previewScale.offsetLeft;
  const pageX = e.pageX;
  const pageY = e.pageY;

  const innerX = pageX - imageOffsetLeft
  const innerY = pageY - imageOffsetTop

  previewScale.style.transformOrigin = `${innerX}px ${innerY}px`

  // TODO: write your code here
};