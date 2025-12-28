function processIframe() {
    let find = false;

    while (!find) { 
        const siteIframe = document.querySelector(".site-frame");
        
        if (siteIframe) {
            console.log("✅ Iframe encontrado:", siteIframe);
            
            const currentSrc = siteIframe.src;
            console.log("📍 Src atual:", currentSrc);
            
            // Remove "admin." do domínio
            const newSrc = currentSrc.replace("admin.", "");
            console.log("🔄 Novo src:", newSrc);
            
            siteIframe.src = newSrc;

            find = true;
        } else {
            console.log("⚠️ Iframe .site-frame não encontrado ainda");
        }
    }
    
}

window.addEventListener('hashchange', () => {
    if (window.location.hash === "#/site") {
      console.log("Hash mudou:", window.location.hash);
      processIframe();  
    }   
});

if(window.location.hash === "#/site") {
    console.log("Hash é #/site");
    
    processIframe();
}
