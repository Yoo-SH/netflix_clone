(function(){"use strict";var e={357:function(e,t,o){var s=o(5130),a=o(6768);const l={id:"app",class:"full-width"},i={class:"full-width"},n={key:0,class:"full-width"};function r(e,t,o,s,r,c){const u=(0,a.g2)("NavbarComponent"),p=(0,a.g2)("router-view"),d=(0,a.g2)("FooterComponent");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("nav",i,[(0,a.bF)(u)]),(0,a.bF)(p),e.isPopularTableRoute?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("footer",n,[(0,a.bF)(d)]))])}var c=o(1387),u=o(4232);const p={class:"navbar"},d={class:"navbar-left"},v={href:"/"},g={class:"svg-inline--fa fa-ticket","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"ticket",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",style:{height:"100%",color:"rgb(229, 9, 20)"}},m={class:"navbar-right"},h={key:1,class:"nav-item"},k={class:"user-email"};function f(e,t,o,s,l,i){const n=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("nav",p,[(0,a.Lk)("div",d,[(0,a.Lk)("a",v,[((0,a.uX)(),(0,a.CE)("svg",g,t[0]||(t[0]=[(0,a.Lk)("path",{class:"",fill:"currentColor",d:"M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"},null,-1)])))]),(0,a.bF)(n,{to:"/",class:"nav-item"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Home")]))),_:1}),(0,a.bF)(n,{to:"/popular",class:"nav-item"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("Popular")]))),_:1}),(0,a.bF)(n,{to:"/search",class:"nav-item"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Search")]))),_:1}),(0,a.bF)(n,{to:"/wishlist",class:"nav-item"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)("Wishlist")]))),_:1})]),(0,a.Lk)("div",m,[e.isAuthenticated?((0,a.uX)(),(0,a.CE)("div",h,[(0,a.Lk)("span",k,(0,u.v_)(e.userEmail),1),(0,a.bF)(n,{onClick:e.logout,to:"/Sign",class:"nav-item logout-button"},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)("Logout")]))),_:1},8,["onClick"])])):((0,a.uX)(),(0,a.Wv)(n,{key:0,to:"/Sign",class:"nav-item sign-button"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)("Sign")]))),_:1}))])])}var w=o(5234);const b=(0,w.nY)("auth",{state:()=>({isAuthenticated:!!localStorage.getItem("authUser"),user:localStorage.getItem("authUser")?JSON.parse(localStorage.getItem("authUser")||"{}"):null}),actions:{login(e){this.isAuthenticated=!0,this.user=e,localStorage.setItem("authUser",JSON.stringify(e))},logout(){this.isAuthenticated=!1,this.user=null,localStorage.removeItem("authUser")}}});var C=(0,a.pM)({name:"NavbarComponent",setup(){const e=b(),{isAuthenticated:t,user:o}=(0,w.bP)(e),{logout:s}=e;return{isAuthenticated:t,userEmail:o?.value?.email||"",logout:s}}}),S=o(1241);const L=(0,S.A)(C,[["render",f],["__scopeId","data-v-21d4e7c5"]]);var y=L;const I={class:"footer"},M={class:"footer-links"};function T(e,t,o,s,l,i){const n=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("footer",I,[(0,a.Lk)("div",M,[(0,a.bF)(n,{to:"/help",class:"footer-link"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Help Center")]))),_:1}),(0,a.bF)(n,{to:"/terms",class:"footer-link"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("Terms of Use")]))),_:1}),(0,a.bF)(n,{to:"/privacy",class:"footer-link"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("Privacy Policy")]))),_:1}),(0,a.bF)(n,{to:"/contact",class:"footer-link"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("Contact Us")]))),_:1})]),t[4]||(t[4]=(0,a.Lk)("div",{class:"footer-copyright"},[(0,a.Lk)("p",null,"© 2024 Netflix Clone. All rights reserved.")],-1))])}var E=(0,a.pM)({name:"FooterComponent"});const _=(0,S.A)(E,[["render",T],["__scopeId","data-v-2e1fd282"]]);var P=_,F=(0,a.pM)({name:"App",components:{NavbarComponent:y,FooterComponent:P},setup(){const e=(0,c.lq)(),t=(0,a.EW)((()=>"/popular/table"===e.path));return{isPopularTableRoute:t}}});const X=(0,S.A)(F,[["render",r]]);var O=X;const R={id:"home"},K={key:0,class:"loading"},$={class:"section-title"},N={class:"poster-list"};function J(e,t,o,s,l,i){const n=(0,a.g2)("PosterComponent");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",R,[e.isFetching?((0,a.uX)(),(0,a.CE)("div",K,"Loading...")):(0,a.Q3)("",!0),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movieSections,((t,o)=>((0,a.uX)(),(0,a.CE)("div",{class:"movie-section",key:o},[(0,a.Lk)("h2",$,(0,u.v_)(t.title),1),(0,a.Lk)("div",N,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.data,(t=>((0,a.uX)(),(0,a.Wv)(n,{key:t.id,movie:t,onToggleMovieDetails:e.toggleMovieDetails},null,8,["movie","onToggleMovieDetails"])))),128))])])))),128))]),e.selectedMovie?((0,a.uX)(),(0,a.Wv)(n,{key:0,movie:e.selectedMovie,onCloseMovieDetails:e.closeMovieDetails},null,8,["movie","onCloseMovieDetails"])):(0,a.Q3)("",!0)],64)}o(4114),o(1454);var U=o(144);const V=["src"],x={class:"poster-title"},A={class:"movie-details-content"},W=["src"];function Q(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",{class:"poster-container",onClick:t[0]||(t[0]=(...t)=>e.handlePosterClick&&e.handlePosterClick(...t))},[(0,a.Lk)("img",{src:e.movie.image,alt:"movie poster",class:(0,u.C4)(["poster-image",{selected:e.isItemInLocalStorage(e.movie)}])},null,10,V),(0,a.Lk)("p",x,(0,u.v_)(e.movie.name),1)]),e.showDetails?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"movie-details-modal",onClick:t[2]||(t[2]=(0,s.D$)(((...t)=>e.closeMovieDetails&&e.closeMovieDetails(...t)),["self"]))},[(0,a.Lk)("div",A,[(0,a.Lk)("h2",null,(0,u.v_)(e.movie.name),1),(0,a.Lk)("img",{src:e.movie.image,alt:"movie poster",class:"details-poster-image"},null,8,W),(0,a.Lk)("p",null,[t[3]||(t[3]=(0,a.Lk)("strong",null,"Description:",-1)),(0,a.eW)(" "+(0,u.v_)(e.movie.description),1)]),(0,a.Lk)("p",null,[t[4]||(t[4]=(0,a.Lk)("strong",null,"Rating:",-1)),(0,a.eW)(" "+(0,u.v_)(e.movie.rating),1)]),(0,a.Lk)("p",null,[t[5]||(t[5]=(0,a.Lk)("strong",null,"Genres:",-1)),(0,a.eW)(" "+(0,u.v_)(e.movie.genre),1)]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...t)=>e.closeMovieDetails&&e.closeMovieDetails(...t)),class:"close-button"},"Close")])])):(0,a.Q3)("",!0)])}o(8992),o(7550);var D=(0,a.pM)({name:"PosterComponent",props:{movie:{type:Object,required:!0}},setup(e){const t=(0,U.KR)(!1),o=()=>{s(),l(e.movie)},s=()=>{t.value=!t.value},a=()=>{t.value=!1},l=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const o=t.findIndex((t=>t.id===e.id));-1===o?t.push({id:e.id,name:e.name,image:e.image}):t.splice(o,1),localStorage.setItem("selectedMovies",JSON.stringify(t))},i=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return{showDetails:t,toggleMovieDetails:s,closeMovieDetails:a,toggleLocalStorage:l,isItemInLocalStorage:i,handlePosterClick:o}}});const j=(0,S.A)(D,[["render",Q],["__scopeId","data-v-8d1cb87a"]]);var B=j;const H="https://api.themoviedb.org/3";var G=(0,a.pM)({name:"HomeViewComponent",components:{PosterComponent:B},setup(){const e=(0,U.KR)([]),t=(0,U.KR)(!1),o=(0,U.KR)(!1),s=(0,U.KR)(null),l=(0,c.rd)(),i=()=>{const e=JSON.parse(localStorage.getItem("authUser")||"{}");return e.password||""},n=i(),r=async(t,o)=>{const s=`${H}/${t}?api_key=${n}&language=ko-KR&page=1`;try{const t=await fetch(s),a=await t.json(),l=a.results.slice(0,5).map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`,description:e.overview,rating:e.vote_average,genre:e.genre_ids.join(", ")})));e.value.push({title:o,data:l})}catch(a){console.error("Failed to fetch movies:",a)}},u=async()=>{if(!t.value){t.value=!0;try{await Promise.all([r("movie/popular","Popular Movies"),r("movie/top_rated","Top Rated Movies"),r("movie/upcoming","Upcoming Movies"),r("trending/movie/week","Trending This Week")])}catch(e){console.error("Failed to fetch all movie sections:",e)}finally{t.value=!1}}},p=()=>{o.value=window.scrollY>200},d=()=>{window.scrollTo({top:0,behavior:"smooth"})},v=()=>{l.push("/wishlist")},g=e=>{s.value&&s.value.id===e.id?s.value=null:s.value=e},m=()=>{s.value=null};return(0,a.sV)((()=>{u(),window.addEventListener("scroll",p)})),(0,a.xo)((()=>{window.removeEventListener("scroll",p)})),{movieSections:e,isFetching:t,showTopButton:o,selectedMovie:s,scrollToTop:d,goToWishlistView:v,toggleMovieDetails:g,closeMovieDetails:m}}});const Y=(0,S.A)(G,[["render",J],["__scopeId","data-v-e8971b4a"]]);var q=Y;const z={id:"popular"},Z={key:0,class:"loading"},ee={class:"poster-list"},te=["onClick"],oe=["src"],se={class:"poster-title"},ae={ref:"infiniteScrollTarget",class:"infinite-scroll-target"};function le(e,t,o,s,l,i){return(0,a.uX)(),(0,a.CE)("div",z,[(0,a.Lk)("div",null,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToTableView&&e.goToTableView(...t)),class:"toggle-view-button"}," Switch to Table View ")]),e.isFetching&&!e.isTableView?((0,a.uX)(),(0,a.CE)("div",Z,"Loading...")):(0,a.Q3)("",!0),e.isTableView?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("button",{key:1,onClick:t[1]||(t[1]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")),(0,a.Lk)("div",ee,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.popularItems,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:"poster-container",onClick:o=>e.toggleLocalStorage(t)},[(0,a.Lk)("img",{src:t.image,alt:"movie poster",class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,oe),(0,a.Lk)("p",se,(0,u.v_)(t.name),1)],8,te)))),128))]),(0,a.Lk)("div",ae,null,512)])}const ie="https://api.themoviedb.org/3";var ne=(0,a.pM)({name:"App",setup(){const e=(0,U.KR)([]),t=(0,U.KR)(1),o=(0,U.KR)(!1),s=(0,U.KR)(!0),l=(0,c.rd)(),i=(0,U.KR)(null),n=()=>{const e=JSON.parse(localStorage.getItem("authUser")||"{}");return e.password||""},r=n(),u=async(s=1)=>{if(o.value)return;o.value=!0;const a=`${ie}/movie/popular?api_key=${r}&language=ko-KR&page=${s}`;try{const o=await fetch(a);if(!o.ok)throw new Error("Network response was not ok");const s=await o.json();e.value=[...e.value,...s.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))],t.value+=1}catch(l){console.error("Failed to fetch popular movies:",l)}finally{o.value=!1}},p=e=>{const[s]=e;s.isIntersecting&&!o.value&&u(t.value)},d=()=>{console.log("Scroll to top button clicked"),window.scrollTo({top:0,behavior:"smooth"})},v=()=>{l.push("/popular/table")},g=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const s=o.findIndex((e=>e.id===t.id));-1===s?o.push(t):o.splice(s,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),console.log("Updated localStorage:",o),e.value=[...e.value]},m=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,a.sV)((()=>{u();const e=new IntersectionObserver(p,{root:null,rootMargin:"0px",threshold:1});i.value&&e.observe(i.value)})),(0,a.xo)((()=>{})),{popularItems:e,isFetching:o,showTopButton:s,scrollToTop:d,goToTableView:v,toggleLocalStorage:g,isItemInLocalStorage:m,infiniteScrollTarget:i}}});const re=(0,S.A)(ne,[["render",le],["__scopeId","data-v-5c3e6a33"]]);var ce=re;const ue={id:"table-view"},pe={class:"grid-view"},de={class:"grid-container"},ve=["onClick"],ge={class:"poster-image-wrapper"},me=["src","alt"],he={class:"poster-title"},ke={class:"pagination"},fe=["disabled"],we=["onClick"],be=["disabled"];function Ce(e,t,o,s,l,i){return(0,a.uX)(),(0,a.CE)("div",ue,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToPopularView&&e.goToPopularView(...t)),class:"toggle-view-button"},"Switch to Popular View"),(0,a.Lk)("div",pe,[(0,a.Lk)("div",de,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.paginatedItems,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:"grid-item",onClick:o=>e.toggleLocalStorage(t)},[(0,a.Lk)("div",ge,[t.image?((0,a.uX)(),(0,a.CE)("img",{key:0,src:t.image,alt:t.name,class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,me)):(0,a.Q3)("",!0),(0,a.Lk)("div",he,(0,u.v_)(t.name),1)])],8,ve)))),128))]),(0,a.Lk)("div",ke,[(0,a.Lk)("button",{onClick:t[1]||(t[1]=t=>e.goToPage(e.currentPage-1)),disabled:1===e.currentPage},"Previous",8,fe),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.visiblePages,(t=>((0,a.uX)(),(0,a.CE)("span",{key:t,onClick:o=>e.goToPage(t),class:(0,u.C4)(["page-number",{active:t===e.currentPage}])},(0,u.v_)(t),11,we)))),128)),(0,a.Lk)("button",{onClick:t[2]||(t[2]=t=>e.goToPage(e.currentPage+1)),disabled:e.currentPage===e.totalPages},"Next",8,be)])])])}var Se=(0,a.pM)({name:"TableViewComponent",props:{items:{type:Array,required:!0}},setup(e){const t=(0,U.KR)([]),o=(0,U.KR)(1),s=20,l=(0,U.KR)(!1),i=(0,c.rd)(),n=(0,a.EW)((()=>Math.ceil(t.value.length/s))),r=(0,a.EW)((()=>{const e=(o.value-1)*s,a=e+s;return t.value.slice(e,a)})),u=(0,a.EW)((()=>{const e=[],t=8,s=n.value;let a=Math.max(1,o.value-Math.floor(t/2)),l=a+t-1;l>s&&(l=s,a=Math.max(1,l-t+1));for(let o=a;o<=l;o++)e.push(o);return e})),p=()=>{const e=JSON.parse(localStorage.getItem("authUser")||"{}");return e.password||""},d=p(),v=async(e=!1)=>{if(l.value)return;l.value=!0;const s="https://api.themoviedb.org/3";try{if(e)for(let e=1;e<=8;e++){const o=`${s}/movie/popular?api_key=${d}&language=ko-KR&page=${e}`,a=await fetch(o),l=await a.json();t.value=[...t.value,...l.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))]}else{const e=`${s}/movie/popular?api_key=${d}&language=ko-KR&page=${o.value}`,a=await fetch(e),l=await a.json();t.value=[...t.value,...l.results.map((e=>({id:e.id,name:e.title,image:`https://image.tmdb.org/t/p/w500${e.poster_path}`})))]}}catch(a){console.error("Failed to fetch popular movies:",a)}finally{l.value=!1}},g=e=>{e>0&&e<=n.value&&(o.value=e,v())},m=()=>{o.value>1&&(o.value-=1,v())},h=()=>{o.value<n.value&&(o.value+=1,v())},k=()=>{i.push("/popular")},f=e=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const s=o.findIndex((t=>t.id===e.id));-1===s?o.push(e):o.splice(s,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),console.log("Updated localStorage:",o),t.value=[...t.value]},w=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,a.sV)((()=>{v(!0)})),{paginatedItems:r,currentPage:o,totalPages:n,visiblePages:u,goToPage:g,previousPage:m,nextPage:h,popularItems:t,goToPopularView:k,toggleLocalStorage:f,isItemInLocalStorage:w}}});const Le=(0,S.A)(Se,[["render",Ce],["__scopeId","data-v-91028156"]]);var ye=Le;const Ie={key:0,class:"loading"},Me={id:"wishlist"},Te={class:"poster-list"},Ee=["onClick"],_e=["src"],Pe={class:"poster-title"};function Fe(e,t,o,s,l,i){return(0,a.uX)(),(0,a.CE)(a.FK,null,[e.isFetching?((0,a.uX)(),(0,a.CE)("div",Ie,"Loading...")):(0,a.Q3)("",!0),(0,a.Lk)("div",Me,[e.showTopButton?((0,a.uX)(),(0,a.CE)("button",{key:0,onClick:t[0]||(t[0]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")):(0,a.Q3)("",!0),(0,a.Lk)("div",Te,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.popularItems,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:(0,u.C4)(["poster-container",{"selected-poster":e.isItemInLocalStorage(t)}]),onClick:o=>e.toggleLocalStorage(t)},[(0,a.Lk)("img",{src:t.image,alt:"movie poster",class:"poster-image"},null,8,_e),(0,a.Lk)("p",Pe,(0,u.v_)(t.name),1)],10,Ee)))),128))])])],64)}var Xe=(0,a.pM)({name:"WishlistViewComponent",setup(){const e=(0,U.KR)([]),t=((0,U.KR)(1),(0,U.KR)(!1)),o=(0,U.KR)(!1),s=(0,c.rd)(),l=async()=>{if(!t.value){t.value=!0;try{const t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");e.value=[...t]}catch(o){console.error("Failed to fetch popular movies:",o)}finally{t.value=!1}}},i=()=>{const e=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-10;e&&l(),o.value=window.scrollY>200},n=()=>{window.scrollTo({top:0,behavior:"smooth"})},r=()=>{s.push("/popular")},u=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const s=o.findIndex((e=>e.id===t.id));-1===s?o.push(t):o.splice(s,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),e.value=[...o]},p=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))};return(0,a.sV)((()=>{l(),window.addEventListener("scroll",i)})),(0,a.xo)((()=>{window.removeEventListener("scroll",i)})),{popularItems:e,isFetching:t,showTopButton:o,scrollToTop:n,goToPopularView:r,toggleLocalStorage:u,isItemInLocalStorage:p}}});const Oe=(0,S.A)(Xe,[["render",Fe],["__scopeId","data-v-0b377f9f"]]);var Re=Oe;const Ke={class:"search-filter-container"},$e={class:"search-container"},Ne={class:"filter-section"},Je=["value"],Ue={key:0,class:"loading"},Ve={class:"grid-view"},xe={class:"grid-container"},Ae=["onClick"],We=["src","alt"],Qe={class:"poster-title"},De={ref:"infiniteScrollTarget",class:"infinite-scroll-target"};function je(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",Ke,[(0,a.Lk)("div",$e,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchQuery=t),placeholder:"Search movies...",class:"search-input"},null,512),[[s.Jo,e.searchQuery]]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...t)=>e.searchMovies&&e.searchMovies(...t)),class:"search-button"},"Search")]),(0,a.Lk)("div",Ne,[(0,a.Lk)("label",null,[t[8]||(t[8]=(0,a.eW)(" Genre: ")),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedGenre=t)},[t[7]||(t[7]=(0,a.Lk)("option",{value:""},"All",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.genres,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.id},(0,u.v_)(e.name),9,Je)))),128))],512),[[s.u1,e.selectedGenre]])]),(0,a.Lk)("label",null,[t[10]||(t[10]=(0,a.eW)(" Rating: ")),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedRatingRange=t)},t[9]||(t[9]=[(0,a.Fv)('<option value="" data-v-42fe5601>All</option><option value="0-4" data-v-42fe5601>4 and below</option><option value="4-5" data-v-42fe5601>4 - 5</option><option value="5-6" data-v-42fe5601>5 - 6</option><option value="6-7" data-v-42fe5601>6 - 7</option><option value="7-8" data-v-42fe5601>7 - 8</option><option value="8-9" data-v-42fe5601>8 - 9</option><option value="9-10" data-v-42fe5601>9 - 10</option>',8)]),512),[[s.u1,e.selectedRatingRange]])]),(0,a.Lk)("label",null,[t[12]||(t[12]=(0,a.eW)(" Sort By: ")),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.sortBy=t)},t[11]||(t[11]=[(0,a.Lk)("option",{value:"popularity.asc"},"Popularity (Ascending)",-1),(0,a.Lk)("option",{value:"popularity.desc"},"Popularity (Descending)",-1)]),512),[[s.u1,e.sortBy]])]),(0,a.Lk)("button",{onClick:t[5]||(t[5]=(...t)=>e.resetFilters&&e.resetFilters(...t)),class:"reset-button"},"Reset Filters")])]),e.isFetching?((0,a.uX)(),(0,a.CE)("div",Ue,"Loading...")):(0,a.Q3)("",!0),(0,a.Lk)("div",Ve,[(0,a.Lk)("div",xe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.movies,(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id,class:"grid-item poster-container",onClick:o=>e.toggleLocalStorage(t)},[(0,a.Lk)("img",{src:`https://image.tmdb.org/t/p/w500${t.poster_path}`,alt:t.title,class:(0,u.C4)(["poster-image",{"selected-poster":e.isItemInLocalStorage(t)}])},null,10,We),(0,a.Lk)("p",Qe,(0,u.v_)(t.title),1)],8,Ae)))),128))]),(0,a.Lk)("div",De,null,512)]),e.showTopButton?((0,a.uX)(),(0,a.CE)("button",{key:1,onClick:t[6]||(t[6]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),class:"top-button"},"TOP")):(0,a.Q3)("",!0)],64)}const Be="https://api.themoviedb.org/3";var He=(0,a.pM)({name:"SearchViewComponent",setup(){const e=(0,U.KR)([]),t=(0,U.KR)([]),o=(0,U.KR)(""),s=(0,U.KR)(""),l=(0,U.KR)("popularity"),i=(0,U.KR)(!1),n=(0,U.KR)(1),r=(0,U.KR)(!1),u=(0,U.KR)(""),p=((0,c.rd)(),(0,U.KR)(null)),d=()=>{const e=JSON.parse(localStorage.getItem("authUser")||"{}");return e.password||""},v=async(t=1)=>{if(i.value)return;i.value=!0;const a=d();let n=`${Be}/discover/movie?api_key=${a}&language=ko-KR&page=${t}`;if(o.value&&(n+=`&with_genres=${o.value}`),s.value){const[e,t]=s.value.split("-");n+=`&vote_average.gte=${e}&vote_average.lte=${t}`}n+=`&sort_by=${l.value}`,u.value&&(n=`${Be}/search/movie?api_key=${a}&language=ko-KR&query=${u.value}&page=${t}`);try{const t=await fetch(n),o=await t.json();e.value=[...e.value,...o.results]}catch(r){console.error("Failed to fetch movies:",r)}finally{i.value=!1}},g=async()=>{const e=d(),o=`${Be}/genre/movie/list?api_key=${e}&language=ko-KR`;try{const e=await fetch(o),s=await e.json();t.value=s.genres}catch(s){console.error("Failed to fetch genres:",s)}};(0,a.wB)([o,s,l],(()=>{e.value=[],n.value=1,v(n.value)}));const m=()=>{let t=JSON.parse(localStorage.getItem("searchQueries")||"{}");u.value&&(t[u.value]?t[u.value]++:t[u.value]=1,localStorage.setItem("searchQueries",JSON.stringify(t))),e.value=[],n.value=1,v(n.value)},h=()=>{o.value="",s.value="",l.value="popularity",u.value=""},k=e=>{const[t]=e;t.isIntersecting&&!i.value&&(n.value++,v(n.value))},f=t=>{let o=JSON.parse(localStorage.getItem("selectedMovies")||"[]");const s=o.findIndex((e=>e.id===t.id));-1===s?o.push({id:t.id,name:t.title,image:`https://image.tmdb.org/t/p/w500${t.poster_path}`}):o.splice(s,1),localStorage.setItem("selectedMovies",JSON.stringify(o)),e.value=[...e.value]},w=e=>{let t=JSON.parse(localStorage.getItem("selectedMovies")||"[]");return t.some((t=>t.id===e.id))},b=()=>{window.scrollTo({top:0,behavior:"smooth"})},C=()=>{r.value=window.scrollY>200};return(0,a.sV)((()=>{v(),g();const e=new IntersectionObserver(k,{root:null,rootMargin:"0px",threshold:1});p.value&&e.observe(p.value),window.addEventListener("scroll",C)})),(0,a.xo)((()=>{window.removeEventListener("scroll",C)})),{movies:e,genres:t,selectedGenre:o,selectedRatingRange:s,sortBy:l,isFetching:i,searchQuery:u,resetFilters:h,searchMovies:m,infiniteScrollTarget:p,toggleLocalStorage:f,isItemInLocalStorage:w,scrollToTop:b,showTopButton:r}}});const Ge=(0,S.A)(He,[["render",je],["__scopeId","data-v-42fe5601"]]);var Ye=Ge;const qe={id:"app"};function ze(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",qe,[(0,a.bF)(s.eB,{name:"fade"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.Wv)((0,a.$y)(e.currentComponent),{onSwitchForm:e.switchForm,onLoginSuccess:e.navigateHome,onSignupSuccess:e.navigateSignin},null,40,["onSwitchForm","onLoginSuccess","onSignupSuccess"]))])),_:1})])}const Ze={class:"signin-form"},et={class:"signin-container"},tt={key:0,class:"error"},ot={class:"signin-remember"},st={key:1,class:"error"};function at(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",Ze,[(0,a.Lk)("div",et,[t[7]||(t[7]=(0,a.Lk)("h2",{class:"signin-title"},"Login",-1)),e.validEmail?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("span",tt,"Invalid email address")),(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),class:"signin-input",placeholder:"Enter your email"},null,512),[[s.Jo,e.email]]),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),class:"signin-input",placeholder:"Enter your password"},null,512),[[s.Jo,e.password]]),(0,a.Lk)("div",ot,[(0,a.bo)((0,a.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=t=>e.rememberMe=t)},null,512),[[s.lH,e.rememberMe]]),t[5]||(t[5]=(0,a.eW)()),t[6]||(t[6]=(0,a.Lk)("span",null,"Remember me",-1))]),(0,a.Lk)("button",{onClick:t[3]||(t[3]=(...t)=>e.handleLogin&&e.handleLogin(...t)),class:"signin-button"},"Login"),(0,a.Lk)("button",{onClick:t[4]||(t[4]=t=>e.$emit("switch-form")),class:"signup-button"},"Go to Sign Up"),e.errorMessage?((0,a.uX)(),(0,a.CE)("span",st,(0,u.v_)(e.errorMessage),1)):(0,a.Q3)("",!0)])])}var lt=o(7411),it=(0,a.pM)({name:"SignInComponent",setup(){const e=(0,lt.dj)(),t=()=>{e.success("Login Success")};return{toast:e,showToast:t}},data(){return{email:"",password:"",rememberMe:!1,errorMessage:""}},created(){const e=JSON.parse(localStorage.getItem("rememberedUser"));e&&(this.email=e.email,this.password=e.password,this.rememberMe=!0)},computed:{validEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(this.email)}},methods:{handleLogin(){if(!this.validEmail)return void(this.errorMessage="Please enter a valid email.");if(this.password.length<6)return void(this.errorMessage="Password must be at least 6 characters.");let e=JSON.parse(localStorage.getItem("userCredentials"));Array.isArray(e)||(e=[]);const t=e.some((e=>e.email===this.email&&e.password===this.password));if(t){const e=b();e.login({email:this.email,password:this.password}),this.rememberMe?localStorage.setItem("rememberedUser",JSON.stringify({email:this.email,password:this.password})):localStorage.removeItem("rememberedUser"),this.showToast(),this.$emit("login-success")}else this.errorMessage="Invalid email or password."}}});const nt=(0,S.A)(it,[["render",at],["__scopeId","data-v-70f14640"]]);var rt=nt;const ct={class:"signup-form"},ut={class:"signup-container"},pt={key:0,class:"error"},dt={key:1,class:"error"},vt={class:"signup-terms"},gt={key:2,class:"error"};function mt(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",ct,[(0,a.Lk)("div",ut,[t[8]||(t[8]=(0,a.Lk)("h2",{class:"signup-title"},"Sign Up",-1)),(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),class:"signup-input",placeholder:"Enter your email"},null,512),[[s.Jo,e.email]]),e.validEmail?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("span",pt,"Invalid email address")),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),class:"signup-input",placeholder:"Enter your password"},null,512),[[s.Jo,e.password]]),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=t=>e.confirmPassword=t),class:"signup-input",placeholder:"Confirm your password"},null,512),[[s.Jo,e.confirmPassword]]),e.passwordsMatch?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("span",dt,"Passwords do not match")),(0,a.Lk)("div",vt,[(0,a.bo)((0,a.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=t=>e.agreeToTerms=t)},null,512),[[s.lH,e.agreeToTerms]]),t[6]||(t[6]=(0,a.eW)()),t[7]||(t[7]=(0,a.Lk)("span",null,"I agree to the terms and conditions",-1))]),(0,a.Lk)("button",{onClick:t[4]||(t[4]=(...t)=>e.handleSignup&&e.handleSignup(...t)),class:"signup-button"},"Sign Up"),(0,a.Lk)("button",{onClick:t[5]||(t[5]=t=>e.$emit("switch-form")),class:"signin-button"},"Go to Sign In"),e.errorMessage?((0,a.uX)(),(0,a.CE)("span",gt,(0,u.v_)(e.errorMessage),1)):(0,a.Q3)("",!0)])])}var ht=(0,a.pM)({name:"SignUpComponent",data(){return{email:"",password:"",confirmPassword:"",agreeToTerms:!1,errorMessage:""}},computed:{validEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(this.email)},passwordsMatch(){return this.password===this.confirmPassword}},methods:{handleSignup(){if(!this.validEmail)return void(this.errorMessage="Please enter a valid email.");if(this.password.length<6)return void(this.errorMessage="Password must be at least 6 characters.");if(!this.passwordsMatch)return void(this.errorMessage="Passwords do not match.");if(!this.agreeToTerms)return void(this.errorMessage="You must agree to the terms and conditions.");const e={email:this.email,password:this.password};let t=JSON.parse(localStorage.getItem("userCredentials"));Array.isArray(t)||(t=[]),t.some((e=>e.email===this.email))?this.errorMessage="Email is already registered.":(t.push(e),localStorage.setItem("userCredentials",JSON.stringify(t)),this.$emit("signup-success"))}}});const kt=(0,S.A)(ht,[["render",mt],["__scopeId","data-v-162ea04e"]]);var ft=kt,wt=(0,a.pM)({name:"SignViewComponent",data(){return{currentComponent:"SignInComponent"}},components:{SignInComponent:rt,SignUpComponent:ft},methods:{switchForm(){this.currentComponent="SignInComponent"===this.currentComponent?"SignUpComponent":"SignInComponent"},navigateHome(){this.$router.push("/")},navigateSignin(){this.currentComponent="SignInComponent"}}});const bt=(0,S.A)(wt,[["render",ze]]);var Ct=bt;const St=[{path:"/",name:"home",component:q},{path:"/popular",name:"popular",component:ce},{path:"/popular/table",name:"table",component:ye},{path:"/wishlist",name:"wishlist",component:Re},{path:"/search",name:"search",component:Ye},{path:"/sign",name:"sign",component:Ct}],Lt=(0,c.aE)({history:(0,c.Bt)("/netflix_clone/"),routes:St});var yt=Lt;o(7917);const It={position:"top-center",timeout:3e3,closeOnClick:!0,toastClassName:"netflix-toast",bodyClassName:"netflix-toast-body"},Mt=(0,w.Ey)();(0,s.Ef)(O).use(yt).use(Mt).use(lt.Ay,It).mount("#app")}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var l=t[s]={exports:{}};return e[s].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,l){if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],l=e[u][2];for(var n=!0,r=0;r<s.length;r++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](s[r])}))?s.splice(r--,1):(n=!1,l<i&&(i=l));if(n){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[s,a,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,l,i=s[0],n=s[1],r=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(r)var u=r(o)}for(t&&t(s);c<i.length;c++)l=i[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},s=self["webpackChunknetflix_clone"]=self["webpackChunknetflix_clone"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(357)}));s=o.O(s)})();
//# sourceMappingURL=app.7784962b.js.map