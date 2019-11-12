document.addEventListener("DOMContentLoaded", () => {
	setupButton();
});

const setupButton = () => {
	const submit = document.getElementById("submit");
	submit.addEventListener("click", () => {
		createAnchor();
	});
};

const createAnchor = () => {
	const input = document.getElementById("input");
	const content = document.getElementById("content");
	const value = input.value;
	input.value = "";
	const a = document.createElement("a");
	const div = document.createElement("div");
	a.innerText = "Link to " + value + " picture";
	a.target = "_blank";
	a.href = "picture.html?id=" + value;
	div.appendChild(a);
	content.appendChild(div);
};
