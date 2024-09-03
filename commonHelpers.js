import{S as u,i as c}from"./assets/vendor-8501dee5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com",h=(r,s,o)=>{const i=new URLSearchParams({key:"45468562-3d934deccae668c7d7f46b2f1",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:o}),e=`${p}/api/?${i}`;return console.log(e),fetch(e).then(t=>{if(!t.ok)throw new Error("Error!");return t.json()}).catch(t=>{throw console.error("Fetch error:",t),t})};function f(r){return`
    <li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img" />
        </a>
        <ul class="img-list">
        <li class="img-item">
            <h3 class="img-title">Likes</h3>
            <p class ="img-text">${r.likes}</p>
        </li>
        <li class="img-item">
            <h3 class="img-title">Views</h3>
            <p class ="img-text">${r.views}</p>
        </li>
        <li class="img-item">
            <h3 class="img-title">Comments</h3>
            <p class ="img-text">${r.comments}</p>
        </li>
        <li class="img-item">
            <h3 class="img-title">Downloads</h3>
            <p class ="img-text">${r.downloads}</p>
        </li>
        </ul>
    </li>
    `}const a=document.querySelector(".search-form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader");let d=new u(".gallery li a",{captions:!0,captionClass:"style-caption",captionsData:"alt",captionDelay:250,disableRightClick:!0});const g=r=>{r.preventDefault(),l.classList.add("is-open");const s=a.elements.user_query.value.trim();if(s===""){c.info({message:"Please enter a search query!",position:"topCenter",title:"Attention",color:"red",timeout:3e3}),l.classList.remove("is-open");return}h(s).then(o=>{if(o.hits.length===0)c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",title:"Attention",color:"red",timeout:4e3}),m.innerHTML="";else{const i=o.hits.map(f).join("");m.innerHTML=i,d.refresh()}l.classList.remove("is-open")}).catch(o=>{c.error({message:"An error occurred while fetching data. Please try again!",position:"topCenter",title:"Error",color:"red",timeout:4e3}),l.classList.remove("is-open"),console.log(o)}),a.reset()};a.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
