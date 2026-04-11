const containerProjects = document.getElementById("section-projects");
const projects = [
    {
        name: "EXPENSES APP",
        position: "FULL STACKDEVELOPER",
        devices : "MOBILE | DESKTOP",
        description: "APP DE CONTROL FINANCIERO",
        link: "https://bhf-instituto.github.io/expenses_api/"
        // link: "https://m-bauhoffer.github.io/expenses_app/auth?demo=portfolio"
    },
    {
        name: "STOCK APP",
        position: "FULL STACK DEVELOPER",
        devices : "MOBILE",
        description: "APP PARA CONTROLAR EL STOCK DE PRODUCTOS",
        link: "https://m-bauhoffer.github.io/StockApp_v2/?demo=1"
    },
    {
        name: "SHÄFFER'S CODES PAGE",
        position: "SEMI FULL STACK DEVELOPER",
        devices : "MOBILE",        
        description: "APP PARA ENTREGAR CÓDIGOS DE DESCUENTO A CLIENTES",
        link: "https://shafferscode.web.app/"
    },
    {
        name: "GALL BRANDS",
        position: "FRONT END DEVELOPER",
        devices : "MOBILE | DESKTOP",
        description: "LANDING PAGE PARA MARCA ",
        link: "https://m-bauhoffer.github.io/gallBrands/"
    },
    {
        name: "DND INVENTORY",
        position: "FRONT END DEVELOPER",
        devices : "MOBILE",
        description: "WEB APP INVENTARIO PARA JUEGOS DE ROL",
        link: "https://m-bauhoffer.github.io/DnD-Inventory-React/"
    },
    {
        name: "DND DICES",
        position: "FRONT END DEVELOPER",
        devices : "MOBILE",
        description: "WEB APP TIRADAS DE DADOS PARA JUEGOS DE ROL",
        link: "https://m-bauhoffer.github.io/DnD-Dices/"
    },
];

const hr = document.createElement("span");
hr.className ="hr-span";

containerProjects.appendChild(hr);

projects.forEach(({ name, position,devices, description, link }, i) => {
    const article = document.createElement("article");
    const isEven = (i%2 == 0);
    const className = (isEven ? "even" : "odd");


    article.innerHTML = `
        <header>
        <p class="${className}"><span>${devices}</span>&nbsp;&nbsp;&nbsp;&nbsp; ${description}</p>
        </header>
        <h2 class="t-${className}">
        <a href="${link}">${name +" - "+ position}</a>
        </h2>
        <span class="hr-span"></span> 
    `;

    containerProjects.appendChild(article);
});