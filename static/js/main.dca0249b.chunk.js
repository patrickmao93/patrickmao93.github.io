(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/employee-directory.d805f204.png"},19:function(e,t,a){e.exports=a.p+"static/media/chart.0eca4126.png"},20:function(e,t,a){e.exports=a.p+"static/media/game.10569e9d.png"},21:function(e,t,a){e.exports=a.p+"static/media/gallery.806d63a9.png"},22:function(e,t,a){e.exports=a.p+"static/media/cco.3991b36b.png"},23:function(e,t,a){e.exports=a.p+"static/media/zhihu.005bf475.svg"},24:function(e,t,a){e.exports=a.p+"static/media/codewars.9b9631e5.svg"},25:function(e,t,a){e.exports=a(36)},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(31),function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__img"}),r.a.createElement("span",{className:"header__title"},"Patrick Mao"))}),i=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("i",{className:"far fa-dot-circle signal"}),r.a.createElement("span",null," Job Status: Ready for employment"))},s=a(13),m=a(5),u=a(6),f=a(8),h=a(7),d=a(9),p=a(39),E=a(38),v=function(e){return e.map(function(e){return r.a.createElement(E.a,{to:e.to,className:"nav__link",activeClassName:"nav__link--active",exact:!0},function(e){switch(e){case"/":return r.a.createElement("span",null,"Welcome");case"/portfolio":return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-folder-open"}),r.a.createElement("span",null,"Project Portfolio"));case"/resume":return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-file-alt"}),r.a.createElement("span",null,"Resume"));default:return r.a.createElement("span",null,"Welcome")}}(e.to))})},b=function(e){return r.a.createElement("nav",{className:"nav"},v(e.tabs))},N=a(40),_=a(37),g=a(17),y=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"line ".concat(this.props.color," w-").concat(this.props.length)})}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).ref=r.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){for(var e=Object(s.a)(this.ref.current.children),t=function(t){setTimeout(function(){e[t].style.opacity=.4},3*t),setTimeout(function(){e[t].style.filter="grayscale(0)"},3*(e.length-t-1))},a=0;a<e.length;a++)t(a)}},{key:"generateLines",value:function(e){for(var t=["blue","purple","green","yellow","white","red"],a=[],n=0;n<e;n++){var c=t[Math.floor(6*Math.random())],l=Math.ceil(5*Math.random());a.push(r.a.createElement(y,{key:n,color:c,length:l}))}return a}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.ref,className:"code"},this.generateLines(320))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).introRef=r.a.createRef(),a.contentRef=r.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.introRef,className:"intro"},r.a.createElement(j,null),r.a.createElement("div",{ref:this.contentRef,className:"intro__content"},r.a.createElement("div",{className:"intro__content__img"}),r.a.createElement("div",{className:"intro__content__desc"},r.a.createElement("h1",null,"Hi!"),r.a.createElement("h1",null,"I'm Patrick,"),r.a.createElement("h1",null,"A web developer"),r.a.createElement(g.a,{to:"/portfolio",className:"link"},"Check out my projects"),r.a.createElement(g.a,{to:"/resume",className:"link"},"View my resume"))))}}]),t}(r.a.Component),C=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},e.header),r.a.createElement("div",{className:"card__content"},e.content),r.a.createElement("div",{className:"card__footer"},e.footer))},k=function(){return r.a.createElement("div",{className:"divider"})},w=a(18),x=a.n(w),P=a(19),R=a.n(P),G=a(20),M=a.n(G),A=a(21),I=a.n(A),D=a(22),T=a.n(D),J=function(e){return r.a.createElement("div",{className:"portfolio"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"section__header"},r.a.createElement("h1",null,"Projects I participated in")),r.a.createElement("div",{className:"section__content"},r.a.createElement(g.a,{to:"/portfolio/CCO",onClick:function(){return e.onClickCase("/portfolio/CCO")}},r.a.createElement(C,{header:r.a.createElement("h2",null,"Purdue University Center for Career Opportunity V4 website"),content:r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:T.a,alt:"Purdue CCO Site"})),footer:r.a.createElement("span",null,"Production site")})))),r.a.createElement(k,null),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"section__header"},r.a.createElement("h1",null,"Projects I did throughout the courses from ",r.a.createElement("a",{href:"/"},"Treehouse"))),r.a.createElement("div",{className:"section__content"},r.a.createElement(C,{header:r.a.createElement("h2",null,"Employee Directory"),content:r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:x.a,alt:"employee directory"})),footer:r.a.createElement("a",{href:"/"},"Github")}),r.a.createElement(C,{header:r.a.createElement("h2",null,"Chart App"),content:r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:R.a,alt:"chart app"})),footer:r.a.createElement("a",{href:"/"},"Github")}),r.a.createElement(C,{header:r.a.createElement("h2",null,"Guess The Phrase!"),content:r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:M.a,alt:"Guess the Phrase!"})),footer:r.a.createElement("a",{href:"/"},"Github")}),r.a.createElement(C,{header:r.a.createElement("h2",null,"An Interactive Photo Gallery"),content:r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:I.a,alt:"Gallery"})),footer:r.a.createElement("a",{href:"/"},"Github")}))))},S=function(){return r.a.createElement("div",null,"Resume")},z=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.match.params;return r.a.createElement("div",null,e.name)}}]),t}(r.a.Component),L=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement(N.a,null,r.a.createElement(_.a,{path:"/",exact:!0,component:O}),r.a.createElement(_.a,{path:"/portfolio",exact:!0,render:function(){return r.a.createElement(J,{onClickCase:e.props.onClickCase})}}),r.a.createElement(_.a,{path:"/resume",exact:!0,component:S}),r.a.createElement(_.a,{path:"/portfolio/:name",exact:!0,component:z})))}}]),t}(r.a.Component),V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={tabs:[{to:"/"},{to:"/portfolio"},{to:"/resume"}]},a.onClickCase=function(e){a.state.tabs.find(function(t){return t.to===e})||a.setState({tabs:[].concat(Object(s.a)(a.state.tabs),[{to:e}])})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"viewport"},r.a.createElement(b,{tabs:this.state.tabs}),r.a.createElement(L,{onClickCase:this.onClickCase})))}}]),t}(r.a.Component),W=a(23),B=a.n(W),H=a(24),U=a.n(H),q=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("a",{className:"sidebar__icon",href:"https://github.com/patrickmao93"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("i",{className:"fab fa-linkedin-in"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("img",{src:B.a,alt:"zhihu"})),r.a.createElement("a",{className:"sidebar__icon",href:"/"},r.a.createElement("img",{src:U.a,alt:"codewars",width:"25",height:"25"})),r.a.createElement("a",{className:"sidebar__icon sidebar__setting",href:"/"},r.a.createElement("i",{className:"fas fa-cog"})))},F=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(o,null),r.a.createElement(q,null),r.a.createElement(V,null),r.a.createElement(i,null))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.dca0249b.chunk.js.map