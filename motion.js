const { animate } = Motion;

const myBox = document.querySelector("#myBox");
const myButton = document.querySelector("#myButton");


myButton.addEventListener("click", () => {
  console.log("clicked");
  animate(
    myBox,
    { transform: "translateX(400px)" },
    { duration: 0.7, fill: "forwards" }
  );
});
