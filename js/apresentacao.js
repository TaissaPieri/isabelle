/*
======================================================================
 NAVEGAÇÃO E CRONÔMETRO
======================================================================
 Normalmente você NÃO precisa editar este arquivo.
 Ele controla: barra de progresso, slide atual, animações, cronômetro,
 setas/PageUp/PageDown, tela cheia (F) e zerar cronômetro (R).
======================================================================
*/

const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.dots a')];
const progress=document.getElementById('progress');
const who=document.getElementById('who');
const counter=document.getElementById('counter');
function update(){
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(max?scrollY/max*100:0)+'%';
  let idx=0;
  slides.forEach((s,i)=>{if(s.getBoundingClientRect().top<=innerHeight*.46)idx=i});
  dots.forEach((d,i)=>d.classList.toggle('active',i===idx));
  who.textContent=slides[idx].dataset.presenter||'GRUPO';
  counter.textContent=`${idx+1} / ${slides.length}`;
}
addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.querySelectorAll('.reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('show'),i*45));}})},{threshold:.22});
slides.forEach(s=>observer.observe(s));
let seconds=0;setInterval(()=>{seconds++;document.getElementById('timer').textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`},1000);
document.addEventListener('keydown',e=>{let idx=0;slides.forEach((s,i)=>{if(s.getBoundingClientRect().top<=innerHeight*.5)idx=i});if(['ArrowDown','PageDown'].includes(e.key)){e.preventDefault();slides[Math.min(idx+1,slides.length-1)].scrollIntoView({behavior:'smooth'})}if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();slides[Math.max(idx-1,0)].scrollIntoView({behavior:'smooth'})}if(e.key.toLowerCase()==='f'){if(!document.fullscreenElement)document.documentElement.requestFullscreen();else document.exitFullscreen()}if(e.key.toLowerCase()==='r')seconds=0});
