document.addEventListener("DOMContentLoaded", () => {
	console.log("Page has loaded");
	const query = parseURL();
	loadImage(query);
	modifyTitle(query);
});

const parseURL = () => {
	if (!document.URL.includes("?")) {
		// display an error
		return;
	}

	/*
    url: file:///Users/robertabreu/Desktop/Development/JavaScript/playGround/anchor_tag/picture.html?id=cat
    split at "?"
    [file:///Users/robertabreu/Desktop/Development/JavaScript/playGround/anchor_tag/picture.html, id=cat][1]
    id=cat
    split at "="
    [id, cat] [1]
    cat
    */

	const query = document.URL.split("?")[1].split("=")[1];
	return query;
};

const loadImage = query => {
	const content = document.getElementById("content");
	const img = document.createElement("img");
	img.src = "https://source.unsplash.com/1600x900/?" + query;
	content.appendChild(img);
};

const modifyTitle = newTitle => {
	const title = document.getElementById("title");
	title.innerText = "Pictures of " + newTitle;
};
