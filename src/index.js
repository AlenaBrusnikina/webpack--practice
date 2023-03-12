// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'

import { base, list, frameworks, libs} from './data/hbsData'
import firstFile from './template/firstask.hbs'

const markUp= firstFile(base);
// console.log(markUp);
const root = document.querySelector('#root');
root.insertAdjacentHTML('beforeend', markUp);

import secondFile from './template/secondtask.hbs';
const makrupSecond = secondFile(list);
// console.log(makrupSecond);
root.insertAdjacentHTML('beforeend', makrupSecond);

import thirdFile from './template/thirdtask.hbs';
const makrupThird = thirdFile(frameworks);
// console.log(makrupThird);
root.insertAdjacentHTML('beforeend', makrupThird);

import fourthFile from './template/fourthtask.hbs';
const markupFourth = fourthFile(libs);
console.log(markupFourth);
root.insertAdjacentHTML('beforeend', markupFourth);


