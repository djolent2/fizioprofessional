
(function(){
  // Strings shared by every page (nav, footer, back-link). A page's own DICT can override any of them.
  const COMMON={
    sr:{"nav.services":"Usluge","nav.about":"O nama","nav.gallery":"Galerija","nav.contact":"Kontakt","nav.book":"Zakazivanje","back":"← Nazad na usluge","footer.top":"Na vrh ↑"},
    en:{"nav.services":"Services","nav.about":"About","nav.gallery":"Gallery","nav.contact":"Contact","nav.book":"Book","back":"← Back to services","footer.top":"Back to top ↑"}
  };
  function applyLang(lang){
    const page=(window.DICT&&(window.DICT[lang]||window.DICT['sr']))||{};
    const d=Object.assign({},COMMON[lang]||COMMON['sr'],page);
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n; if(d[k]) el.textContent=d[k];});
    document.getElementById('btn-sr')?.classList.toggle('active',lang==='sr');
    document.getElementById('btn-en')?.classList.toggle('active',lang==='en');
    localStorage.setItem('lang',lang);
  }
  function detectLang(){
    const saved=localStorage.getItem('lang'); if(saved){applyLang(saved); return;}
    // Browser language beats geo-IP: tourists at Zlatibor get EN, Serbian speakers abroad get SR,
    // the choice is instant, and no visitor data leaves the page.
    const langs=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en']).map(l=>String(l).toLowerCase());
    const srFamily=['sr','hr','bs','sh','cnr'];
    const isSr=langs.some(l=>srFamily.some(p=>l===p||l.startsWith(p+'-')));
    applyLang(isSr?'sr':'en');
  }
  window.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn-sr')?.addEventListener('click',()=>applyLang('sr'));
    document.getElementById('btn-en')?.addEventListener('click',()=>applyLang('en'));
    detectLang(); const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
    // Mobile menu: keep aria-expanded in sync and close the overlay when a link is tapped
    const menu=document.querySelector('.menu'), hamb=document.querySelector('.hamb');
    if(menu&&hamb){
      hamb.setAttribute('aria-expanded','false');
      hamb.addEventListener('click',()=>hamb.setAttribute('aria-expanded',String(menu.classList.contains('open'))));
      menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');hamb.setAttribute('aria-expanded','false');}));
    }
  });
})();
