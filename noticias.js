console.log("Script carregado");

const containerShares = document.getElementsByClassName("shade-activitypub");
for (const container of containerShares) {
    const elements = container.querySelectorAll("*");
    elements.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/admin.guaracinews.com.br/g, "guaracinews.com.br");
    });
}

if(window.location.hash === "#/site") {
    console.log("Redirecting...");
    window.location.hash = "#/posts";
}
