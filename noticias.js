if(window.location.hash === "#/site") {
    console.log("Hash é #/site, aguardando iframe...");
    
    // Espera o iframe aparecer
    const checkIframe = setInterval(() => {
        const siteIframe = document.querySelector(".site-frame");
        
        if (siteIframe) {
            console.log("✅ Iframe encontrado!");
            console.log("Src atual:", siteIframe.src);
            
            const newSrc = siteIframe.src.replace("admin.", "");
            console.log("Novo src:", newSrc);
            
            siteIframe.src = newSrc;
            
            // Para de verificar
            clearInterval(checkIframe);
        }
    }, 100); // Verifica a cada 100ms
    
    // Para de verificar após 10 segundos
    setTimeout(() => clearInterval(checkIframe), 10000);
}
