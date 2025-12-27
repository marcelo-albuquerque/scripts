function processIframeOnSite() {
    if(window.location.hash !== "#/site") {
        return;
    }
    
    console.log("Processando #/site...");
    
    const siteIframe = document.querySelector(".site-frame");
    
    if (siteIframe && siteIframe.src.includes("admin.")) {
        console.log("✅ Iframe encontrado, alterando src");
        console.log("Src atual:", siteIframe.src);
        
        const newSrc = siteIframe.src.replace("admin.", "");
        console.log("Novo src:", newSrc);
        
        siteIframe.src = newSrc;
    }
}

// Observa mudanças no DOM
const observer = new MutationObserver(() => {
    processIframeOnSite();
});

if (document.body) {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Escuta mudanças no hash
window.addEventListener('hashchange', () => {
    console.log("Hash mudou:", window.location.hash);
    setTimeout(processIframeOnSite, 100);
    setTimeout(processIframeOnSite, 500);
    setTimeout(processIframeOnSite, 1000);
});

// Executa no load inicial
processIframeOnSite();
