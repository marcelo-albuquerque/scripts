if(window.location.hash === "#/site") {
    console.log("Hash é #/site");
    
    // Função para processar o iframe
    function processIframe() {
        const siteIframe = document.querySelector(".site-frame");
        
        if (siteIframe) {
            console.log("✅ Iframe encontrado:", siteIframe);
            
            const currentSrc = siteIframe.src;
            console.log("📍 Src atual:", currentSrc);
            
            // Remove "admin." do domínio
            const newSrc = currentSrc.replace("admin.", "");
            console.log("🔄 Novo src:", newSrc);
            
            siteIframe.src = newSrc;
        } else {
            console.log("⚠️ Iframe .site-frame não encontrado ainda");
        }
    }
    
    // Tenta imediatamente
    processIframe();
    
    // Tenta novamente após um delay (caso o iframe carregue depois)
    setTimeout(processIframe, 500);
    setTimeout(processIframe, 1000);
    setTimeout(processIframe, 2000);
    
    // Observa mudanças no DOM para quando o iframe aparecer
    const observer = new MutationObserver(() => {
        processIframe();
    });

    window.addEventListener('hashchange', () => {
      console.log("Hash mudou:", window.location.hash);
      setTimeout(processIframeOnSite, 100);
      setTimeout(processIframeOnSite, 500);
      setTimeout(processIframeOnSite, 1000);
    });
    
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}
