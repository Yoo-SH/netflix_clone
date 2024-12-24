(function(){"use strict";var e={5659:function(e,t,o){var a=o(5130),s=o(6768);const l={id:"app",class:"full-width"},i={class:"full-width"},n={key:0,class:"full-width"};function r(e,t,o,a,r,c){const u=(0,s.g2)("NavbarComponent"),d=(0,s.g2)("router-view"),p=(0,s.g2)("FooterComponent");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("nav",i,[(0,s.bF)(u)]),(0,s.bF)(d),e.isPopularTableRoute?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("footer",n,[(0,s.bF)(p)]))])}var c=o(1387),u=o(4232);const d={class:"navbar"},p={class:"navbar-left"},v={class:"svg-inline--fa fa-ticket","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ticket",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",style:{height:"100%",color:"rgb(229, 9, 20)"}},g={class:"navbar-right"},m={key:1,class:"nav-item"},h={class:"user-email"};function k(e,t,o,a,l,i){const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",d,[(0,s.Lk)("div",p,[(0,s.bF)(n,{to:"/#",class:"logo"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)("svg",v,t[0]||(t[0]=[(0,s.Lk)("path",{class:"",fill:"currentColor",d:"M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"},null,-1)])))])),_:1}),(0,s.bF)(n,{to:"/",class:"nav-item"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("Home")]))),_:1}),(0,s.bF)(n,{to:"/popular",class:"nav-item"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("Popular")]))),_:1}),(0,s.bF)(n,{to:"/search",class:"nav-item"},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("Search")]))),_:1}),(0,s.bF)(n,{to:"/wishlist",class:"nav-item"},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("Wishlist")]))),_:1})]),(0,s.Lk)("div",g,[e.isAuthenticated?((0,s.uX)(),(0,s.CE)("div",m,[(0,s.Lk)("span",h,(0,u.v_)(e.userEmail),1),(0,s.bF)(n,{onClick:e.logout,to:"/Sign",class:"nav-item logout-button"},{default:(0,s.k6)((()=>t[6]||(t[6]=[(0,s.eW)("Logout")]))),_:1},8,["onClick"])])):((0,s.uX)(),(0,s.Wv)(n,{key:0,to:"/Sign",class:"nav-item sign-button"},{default:(0,s.k6)((()=>t[5]||(t[5]=[(0,s.eW)("Sign")]))),_:1}))])])}var f=o(5234);const w=(0,f.nY)("auth",{state:()=>({isAuthenticated:!!localStorage.getItem("authUser"),user:localStorage.getItem("authUser")?JSON.parse(localStorage.getItem("authUser")||"{}"):null}),actions:{login(e){this.isAuthenticated=!0,this.user=e,localStorage.setItem("authUser",JSON.stringify(e))},logout(){this.isAuthenticated=!1,this.user=null,localStorage.removeItem("authUser")}}});var b=(0,s.pM)({name:"NavbarComponent",setup(){const e=w(),{isAuthenticated:t,user:o}=(0,f.bP)(e),{logout:a}=e;return{isAuthenticated:t,userEmail:o?.value?.email||"",logout:a}}}),C=o(1241);const L=(0,C.A)(b,[["render",k],["__scopeId","data-v-6809eeaa"]]);var S=L;const y={class:"footer"},I={class:"footer-links"};function M(e,t,o,a,l,i){const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("footer",y,[(0,s.Lk)("div",I,[(0,s.bF)(n,{to:"/help",class:"footer-link"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Help Center")]))),_:1}),(0,s.bF)(n,{to:"/terms",class:"footer-link"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("Terms of Use")]))),_:1}),(0,s.bF)(n,{to:"/privacy",class:"footer-link"},{default:(0,s.k6)((()=>t[2]||(t[2]=[(0,s.eW)("Privacy Policy")]))),_:1}),(0,s.bF)(n,{to:"/contact",class:"footer-link"},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("Contact Us")]))),_:1})]),t[4]||(t[4]=(0,s.Lk)("div",{class:"footer-copyright"},[(0,s.Lk)("p",null,"© 2024 Netflix Clone. All rights reserved.")],-1))])}var T=(0,s.pM)({name:"FooterComponent"});const E=(0,C.A)(T,[["render",M],["__scopeId","data-v-2e1fd282"]]);var _=E,P=(0,s.pM)({name:"App",components:{NavbarComponent:S,FooterComponent:_},setup(){const e=(0,c.lq)(),t=(0,s.EW)((()=>"/popular/table"===e.path));return{isPopularTableRoute:t}}});const F=(0,C.A)(P,[["render",r]]);var X=F;const R={id:"home"},K={key:0,class:"loading"},O={class:"section-title"},$={class:"poster-list"};function N(e,t,o,a,l,i){const n=(0,s.g2)("PosterComponent");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",R,[e.isFetching?((0,s.uX)(),(0,s.CE)("div",K,"Loading...")):(0,s.Q3)("",!0),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.movieSections,((t,o)=>((0,s.uX)(),(0,s.CE)("div",{class:"movie-section",key:o},[(0,s.Lk)("h2",O,(0,u.v_)(t.title),1),(0,s.Lk)("div",$,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.data,(t=>((0,s.uX)(),(0,s.Wv)(n,{key:t.id,movie:t,onToggleMovieDetails:e.toggleMovieDetails},null,8,["movie","onToggleMovieDetails"])))),128))])])))),128))]),e.selectedMovie?((0,s.uX)(),(0,s.Wv)(n,{key:0,movie:e.selectedMovie,onCloseMovieDetails:e.closeMovieDetails},null,8,["movie","onCloseMovieDetails"])):(0,s.Q3)("",!0)],64)}o(4114),o(1454);var V=o(144);const x=["src"],A={class:"poster-title"},J={class:"movie-details-content"},W=["src"];function U(e,t,o,l,i,n){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",{class:"poster-container",onClick:t[0]||(t[0]=(...t)=>e.handlePosterClick&&e.handlePosterClick(...t))},[(0,s.Lk)("img",{src:e.movie.image,alt:"movie poster",class:(0,u.C4)(["poster-image",{selected:e.isItemInLocalStorage(e.movie)}])},null,10,x),(0,s.Lk)("p",A,(0,u.v_)(e.movie.name),1)]),e.showDetails?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"movie-details-modal",onClick:t[2]||(t[2]=(0,a.D$)(((...t)=>e.closeMovieDetails&&e.closeMovieDetails(...t)),["self"]))},[(0,s.Lk)("div",J,[(0,s.Lk)("h2",null,(0,u.v_)(e.movie.name),1),(0,s.Lk)("img",{src:e.movie.image,alt:"movie poster",class:"details-poster-image"},null,8,W),(0,s.Lk)("p",null,[t[3]||(t[3]=(0,s.Lk)("strong",null,"Description:",-1)),(0,s.eW)(" "+(0,u.v_)(e.movie.description),1)]),(0,s.Lk)("p",null,[t[4]||(t[4]=(0,s.Lk)("strong",null,"Rating:",-1)),(0,s.eW)(" "+(0,u.v_)(e.movie.rating),1)]),(0,s.Lk)("p",null,[t[5]||(t[5]=(0,s.Lk)("strong",null,"Genres:",-1)),(0,s.eW)(" "+(0,u.v_)(e.movie.genre),1)]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...t)=>e.closeMovieDetails&&e.closeMovieDetails(...t)),class:"close-button"},"Close")])])):(0,s.Q3)("",!0)])}o(8992),o(7550);var Q=(0,s.pM)({name:"PosterComponent",props:{movie:{type:Object,required:!0}},setup(e){const t=(0,V.KR)(!1),o=()=>{a(),l(e.movie)},a=()=>{t.value=!t.value},s=()=>{t.value=!1},l=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const o=t.findIndex((t=>t.id===e.id));-1===o?t.push({id:e.id,name:e.name,image:e.image}):t.splice(o,1),localStorage.setItem("selectedMovies",JSON.stringify(t))},i=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return{showDetails:t,toggleMovieDetails:a,closeMovieDetails:s,toggleLocalStorage:l,isItemInLocalStorage:i,handlePosterClick:o}}});const D=(0,C.A)(Q,[["render",U],["__scopeId","data-v-8d1cb87a"]]);var j=D;const B="https://api.themoviedb.org/3";var H=(0,s.pM)({name:"HomeViewComponent",components:{PosterComponent:j},setup(){const e=(0,V.KR)([]),t=(0,V.KR)(!1),o=(0,V.KR)(!1),a=(0,V.KR)(null),l=(0,c.rd)(),i="281dc9b971acbdf5c2a5787ded23f9b9";i||console.error("API key is missing!");const n=async(t,o)=>{const a=`${B}/${t}?api_key=${i}&language=ko-KR&page=1`;try{const t=await fetch(a),s=await t.json(),l=s.results.slice(0,5).map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`,description:e.overview,rating:e.vote_average,genre:e.genre_ids.join(", ")})));e.value.push({title:o,data:l})}catch(s){console.error("Failed to fetch movies:",s)}},r=async()=>{if(!t.value){t.value=!0;try{await Promise.all([n("movie/popular","Popular Movies"),n("movie/top_rated","Top Rated Movies"),n("movie/upcoming","Upcoming Movies"),n("trending/movie/week","Trending This Week")])}catch(e){console.error("Failed to fetch all movie sections:",e)}finally{t.value=!1}}},u=()=>{o.value=window.scrollY>200},d=()=>{window.scrollTo({top:0,behavior:"smooth"})},p=()=>{l.push("/wishlist")},v=e=>{a.value&&a.value.id===e.id?a.value=null:a.value=e},g=()=>{a.value=null};return(0,s.sV)((()=>{r(),window.addEventListener("scroll",u)})),(0,s.xo)((()=>{window.removeEventListener("scroll",u)})),{movieSections:e,isFetching:t,showTopButton:o,selectedMovie:a,scrollToTop:d,goToWishlistView:p,toggleMovieDetails:v,closeMovieDetails:g}}});const G=(0,C.A)(H,[["render",N],["__scopeId","data-v-1454db5e"]]);var Y=G;const q={id:"popular"},z={key:0,class:"loading"},Z={class:"poster-list"},ee=["onClick"],te=["src"],oe={class:"poster-title"},ae={ref:"infiniteScrollTarget",class:"infinite-scroll-target"};function se(e,t,o,a,l,i){return(0,s.uX)(),(0,s.CE)("div",q,[(0,s.Lk)("div",null,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToTableView&&e.goToTableView(...t)),class:"toggle-view-button"}," Switch to Table View ")]),e.isFetching&&!e.isTableView?((0,s.uX)(),(0,s.CE)("div",z,"Loading...")):(0,s.Q3)("",!0),e.isTableView?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",{key:1,onClick:t[1]||(t[1]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")),(0,s.Lk)("div",Z,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.popularItems,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:"poster-container",onClick:o=>e.toggleLocalStorage(t)},[(0,s.Lk)("img",{src:t.image,alt:"movie poster",class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,te),(0,s.Lk)("p",oe,(0,u.v_)(t.name),1)],8,ee)))),128))]),(0,s.Lk)("div",ae,null,512)])}const le="https://api.themoviedb.org/3";var ie=(0,s.pM)({name:"App",setup(){const e=(0,V.KR)([]),t=(0,V.KR)(1),o=(0,V.KR)(!1),a=(0,V.KR)(!0),l=(0,c.rd)(),i=(0,V.KR)(null),n="281dc9b971acbdf5c2a5787ded23f9b9",r=async(a=1)=>{if(o.value)return;o.value=!0;const s=`${le}/movie/popular?api_key=${n}&language=ko-KR&page=${a}`;console.log(n);try{const o=await fetch(s);if(!o.ok)throw new Error("Network response was not ok");const a=await o.json();e.value=[...e.value,...a.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))],t.value+=1}catch(l){console.error("Failed to fetch popular movies:",l)}finally{o.value=!1}},u=e=>{const[a]=e;a.isIntersecting&&!o.value&&r(t.value)},d=()=>{window.scrollTo({top:0,behavior:"smooth"})},p=()=>{l.push("/popular/table")},v=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const a=o.findIndex((e=>e.id===t.id));-1===a?o.push(t):o.splice(a,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),e.value=[...e.value]},g=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,s.sV)((()=>{r();const e=new IntersectionObserver(u,{root:null,rootMargin:"0px",threshold:.1});i.value&&e.observe(i.value)})),{popularItems:e,isFetching:o,showTopButton:a,scrollToTop:d,goToTableView:p,toggleLocalStorage:v,isItemInLocalStorage:g,infiniteScrollTarget:i}}});const ne=(0,C.A)(ie,[["render",se],["__scopeId","data-v-aaa890c6"]]);var re=ne;const ce={id:"table-view"},ue={class:"grid-view"},de={class:"grid-container"},pe=["onClick"],ve={class:"poster-image-wrapper"},ge=["src","alt"],me={class:"poster-title"},he={class:"pagination"},ke=["disabled"],fe=["onClick"],we=["disabled"];function be(e,t,o,a,l,i){return(0,s.uX)(),(0,s.CE)("div",ce,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToPopularView&&e.goToPopularView(...t)),class:"toggle-view-button"},"Switch to Popular View"),(0,s.Lk)("div",ue,[(0,s.Lk)("div",de,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.paginatedItems,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:"grid-item",onClick:o=>e.toggleLocalStorage(t)},[(0,s.Lk)("div",ve,[t.image?((0,s.uX)(),(0,s.CE)("img",{key:0,src:t.image,alt:t.name,class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,ge)):(0,s.Q3)("",!0),(0,s.Lk)("div",me,(0,u.v_)(t.name),1)])],8,pe)))),128))]),(0,s.Lk)("div",he,[(0,s.Lk)("button",{onClick:t[1]||(t[1]=t=>e.goToPage(e.currentPage-1)),disabled:1===e.currentPage},"Previous",8,ke),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.visiblePages,(t=>((0,s.uX)(),(0,s.CE)("span",{key:t,onClick:o=>e.goToPage(t),class:(0,u.C4)(["page-number",{active:t===e.currentPage}])},(0,u.v_)(t),11,fe)))),128)),(0,s.Lk)("button",{onClick:t[2]||(t[2]=t=>e.goToPage(e.currentPage+1)),disabled:e.currentPage===e.totalPages},"Next",8,we)])])])}var Ce=(0,s.pM)({name:"TableViewComponent",props:{items:{type:Array,required:!0}},setup(e){const t=(0,V.KR)([]),o=(0,V.KR)(1),a=20,l=(0,V.KR)(!1),i=(0,c.rd)(),n=(0,s.EW)((()=>Math.ceil(t.value.length/a))),r=(0,s.EW)((()=>{const e=(o.value-1)*a,s=e+a;return t.value.slice(e,s)})),u=(0,s.EW)((()=>{const e=[],t=8,a=n.value;let s=Math.max(1,o.value-Math.floor(t/2)),l=s+t-1;l>a&&(l=a,s=Math.max(1,l-t+1));for(let o=s;o<=l;o++)e.push(o);return e})),d="281dc9b971acbdf5c2a5787ded23f9b9",p=async(e=!1)=>{if(l.value)return;l.value=!0;const a="https://api.themoviedb.org/3";try{if(e)for(let e=1;e<=8;e++){const o=`${a}/movie/popular?api_key=${d}&language=ko-KR&page=${e}`,s=await fetch(o),l=await s.json();t.value=[...t.value,...l.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))]}else{const e=`${a}/movie/popular?api_key=${d}&language=ko-KR&page=${o.value}`,s=await fetch(e),l=await s.json();t.value=[...t.value,...l.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))]}}catch(s){console.error("Failed to fetch popular movies:",s)}finally{l.value=!1}},v=e=>{e>0&&e<=n.value&&(o.value=e,p())},g=()=>{o.value>1&&(o.value-=1,p())},m=()=>{o.value<n.value&&(o.value+=1,p())},h=()=>{i.push("/popular")},k=e=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const a=o.findIndex((t=>t.id===e.id));-1===a?o.push(e):o.splice(a,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),console.log("Updated localStorage:",o),t.value=[...t.value]},f=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,s.sV)((()=>{p(!0)})),{paginatedItems:r,currentPage:o,totalPages:n,visiblePages:u,goToPage:v,previousPage:g,nextPage:m,popularItems:t,goToPopularView:h,toggleLocalStorage:k,isItemInLocalStorage:f}}});const Le=(0,C.A)(Ce,[["render",be],["__scopeId","data-v-238ef5e6"]]);var Se=Le;const ye={key:0,class:"loading"},Ie={id:"wishlist"},Me={class:"poster-list"},Te=["onClick"],Ee=["src"],_e={class:"poster-title"};function Pe(e,t,o,a,l,i){return(0,s.uX)(),(0,s.CE)(s.FK,null,[e.isFetching?((0,s.uX)(),(0,s.CE)("div",ye,"Loading...")):(0,s.Q3)("",!0),(0,s.Lk)("div",Ie,[e.showTopButton?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[0]||(t[0]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")):(0,s.Q3)("",!0),(0,s.Lk)("div",Me,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.popularItems,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:(0,u.C4)(["poster-container",{"selected-poster":e.isItemInLocalStorage(t)}]),onClick:o=>e.toggleLocalStorage(t)},[(0,s.Lk)("img",{src:t.image,alt:"movie poster",class:"poster-image"},null,8,Ee),(0,s.Lk)("p",_e,(0,u.v_)(t.name),1)],10,Te)))),128))])])],64)}var Fe=(0,s.pM)({name:"WishlistViewComponent",setup(){const e=(0,V.KR)([]),t=((0,V.KR)(1),(0,V.KR)(!1)),o=(0,V.KR)(!1),a=(0,c.rd)(),l=async()=>{if(!t.value){t.value=!0;try{const t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");e.value=[...t]}catch(o){console.error("Failed to fetch popular movies:",o)}finally{t.value=!1}}},i=()=>{const e=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-10;e&&l(),o.value=window.scrollY>200},n=()=>{window.scrollTo({top:0,behavior:"smooth"})},r=()=>{a.push("/popular")},u=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const a=o.findIndex((e=>e.id===t.id));-1===a?o.push(t):o.splice(a,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),e.value=[...o]},d=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,s.sV)((()=>{l(),window.addEventListener("scroll",i)})),(0,s.xo)((()=>{window.removeEventListener("scroll",i)})),{popularItems:e,isFetching:t,showTopButton:o,scrollToTop:n,goToPopularView:r,toggleLocalStorage:u,isItemInLocalStorage:d}}});const Xe=(0,C.A)(Fe,[["render",Pe],["__scopeId","data-v-96404bda"]]);var Re=Xe;const Ke={class:"search-filter-container"},Oe={class:"search-container"},$e={class:"filter-section"},Ne=["value"],Ve={key:0,class:"loading"},xe={class:"grid-view"},Ae={class:"grid-container"},Je=["onClick"],We=["src","alt"],Ue={class:"poster-title"},Qe={ref:"infiniteScrollTarget",class:"infinite-scroll-target"};function De(e,t,o,l,i,n){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",Ke,[(0,s.Lk)("div",Oe,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),placeholder:"Search movies...",class:"search-input"},null,512),[[a.Jo,e.searchQuery]]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...t)=>e.searchMovies&&e.searchMovies(...t)),class:"search-button"},"Search")]),(0,s.Lk)("div",$e,[(0,s.Lk)("label",null,[t[8]||(t[8]=(0,s.eW)(" Genre: ")),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedGenre=t)},[t[7]||(t[7]=(0,s.Lk)("option",{value:""},"All",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.genres,(e=>((0,s.uX)(),(0,s.CE)("option",{key:e.id,value:e.id},(0,u.v_)(e.name),9,Ne)))),128))],512),[[a.u1,e.selectedGenre]])]),(0,s.Lk)("label",null,[t[10]||(t[10]=(0,s.eW)(" Rating: ")),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedRatingRange=t)},t[9]||(t[9]=[(0,s.Fv)('<option value="" data-v-4d18d958>All</option><option value="0-4" data-v-4d18d958>4 and below</option><option value="4-5" data-v-4d18d958>4 - 5</option><option value="5-6" data-v-4d18d958>5 - 6</option><option value="6-7" data-v-4d18d958>6 - 7</option><option value="7-8" data-v-4d18d958>7 - 8</option><option value="8-9" data-v-4d18d958>8 - 9</option><option value="9-10" data-v-4d18d958>9 - 10</option>',8)]),512),[[a.u1,e.selectedRatingRange]])]),(0,s.Lk)("label",null,[t[12]||(t[12]=(0,s.eW)(" Sort By: ")),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.sortBy=t)},t[11]||(t[11]=[(0,s.Lk)("option",{value:"popularity.asc"},"Popularity (Ascending)",-1),(0,s.Lk)("option",{value:"popularity.desc"},"Popularity (Descending)",-1)]),512),[[a.u1,e.sortBy]])]),(0,s.Lk)("button",{onClick:t[5]||(t[5]=(...t)=>e.resetFilters&&e.resetFilters(...t)),class:"reset-button"},"Reset Filters")])]),e.isFetching?((0,s.uX)(),(0,s.CE)("div",Ve,"Loading...")):(0,s.Q3)("",!0),(0,s.Lk)("div",xe,[(0,s.Lk)("div",Ae,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.movies,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:"grid-item poster-container",onClick:o=>e.toggleLocalStorage(t)},[(0,s.Lk)("img",{src:`https://image.tmdb.org/t/p/w500${t.poster_path}`,alt:t.title,class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,We),(0,s.Lk)("p",Ue,(0,u.v_)(t.title),1)],8,Je)))),128))]),(0,s.Lk)("div",Qe,null,512)]),e.showTopButton?((0,s.uX)(),(0,s.CE)("button",{key:1,onClick:t[6]||(t[6]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")):(0,s.Q3)("",!0)],64)}const je="https://api.themoviedb.org/3";var Be=(0,s.pM)({name:"SearchViewComponent",setup(){const e=(0,V.KR)([]),t=(0,V.KR)([]),o=(0,V.KR)(""),a=(0,V.KR)(""),l=(0,V.KR)("popularity"),i=(0,V.KR)(!1),n=(0,V.KR)(1),r=(0,V.KR)(!1),c=(0,V.KR)(""),u=(0,V.KR)(null),d=async(t=1)=>{if(i.value)return;i.value=!0;const s="281dc9b971acbdf5c2a5787ded23f9b9";let n=`${je}/discover/movie?api_key=${s}&language=ko-KR&page=${t}`;if(o.value&&(n+=`&with_genres=${o.value}`),a.value){const[e,t]=a.value.split("-");n+=`&vote_average.gte=${e}&vote_average.lte=${t}`}n+=`&sort_by=${l.value}`,c.value&&(n=`${je}/search/movie?api_key=${s}&language=ko-KR&query=${c.value}&page=${t}`);try{const t=await fetch(n),o=await t.json();e.value=[...e.value,...o.results]}catch(r){console.error("Failed to fetch movies:",r)}finally{i.value=!1}},p=async()=>{const e="281dc9b971acbdf5c2a5787ded23f9b9",o=`${je}/genre/movie/list?api_key=${e}&language=ko-KR`;try{const e=await fetch(o),a=await e.json();t.value=a.genres}catch(a){console.error("Failed to fetch genres:",a)}};(0,s.wB)([o,a,l],(()=>{e.value=[],n.value=1,d(n.value)}));const v=()=>{let t=JSON.parse(localStorage.getItem("searchQueries")||"{}");c.value&&(t[c.value]?t[c.value]++:t[c.value]=1,localStorage.setItem("searchQueries",JSON.stringify(t))),e.value=[],n.value=1,d(n.value)},g=()=>{o.value="",a.value="",l.value="popularity",c.value=""},m=e=>{const[t]=e;t.isIntersecting&&!i.value&&(n.value++,d(n.value))},h=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const a=o.findIndex((e=>e.id===t.id));-1===a?o.push({id:t.id,name:t.title,image:`https://image.tmdb.org/t/p/w500${t.poster_path}`}):o.splice(a,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),e.value=[...e.value]},k=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))},f=()=>{window.scrollTo({top:0,behavior:"smooth"})},w=()=>{r.value=window.scrollY>200};return(0,s.sV)((()=>{d(),p();const e=new IntersectionObserver(m,{root:null,rootMargin:"0px",threshold:1});u.value&&e.observe(u.value),window.addEventListener("scroll",w)})),(0,s.xo)((()=>{window.removeEventListener("scroll",w)})),{movies:e,genres:t,selectedGenre:o,selectedRatingRange:a,sortBy:l,isFetching:i,searchQuery:c,resetFilters:g,searchMovies:v,infiniteScrollTarget:u,toggleLocalStorage:h,isItemInLocalStorage:k,scrollToTop:f,showTopButton:r}}});const He=(0,C.A)(Be,[["render",De],["__scopeId","data-v-4d18d958"]]);var Ge=He;const Ye={id:"app"};function qe(e,t,o,l,i,n){return(0,s.uX)(),(0,s.CE)("div",Ye,[(0,s.bF)(a.eB,{name:"fade"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.Wv)((0,s.$y)(e.currentComponent),{onSwitchForm:e.switchForm,onLoginSuccess:e.navigateHome,onSignupSuccess:e.navigateSignin},null,40,["onSwitchForm","onLoginSuccess","onSignupSuccess"]))])),_:1})])}const ze={class:"signin-form"},Ze={class:"signin-container"},et={key:0,class:"error"},tt={class:"signin-remember"},ot={key:1,class:"error"};function at(e,t,o,l,i,n){return(0,s.uX)(),(0,s.CE)("div",ze,[(0,s.Lk)("div",Ze,[t[7]||(t[7]=(0,s.Lk)("h2",{class:"signin-title"},"Login",-1)),e.validEmail?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",et,"Invalid email address")),(0,s.bo)((0,s.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),class:"signin-input",placeholder:"Enter your email"},null,512),[[a.Jo,e.email]]),(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),class:"signin-input",placeholder:"Enter your password"},null,512),[[a.Jo,e.password]]),(0,s.Lk)("div",tt,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=t=>e.rememberMe=t)},null,512),[[a.lH,e.rememberMe]]),t[5]||(t[5]=(0,s.eW)()),t[6]||(t[6]=(0,s.Lk)("span",null,"Remember me",-1))]),(0,s.Lk)("button",{onClick:t[3]||(t[3]=(...t)=>e.handleLogin&&e.handleLogin(...t)),class:"signin-button"},"Login"),(0,s.Lk)("button",{onClick:t[4]||(t[4]=t=>e.$emit("switch-form")),class:"signup-button"},"Go to Sign Up"),e.errorMessage?((0,s.uX)(),(0,s.CE)("span",ot,(0,u.v_)(e.errorMessage),1)):(0,s.Q3)("",!0)])])}var st=o(7411),lt=(0,s.pM)({name:"SignInComponent",setup(){const e=(0,st.dj)(),t=()=>{e.success("Login Success")};return{toast:e,showToast:t}},data(){return{email:"",password:"",rememberMe:!1,errorMessage:""}},created(){const e=JSON.parse(localStorage.getItem("rememberedUser"));e&&(this.email=e.email,this.password=e.password,this.rememberMe=!0)},computed:{validEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(this.email)}},methods:{handleLogin(){if(!this.validEmail)return void(this.errorMessage="Please enter a valid email.");if(this.password.length<6)return void(this.errorMessage="Password must be at least 6 characters.");let e=JSON.parse(localStorage.getItem("userCredentials"));Array.isArray(e)||(e=[]);const t=e.some((e=>e.email===this.email&&e.password===this.password));if(t){const e=w();e.login({email:this.email,password:this.password}),this.rememberMe?localStorage.setItem("rememberedUser",JSON.stringify({email:this.email,password:this.password})):localStorage.removeItem("rememberedUser"),this.showToast(),this.$emit("login-success")}else this.errorMessage="Invalid email or password."}}});const it=(0,C.A)(lt,[["render",at],["__scopeId","data-v-70f14640"]]);var nt=it;const rt={class:"signup-form"},ct={class:"signup-container"},ut={key:0,class:"error"},dt={key:1,class:"error"},pt={class:"signup-terms"},vt={key:2,class:"error"};function gt(e,t,o,l,i,n){return(0,s.uX)(),(0,s.CE)("div",rt,[(0,s.Lk)("div",ct,[t[8]||(t[8]=(0,s.Lk)("h2",{class:"signup-title"},"Sign Up",-1)),(0,s.bo)((0,s.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),class:"signup-input",placeholder:"Enter your email"},null,512),[[a.Jo,e.email]]),e.validEmail?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",ut,"Invalid email address")),(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),class:"signup-input",placeholder:"Enter your password"},null,512),[[a.Jo,e.password]]),(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=t=>e.confirmPassword=t),class:"signup-input",placeholder:"Confirm your password"},null,512),[[a.Jo,e.confirmPassword]]),e.passwordsMatch?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",dt,"Passwords do not match")),(0,s.Lk)("div",pt,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=t=>e.agreeToTerms=t)},null,512),[[a.lH,e.agreeToTerms]]),t[6]||(t[6]=(0,s.eW)()),t[7]||(t[7]=(0,s.Lk)("span",null,"I agree to the terms and conditions",-1))]),(0,s.Lk)("button",{onClick:t[4]||(t[4]=(...t)=>e.handleSignup&&e.handleSignup(...t)),class:"signup-button"},"Sign Up"),(0,s.Lk)("button",{onClick:t[5]||(t[5]=t=>e.$emit("switch-form")),class:"signin-button"},"Go to Sign In"),e.errorMessage?((0,s.uX)(),(0,s.CE)("span",vt,(0,u.v_)(e.errorMessage),1)):(0,s.Q3)("",!0)])])}var mt=(0,s.pM)({name:"SignUpComponent",data(){return{email:"",password:"",confirmPassword:"",agreeToTerms:!1,errorMessage:""}},computed:{validEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(this.email)},passwordsMatch(){return this.password===this.confirmPassword}},methods:{handleSignup(){if(!this.validEmail)return void(this.errorMessage="Please enter a valid email.");if(this.password.length<6)return void(this.errorMessage="Password must be at least 6 characters.");if(!this.passwordsMatch)return void(this.errorMessage="Passwords do not match.");if(!this.agreeToTerms)return void(this.errorMessage="You must agree to the terms and conditions.");const e={email:this.email,password:this.password};let t=JSON.parse(localStorage.getItem("userCredentials"));Array.isArray(t)||(t=[]),t.some((e=>e.email===this.email))?this.errorMessage="Email is already registered.":(t.push(e),localStorage.setItem("userCredentials",JSON.stringify(t)),this.$emit("signup-success"))}}});const ht=(0,C.A)(mt,[["render",gt],["__scopeId","data-v-162ea04e"]]);var kt=ht,ft=(0,s.pM)({name:"SignViewComponent",data(){return{currentComponent:"SignInComponent"}},components:{SignInComponent:nt,SignUpComponent:kt},methods:{switchForm(){this.currentComponent="SignInComponent"===this.currentComponent?"SignUpComponent":"SignInComponent"},navigateHome(){this.$router.push("/")},navigateSignin(){this.currentComponent="SignInComponent"}}});const wt=(0,C.A)(ft,[["render",qe]]);var bt=wt;const Ct=[{path:"/",name:"home",component:Y},{path:"/popular",name:"popular",component:re},{path:"/popular/table",name:"table",component:Se},{path:"/wishlist",name:"wishlist",component:Re},{path:"/search",name:"search",component:Ge},{path:"/sign",name:"sign",component:bt}],Lt=(0,c.aE)({history:(0,c.Bt)("/netflix_clone/"),routes:Ct});var St=Lt;o(7917);const yt={position:"top-center",timeout:3e3,closeOnClick:!0,toastClassName:"netflix-toast",bodyClassName:"netflix-toast-body"},It=(0,f.Ey)();(0,a.Ef)(X).use(St).use(It).use(st.Ay,yt).mount("#app")}},t={};function o(a){var s=t[a];if(void 0!==s)return s.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,a,s,l){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],l=e[u][2];for(var n=!0,r=0;r<a.length;r++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](a[r])}))?a.splice(r--,1):(n=!1,l<i&&(i=l));if(n){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,s,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,l,i=a[0],n=a[1],r=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(r)var u=r(o)}for(t&&t(a);c<i.length;c++)l=i[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},a=self["webpackChunknetflix_clone"]=self["webpackChunknetflix_clone"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(5659)}));a=o.O(a)})();
//# sourceMappingURL=app.f5ef79b9.js.map