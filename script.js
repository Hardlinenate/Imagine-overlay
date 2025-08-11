(function(){
  const ID = 'imagine-cheats-overlay-v3';
  const TEXT = 'IMAGINE USING CHEATS';

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
    background: 'repeating-linear-gradient(45deg, rgba(255,0,0,0.2) 0, rgba(255,0,0,0.2) 40px, transparent 40px, transparent 80px)'
  });
  document.documentElement.appendChild(overlay);

  let colorToggle = false;

  function render(){
    overlay.innerHTML = '';
    const tileW = Math.max(200, Math.floor(window.innerWidth / 4));
    const tileH = Math.max(100, Math.floor(window.innerHeight / 6));
    const cols = Math.ceil(window.innerWidth / tileW) + 1;
    const rows = Math.ceil(window.innerHeight / tileH) + 1;
    const fontSize = Math.max(32, Math.floor(tileH * 0.8)) + 'px';

    for (let y = 0; y < rows; y++){
      for (let x = 0; x < cols; x++){
        const el = document.createElement('div');
        el.textContent = TEXT;
        Object.assign(el.style, {
          position: 'absolute',
          left: (x * tileW) + 'px',
          top: (y * tileH) + 'px',
          fontSize: fontSize,
          fontWeight: '900',
          color: colorToggle ? 'rgba(255,0,0,0.95)' : 'rgba(255,255,0,0.95)',
          transform: 'rotate(-15deg)',
          textShadow: '3px 3px 6px rgba(0,0,0,0.6)',
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

  setInterval(() => {
    colorToggle = !colorToggle;
    render();
  }, 500);
})();
