const containerProjects = document.getElementById("section-projects");
const projects = [
    {
        name: "EXPENSES APP",
        position: "FULL STACKDEVELOPER",
        description: "APP DE CONTROL FINANCIERO"
    },
    {
        name: "STOCK APP",
        position: "FULL STACK DEVELOPER",
        description: "APP PARA CONTROLAR EL STOCK DE PRODUCTOS"
    },
    {
        name: "SHÄFFER'S CODES PAGE",
        position: "SEMI FULL STACK DEVELOPER",
        description: "APP PARA ENTREGAR CÓDIGOS DE DESCUENTO A CLIENTES"
    },
    {
        name: "GALL BRANDS",
        position: "FRONT END DEVELOPER",
        description: "LANDING PAGE ASD ASASD ASD "
    },
    {
        name: "DND INVENTORY",
        position: "FRONT END DEVELOPER",
        description: "WEB APP ASJKJKDNSAASD"
    },
    {
        name: "DND DICES",
        position: "FRONT END DEVELOPER",
        description: "WEB APP ASJKJKDNSAASD"
    },
];

const hr = document.createElement("span");
hr.className ="hr-span";

containerProjects.appendChild(hr);

projects.forEach(({ name, position, description }, i) => {
    const article = document.createElement("article");
    const isEven = (i%2 == 0);
    const className = (isEven ? "even" : "odd");


    article.innerHTML = `
        <header>
            <p class="${className}">${description}</p>
        </header>
        <h2 class="t-${className}">
            <a href="">${name +" - "+ position}</a>
        </h2>
        <span class="hr-span"></span> 
    `;

    containerProjects.appendChild(article);
});