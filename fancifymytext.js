let inputArea;
window.addEventListener("DOMContentLoaded", () => {
	inputArea = document.getElementById("inputarea");
})


const embiggen = () => {
	inputArea.style.fontSize = "24pt";
};

const embolden = () => {
	inputArea.style.fontWeight = "bold";
	inputArea.style.color = "blue";
	inputArea.style.textDecoration = "underline";
};

const flatten = () => {
	inputArea.style.fontWeight = "normal";
	inputArea.style.color = "black";
	inputArea.style.textDecoration = "none";
};

const moo = () => {
	let str = inputArea.value;
	str = str.toUpperCase();
	let splitStr = str.split(".");
	str = splitStr.join("Moo.");
	inputArea.value = str;
}