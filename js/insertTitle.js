const h1_top = document.getElementById("hero-title-top");
const h1_bottom = document.getElementById("hero-title-bottom");
const title_top = "FULL-STACK";
const title_bottom = "DEVELOPER";

// esto va a ser ["FULL", "STACK"]
const words = title_top.split("-");

words.forEach((word, i) => {
    const wordDiv = document.createElement("div");
    wordDiv.className = "title__top__" + ((i == 0) ? "left" : "right");

    word.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.className = "title__letter";
        span.textContent = letter;
        wordDiv.appendChild(span);
    })

    h1_top.appendChild(wordDiv);

    // antes de la última palabra
    if (i < words.length - 1) {
        const dash = document.createElement("span");
        dash.className = "title__dash";
        dash.textContent = "–";
        h1_top.appendChild(dash);
    }
})

title_bottom.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.className = "title__letter";
        span.textContent = letter;
        h1_bottom.appendChild(span);
})