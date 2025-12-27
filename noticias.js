console.log("Script iniciado");

// Função para fazer as substituições
function replaceInContainers() {
    const containerShares = document.getElementsByClassName("shade-activitypub");
    
    if (containerShares.length > 0) {
        console.log("Encontrou containers:", containerShares.length);
        
        for (const container of containerShares) {
            const elements = container.querySelectorAll("*");
            elements.forEach(element => {
                if (element.innerHTML.includes("admin.guaracinews.com.br")) {
                    console.log("Substituindo em:", element);
                    element.innerHTML = element.innerHTML.replace(/admin.guaracinews.com.br/g, "guaracinews.com.br");
                }
            });
        }
    }
}

// Executa imediatamente
replaceInContainers();

// Observa mudanças no DOM
const observer = new MutationObserver(function(mutations) {
    replaceInContainers();
});

// Começa a observar quando o DOM estiver pronto
if (document.body) {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
} else {
    document.addEventListener('DOMContentLoaded', function() {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// Redirecionamento de hash
if(window.location.hash === "#/site") {
    console.log("Redirecting...");
    window.location.hash = "#/posts";
}
