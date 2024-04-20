/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateexcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateexcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "fox", "dog", "driver", "comedian", "criminal"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possession = ["homework", "hand", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    "" +
    subject[subjIndex] +
    "" +
    action[actionIndex] +
    "" +
    possession[possessionIndex] +
    "" +
    where[whereIndex]
  );
};
