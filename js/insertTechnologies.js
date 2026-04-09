const containerTech = document.getElementById("section-technologies");

const technologies = [
    {
        group: "FRONTEND",
        techs: [
            { img: "./assets/icons/HTML5.png", name: "HTML" },
            { img: "./assets/icons/css.png", name: "CSS" },
            { img: "./assets/icons/js.png", name: "JAVASCRIPT" },
            { img: "./assets/icons/react.png", name: "REACT" },
        ]
    },
    {
        group: "BACKEND",
        techs: [
            { img: "./assets/icons/nodejs.png", name: "NODE.JS" },
            { img: "./assets/icons/express.png", name: "EXPRESS" },
            { img: "./assets/icons/firebase.png", name: "FIREBASE" },
            { img: "./assets/icons/firestore_.png", name: "FIRESTORE" },
            { img: "./assets/icons/mysql.png", name: "MYSQL" },
        ]
    },
    {
        group: "UX / UI",
        techs: [
            { img: "./assets/icons/sass.png", name: "SASS" },
            { img: "./assets/icons/TailwindCSS.png", name: "TAILWINDCSS" },
            { img: "./assets/icons/Bootstrap.png", name: "BOOTSTRAP" },
            { img: "./assets/icons/GSAP.png", name: "GSAP" },
        ]
    },

    {
        group: "HERRAMIENTAS",
        techs: [
            { img: "./assets/icons/git.png", name: "GIT" },
            { img: "./assets/icons/github.png", name: "GITHUB" },
            { img: "./assets/icons/vite.png", name: "VITE" },
            { img: "./assets/icons/codex.png", name: "OpenAI CODEX" },
            { img: "./assets/icons/claude.png", name: "CLAUDE" }
        ]
    }
];


technologies.forEach((tech) => {
    const article = document.createElement("article");

    // const titleContainer = document.createElement("div");
    // titleContainer.classList.add("");
    const title = document.createElement("h3");
    title.textContent = tech.group;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("tech_img_container");

    tech.techs.forEach((t) => {
        const divImg = document.createElement("div");
        divImg.classList.add("img_container");

        const image = document.createElement("img");
        image.src = t.img;
        image.alt = t.name;

        const name = document.createElement("p");
        name.classList.add("p-sm")
        name.textContent = t.name;

        divImg.appendChild(image);
        divImg.appendChild(name);

        imgContainer.appendChild(divImg);
    });

    // article.appendChild(title);
    article.appendChild(imgContainer);

    containerTech.appendChild(article);
});

