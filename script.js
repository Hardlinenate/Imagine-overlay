(function(){
  const ID = 'imagine-cheats-overlay-v1';
  const TEXT = 'imagine using cheats';

  const existing = document.getElementById(ID);
  if (existing) { existing.remove(); return; }

  const overlay = document.createElement('div');
  overlay.id = ID;
  Object.assign(overlay.style, {
    position: 'fixed',
    inset: '0',
    zIndex: '2147483647',
    pointerEvents: 'none',
    overflow: 'hidden',
  });
  document.documentElement.appendChild(overlay);

  function render(){
    overlay.innerHTML = '';
    const tileW = Math.max(220, Math.floor(window.innerWidth / 6));
    const tileH = Math.max(80, Math.floor(window.innerHeight / 8));
    const cols = Math.ceil(window.innerWidth / tileW) + 1;
    const rows = Math.ceil(window.innerHeight / tileH) + 1;
    const fontSize = Math.max(20, Math.floor(tileH * 0.6)) + 'px';

    for (let y = 0; y < rows; y++){
      for (let x = 0; x < cols; x++){
        const el = document.createElement('div');
        el.textContent = TEXT;
        Object.assign(el.style, {
          position: 'absolute',
          left: (x * tileW - tileW * 0.15) + 'px',
          top: (y * tileH - tileH * 0.1) + 'px',
          fontSize: fontSize,
          fontWeight: '800',
          color: 'rgba(255,0,0,0.12)',
          transform: 'rotate(-18deg)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none'
        });
        overlay.appendChild(el);
      }
    }
  }

  render();
  window.addEventListener('resize', render);
})();
