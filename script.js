const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
        const singleBox = document.createElement("div");
        singleBox.classList.add("singleBox");
        singleBox.style.border = "1px solid";
        singleBox.style.backgroundColor = "aquamarine";
        singleBox.style.minWidth = "calc(100%/16)";
        singleBox.style.minHeight = "calc(100%/16)";
        container.appendChild(singleBox);
}