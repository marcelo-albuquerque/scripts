function processIframe() {
    document.addEventListener('DOMContentLoaded', function() {
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
    });
}

window.addEventListener('hashchange', () => {
      console.log("Hash mudou:", window.location.hash);
      processIframe();
});

if(window.location.hash === "#/site") {
    console.log("Hash é #/site");
    
    processIframe();
    
    // Observa mudanças no DOM para quando o iframe aparecer
    const observer = new MutationObserver(() => {
        processIframe();
    });
    
    
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}
