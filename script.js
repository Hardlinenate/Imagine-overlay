(function(){
  const ID = 'imagine-cheats-overlay-v6';
  const TEXT = 'IMAGINE USING CHEATS';

  // Toggle off if exists
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
    background: 'repeating-linear-gradient(45deg, rgba(255,0,0,0.1) 0, rgba(255,0,0,0.1) 40px, transparent 40px, transparent 80px)'
  });
  document.documentElement.appendChild(overlay);

  let colorToggle = false;

  function render(){
    overlay.innerHTML = '';
    // Reduced number of tiles by increasing tile size
    const tileW = Math.floor(window.innerWidth / 3);
    const tileH = Math.floor(window.innerHeight / 4);
    const cols = 3;  // fixed smaller number of columns
    const rows = 4;  // fixed smaller number of rows
    const fontSize = Math.max(24, Math.floor(tileH * 0.6)) + 'px';

    for (let y = 0; y < rows; y++){
      for (let x = 0; x < cols; x++){
        const el = document.createElement('div');
        el.textContent = TEXT;
        Object.assign(el.style, {
          position: 'absolute',
          left: (x * tileW + 20) + 'px', // add some margin
          top: (y * tileH + 20) + 'px',
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
