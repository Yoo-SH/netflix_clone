(function(){"use strict";var e={1314:function(e,t,o){var s=o(5130),a=o(6768);const l={id:"app",class:"full-width"},i={class:"full-width"},n={key:0,class:"full-width"};function r(e,t,o,s,r,c){const u=(0,a.g2)("NavbarComponent"),p=(0,a.g2)("router-view"),d=(0,a.g2)("FooterComponent");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("nav",i,[(0,a.bF)(u)]),(0,a.bF)(p),e.isPopularTableRoute?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("footer",n,[(0,a.bF)(d)]))])}var c=o(1387),u=o(4232);const p={class:"navbar"},d={class:"navbar-left"},v={class:"svg-inline--fa fa-ticket","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ticket",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",style:{height:"100%",color:"rgb(229, 9, 20)"}},g={class:"navbar-right"},m={key:1,class:"nav-item"},h={class:"user-email"};function k(e,t,o,s,l,i){const n=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("nav",p,[(0,a.Lk)("div",d,[(0,a.bF)(n,{to:"/#",class:"logo"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)("svg",v,t[0]||(t[0]=[(0,a.Lk)("path",{class:"",fill:"currentColor",d:"M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"},null,-1)])))])),_:1}),(0,a.bF)(n,{to:"/",class:"nav-item"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Home")]))),_:1}),(0,a.bF)(n,{to:"/popular",class:"nav-item"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("Popular")]))),_:1}),(0,a.bF)(n,{to:"/search",class:"nav-item"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Search")]))),_:1}),(0,a.bF)(n,{to:"/wishlist",class:"nav-item"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)("Wishlist")]))),_:1})]),(0,a.Lk)("div",g,[e.isAuthenticated?((0,a.uX)(),(0,a.CE)("div",m,[(0,a.Lk)("span",h,(0,u.v_)(e.userEmail),1),(0,a.bF)(n,{onClick:e.logout,to:"/Sign",class:"nav-item logout-button"},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)("Logout")]))),_:1},8,["onClick"])])):((0,a.uX)(),(0,a.Wv)(n,{key:0,to:"/Sign",class:"nav-item sign-button"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)("Sign")]))),_:1}))])])}var f=o(5234);const w=(0,f.nY)("auth",{state:()=>({isAuthenticated:!!localStorage.getItem("authUser"),user:localStorage.getItem("authUser")?JSON.parse(localStorage.getItem("authUser")||"{}"):null}),actions:{login(e){this.isAuthenticated=!0,this.user=e,localStorage.setItem("authUser",JSON.stringify(e))},logout(){this.isAuthenticated=!1,this.user=null,localStorage.removeItem("authUser")}}});var b=(0,a.pM)({name:"NavbarComponent",setup(){const e=w(),{isAuthenticated:t,user:o}=(0,f.bP)(e),{logout:s}=e;return{isAuthenticated:t,userEmail:o?.value?.email||"",logout:s}}}),C=o(1241);const S=(0,C.A)(b,[["render",k],["__scopeId","data-v-3e802a56"]]);var L=S;const y={class:"footer"},I={class:"footer-links"};function M(e,t,o,s,l,i){const n=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("footer",y,[(0,a.Lk)("div",I,[(0,a.bF)(n,{to:"/help",class:"footer-link"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Help Center")]))),_:1}),(0,a.bF)(n,{to:"/terms",class:"footer-link"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Terms of Use")]))),_:1}),(0,a.bF)(n,{to:"/privacy",class:"footer-link"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("Privacy Policy")]))),_:1}),(0,a.bF)(n,{to:"/contact",class:"footer-link"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Contact Us")]))),_:1})]),t[4]||(t[4]=(0,a.Lk)("div",{class:"footer-copyright"},[(0,a.Lk)("p",null,"© 2024 Netflix Clone. All rights reserved.")],-1))])}var T=(0,a.pM)({name:"FooterComponent"});const E=(0,C.A)(T,[["render",M],["__scopeId","data-v-2e1fd282"]]);var _=E,F=(0,a.pM)({name:"App",components:{NavbarComponent:L,FooterComponent:_},setup(){const e=(0,c.lq)(),t=(0,a.EW)((()=>"/popular/table"===e.path));return{isPopularTableRoute:t}}});const P=(0,C.A)(F,[["render",r]]);var X=P;const O={id:"home"},R={key:0,class:"loading"},K={class:"section-title"},$={class:"poster-list"};function N(e,t,o,s,l,i){const n=(0,a.g2)("PosterComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",O,[e.isFetching?((0,a.uX)(),(0,a.CE)("div",R,"Loading...")):(0,a.Q3)("",!0),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movieSections,((t,o)=>((0,a.uX)(),(0,a.CE)("div",{class:"movie-section",key:o},[(0,a.Lk)("h2",K,(0,u.v_)(t.title),1),(0,a.Lk)("div",$,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.data,(t=>((0,a.uX)(),(0,a.Wv)(n,{key:t.id,movie:t,onToggleMovieDetails:e.toggleMovieDetails},null,8,["movie","onToggleMovieDetails"])))),128))])])))),128))]),e.selectedMovie?((0,a.uX)(),(0,a.Wv)(n,{key:0,movie:e.selectedMovie,onCloseMovieDetails:e.closeMovieDetails},null,8,["movie","onCloseMovieDetails"])):(0,a.Q3)("",!0)],64)}o(4114),o(1454);var J=o(144);const U=["src"],V={class:"poster-title"},x={class:"movie-details-content"},A=["src"];function W(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",{class:"poster-container",onClick:t[0]||(t[0]=(...t)=>e.handlePosterClick&&e.handlePosterClick(...t))},[(0,a.Lk)("img",{src:e.movie.image,alt:"movie poster",class:(0,u.C4)(["poster-image",{selected:e.isItemInLocalStorage(e.movie)}])},null,10,U),(0,a.Lk)("p",V,(0,u.v_)(e.movie.name),1)]),e.showDetails?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"movie-details-modal",onClick:t[2]||(t[2]=(0,s.D$)(((...t)=>e.closeMovieDetails&&e.closeMovieDetails(...t)),["self"]))},[(0,a.Lk)("div",x,[(0,a.Lk)("h2",null,(0,u.v_)(e.movie.name),1),(0,a.Lk)("img",{src:e.movie.image,alt:"movie poster",class:"details-poster-image"},null,8,A),(0,a.Lk)("p",null,[t[3]||(t[3]=(0,a.Lk)("strong",null,"Description:",-1)),(0,a.eW)(" "+(0,u.v_)(e.movie.description),1)]),(0,a.Lk)("p",null,[t[4]||(t[4]=(0,a.Lk)("strong",null,"Rating:",-1)),(0,a.eW)(" "+(0,u.v_)(e.movie.rating),1)]),(0,a.Lk)("p",null,[t[5]||(t[5]=(0,a.Lk)("strong",null,"Genres:",-1)),(0,a.eW)(" "+(0,u.v_)(e.movie.genre),1)]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...t)=>e.closeMovieDetails&&e.closeMovieDetails(...t)),class:"close-button"},"Close")])])):(0,a.Q3)("",!0)])}o(8992),o(7550);var Q=(0,a.pM)({name:"PosterComponent",props:{movie:{type:Object,required:!0}},setup(e){const t=(0,J.KR)(!1),o=()=>{s(),l(e.movie)},s=()=>{t.value=!t.value},a=()=>{t.value=!1},l=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const o=t.findIndex((t=>t.id===e.id));-1===o?t.push({id:e.id,name:e.name,image:e.image}):t.splice(o,1),localStorage.setItem("selectedMovies",JSON.stringify(t))},i=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return{showDetails:t,toggleMovieDetails:s,closeMovieDetails:a,toggleLocalStorage:l,isItemInLocalStorage:i,handlePosterClick:o}}});const D=(0,C.A)(Q,[["render",W],["__scopeId","data-v-8d1cb87a"]]);var j=D;const B="https://api.themoviedb.org/3";var H=(0,a.pM)({name:"HomeViewComponent",components:{PosterComponent:j},setup(){const e=(0,J.KR)([]),t=(0,J.KR)(!1),o=(0,J.KR)(!1),s=(0,J.KR)(null),l=(0,c.rd)(),i=()=>{const e=JSON.parse(localStorage.getItem("authUser")||"{}");return e.password||""},n=i(),r=async(t,o)=>{const s=`${B}/${t}?api_key=${n}&language=ko-KR&page=1`;try{const t=await fetch(s),a=await t.json(),l=a.results.slice(0,5).map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`,description:e.overview,rating:e.vote_average,genre:e.genre_ids.join(", ")})));e.value.push({title:o,data:l})}catch(a){console.error("Failed to fetch movies:",a)}},u=async()=>{if(!t.value){t.value=!0;try{await Promise.all([r("movie/popular","Popular Movies"),r("movie/top_rated","Top Rated Movies"),r("movie/upcoming","Upcoming Movies"),r("trending/movie/week","Trending This Week")])}catch(e){console.error("Failed to fetch all movie sections:",e)}finally{t.value=!1}}},p=()=>{o.value=window.scrollY>200},d=()=>{window.scrollTo({top:0,behavior:"smooth"})},v=()=>{l.push("/wishlist")},g=e=>{s.value&&s.value.id===e.id?s.value=null:s.value=e},m=()=>{s.value=null};return(0,a.sV)((()=>{u(),window.addEventListener("scroll",p)})),(0,a.xo)((()=>{window.removeEventListener("scroll",p)})),{movieSections:e,isFetching:t,showTopButton:o,selectedMovie:s,scrollToTop:d,goToWishlistView:v,toggleMovieDetails:g,closeMovieDetails:m}}});const G=(0,C.A)(H,[["render",N],["__scopeId","data-v-e8971b4a"]]);var Y=G;const q={id:"popular"},z={key:0,class:"loading"},Z={class:"poster-list"},ee=["onClick"],te=["src"],oe={class:"poster-title"},se={ref:"infiniteScrollTarget",class:"infinite-scroll-target"};function ae(e,t,o,s,l,i){return(0,a.uX)(),(0,a.CE)("div",q,[(0,a.Lk)("div",null,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToTableView&&e.goToTableView(...t)),class:"toggle-view-button"}," Switch to Table View ")]),e.isFetching&&!e.isTableView?((0,a.uX)(),(0,a.CE)("div",z,"Loading...")):(0,a.Q3)("",!0),e.isTableView?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("button",{key:1,onClick:t[1]||(t[1]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")),(0,a.Lk)("div",Z,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.popularItems,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:"poster-container",onClick:o=>e.toggleLocalStorage(t)},[(0,a.Lk)("img",{src:t.image,alt:"movie poster",class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,te),(0,a.Lk)("p",oe,(0,u.v_)(t.name),1)],8,ee)))),128))]),(0,a.Lk)("div",se,null,512)])}const le="https://api.themoviedb.org/3";var ie=(0,a.pM)({name:"App",setup(){const e=(0,J.KR)([]),t=(0,J.KR)(1),o=(0,J.KR)(!1),s=(0,J.KR)(!0),l=(0,c.rd)(),i=(0,J.KR)(null),n=()=>{const e=JSON.parse(localStorage.getItem("authUser")||"{}");return e.password||""},r=n(),u=async(s=1)=>{if(o.value)return;o.value=!0;const a=`${le}/movie/popular?api_key=${r}&language=ko-KR&page=${s}`;try{const o=await fetch(a);if(!o.ok)throw new Error("Network response was not ok");const s=await o.json();e.value=[...e.value,...s.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))],t.value+=1}catch(l){console.error("Failed to fetch popular movies:",l)}finally{o.value=!1}},p=e=>{const[s]=e;s.isIntersecting&&!o.value&&u(t.value)},d=()=>{console.log("Scroll to top button clicked"),window.scrollTo({top:0,behavior:"smooth"})},v=()=>{l.push("/popular/table")},g=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const s=o.findIndex((e=>e.id===t.id));-1===s?o.push(t):o.splice(s,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),console.log("Updated localStorage:",o),e.value=[...e.value]},m=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,a.sV)((()=>{u();const e=new IntersectionObserver(p,{root:null,rootMargin:"0px",threshold:1});i.value&&e.observe(i.value)})),(0,a.xo)((()=>{})),{popularItems:e,isFetching:o,showTopButton:s,scrollToTop:d,goToTableView:v,toggleLocalStorage:g,isItemInLocalStorage:m,infiniteScrollTarget:i}}});const ne=(0,C.A)(ie,[["render",ae],["__scopeId","data-v-5c3e6a33"]]);var re=ne;const ce={id:"table-view"},ue={class:"grid-view"},pe={class:"grid-container"},de=["onClick"],ve={class:"poster-image-wrapper"},ge=["src","alt"],me={class:"poster-title"},he={class:"pagination"},ke=["disabled"],fe=["onClick"],we=["disabled"];function be(e,t,o,s,l,i){return(0,a.uX)(),(0,a.CE)("div",ce,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToPopularView&&e.goToPopularView(...t)),class:"toggle-view-button"},"Switch to Popular View"),(0,a.Lk)("div",ue,[(0,a.Lk)("div",pe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.paginatedItems,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:"grid-item",onClick:o=>e.toggleLocalStorage(t)},[(0,a.Lk)("div",ve,[t.image?((0,a.uX)(),(0,a.CE)("img",{key:0,src:t.image,alt:t.name,class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,ge)):(0,a.Q3)("",!0),(0,a.Lk)("div",me,(0,u.v_)(t.name),1)])],8,de)))),128))]),(0,a.Lk)("div",he,[(0,a.Lk)("button",{onClick:t[1]||(t[1]=t=>e.goToPage(e.currentPage-1)),disabled:1===e.currentPage},"Previous",8,ke),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.visiblePages,(t=>((0,a.uX)(),(0,a.CE)("span",{key:t,onClick:o=>e.goToPage(t),class:(0,u.C4)(["page-number",{active:t===e.currentPage}])},(0,u.v_)(t),11,fe)))),128)),(0,a.Lk)("button",{onClick:t[2]||(t[2]=t=>e.goToPage(e.currentPage+1)),disabled:e.currentPage===e.totalPages},"Next",8,we)])])])}var Ce=(0,a.pM)({name:"TableViewComponent",props:{items:{type:Array,required:!0}},setup(e){const t=(0,J.KR)([]),o=(0,J.KR)(1),s=20,l=(0,J.KR)(!1),i=(0,c.rd)(),n=(0,a.EW)((()=>Math.ceil(t.value.length/s))),r=(0,a.EW)((()=>{const e=(o.value-1)*s,a=e+s;return t.value.slice(e,a)})),u=(0,a.EW)((()=>{const e=[],t=8,s=n.value;let a=Math.max(1,o.value-Math.floor(t/2)),l=a+t-1;l>s&&(l=s,a=Math.max(1,l-t+1));for(let o=a;o<=l;o++)e.push(o);return e})),p=()=>{const e=JSON.parse(localStorage.getItem("authUser")||"{}");return e.password||""},d=p(),v=async(e=!1)=>{if(l.value)return;l.value=!0;const s="https://api.themoviedb.org/3";try{if(e)for(let e=1;e<=8;e++){const o=`${s}/movie/popular?api_key=${d}&language=ko-KR&page=${e}`,a=await fetch(o),l=await a.json();t.value=[...t.value,...l.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))]}else{const e=`${s}/movie/popular?api_key=${d}&language=ko-KR&page=${o.value}`,a=await fetch(e),l=await a.json();t.value=[...t.value,...l.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))]}}catch(a){console.error("Failed to fetch popular movies:",a)}finally{l.value=!1}},g=e=>{e>0&&e<=n.value&&(o.value=e,v())},m=()=>{o.value>1&&(o.value-=1,v())},h=()=>{o.value<n.value&&(o.value+=1,v())},k=()=>{i.push("/popular")},f=e=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const s=o.findIndex((t=>t.id===e.id));-1===s?o.push(e):o.splice(s,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),console.log("Updated localStorage:",o),t.value=[...t.value]},w=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,a.sV)((()=>{v(!0)})),{paginatedItems:r,currentPage:o,totalPages:n,visiblePages:u,goToPage:g,previousPage:m,nextPage:h,popularItems:t,goToPopularView:k,toggleLocalStorage:f,isItemInLocalStorage:w}}});const Se=(0,C.A)(Ce,[["render",be],["__scopeId","data-v-91028156"]]);var Le=Se;const ye={key:0,class:"loading"},Ie={id:"wishlist"},Me={class:"poster-list"},Te=["onClick"],Ee=["src"],_e={class:"poster-title"};function Fe(e,t,o,s,l,i){return(0,a.uX)(),(0,a.CE)(a.FK,null,[e.isFetching?((0,a.uX)(),(0,a.CE)("div",ye,"Loading...")):(0,a.Q3)("",!0),(0,a.Lk)("div",Ie,[e.showTopButton?((0,a.uX)(),(0,a.CE)("button",{key:0,onClick:t[0]||(t[0]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")):(0,a.Q3)("",!0),(0,a.Lk)("div",Me,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.popularItems,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:(0,u.C4)(["poster-container",{"selected-poster":e.isItemInLocalStorage(t)}]),onClick:o=>e.toggleLocalStorage(t)},[(0,a.Lk)("img",{src:t.image,alt:"movie poster",class:"poster-image"},null,8,Ee),(0,a.Lk)("p",_e,(0,u.v_)(t.name),1)],10,Te)))),128))])])],64)}var Pe=(0,a.pM)({name:"WishlistViewComponent",setup(){const e=(0,J.KR)([]),t=((0,J.KR)(1),(0,J.KR)(!1)),o=(0,J.KR)(!1),s=(0,c.rd)(),l=async()=>{if(!t.value){t.value=!0;try{const t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");e.value=[...t]}catch(o){console.error("Failed to fetch popular movies:",o)}finally{t.value=!1}}},i=()=>{const e=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-10;e&&l(),o.value=window.scrollY>200},n=()=>{window.scrollTo({top:0,behavior:"smooth"})},r=()=>{s.push("/popular")},u=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const s=o.findIndex((e=>e.id===t.id));-1===s?o.push(t):o.splice(s,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),e.value=[...o]},p=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,a.sV)((()=>{l(),window.addEventListener("scroll",i)})),(0,a.xo)((()=>{window.removeEventListener("scroll",i)})),{popularItems:e,isFetching:t,showTopButton:o,scrollToTop:n,goToPopularView:r,toggleLocalStorage:u,isItemInLocalStorage:p}}});const Xe=(0,C.A)(Pe,[["render",Fe],["__scopeId","data-v-0b377f9f"]]);var Oe=Xe;const Re={class:"search-filter-container"},Ke={class:"search-container"},$e={class:"filter-section"},Ne=["value"],Je={key:0,class:"loading"},Ue={class:"grid-view"},Ve={class:"grid-container"},xe=["onClick"],Ae=["src","alt"],We={class:"poster-title"},Qe={ref:"infiniteScrollTarget",class:"infinite-scroll-target"};function De(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",Re,[(0,a.Lk)("div",Ke,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),placeholder:"Search movies...",class:"search-input"},null,512),[[s.Jo,e.searchQuery]]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...t)=>e.searchMovies&&e.searchMovies(...t)),class:"search-button"},"Search")]),(0,a.Lk)("div",$e,[(0,a.Lk)("label",null,[t[8]||(t[8]=(0,a.eW)(" Genre: ")),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedGenre=t)},[t[7]||(t[7]=(0,a.Lk)("option",{value:""},"All",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.genres,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.id},(0,u.v_)(e.name),9,Ne)))),128))],512),[[s.u1,e.selectedGenre]])]),(0,a.Lk)("label",null,[t[10]||(t[10]=(0,a.eW)(" Rating: ")),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedRatingRange=t)},t[9]||(t[9]=[(0,a.Fv)('<option value="" data-v-42fe5601>All</option><option value="0-4" data-v-42fe5601>4 and below</option><option value="4-5" data-v-42fe5601>4 - 5</option><option value="5-6" data-v-42fe5601>5 - 6</option><option value="6-7" data-v-42fe5601>6 - 7</option><option value="7-8" data-v-42fe5601>7 - 8</option><option value="8-9" data-v-42fe5601>8 - 9</option><option value="9-10" data-v-42fe5601>9 - 10</option>',8)]),512),[[s.u1,e.selectedRatingRange]])]),(0,a.Lk)("label",null,[t[12]||(t[12]=(0,a.eW)(" Sort By: ")),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.sortBy=t)},t[11]||(t[11]=[(0,a.Lk)("option",{value:"popularity.asc"},"Popularity (Ascending)",-1),(0,a.Lk)("option",{value:"popularity.desc"},"Popularity (Descending)",-1)]),512),[[s.u1,e.sortBy]])]),(0,a.Lk)("button",{onClick:t[5]||(t[5]=(...t)=>e.resetFilters&&e.resetFilters(...t)),class:"reset-button"},"Reset Filters")])]),e.isFetching?((0,a.uX)(),(0,a.CE)("div",Je,"Loading...")):(0,a.Q3)("",!0),(0,a.Lk)("div",Ue,[(0,a.Lk)("div",Ve,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movies,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:"grid-item poster-container",onClick:o=>e.toggleLocalStorage(t)},[(0,a.Lk)("img",{src:`https://image.tmdb.org/t/p/w500${t.poster_path}`,alt:t.title,class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,Ae),(0,a.Lk)("p",We,(0,u.v_)(t.title),1)],8,xe)))),128))]),(0,a.Lk)("div",Qe,null,512)]),e.showTopButton?((0,a.uX)(),(0,a.CE)("button",{key:1,onClick:t[6]||(t[6]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")):(0,a.Q3)("",!0)],64)}const je="https://api.themoviedb.org/3";var Be=(0,a.pM)({name:"SearchViewComponent",setup(){const e=(0,J.KR)([]),t=(0,J.KR)([]),o=(0,J.KR)(""),s=(0,J.KR)(""),l=(0,J.KR)("popularity"),i=(0,J.KR)(!1),n=(0,J.KR)(1),r=(0,J.KR)(!1),u=(0,J.KR)(""),p=((0,c.rd)(),(0,J.KR)(null)),d=()=>{const e=JSON.parse(localStorage.getItem("authUser")||"{}");return e.password||""},v=async(t=1)=>{if(i.value)return;i.value=!0;const a=d();let n=`${je}/discover/movie?api_key=${a}&language=ko-KR&page=${t}`;if(o.value&&(n+=`&with_genres=${o.value}`),s.value){const[e,t]=s.value.split("-");n+=`&vote_average.gte=${e}&vote_average.lte=${t}`}n+=`&sort_by=${l.value}`,u.value&&(n=`${je}/search/movie?api_key=${a}&language=ko-KR&query=${u.value}&page=${t}`);try{const t=await fetch(n),o=await t.json();e.value=[...e.value,...o.results]}catch(r){console.error("Failed to fetch movies:",r)}finally{i.value=!1}},g=async()=>{const e=d(),o=`${je}/genre/movie/list?api_key=${e}&language=ko-KR`;try{const e=await fetch(o),s=await e.json();t.value=s.genres}catch(s){console.error("Failed to fetch genres:",s)}};(0,a.wB)([o,s,l],(()=>{e.value=[],n.value=1,v(n.value)}));const m=()=>{let t=JSON.parse(localStorage.getItem("searchQueries")||"{}");u.value&&(t[u.value]?t[u.value]++:t[u.value]=1,localStorage.setItem("searchQueries",JSON.stringify(t))),e.value=[],n.value=1,v(n.value)},h=()=>{o.value="",s.value="",l.value="popularity",u.value=""},k=e=>{const[t]=e;t.isIntersecting&&!i.value&&(n.value++,v(n.value))},f=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const s=o.findIndex((e=>e.id===t.id));-1===s?o.push({id:t.id,name:t.title,image:`https://image.tmdb.org/t/p/w500${t.poster_path}`}):o.splice(s,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),e.value=[...e.value]},w=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))},b=()=>{window.scrollTo({top:0,behavior:"smooth"})},C=()=>{r.value=window.scrollY>200};return(0,a.sV)((()=>{v(),g();const e=new IntersectionObserver(k,{root:null,rootMargin:"0px",threshold:1});p.value&&e.observe(p.value),window.addEventListener("scroll",C)})),(0,a.xo)((()=>{window.removeEventListener("scroll",C)})),{movies:e,genres:t,selectedGenre:o,selectedRatingRange:s,sortBy:l,isFetching:i,searchQuery:u,resetFilters:h,searchMovies:m,infiniteScrollTarget:p,toggleLocalStorage:f,isItemInLocalStorage:w,scrollToTop:b,showTopButton:r}}});const He=(0,C.A)(Be,[["render",De],["__scopeId","data-v-42fe5601"]]);var Ge=He;const Ye={id:"app"};function qe(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",Ye,[(0,a.bF)(s.eB,{name:"fade"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.Wv)((0,a.$y)(e.currentComponent),{onSwitchForm:e.switchForm,onLoginSuccess:e.navigateHome,onSignupSuccess:e.navigateSignin},null,40,["onSwitchForm","onLoginSuccess","onSignupSuccess"]))])),_:1})])}const ze={class:"signin-form"},Ze={class:"signin-container"},et={key:0,class:"error"},tt={class:"signin-remember"},ot={key:1,class:"error"};function st(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",ze,[(0,a.Lk)("div",Ze,[t[7]||(t[7]=(0,a.Lk)("h2",{class:"signin-title"},"Login",-1)),e.validEmail?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("span",et,"Invalid email address")),(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),class:"signin-input",placeholder:"Enter your email"},null,512),[[s.Jo,e.email]]),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),class:"signin-input",placeholder:"Enter your password"},null,512),[[s.Jo,e.password]]),(0,a.Lk)("div",tt,[(0,a.bo)((0,a.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=t=>e.rememberMe=t)},null,512),[[s.lH,e.rememberMe]]),t[5]||(t[5]=(0,a.eW)()),t[6]||(t[6]=(0,a.Lk)("span",null,"Remember me",-1))]),(0,a.Lk)("button",{onClick:t[3]||(t[3]=(...t)=>e.handleLogin&&e.handleLogin(...t)),class:"signin-button"},"Login"),(0,a.Lk)("button",{onClick:t[4]||(t[4]=t=>e.$emit("switch-form")),class:"signup-button"},"Go to Sign Up"),e.errorMessage?((0,a.uX)(),(0,a.CE)("span",ot,(0,u.v_)(e.errorMessage),1)):(0,a.Q3)("",!0)])])}var at=o(7411),lt=(0,a.pM)({name:"SignInComponent",setup(){const e=(0,at.dj)(),t=()=>{e.success("Login Success")};return{toast:e,showToast:t}},data(){return{email:"",password:"",rememberMe:!1,errorMessage:""}},created(){const e=JSON.parse(localStorage.getItem("rememberedUser"));e&&(this.email=e.email,this.password=e.password,this.rememberMe=!0)},computed:{validEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(this.email)}},methods:{handleLogin(){if(!this.validEmail)return void(this.errorMessage="Please enter a valid email.");if(this.password.length<6)return void(this.errorMessage="Password must be at least 6 characters.");let e=JSON.parse(localStorage.getItem("userCredentials"));Array.isArray(e)||(e=[]);const t=e.some((e=>e.email===this.email&&e.password===this.password));if(t){const e=w();e.login({email:this.email,password:this.password}),this.rememberMe?localStorage.setItem("rememberedUser",JSON.stringify({email:this.email,password:this.password})):localStorage.removeItem("rememberedUser"),this.showToast(),this.$emit("login-success")}else this.errorMessage="Invalid email or password."}}});const it=(0,C.A)(lt,[["render",st],["__scopeId","data-v-70f14640"]]);var nt=it;const rt={class:"signup-form"},ct={class:"signup-container"},ut={key:0,class:"error"},pt={key:1,class:"error"},dt={class:"signup-terms"},vt={key:2,class:"error"};function gt(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",rt,[(0,a.Lk)("div",ct,[t[8]||(t[8]=(0,a.Lk)("h2",{class:"signup-title"},"Sign Up",-1)),(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),class:"signup-input",placeholder:"Enter your email"},null,512),[[s.Jo,e.email]]),e.validEmail?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("span",ut,"Invalid email address")),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),class:"signup-input",placeholder:"Enter your password"},null,512),[[s.Jo,e.password]]),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=t=>e.confirmPassword=t),class:"signup-input",placeholder:"Confirm your password"},null,512),[[s.Jo,e.confirmPassword]]),e.passwordsMatch?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("span",pt,"Passwords do not match")),(0,a.Lk)("div",dt,[(0,a.bo)((0,a.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=t=>e.agreeToTerms=t)},null,512),[[s.lH,e.agreeToTerms]]),t[6]||(t[6]=(0,a.eW)()),t[7]||(t[7]=(0,a.Lk)("span",null,"I agree to the terms and conditions",-1))]),(0,a.Lk)("button",{onClick:t[4]||(t[4]=(...t)=>e.handleSignup&&e.handleSignup(...t)),class:"signup-button"},"Sign Up"),(0,a.Lk)("button",{onClick:t[5]||(t[5]=t=>e.$emit("switch-form")),class:"signin-button"},"Go to Sign In"),e.errorMessage?((0,a.uX)(),(0,a.CE)("span",vt,(0,u.v_)(e.errorMessage),1)):(0,a.Q3)("",!0)])])}var mt=(0,a.pM)({name:"SignUpComponent",data(){return{email:"",password:"",confirmPassword:"",agreeToTerms:!1,errorMessage:""}},computed:{validEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(this.email)},passwordsMatch(){return this.password===this.confirmPassword}},methods:{handleSignup(){if(!this.validEmail)return void(this.errorMessage="Please enter a valid email.");if(this.password.length<6)return void(this.errorMessage="Password must be at least 6 characters.");if(!this.passwordsMatch)return void(this.errorMessage="Passwords do not match.");if(!this.agreeToTerms)return void(this.errorMessage="You must agree to the terms and conditions.");const e={email:this.email,password:this.password};let t=JSON.parse(localStorage.getItem("userCredentials"));Array.isArray(t)||(t=[]),t.some((e=>e.email===this.email))?this.errorMessage="Email is already registered.":(t.push(e),localStorage.setItem("userCredentials",JSON.stringify(t)),this.$emit("signup-success"))}}});const ht=(0,C.A)(mt,[["render",gt],["__scopeId","data-v-162ea04e"]]);var kt=ht,ft=(0,a.pM)({name:"SignViewComponent",data(){return{currentComponent:"SignInComponent"}},components:{SignInComponent:nt,SignUpComponent:kt},methods:{switchForm(){this.currentComponent="SignInComponent"===this.currentComponent?"SignUpComponent":"SignInComponent"},navigateHome(){this.$router.push("/")},navigateSignin(){this.currentComponent="SignInComponent"}}});const wt=(0,C.A)(ft,[["render",qe]]);var bt=wt;const Ct=[{path:"/",name:"home",component:Y},{path:"/popular",name:"popular",component:re},{path:"/popular/table",name:"table",component:Le},{path:"/wishlist",name:"wishlist",component:Oe},{path:"/search",name:"search",component:Ge},{path:"/sign",name:"sign",component:bt}],St=(0,c.aE)({history:(0,c.Bt)("/netflix_clone/"),routes:Ct});var Lt=St;o(7917);const yt={position:"top-center",timeout:3e3,closeOnClick:!0,toastClassName:"netflix-toast",bodyClassName:"netflix-toast-body"},It=(0,f.Ey)();(0,s.Ef)(X).use(Lt).use(It).use(at.Ay,yt).mount("#app")}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var l=t[s]={exports:{}};return e[s].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,l){if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],l=e[u][2];for(var n=!0,r=0;r<s.length;r++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](s[r])}))?s.splice(r--,1):(n=!1,l<i&&(i=l));if(n){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[s,a,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,l,i=s[0],n=s[1],r=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(r)var u=r(o)}for(t&&t(s);c<i.length;c++)l=i[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},s=self["webpackChunknetflix_clone"]=self["webpackChunknetflix_clone"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(1314)}));s=o.O(s)})();
//# sourceMappingURL=app.a5c6da28.js.map