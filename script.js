(function(){
  const ID = 'imagine-cheats-overlay-v4';
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
    background: 'repeating-linear-gradient(45deg, rgba(255,0,0,0.15) 0, rgba(255,0,0,0.15) 40px, transparent 40px, transparent 80px)'
  });
  document.documentElement.appendChild(overlay);

  let colorToggle = false;

  function render(){
    overlay.innerHTML = '';
    const tileW = Math.max(160, Math.floor(window.innerWidth / 5));
    const tileH = Math.max(70, Math.floor(window.innerHeight / 7));
    const cols = Math.ceil(window.innerWidth / tileW) + 1;
    const rows = Math.ceil(window.innerHeight / tileH) + 1;
    const fontSize = Math.max(20, Math.floor(tileH * 0.6)) + 'px'; // smaller font

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
          textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
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
