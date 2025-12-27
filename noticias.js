console.log("Script carregado!");

function replaceTextInNode(node, searchText, replaceText) {
    if (node.nodeType === 3) { // Apenas nós de texto
        if (node.textContent.includes(searchText)) {
            node.textContent = node.textContent.replace(new RegExp(searchText, 'g'), replaceText);
        }
    } else {
        for (let child of node.childNodes) {
            replaceTextInNode(child, searchText, replaceText);
        }
    }
}

function processContainers() {
    const containerShares = document.querySelectorAll(".shade-activitypub, .epm-modal-container");
    
    containerShares.forEach(container => {
        replaceTextInNode(container, 'admin.guaracinews.com.br', 'guaracinews.com.br');
    });
}

// Executa imediatamente
processContainers();

// Observa mudanças no DOM (para conteúdo dinâmico)
const observer = new MutationObserver(() => {
    processContainers();
});

if (document.body) {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Redirecionamento
if(window.location.hash === "#/site") {
    console.log("Redirecting...");
    window.location.hash = "#/posts";
}
