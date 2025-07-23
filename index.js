import{a as u,S as f,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="51458279-4e6b2a3cff5506a1c0eebb844",d="https://pixabay.com/api/";async function m(a){const s={key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(d,{params:s})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const s=a.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p><span>Likes</span> ${e.likes}</p>
        <p><span>Views</span> ${e.views}</p>
        <p><span>Comments</span> ${e.comments}</p>
        <p><span>Downloads</span> ${e.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",s),y.refresh()}function h(){c.innerHTML=""}function L(){l.classList.add("visible")}function b(){l.classList.remove("visible")}const w=document.querySelector(".form");w.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements["search-text"].value.trim();if(!s){n.warning({title:"Warning",message:"Please enter a search term!"});return}h(),L();try{const e=await m(s);e.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):g(e.hits)}catch(e){n.error({message:"Something went wrong. Please try again later."}),console.error(e)}finally{b()}});
//# sourceMappingURL=index.js.map
