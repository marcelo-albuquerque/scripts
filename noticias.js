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
        return true;
    }
    
    console.log("⚠️ Iframe .site-frame não encontrado ainda");
    return false;
}

function waitForIframe(maxAttempts = 50, interval = 100) {
    let attempts = 0;
    
    const checkIframe = setInterval(() => {
        attempts++;
        
        if (processIframe()) {
            clearInterval(checkIframe);
            console.log("✅ Iframe processado com sucesso");
        } else if (attempts >= maxAttempts) {
            clearInterval(checkIframe);
            console.error("❌ Timeout: Iframe não encontrado após", maxAttempts * interval, "ms");
        }
    }, interval);
}

function handleSiteHash() {
    if (window.location.hash === "#/site") {
        console.log("Hash é #/site");
        
        // Tenta processar imediatamente
        if (!processIframe()) {
            // Se falhar, aguarda o iframe carregar
            waitForIframe();
        }
    }
}

// Event listener para mudanças de hash
window.addEventListener('hashchange', handleSiteHash);

// Execução inicial
handleSiteHash();
