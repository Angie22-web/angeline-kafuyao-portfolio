const projects = [
  ["La Trinidad, Buguias won first place on Nateng ay Nataguan Cookfest","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/la-trinidad-buguias-won-first-place-on-nateng-ay-nataguan-cookfest/"],
  ["Wilcon opens first store in Benguet","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/wilcon-opens-first-store-in-benguet/"],
  ["Tuba Ava festival highlights Agri, Culture, Tourism growth","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/tuba-ava-festival-highlights-agri-culture-tourism-growth/"],
  ["DIWATA holds planting of the everlasting plant at the Baguio","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/diwata-holds-planting-of-the-everlasting-plant-at-the-baguio/"],
  ["Benguet strengthens quarantine measures amid ASF concerns","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/benguet-strengthens-quarantine-measures-amid-asf-concerns/"],
  ["Benguet tennis association offers clinic for aspiring players","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/benguet-tennis-association-offers-clinic-for-aspiring-players/"],
  ["Marcos to grace Benguet Adivay festival","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/marcos-to-grace-benguet-adivay-festival/"],
  ["Hungduan lad bags first Mr. Grand Phils. – Cordillera","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/hungduan-lad-bags-first-mr-grand-phils-cordillera/"],
  ["Cordillera Festivals of Festivals rekindles region’s unity","News Article","Baguio Herald Express","https://baguioheraldexpressonline.com/cordillera-festivals-of-festivals-rekindles-regions-unity/"],
  ["Wilcon Opening","News Report","Baguio Herald Express","https://www.facebook.com/watch/?v=1178242636622734"],
  ["Certificates of Candidacy — Lakas-CMD and Partido Federal ng Pilipinas","News Report","Baguio Herald Express","https://www.facebook.com/share/v/19rpTB36M2/"],
  ["Sustainability Tour","News Report","Baguio Herald Express","https://www.facebook.com/watch/?v=1248030339787198"],
  ["Mr. Baguio Bodybuilding","News Report","Baguio Herald Express","https://www.facebook.com/watch/?v=1206883423883021"],
  ["Ibagiw Gala Opening","News Report","Baguio Herald Express","https://www.facebook.com/watch/?v=1021675053091647"],
  ["Kapihan sa Benguet for Adivay 2024","News Report","Baguio Herald Express","https://www.facebook.com/share/v/1BZ4zAop6Q/"],
  ["Tourism Week sa La Trinidad","News Report","Baguio Herald Express","https://www.facebook.com/share/v/16yib23KEq/"],
  ["Mr. Grand Coronation","News Report","Baguio Herald Express","https://www.facebook.com/watch/?v=555269090514270"],
  ["Baguio Charter Day","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1FREsofVXr/"],
  ["34th Regular Meeting of the Sangguniang Bayan of La Trinidad","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1DFyvtNxkm/"],
  ["111th Regular Meeting of the Sangguniang Panlalawigan","Photos","Baguio Herald Express","https://www.facebook.com/share/p/18DMDPYCUj/"],
  ["28th Nick Domalsin Cup awarding — Mr. Baguio 2024 candidates","Photos","Baguio Herald Express","https://www.facebook.com/share/p/16SvFvh9pa/"],
  ["Tourism Week in La Trinidad","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1DeYPXnuJf/"],
  ["Certificates of Candidacy Filing","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1C378vKByo/"],
  ["Corn Cluster Consultative Meeting for CAR","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1KUdnoxnPJ/"],
  ["Indigenous Cordillera Games Competition","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1FdQUxUJm6/"],
  ["Tennis Tournament","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1BB3g9dQSY/"],
  ["PMSEA-DIWATA","Photos","Baguio Herald Express","https://www.facebook.com/share/p/14Y3KGCd2g2/"],
  ["Kinuday/Kiniing Cooking Contest","Photos","Baguio Herald Express","https://www.facebook.com/share/p/18LDV99Jf9/"],
  ["Adivay 2024","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1Hz3iWUrqY/"],
  ["Nateng ay Nataguan Cookfest","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1G3L19AHsQ/"],
  ["Benguet Provincial Capitol Christmas Tree Lighting","Photos","Baguio Herald Express","https://www.facebook.com/share/p/1G7Nkszwx3/"],
  ["City’s youth join voter engagement workshop","News Article","Baguio Public Information Office","https://new.baguio.gov.ph/news/citys-youth-join-voter-engagement-workshop"],
  ["Civil Registry Caravan","News Report","Baguio Public Information Office","https://www.facebook.com/share/v/19iN6Apko2/"],
  ["Filipino Food Month CookFest","News Report","Baguio Public Information Office","https://www.facebook.com/share/v/173DkaVjHs/"],
  ["National Cancer Awareness Month","News Report","Baguio Public Information Office","https://www.facebook.com/share/v/173UaBENwy/"],
  ["Electronic waste collection campaign","News Report","Baguio Public Information Office","https://www.facebook.com/share/v/177PWdqGFg/"],
  ["Ibagiw Creative Village","News Report","Baguio Public Information Office","https://www.facebook.com/share/v/1Lk1d4r2WK/"],
  ["Epekto ng plastic, polusyon","News Report","Baguio Public Information Office","https://www.facebook.com/share/v/1HFWK8ggXh/"],
  ["Fire Prevention Month","Reels","Baguio Public Information Office","https://www.facebook.com/share/v/1CSrc1rhw7/"],
  ["PANSA-NOPEN","Reels","Baguio Public Information Office","https://www.instagram.com/reel/DJYCpPMgEZf/"],
  ["Green Z","Reels","Baguio Public Information Office","https://www.instagram.com/reel/DIxKs7bg7ti/"],
  ["Where To Gov?","Reels","Baguio Public Information Office","https://www.instagram.com/reel/DIJCjipieGb/"],
  ["EP 2 | Green Z","Reels","Baguio Public Information Office","https://www.instagram.com/tv/DG1yIUNMvdX/"],
  ["EP 2 | Where To Gov?","Reels","Baguio Public Information Office","https://www.instagram.com/p/DGcCFflNbLq/"]
];

const grid=document.querySelector('#project-grid');const count=document.querySelector('#visible-count');const load=document.querySelector('#load-more');let filter='All',limit=9;
const visual={"News Article":["ARTICLE","Aa"],"News Report":["REPORT","▶"],"Photos":["PHOTO STORY","◎"],"Reels":["SHORT-FORM","↗"]};
const publisherImage={
  "Baguio Herald Express":"https://baguioheraldexpressonline.com/wp-content/uploads/2019/03/herald-baguio-city-2.jpg",
  "Baguio Public Information Office":"https://pbs.twimg.com/profile_images/1131044753892466688/os_r5V_R.jpg"
};
function render(){const matches=projects.filter(p=>filter==='All'||p[1]===filter);grid.innerHTML=matches.slice(0,limit).map((p,i)=>{const v=visual[p[1]]||[p[1],"✦"];const image=publisherImage[p[2]];return `<article class="project project-${p[1].toLowerCase().replaceAll(' ','-')}"><div class="project-art"><span class="art-icon" aria-hidden="true">${v[1]}</span><img class="publisher-image" src="${image}" alt="${p[2]} visual" loading="lazy" onerror="this.remove()"><span class="art-number">${String(i+1).padStart(2,'0')}</span><span class="art-label">${v[0]}</span></div><div class="project-body"><div class="meta"><span>${p[1]}</span><span>${p[2]}</span></div><h3>${p[0]}</h3><a href="${p[3]}" target="_blank" rel="noreferrer">View published work <span aria-hidden="true">↗</span></a></div></article>`}).join('');count.textContent=matches.length;load.hidden=limit>=matches.length}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');b.classList.add('active');filter=b.dataset.filter;limit=9;render()}));
load.addEventListener('click',()=>{limit+=9;render()});document.querySelector('.menu-button').addEventListener('click',e=>{const n=document.querySelector('#site-nav');n.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',n.classList.contains('open'))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#site-nav').classList.remove('open')));document.querySelector('#year').textContent=new Date().getFullYear();render();
