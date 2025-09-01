// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// ポートフォリオのインタラクティブ機能
document.addEventListener('turbo:load', function() {
  // 出現アニメ
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('revealed'); io.unobserve(e.target); } });
  }, {threshold: .14});
  document.querySelectorAll('[data-reveal]').forEach(el=> io.observe(el));
  
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  // ヒーロー：軽量パララックス
  const portal = document.querySelector('.hero--impact .portal');
  if (portal) {
    window.addEventListener('mousemove', (e)=>{
      const x = (e.clientX / window.innerWidth - .5) * 10;
      const y = (e.clientY / window.innerHeight - .5) * 10;
      portal.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // 現在地ハイライト
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  function setActive(){ let idx = 0; const sY = window.scrollY + 100; sections.forEach((sec,i)=>{ if(sec.offsetTop <= sY) idx = i; }); navLinks.forEach((a,i)=> a.classList.toggle('active', i===idx)); }
  window.addEventListener('scroll', setActive, {passive:true}); window.addEventListener('load', setActive);

  // 星の瞬き
  (function(){
    const c = document.getElementById('starfield'); if(!c) return; const ctx = c.getContext('2d');
    const DPR = Math.max(1, window.devicePixelRatio || 1);
    let stars=[]; let W=0, H=0;
    function resize(){
      W = c.width = Math.floor(window.innerWidth * DPR);
      H = c.height = Math.floor(window.innerHeight * DPR);
      c.style.width = window.innerWidth + 'px'; c.style.height = window.innerHeight + 'px';
      const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      const count = Math.max(60, Math.floor((W*H)/(isLowEnd?24000:16000)/DPR));
      stars = Array.from({length: count}, ()=>({x: Math.random()*W, y: Math.random()*H, r: (Math.random()*1.2 + .4) * DPR, base: Math.random()*0.6 + 0.15, ph: Math.random()*Math.PI*2, sp: 0.005 + Math.random()*0.015}));
    }
    function draw(){
      ctx.clearRect(0,0,W,H); ctx.fillStyle = '#fff';
      for(const s of stars){ const a = s.base + 0.35 * Math.sin(s.ph); ctx.globalAlpha = Math.max(0, Math.min(1, a)); ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill(); s.ph += s.sp; }
      ctx.globalAlpha = 1; requestAnimationFrame(draw);
    }
    window.addEventListener('resize', resize, {passive:true}); resize(); draw();
  })();

  // タイプライタ
  (function(){
    const el = document.getElementById('typewriter'); if(!el) return; const text = el.dataset.text || '';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = text; return; }
    let i = 0; const step = () => { i += Math.max(1, Math.round(Math.random()*2)); el.textContent = text.slice(0, i); if(i < text.length){ setTimeout(step, 28 + Math.random()*70); } }; step();
  })();
});
