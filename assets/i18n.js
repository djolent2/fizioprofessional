
(function(){
  function applyLang(lang){
    const d=(window.DICT&&window.DICT[lang])||(window.DICT&&window.DICT['sr'])||{};
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n; if(d[k]) el.textContent=d[k];});
    document.getElementById('btn-sr')?.classList.toggle('active',lang==='sr');
    document.getElementById('btn-en')?.classList.toggle('active',lang==='en');
    localStorage.setItem('lang',lang);
  }
  async function detectLang(){
    const saved=localStorage.getItem('lang'); if(saved){applyLang(saved); return;}
    let lang='en';
    try{
      const ctrl=new AbortController(); const t=setTimeout(()=>ctrl.abort(),1200);
      const r=await fetch('https://ipapi.co/json/',{signal:ctrl.signal}); clearTimeout(t);
      const j=await r.json(); if(j && ['RS','BA','ME','HR'].includes((j.country||'').toUpperCase())) lang='sr';
    }catch(e){ lang=(navigator.language||'en').toLowerCase().startsWith('sr')?'sr':'en'; }
    applyLang(lang);
  }
  window.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn-sr')?.addEventListener('click',()=>applyLang('sr'));
    document.getElementById('btn-en')?.addEventListener('click',()=>applyLang('en'));
    detectLang(); const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
  });
})();
