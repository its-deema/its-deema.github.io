(function(){
var root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(s,c){return (c||document).querySelector(s)}function $$(s,c){return [].slice.call((c||document).querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var LANG='en',D,T;
var SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

/* ---------- theme: light by default ---------- */
function setTheme(t){root.setAttribute('data-theme',t);try{localStorage.setItem('theme',t)}catch(e){}
  $$('[data-theme-set]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.themeSet===t)});
  $$('[data-theme-toggle]').forEach(function(b){b.innerHTML=t==='dark'?MOON:SUN})}
var saved=null;try{saved=localStorage.getItem('theme')}catch(e){}
$$('[data-theme-set]').forEach(function(b){b.onclick=function(){setTheme(b.dataset.themeSet)}});
$$('[data-theme-toggle]').forEach(function(b){b.onclick=function(){setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark')}});

/* ---------- typing + clock ---------- */
var ri=0;function typeInto(el,t){if(reduce){el.textContent=t;return}clearTimeout(el._t);var n=0;(function s(){el.textContent=t.slice(0,n++);if(n<=t.length)el._t=setTimeout(s,40)})()}

function tick(){var d=new Date(),L=T.locale;$$('[data-clock]').forEach(function(el){el.textContent=d.toLocaleDateString(L,{weekday:'short',month:'short',day:'numeric'})+'  '+d.toLocaleTimeString(L,{hour:'numeric',minute:'2-digit'})});}
setInterval(tick,15000);

var ICON={
 linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
 github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>'
};
function contactHTML(){var L=LINKS;return '<p>'+T.open2+'</p><p class="email">'+esc(L.email)+'</p><div class="contact-row"><button class="mbtn primary" data-copy>'+T.copy+'</button><a class="mbtn" href="'+L.linkedin+'" target="_blank" rel="noopener">'+ICON.linkedin+'LinkedIn</a><a class="mbtn" href="'+L.github+'" target="_blank" rel="noopener">'+ICON.github+'GitHub</a></div>'}
document.addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(!b)return;var done=function(){b.textContent=T.copied;setTimeout(function(){b.textContent=T.copy},1500)};try{navigator.clipboard.writeText(LINKS.email).then(done,function(){b.textContent=LINKS.email})}catch(err){b.textContent=LINKS.email}});
function listHTML(rows){return '<ul class="list">'+rows.map(function(r){var inner='<b>'+esc(r.a)+'</b><span class="date">'+esc(r.d||'')+'</span><span class="sub">'+esc(r.b||'')+'</span>';return '<li>'+(r.url?'<a href="'+r.url+'" target="_blank" rel="noopener" style="display:contents">'+inner+'</a>':inner)+'</li>'}).join('')+'</ul>'}
function skillsHTML(){return '<div class="skillgrid">'+D.skills.map(function(g){return '<div><h4><span class="tagdot t-'+g.dot+'"></span>'+esc(g.name)+'</h4><div>'+g.items.map(function(s){return '<span class="chip">'+esc(s)+'</span>'}).join('')+'</div></div>'}).join('')+'</div>'}
function tagsHTML(t){return '<div class="tags">'+t.map(function(x){return '<span class="chip" dir="auto">'+esc(x)+'</span>'}).join('')+'</div>'}
function aboutHTML(){return '<div class="who"><span class="avatar">'+D.initials+'</span><div><h3>'+D.name+'</h3><span class="sub2">'+esc(D.title)+'</span></div></div>'+
  D.about.map(function(t){return '<p>'+esc(t)+'</p>'}).join('')+
  '<dl class="facts2">'+D.facts.map(function(f){return '<div><dt>'+esc(f[0])+'</dt><dd>'+esc(f[1])+'</dd></div>'}).join('')+'</dl>'}
function expHTML(){return '<ul class="list">'+D.experience.map(function(x){return '<li><b>'+esc(x.role)+'</b><span class="date">'+esc(x.date)+'</span><span class="sub">'+esc(x.org)+'</span><ul class="pts">'+x.points.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul></li>'}).join('')+'</ul>'+
  '<h4 class="sec-h">'+T.education+'</h4><ul class="list"><li><b>'+esc(D.education.degree)+'</b><span class="date">'+esc(D.education.date)+'</span><span class="sub">'+esc(D.education.school)+'</span></li></ul>'}
function projHTML(){return '<div class="projects">'+D.projects.map(function(p){return '<article class="proj p-'+p.color+'"><div class="proj-top"><b>'+esc(p.name)+'</b><span class="date">'+esc(p.date)+'</span></div><span class="sub">'+esc(p.kind)+'</span><p>'+esc(p.desc)+'</p>'+tagsHTML(p.tags)+(p.url?'<a class="proj-link" href="'+p.url+'" target="_blank" rel="noopener">'+ICON.github+'GitHub <span aria-hidden="true">↗</span></a>':'')+'</article>'}).join('')+'</div>'}
function resumeHTML(){return '<ul class="list">'+D.certs.map(function(c){return '<li><b>'+esc(c.name)+'</b><span class="date">'+esc(c.date)+'</span><span class="sub">'+esc(c.org)+'</span></li>'}).join('')+'</ul>'}
function appIcon(g1,g2,glyph){return '<svg viewBox="0 0 60 60"><defs><linearGradient id="g'+g1.slice(1)+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+g1+'"/><stop offset="1" stop-color="'+g2+'"/></linearGradient></defs><rect x="2" y="2" width="56" height="56" rx="14" fill="url(#g'+g1.slice(1)+')"/><g fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">'+glyph+'</g></svg>'}
var APPS=[
 {id:'about',icon:appIcon('#B9A3DC','#8E74C2','<circle cx="30" cy="24" r="7"/><path d="M17 44c2-7 7-10 13-10s11 3 13 10"/>')},
 {id:'experience',icon:appIcon('#86B3DC','#4F82B5','<rect x="15" y="22" width="30" height="21" rx="3"/><path d="M24 22v-4h12v4M15 31h30"/>')},
 {id:'projects',icon:appIcon('#9ED08A','#5E9F4C','<path d="M15 21h11l3 3h16v18H15z"/>')},
 {id:'skills',icon:appIcon('#3A3F47','#1C1F24','<path d="M18 23l7 7-7 7M29 38h13"/>')},
 {id:'resume',icon:appIcon('#FFE08A','#F4B93E','<circle cx="30" cy="26" r="9"/><path d="M24.5 33.5L22 45l8-4 8 4-2.5-11.5"/>')},
 {id:'contact',icon:appIcon('#7FC4F2','#3B8FD6','<rect x="15" y="20" width="30" height="21" rx="3"/><path d="M16 22l14 10 14-10"/>')}
];

/* ============ A. DESKTOP ============ */
var WIN={
 about:{t:function(){return T.about},w:440,pos:[.06,.4],html:aboutHTML},
 experience:{t:function(){return T.experience},w:500,pos:[.55,.36],html:expHTML},
 projects:{t:function(){return T.projects},w:620,pos:[.3,.24],html:projHTML},
 skills:{t:function(){return T.skillsWin},w:520,pos:[.32,.28],html:function(){return '<div class="term" dir="ltr"><div class="t-out"></div><label class="t-line"><span class="t-ps">deema@desktop ~ %</span><input class="t-in" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Terminal input"></label></div>'},init:termInit},
 writing:{t:function(){return T.writing},w:420,pos:[.5,.46],html:function(){return listHTML(D.writing.map(function(w){return{a:w.title,d:w.date,url:w.url}}))}},
 contact:{t:function(){return T.contact},w:440,pos:[.56,.5],html:contactHTML},
 resume:{t:function(){return T.resumeFile},w:440,pos:[.62,.2],html:resumeHTML},
 trash:{t:function(){return T.trash},w:460,pos:[.6,.22],html:trashHTML,init:trashInit}
};
function trashHTML(){return '<div class="trash"><ul class="tr-list">'+D.trash.map(function(t){return '<li><span class="tr-f" dir="ltr">'+esc(t.f)+'</span><span class="tr-n">'+esc(t.n)+'</span></li>'}).join('')+'</ul><div class="tr-foot"><span class="tr-c">'+D.trash.length+T.trashCount+'</span><button class="mbtn primary tr-empty">'+T.emptyTrash+'</button></div></div>'}
function trashInit(w){var b=$('.tr-empty',w);b.onclick=function(){var lis=$$('.tr-list li',w);lis.forEach(function(li,i){li.style.animationDelay=(i*60)+'ms';li.classList.add('gone')});
  setTimeout(function(){$('.trash',w).innerHTML='<p class="tr-done">'+esc(T.trashEmpty)+'</p>';var ic=$('.dicon[data-open="trash"]');if(ic)ic.classList.add('empty')},reduce?0:lis.length*60+380)}}
/* ---------- interactive terminal ---------- */
var TNAMES={about:'about',experience:'experience',projects:'projects',contact:'contact',certificates:'resume',trash:'trash'};
function termInit(w){var out=$('.t-out',w),inp=$('.t-in',w),body=$('.body',w),hist=[],hi=0;
  function line(html,cls){var d=document.createElement('div');d.className='t-row '+(cls||'');d.dir='auto';d.innerHTML=html;out.appendChild(d);body.scrollTop=body.scrollHeight}
  function echo(cmd){line('<span class="t-ps">deema@desktop ~ %</span> '+esc(cmd),'t-cmd')}
  function run(raw){var cmd=raw.trim();echo(cmd);if(!cmd)return;var a=cmd.split(/\s+/),c=a[0].toLowerCase(),arg=(a[1]||'').toLowerCase().replace(/\/$/,'');
    if(c==='help'){line(Object.keys(T.tHelp).map(function(k){return '<span class="t-k">'+(k+'        ').slice(0,8)+'</span> '+esc(T.tHelp[k])}).join('<br>'))}
    else if(c==='whoami'){line('<b>'+esc(D.name)+'</b> · '+esc(D.title)+'<br>'+esc(D.intro))}
    else if(c==='now'){line(D.now.map(function(n){return '<span class="t-k">'+esc(n.k)+'</span> '+esc(n.v)}).join('<br>'))}
    else if(c==='skills'){line(D.skills.map(function(g){return '<span class="t-k">'+esc(g.name)+'</span> '+g.items.map(esc).join(' · ')}).join('<br>'))}
    else if(c==='ls'){line(Object.keys(TNAMES).map(function(k){return '<span class="t-dir">'+k+'/</span>'}).join('  '))}
    else if(c==='open'||c==='cd'||TNAMES[c]){var n=TNAMES[c]?c:arg;if(TNAMES[n]){line(esc(T.tOpening)+' '+n+'…','t-dim');setTimeout(function(){openWin(TNAMES[n])},250)}else line(esc(c)+': '+esc(arg||'?')+': '+esc(T.tNotFound),'t-err')}
    else if(c==='lang'){setLang(arg==='en'?'en':arg==='ar'?'ar':(LANG==='ar'?'en':'ar'));setTimeout(function(){var t=$('#win-skills .t-in');if(t)t.focus()},50)}
    else if(c==='theme'){setTheme(arg==='dark'||arg==='light'?arg:(root.getAttribute('data-theme')==='dark'?'light':'dark'))}
    else if(c==='clear'){out.innerHTML=''}
    else if(c==='sudo'){line(esc(T.tSudo),'t-ok');setTimeout(function(){openWin('contact')},400)}
    else if(c==='echo'){line(esc(a.slice(1).join(' ')))}
    else line('zsh: '+esc(T.tNotFound)+': '+esc(c)+'. '+esc(T.tTry),'t-err');
  }
  line(esc(T.tHello),'t-dim');run('whoami');run('skills');
  inp.addEventListener('keydown',function(e){
    if(e.key==='Enter'){var v=inp.value;inp.value='';if(v.trim())hist.push(v);hi=hist.length;run(v)}
    else if(e.key==='ArrowUp'){if(hi>0){hi--;inp.value=hist[hi]}e.preventDefault()}
    else if(e.key==='ArrowDown'){if(hi<hist.length){hi++;inp.value=hist[hi]||''}e.preventDefault()}
    else if(e.key==='Tab'){e.preventDefault();var v2=inp.value.toLowerCase(),m=Object.keys(T.tHelp).concat(Object.keys(TNAMES)).filter(function(k){return k.indexOf(v2)===0});if(v2&&m.length)inp.value=m[0]+' '}
  });
  body.addEventListener('click',function(){if(!String(getSelection()))inp.focus()});
  if(matchMedia('(hover:hover)').matches)setTimeout(function(){inp.focus({preventScroll:true})},300);
}
/* ---------- sticky note ---------- */
function renderNote(){var n=$('#note');if(!n)return;n.setAttribute('aria-label',T.noteTitle);n.innerHTML='<b class="n-h">'+esc(T.noteTitle)+'</b>'+D.now.map(function(x){return '<p><span>'+esc(x.k)+'</span>'+esc(x.v)+'</p>'}).join('')}
(function(){var n=$('#note');if(!n)return;var on=false,sx,sy,ox,oy;
  n.addEventListener('pointerdown',function(e){if(innerWidth<=1100)return;on=true;sx=e.clientX;sy=e.clientY;ox=n.offsetLeft;oy=n.offsetTop;n.classList.add('lift');n.setPointerCapture(e.pointerId)});
  n.addEventListener('pointermove',function(e){if(!on)return;n.style.insetInlineStart='auto';n.style.left=(ox+e.clientX-sx)+'px';n.style.top=(oy+e.clientY-sy)+'px'});
  n.addEventListener('pointerup',function(){on=false;n.classList.remove('lift')})})();
var desk=$('#desk'),wins=$('#windows'),dock=$('#dock'),zTop=20;
function buildDock(){dock.innerHTML=APPS.map(function(a,i){return (i===APPS.length-1?'<span class="sep"></span>':'')+'<button data-open="'+a.id+'" aria-label="'+T[a.id]+'">'+a.icon+'<span class="tip">'+T[a.id]+'</span></button>'}).join('');bindMag()}
function isOpen(w){return !!w&&!w.hidden&&!w.classList.contains('closing')}
function closeWin(w){if(reduce){w.hidden=true;sync();return}w.classList.add('closing');sync();setTimeout(function(){w.hidden=true;w.classList.remove('closing');sync()},210)}
function toggleWin(id){var w=$('#win-'+id);if(isOpen(w))closeWin(w);else openWin(id)}
function openWin(id){
  var w=$('#win-'+id),cfg=WIN[id];
  if(!w){w=document.createElement('div');w.className='win';w.id='win-'+id;w.style.width='min('+cfg.w+'px,calc(100% - 32px))';
    w.innerHTML='<div class="bar"><div class="lights"><button class="l-close" aria-label="Close"><svg viewBox="0 0 10 10" stroke="currentColor" stroke-width="1.6"><path d="M2 2l6 6M8 2l-6 6"/></svg></button><i></i><button class="l-zoom" aria-label="Expand"><svg viewBox="0 0 10 10" fill="currentColor"><path d="M2 2h4L2 6zM8 8H4l4-4z"/></svg></button></div><b>'+cfg.t()+'</b></div><div class="body">'+cfg.html()+'</div><span class="grip" aria-hidden="true"></span>';
    wins.appendChild(w);place(w,cfg);
    $('.l-close',w).onclick=function(e){e.stopPropagation();closeWin(w)};
    $('.l-zoom',w).onclick=function(e){e.stopPropagation();zoom(w)};
    $('.bar',w).addEventListener('dblclick',function(e){if(!e.target.closest('button'))zoom(w)});
    drag(w);resizer(w);w.addEventListener('pointerdown',function(){front(w)});if(cfg.init)cfg.init(w);
  }else{w.classList.remove('closing');w.hidden=false;w.style.animation='none';w.offsetWidth;w.style.animation=''}
  front(w);sync();
}
/* window sizing: users can resize from the corner or expand with the green button, up to MAX */
var MAX_W=900,MIN_W=320,MIN_H=200;
function maxW(){return Math.min(MAX_W,desk.clientWidth-32)}
function maxH(top){return desk.clientHeight-top-110}
function zoom(w){if(innerWidth<=700)return;
  if(w._prev){var p=w._prev;w._prev=null;w.classList.add('animating');w.style.left=p.l;w.style.top=p.t;w.style.width=p.w;w.style.height=p.h;if(!p.sized)w.classList.remove('sized');setTimeout(function(){w.classList.remove('animating')},320);return}
  w._prev={l:w.style.left,t:w.style.top,w:w.style.width,h:w.style.height,sized:w.classList.contains('sized')};
  var W=maxW(),top=50,H=maxH(top);w.classList.add('animating','sized');
  w.style.width=W+'px';w.style.height=H+'px';w.style.left=((desk.clientWidth-W)/2)+'px';w.style.top=top+'px';front(w);
  setTimeout(function(){w.classList.remove('animating')},320)}
function resizer(w){var g=$('.grip',w),on=false,sx,sy,ow,oh,ol;
  g.addEventListener('pointerdown',function(e){if(innerWidth<=700)return;e.preventDefault();e.stopPropagation();on=true;front(w);w._prev=null;
    sx=e.clientX;sy=e.clientY;ow=w.offsetWidth;oh=w.offsetHeight;ol=w.offsetLeft;w.classList.add('sized');w.style.height=oh+'px';g.setPointerCapture(e.pointerId)});
  g.addEventListener('pointermove',function(e){if(!on)return;var rtl=LANG==='ar',dx=e.clientX-sx,dy=e.clientY-sy;
    var nw=Math.max(MIN_W,Math.min(maxW(),ow+(rtl?-dx:dx))),nh=Math.max(MIN_H,Math.min(maxH(w.offsetTop),oh+dy));
    w.style.width=nw+'px';w.style.height=nh+'px';if(rtl)w.style.left=(ol+ow-nw)+'px'});
  g.addEventListener('pointerup',function(){on=false})}
function place(w,cfg){var W=desk.clientWidth,H=desk.clientHeight,x=W*cfg.pos[0];if(LANG==='ar')x=W-x-w.offsetWidth;
  w.style.left=Math.max(16,Math.min(W-w.offsetWidth-16,x))+'px';w.style.top=Math.max(20,Math.min(H-w.offsetHeight-120,H*cfg.pos[1]))+'px'}
function front(w){$$('.win',wins).forEach(function(x){x.classList.remove('front')});w.classList.add('front');w.style.zIndex=++zTop}
function sync(){$$('#desktop [data-open]').forEach(function(b){b.classList.toggle(b.closest('#dock')?'open':'on',isOpen($('#win-'+b.dataset.open)))})}
function drag(w){var bar=$('.bar',w),sx,sy,ox,oy,on=false;
  bar.addEventListener('pointerdown',function(e){if(innerWidth<=700||e.target.closest('button'))return;on=true;sx=e.clientX;sy=e.clientY;ox=w.offsetLeft;oy=w.offsetTop;bar.setPointerCapture(e.pointerId)});
  bar.addEventListener('pointermove',function(e){if(!on)return;var W=desk.clientWidth,H=desk.clientHeight;
    w.style.left=Math.max(-w.offsetWidth+80,Math.min(W-80,ox+e.clientX-sx))+'px';w.style.top=Math.max(0,Math.min(H-40,oy+e.clientY-sy))+'px'});
  bar.addEventListener('pointerup',function(){on=false})}
document.addEventListener('click',function(e){var b=e.target.closest('#desktop [data-open]');if(b)toggleWin(b.dataset.open)});
/* dock magnification: measured from each icon's resting centre so icons grow smoothly */
function bindMag(){if(reduce||!matchMedia('(hover:hover) and (min-width:701px)').matches)return;var btns=$$('button',dock);
  dock.onpointermove=function(e){btns.forEach(function(b){var c=b.offsetLeft+b.offsetWidth/2+dock.getBoundingClientRect().left,d=Math.abs(e.clientX-c),s=1+.5*Math.max(0,1-d/120);
    b.style.transform='scale('+s.toFixed(3)+')';b.style.margin='0 '+((s-1)*13).toFixed(1)+'px'})};
  dock.onpointerleave=function(){btns.forEach(function(b){b.style.transform='';b.style.margin=''})}}

/* ---------- language ---------- */
function setLang(l){
  LANG=l;D=CONTENT[l];T=UI[l];
  root.lang=l;root.dir=l==='ar'?'rtl':'ltr';
  try{localStorage.setItem('lang',l)}catch(e){}
  $$('[data-lang]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.lang===l)});
  $$('[data-lang-toggle]').forEach(function(b){b.textContent=T.langBtn});
  $$('[data-t]').forEach(function(el){var k=el.dataset.t;el.textContent=k==='name'?D.name:T[k]});
  $$('[data-h1]').forEach(function(h){h.innerHTML=D.h1});
  $$('[data-intro]').forEach(function(p){p.textContent=D.intro});renderNote();$$('.dicon[data-open="trash"]').forEach(function(i){i.classList.remove('empty')});
  
  var openIds=$$('.win',wins).filter(isOpen).map(function(w){return w.id.slice(4)});
  wins.innerHTML='';buildDock();openIds.forEach(openWin);
  tick();
}
$$('[data-lang]').forEach(function(b){b.onclick=function(){setLang(b.dataset.lang)}});
$$('[data-lang-toggle]').forEach(function(b){b.onclick=function(){setLang(LANG==='ar'?'en':'ar')}});


/* ---------- start ---------- */
var savedLang=null;try{savedLang=localStorage.getItem('lang')}catch(e){}
setTheme(saved==='dark'?'dark':'light');
setLang(savedLang==='ar'?'ar':'en');
requestAnimationFrame(function(){openWin('about');if(innerWidth>700)setTimeout(function(){openWin('experience')},250)});
addEventListener('resize',function(){if(innerWidth>700)$$('.win',wins).forEach(function(w){var id=w.id.slice(4);if(WIN[id])place(w,WIN[id])})});
})();
