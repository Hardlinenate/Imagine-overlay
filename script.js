(function(){
  const ID = 'imagine-cheats-overlay-v8';
  const WEBHOOK_URL = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN'; // <== REPLACE THIS

  // Toggle off if exists
  const existing = document.getElementById(ID);
  if (existing) {
    existing.remove();
    const banner = document.getElementById(ID + '-banner');
    if (banner) banner.remove();
    return;
  }

  // --- Fake warning banner ---
  if (!document.getElementById(ID + '-banner')) {
    const banner = document.createElement('div');
    banner.id = ID + '-banner';
    banner.textContent = 'Warning: Cheat menu activated. Host notified.';
    Object.assign(banner.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      backgroundColor: 'rgba(255,0,0,0.85)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
      textAlign: 'center',
      padding: '8px 0',
      zIndex: '2147483650',
      userSelect: 'none',
      pointerEvents: 'none',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 6px rgba(0,0,0,0.5)'
    });
    document.body.appendChild(banner);
  }

  // --- Discord webhook notifier ---
  try {
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Blooket Cheat Alert',
        avatar_url: 'https://i.imgur.com/O3DHIA5.png',
        content: `⚠️ Cheat menu activated!\nURL: ${location.href}\nTime: ${new Date().toLocaleString()}`
      })
    });
  } catch(e) {
    console.error('Webhook notification failed:', e);
  }
})();
