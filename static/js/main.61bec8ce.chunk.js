(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/bottle.897c4771.png"},21:function(e,a,t){e.exports=t.p+"static/media/Privacy Policy engel.b8fb1b91.pdf"},22:function(e,a,t){e.exports=t.p+"static/media/riding-with.83e0fd2b.png"},23:function(e,a,t){e.exports=t.p+"static/media/injuries-diagramm.753be89c.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/accident-diagramm.2b23d51a.jpg"},29:function(e,a,t){e.exports=t(49)},34:function(e,a,t){},43:function(e,a,t){e.exports=t.p+"static/media/logo.e8de9c5a.png"},44:function(e,a,t){e.exports=t.p+"static/media/sul-logo.650eacfc.svg"},45:function(e,a,t){e.exports=t.p+"static/media/eit-digital-logo.96f722f5.png"},46:function(e,a,t){e.exports=t.p+"static/media/unitn-logo.cde082ab.png"},47:function(e,a,t){e.exports=t.p+"static/media/Team.90660e19.jpg"},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),i=(t(34),t(11)),s=t(3),o=t(4),m=t(6),u=t(5),d=t(7),E=t(2);function h(){for(var e="",a=0;a<arguments.length;a++)arguments[a]&&(e+=arguments[a].trim()+" ");return e.trim()}var p=t(13);function v(e){return l.a.createElement("div",null,!!e.bookmarks&&e.bookmarks.name.map(function(a,t){return l.a.createElement("a",{href:"#".concat(e.bookmarks.url[t]),key:t},a)}))}var f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={isMenuOpen:!1},t.toggleMenu=t.toggleMenu.bind(Object(E.a)(t)),t.closeMenu=t.closeMenu.bind(Object(E.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"toggleMenu",value:function(){this.setState({isMenuOpen:!this.state.isMenuOpen})}},{key:"closeMenu",value:function(){this.setState({isMenuOpen:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("nav",{className:h("topnav",this.state.isMenuOpen&&"responsive"),id:"res-nav",onBlur:this.closeMenu},l.a.createElement("div",{className:h("menu-icon","white"),onClick:this.toggleMenu}),l.a.createElement("div",{className:"links"},!!this.props.links&&this.props.links.name.map(function(a,t){return l.a.createElement(p.b,{to:e.props.links.url[t],key:t},a)})),l.a.createElement("hr",{className:"no-desktop"}),l.a.createElement("div",{className:"bookmarks",onClick:this.closeMenu},l.a.createElement(v,{bookmarks:this.props.bookmarks})))}}]),a}(l.a.Component);function b(e){return l.a.createElement("section",{className:"brand"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 text"},l.a.createElement("div",{className:"brand-name"},"ENGEL"),l.a.createElement("div",{className:"brand-slogen"},"Don't worry, Bike happy"),l.a.createElement("div",{className:"more-link"},l.a.createElement("a",{href:"#learn-more"},"Learn More"),l.a.createElement("a",{href:"#email-form"},"Get Yours"))),l.a.createElement("div",{className:"col-6 logo"},l.a.createElement("img",{className:"brand-logo",src:t(43),alt:""}))))}function N(e){return l.a.createElement("section",{className:"introduction"},l.a.createElement("span",{id:"learn-more",className:"anchor"}),l.a.createElement("div",{className:"section-title"},"What is ",l.a.createElement("span",{className:"engel"},"ENGEL")," ?"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("p",{className:"slogen"},"Don't worry, Bike happy"),l.a.createElement("p",null,"means that we want you to ride safely and worry less about potential injuries."),l.a.createElement("p",null,"Among all cyclists mountain bikers have the most injuries and fatalities. The art of the sport is to embrace risks and therefore 70% of all accidents occur without any collision. Phones break, injuries prohibit you to call for help or you simply don\u2019t know your location."),l.a.createElement("p",null,"Whatever the case, Engel is the solution. It\u2019s a sophisticated electronic device robust and hidden inside your water bottle. More reliable than any smart phone or smart watch - it can detect a crash and report your location directly to emergency contacts you specify yourself. "),l.a.createElement("p",null,"Completely PHONE INDEPENDENT!")),l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:t(20),alt:""}))))}function y(e){return l.a.createElement("div",{id:"info-card"},l.a.createElement("div",{className:"title"},e.title),!!e.subTitle&&l.a.createElement("div",{className:"sub-title"},e.subTitle),!!e.text&&l.a.createElement("div",{className:"text"},e.text),!!e.button&&l.a.createElement("div",{className:"button-line"},l.a.createElement("button",{className:"button",type:"button",onClick:function(){e.closeCard()}},"Close")))}var g=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new Promise(function(n,l){var r=new XMLHttpRequest;r.open(a,e,!0),r.setRequestHeader("Content-Type","application/json"),r.timeout=1e4,r.ontimeout=function(e){l(e)},r.onerror=function(e){l(e)},r.onreadystatechange=function(){4===this.readyState&&n(JSON.parse(this.response))},r.send(JSON.stringify(t))})},k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={email:"",isEmailValid:!1,isSending:!1,showCard:!1,info:null},t.infocardClosed=t.infocardClosed.bind(Object(E.a)(t)),t.submitForm=t.submitForm.bind(Object(E.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"emailHandler",value:function(e){this.setState({email:e.target.value,isEmailValid:w(e.target.value)})}},{key:"infocardClosed",value:function(){this.setState({showCard:!1})}},{key:"submitForm",value:function(){var e=this;document.getElementById("gdpr").checked?this.state.isEmailValid&&(this.setState({isSending:!0,showCard:!0,info:{title:"Thank you for sharing your email.",subTitle:"Please wait until we register it.",text:null,button:!1}}),g("https://j21bzza060.execute-api.eu-central-1.amazonaws.com/prod/email","POST",{email:this.state.email}).then(function(a){e.setState({isSending:!1,info:{title:"Thank you for sharing your email.",subTitle:a.message,text:null,button:!0}})},function(a){e.setState({isSending:!1,info:{title:"Ops!",subTitle:"There were some network error. Please try leater.",text:null,button:!0}})})):this.setState({showCard:!0,info:{title:"First you have to accept our pivacy policy!",subTitle:null,text:"Please accept our privacy policy and try again.",button:!0}})}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"contact"},l.a.createElement("span",{id:"email-form",className:"anchor"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"email-title"},"Want to know more...",l.a.createElement("br",null),l.a.createElement("br",null),"Be the first to get an ",l.a.createElement("span",{className:"engel"},"ENGEL")),l.a.createElement("form",{id:"email-form",className:this.state.email?this.state.isEmailValid?"valid":"invalid":""},l.a.createElement("input",{id:"email",type:"email",placeholder:"Email",onKeyUp:function(a){return e.emailHandler(a)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"gdpr",value:"agree"}),l.a.createElement("label",null," I accept the ",l.a.createElement("a",{href:t(21),target:"_blank"},"privacy policy"),l.a.createElement("span",{className:"required"},"*")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{disabled:!this.state.isEmailValid||this.state.isSending,id:"submit-btn",type:"button",onClick:this.submitForm},this.state.isSending?"Sending":"Submit")))),this.state.showCard&&l.a.createElement(y,Object.assign({},this.state.info,{closeCard:this.infocardClosed})))}}]),a}(l.a.Component),w=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};function O(e){return l.a.createElement("section",{className:"statistic"},l.a.createElement("span",{id:"statistic",className:"anchor"}),l.a.createElement("div",{className:"section-title"},"Facts"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"statistic-title"},"Riding"),l.a.createElement("a",{href:t(22),target:"_blank"},l.a.createElement("img",{src:t(22),alt:""})),l.a.createElement("p",null,"Mountain Bikers often ride alone. Despite the fun, an accident could be fatal. Imagine you break your ribs, spine or collar bone and smash your phone. Even if you are able to call for help, can you accurately describe your location? How long will it take for help to find you? Engel detects a crash and calls for help, even if you are unconscious. It calls help and sends your exact location."))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"statistic-title"},"Injuries"),l.a.createElement("p",null,"22% percent of all crashes result in major injuries. That\u2019s a high percentage! Don\u2019t be the 1 of 5 that have this problem. Don\u2019t worry, bike happy, with Engel."),l.a.createElement("a",{href:t(23),target:"_blank"},l.a.createElement("img",{src:t(23),alt:""})))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"statistic-title"},"Accidents"),l.a.createElement("a",{href:t(24),target:"_blank"},l.a.createElement("img",{src:t(24),alt:""})),l.a.createElement("p",null,"Accidents occur regularly, however in contrast to road bikers, mountain bike riders often fall without exterior cause. Everyone can be unlucky. Don\u2019t take your chances, don\u2019t get injured again. You don\u2019t want to lay in hospital for weeks, just because you didn\u2019t get the right help.")))))}function C(e){return l.a.createElement("section",{className:"video"},l.a.createElement("span",{id:"videos",className:"anchor"}),l.a.createElement("div",{className:"section-title"},"Watch our video about the validation!"),l.a.createElement("div",{className:"outer-wrapper"},l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("iframe",{title:"vimeo1",src:"https://player.vimeo.com/video/327973883",className:"validation-video",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))))}function j(e){return l.a.createElement("section",{className:"sponsors"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:t(44),alt:""}))),l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:t(45),alt:""})),l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:t(46),alt:""}))))}var x=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"brand-name"},"ENGEL"),l.a.createElement("div",{className:"footer-brand-text"},l.a.createElement("p",null,"The IoT device which save your life."))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"footer-title"},"Contacts Us"),l.a.createElement("ul",{className:"footer-contacts"},l.a.createElement("li",null,"engel.customer@outlook.com"),l.a.createElement("li",null,"engelbikes@gmail.com"))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"footer-title"},"Page navigation"),l.a.createElement("div",{className:"footer-links"},l.a.createElement(v,{bookmarks:this.props.bookmarks})))))}}]),a}(l.a.Component),S={home:"/",team:"/team"},T=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e={name:["Learn More","Get Yours","Facts","Watch Our Video"],url:["learn-more","email-form","statistic","videos"]},a={links:{name:["Home","Team"],url:[S.home,S.team]},bookmarks:e},t={bookmarks:e};return l.a.createElement("div",null,l.a.createElement(f,a),l.a.createElement(b,null),l.a.createElement(N,null),l.a.createElement(k,null),l.a.createElement(O,null),l.a.createElement(C,null),l.a.createElement(j,null),l.a.createElement(x,t))}}]),a}(l.a.Component);function F(e){var a={name:["Lucrezia","Ludovico","Cesar","G\xe1bor","Marvin","Federico","Adriano"],url:["lucrezia","ludovico","cesar","gabor","marvin","federico","adriano"]},n={links:{name:["Home","Team"],url:[S.home,S.team]},bookmarks:a},r={bookmarks:a};return l.a.createElement("div",null,l.a.createElement(f,n),l.a.createElement("section",{className:"team-pic"},l.a.createElement("img",{src:t(47),alt:""})),l.a.createElement("section",{className:"profiles"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{id:"lucrezia",className:"anchor"}),l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 profile-picture lucrezia"}),l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"name"},"Lucrezia Pedani"))))),l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{id:"ludovico",className:"anchor"}),l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 profile-picture ludovico"}),l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"name"},"Ludovico Bianco")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{id:"cesar",className:"anchor"}),l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 profile-picture cesar"}),l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"name"},"Cesar Gonzalez"))))),l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{id:"gabor",className:"anchor"}),l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 profile-picture gabor"}),l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"name"},"G\xe1bor Major")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{id:"marvin",className:"anchor"}),l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 profile-picture marvin"}),l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"name"},"Marvin Mouroum"))))),l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{id:"federico",className:"anchor"}),l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 profile-picture federico"}),l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"name"},"Federico Favia")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3 no-mobile"}),l.a.createElement("div",{className:"col-6"},l.a.createElement("span",{id:"adriano",className:"anchor"}),l.a.createElement("div",{className:"profile-card"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-5 profile-picture adriano"}),l.a.createElement("div",{className:"col-7"},l.a.createElement("div",{className:"name"},"Adriano Fontanari"))))))),l.a.createElement(x,r))}var M=t(28),H=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={isStarted:!1,showCard:!1,firstName:null,lastName:null,email:null,address:null,country:null,city:null,zipCode:null},t.startHandler=t.startHandler.bind(Object(E.a)(t)),t.formHandler=t.formHandler.bind(Object(E.a)(t)),t.submitOrder=t.submitOrder.bind(Object(E.a)(t)),t.checkbox=t.checkbox.bind(Object(E.a)(t)),t.infocardClosed=t.infocardClosed.bind(Object(E.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"infocardClosed",value:function(){this.setState({showCard:!1})}},{key:"startHandler",value:function(){this.setState({isStarted:!0})}},{key:"formHandler",value:function(e){this.setState(Object(M.a)({},e.target.id,e.target.value))}},{key:"submitOrder",value:function(){var e=this;this.checkbox()&&(this.setState({isSending:!0,showCard:!0,info:{title:"Thank you for your order.",subTitle:"Please wait until we register it.",text:null,button:!1}}),g("https://j21bzza060.execute-api.eu-central-1.amazonaws.com/prod/order","POST",{firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,address:this.state.address,country:this.state.country,city:this.state.city,zipCode:this.state.zipCode}).then(function(a){e.setState({isSending:!1,info:{title:"Hurray!",subTitle:a.message,text:null,button:!0}})},function(a){e.setState({isSending:!1,info:{title:"Ops!",subTitle:"There were some network error. Please try leater.",text:null,button:!0}})}))}},{key:"checkbox",value:function(){return document.getElementById("privacy").checked?!!document.getElementById("purchase").checked||(this.setState({showCard:!0,info:{title:"First you have to confirm that you really want it!",subTitle:null,text:"Please confirm it and try again.",button:!0}}),!1):(this.setState({showCard:!0,info:{title:"First you have to accept our pivacy policy!",subTitle:null,text:"Please accept our privacy policy and try again.",button:!0}}),!1)}},{key:"render",value:function(){var e=this;return this.state.isStarted?l.a.createElement("div",null,l.a.createElement("div",{className:"form-title"},"Personal information"),l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"firstName"},"Firs Name"),l.a.createElement("input",{id:"firstName",type:"text",onChange:function(a){return e.formHandler(a)}}),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{id:"lastName",type:"text",onChange:function(a){return e.formHandler(a)}}),l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{id:"email",type:"email",onChange:function(a){return e.formHandler(a)}})),l.a.createElement("div",{className:"form-title"},"Shipping Information"),l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"address"},"Address"),l.a.createElement("input",{id:"address",type:"text",onChange:function(a){return e.formHandler(a)}}),l.a.createElement("label",{htmlFor:"country"},"Country"),l.a.createElement("input",{id:"country",type:"text",onChange:function(a){return e.formHandler(a)}}),l.a.createElement("label",{htmlFor:"city"},"City"),l.a.createElement("input",{id:"city",type:"text",onChange:function(a){return e.formHandler(a)}}),l.a.createElement("label",{htmlFor:"zipCode"},"Zip Code"),l.a.createElement("input",{id:"zipCode",type:"text",onChange:function(a){return e.formHandler(a)}})),l.a.createElement("div",{className:"text"},l.a.createElement("p",null,"Thank you for your interest in the ",l.a.createElement("span",{className:"engel"},"ENGEL")," bottle!"),l.a.createElement("p",null,"Once your ",l.a.createElement("span",{className:"engel"},"ENGEL")," has been produced we will notify you via e-mail. You will have one week topurchase it. No payments required at the moment. Once you recived the mail that you bottle is ready - we kindly ask you to purchase it within 7 days. In case you are not interested anymore please click the NO INTEREST ANYMORE button in the confirmation mail.")),l.a.createElement("form",{className:"accept"},l.a.createElement("div",null,l.a.createElement("input",{id:"privacy",type:"checkbox"}),l.a.createElement("label",{htmlFor:"privacy"},"I have read and I confirm with the ",l.a.createElement("a",{href:t(21),target:"_blank"},"privacy agreement"),".")),l.a.createElement("div",null,l.a.createElement("input",{id:"purchase",type:"checkbox"}),l.a.createElement("label",{htmlFor:"purchase"},"I confirm that I want to reserve my ",l.a.createElement("span",{className:"engel"},"ENGEL")," bottle for a later purchase."))),l.a.createElement("button",{className:"button",disabled:this.state.isSending,onClick:this.submitOrder},"Order"),this.state.showCard&&l.a.createElement(y,Object.assign({},this.state.info,{closeCard:this.infocardClosed}))):l.a.createElement("button",{className:"button",onClick:this.startHandler},"Book Now")}}]),a}(l.a.Component);function z(e){return l.a.createElement("div",{className:"landing"},l.a.createElement("div",{className:"content"},l.a.createElement("section",{className:"title"},l.a.createElement("div",{className:"brandname engel"},"ENGEL"),l.a.createElement("div",{className:"subtitle"},"Reserve your bottle now")),l.a.createElement("section",{className:"image"},l.a.createElement("img",{src:t(20),alt:""})),l.a.createElement("section",{className:"text"},l.a.createElement("p",null,"Our first 100 cutomers have the unique opportunity to recive an ",l.a.createElement("span",{className:"engel"},"ENGEL")," bottle for jsut 100\u20ac"),l.a.createElement("p",null,"This offer is limited to the first 100 customers. The regular price for our bottle is 250\u20ac")),l.a.createElement("section",{className:"form"},l.a.createElement(H,null))))}t(48);var L=function(){return l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:T}),l.a.createElement(i.a,{path:"/team",component:F}),l.a.createElement(i.a,{path:"/landing",component:z}),l.a.createElement(i.a,{component:function(){return l.a.createElement("div",null,"404 Not found ")}}))},I=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={showBanner:!0},t.acknowledgeCookie=t.acknowledgeCookie.bind(Object(E.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){P()&&this.setState({showBanner:!1})}},{key:"acknowledgeCookie",value:function(){var e=new Date,a=e.setFullYear(e.getFullYear()+3);document.cookie="acknowledge-cookie=1; max-age=".concat(a),this.setState({showBanner:!1})}},{key:"render",value:function(){return this.state.showBanner?l.a.createElement("div",{id:"cookie"},l.a.createElement("div",{className:"card"},l.a.createElement("p",null,"This site use cookies."),l.a.createElement("p",null,l.a.createElement("a",{href:"/alma"},"Learm more")),l.a.createElement("button",{onClick:this.acknowledgeCookie},"Got it!"))):null}}]),a}(l.a.Component),P=function(){return document.cookie.split(";").filter(function(e){return 0==e.trim().indexOf("acknowledge-cookie=")}).length};c.a.render(l.a.createElement(p.a,{basename:""},l.a.createElement(L,null),l.a.createElement("div",{className:"copy-right"},"Copyright 2019 - All Rights Reserved"),l.a.createElement(I,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.61bec8ce.chunk.js.map