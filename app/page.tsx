export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; background: #F2C315; -webkit-font-smoothing: antialiased; }
        .wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100dvh; padding: 2rem; }
        .headline-wrap { width: 90vw; max-width: 1200px; display: flex; flex-direction: column; align-items: center; animation: drop 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
.line { font-family: var(--font-druk), 'Anton', sans-serif; font-weight: 400; color: #D42510; line-height: 0.95; letter-spacing: 0.02em; word-spacing: 0.08em; margin-bottom: -0.05em; text-transform: uppercase; white-space: nowrap; }        .experiment-link { font-family: 'IBM Plex Mono', monospace; font-size: 1.5rem; letter-spacing: 0.14em; text-transform: uppercase; color: #D42510; text-decoration: none; border-bottom: 1px solid rgba(212,37,16,0.35); padding-bottom: 2px; transition: border-color 0.2s ease; }
        .experiment-link:hover { border-color: #D42510; }
        .footer { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); animation: fadeIn 1.2s ease-out 0.5s both; }
        .footer a { font-family: 'IBM Plex Mono', monospace; font-weight: 400; font-size: 0.8125rem; letter-spacing: 0.12em; text-transform: uppercase; color: #7A6008; text-decoration: none; border-bottom: 1px solid rgba(122,96,8,0.4); padding-bottom: 2px; white-space: nowrap; transition: border-color 0.2s ease; }
        .footer a:hover { border-color: #7A6008; }
        @keyframes drop { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
      <div className="wrap">
        <div className="headline-wrap" id="headline-wrap">
          <div className="line" id="line1">STERGARIAN</div>
          <div className="line" id="line2">IS A SIDE PROJECT</div>
          <div className="experiments">
            <a className="experiment-link" href="https://jot.stergarian.com" target="_blank" rel="noopener noreferrer">EXPERIMENT_1B_JOT</a> <a className="experiment-link" href="/strangerthinking">RESOURCE_1D_STRANGERTHINKING</a>
            <a className="experiment-link" href="/moatsandlevers">RESOURCE_2E_MOATS+LEVERS</a>
          </div>
        </div>
        <footer className="footer">
          <a href="https://www.linkedin.com/in/zstergar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </footer>
      </div>
      <img
        src="/logo-s.png"
        alt="Stergarian"
        width={28}
        height={28}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "1.5rem",
          opacity: 0.15,
          display: "block",
          mixBlendMode: "multiply",
        }}
      />
      <script dangerouslySetInnerHTML={{ __html: `
        function matchWidths() {
          var l1 = document.getElementById('line1');
          var l2 = document.getElementById('line2');
          var wrap = document.getElementById('headline-wrap');
          if (!l1 || !l2 || !wrap) return;
          var w = wrap.offsetWidth;
          [l1, l2].forEach(function(el) {
            el.style.fontSize = '100px';
            var scale = w / el.offsetWidth;
            el.style.fontSize = (100 * scale) + 'px';
          });
        }
        matchWidths();
        window.addEventListener('resize', matchWidths);
        window.addEventListener('load', matchWidths);
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(matchWidths);
        }
      ` }} />
    </>
  );
}