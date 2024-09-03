import{S as m,i as n}from"./assets/vendor-8501dee5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://pixabay.com",p=t=>{const i=new URLSearchParams({key:"45468562-3d934deccae668c7d7f46b2f1",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${u}/api/?${i}`;return console.log(o),fetch(o).then(s=>{if(!s.ok)throw new Error("Error!");return s.json()}).catch(s=>{throw console.error("Fetch error:",s),s})};function h(t){return`
    <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" />
        </a>
        <ul class="img-list">
        <li class="img-item">
            <h3 class="img-title">Likes</h3>
            <p class ="img-text">${t.likes}</p>
        </li>
        <li class="img-item">
            <h3 class="img-title">Views</h3>
            <p class ="img-text">${t.views}</p>
        </li>
        <li class="img-item">
            <h3 class="img-title">Comments</h3>
            <p class ="img-text">${t.comments}</p>
        </li>
        <li class="img-item">
            <h3 class="img-title">Downloads</h3>
            <p class ="img-text">${t.downloads}</p>
        </li>
        </ul>
    </li>
    `}const a=document.querySelector(".search-form"),f=document.querySelector(".gallery"),l=document.querySelector(".loader");let d=new m(".gallery li a",{captions:!0,captionClass:"style-caption",captionsData:"alt",captionDelay:250,disableRightClick:!0});const g=t=>{t.preventDefault(),l.classList.add("is-open");const i=a.elements.user_query.value.trim();if(i===""){n.info({message:"Please enter a search query!",position:"topCenter",title:"Attention",color:"red",timeout:3e3}),l.classList.remove("is-open");return}p(i).then(o=>{if(o.hits.length===0)n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",title:"Attention",color:"red",timeout:4e3});else{const s=o.hits.map(h).join("");f.innerHTML=s,d.refresh()}l.classList.remove("is-open")}).catch(o=>{n.error({message:"An error occurred while fetching data. Please try again!",position:"topCenter",title:"Error",color:"red",timeout:4e3}),l.classList.remove("is-open"),console.log(o)}),a.reset()};a.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
