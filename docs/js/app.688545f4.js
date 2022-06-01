(function(){"use strict";var e={9238:function(e,t,n){var o=n(9242),r=n(3396);const i=(0,r._)("h1",null,[(0,r._)("span",null,"Movi"),(0,r.Uk)("fy ")],-1);function a(e,t){const n=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[i])),_:1})]),(0,r._)("main",null,[(0,r.Wm)(o)])],64)}var l=n(89);const u={},s=(0,l.Z)(u,[["render",a]]);var c=s,v=n(678),p=n(7139),f=n.p+"img/doctor-strange2.998bb813.jpg";const m={class:"home"},d={class:"feature-card"},h=(0,r._)("img",{src:f,alt:"Doctor Strange poster",class:"featured-img"},null,-1),w=(0,r._)("div",{class:"detail"},[(0,r._)("h3",null,"Doctor Strange (new)"),(0,r._)("p",null,"Teams up with a mysterious girl from his dreams who can travel across multiverses, to battle multiple threats ")],-1),_=(0,r._)("input",{type:"submit",value:"Search"},null,-1),g={class:"movies-list"},y={class:"product-image"},b=["src"],k={class:"type"},O={class:"detail"},j={class:"year"};function D(e,t,n,i,a,l){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",d,[(0,r.Wm)(u,{to:"/movie/tt0409591"},{default:(0,r.w5)((()=>[h,w])),_:1})]),(0,r._)("form",{onSubmit:t[1]||(t[1]=(0,o.iM)((e=>i.SearchMovies()),["prevent"])),class:"search-box"},[(0,r.wy)((0,r._)("input",{type:"text",placeholder:"What are you looking for ?","onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e)},null,512),[[o.nr,i.search]]),_],32),(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.movies,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"movie",key:e.imdbID},[(0,r.Wm)(u,{to:"/movie/"+e.imdbID,class:"movie-link"},{default:(0,r.w5)((()=>[(0,r._)("div",y,[(0,r._)("img",{src:e.Poster,alt:"Movie Poster"},null,8,b),(0,r._)("div",k,(0,p.zw)(e.Type),1)]),(0,r._)("div",O,[(0,r._)("p",j,(0,p.zw)(e.Year),1),(0,r._)("h3",null,(0,p.zw)(e.Title),1)])])),_:2},1032,["to"])])))),128))])])}var M=n(4870),P={apikey:"e5e3bfc6"},S={setup(){const e=(0,M.iH)(""),t=(0,M.iH)([]),n=()=>{""!=e.value&&fetch(`https://www.omdbapi.com/?apikey=${P.apikey}&s=${e.value}`).then((e=>e.json())).then((n=>{t.value=n.Search,e.value="",console.log(t)}))};return{search:e,movies:t,SearchMovies:n}}};const x=(0,l.Z)(S,[["render",D]]);var z=x;const H={class:"movie-detail"},T=["src"];function W(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",H,[(0,r._)("h2",null,(0,p.zw)(o.movie.Title),1),(0,r._)("p",null,(0,p.zw)(o.movie.Year),1),(0,r._)("img",{src:o.movie.Poster,alt:"Movie Poster",class:"featured-img"},null,8,T),(0,r._)("p",null,(0,p.zw)(o.movie.Plot),1)])}var Y={setup(){const e=(0,M.iH)({}),t=(0,v.yj)();return(0,r.wF)((()=>{fetch(`http://www.omdbapi.com/?apikey=${P.apikey}&i=${t.params.id}&plot=full`).then((e=>e.json())).then((t=>{e.value=t}))})),{movie:e}}};const $=(0,l.Z)(Y,[["render",W]]);var Z=$;const C=[{path:"/",name:"Home",component:z},{path:"/movie/:id",name:"Movie Detail",component:Z}],F=(0,v.p7)({history:(0,v.PO)(""),routes:C});var I=F;(0,o.ri)(c).use(I).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var c=u(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkmovie_portfolio"]=self["webpackChunkmovie_portfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9238)}));o=n.O(o)})();
//# sourceMappingURL=app.688545f4.js.map