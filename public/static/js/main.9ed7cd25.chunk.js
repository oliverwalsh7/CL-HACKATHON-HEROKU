(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{238:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},255:function(e,t,n){},268:function(e,t){},292:function(e,t){},294:function(e,t){},370:function(e,t){},372:function(e,t){},381:function(e,t){},383:function(e,t){},408:function(e,t){},414:function(e,t){},427:function(e,t){},506:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(31),i=n.n(r),c=(n(238),n(92)),o=n(16),l=n.n(o),d=n(34),u=n(6),h=n(9),b=n(42),p=n(12),j=n(11),f=(n(240),n(241),n(4)),O=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"navbar-wrapper",children:[Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)("h2",{className:"title",children:"LINKTOPIA"}),Object(f.jsxs)("p",{children:["\xa0",this.props.town]})]}),Object(f.jsx)("p",{className:"role",children:"VOTER"}),Object(f.jsx)("p",{className:"address",children:this.props.account})]})}}]),n}(s.Component),m=(n(243),function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(c.a)({},e.target.name,e.target.value))},s.state={},s}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"registration-page-wrapper",children:[Object(f.jsx)("p",{style:{fontSize:32},children:"This address has not yet been registered to vote."}),Object(f.jsx)("p",{children:"Register to vote using this address (note: only one address can be registered per citizen):"}),Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{for:"fname",children:"First name:"}),Object(f.jsx)("input",{type:"text",id:"fname",name:"fname",value:this.props.fname,onChange:this.props.handle}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{for:"lname",children:"Last name:"}),Object(f.jsx)("input",{type:"text",id:"lname",name:"lname",value:this.props.lname,onChange:this.props.handle}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{for:"dob",children:"Date of birth:"}),Object(f.jsx)("input",{type:"date",id:"dob",name:"dob",value:this.props.dob,onChange:this.props.handle}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{for:"ssn",children:"SSN:"}),Object(f.jsx)("input",{type:"text",id:"ssn",name:"ssn",maxlength:"11",placeholder:"###-##-####",value:this.props.ssn,onChange:this.props.handle})]})]}),Object(f.jsx)("button",{onClick:this.props.register,children:"Register"})]})}}]),n}(s.Component)),x=(n(244),n(529)),v=n(527),g=n(530),w=n(225),C=n.n(w),k=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={},s}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"voter-home-page-wrapper",children:[Object(f.jsxs)("p",{style:{fontSize:32},children:["Welcome, ",Object(f.jsxs)("b",{children:[this.props.fname,"\xa0",this.props.lname]})]}),Object(f.jsx)("p",{children:"Your elections:"}),Object(f.jsx)("div",{className:"election-dropdowns",children:Object(f.jsxs)(x.a,{children:[Object(f.jsxs)(g.a,{expandIcon:Object(f.jsx)(C.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(f.jsx)("p",{children:"Title \xa0\xa0\xa0"}),Object(f.jsx)("p",{style:{float:"right"},children:"Voted/not voted placeholder"})]}),Object(f.jsx)(v.a,{children:Object(f.jsx)("p",{children:"Content"})})]})})]})}}]),n}(s.Component);n(255);var S=n(133),y=n.n(S),z=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).verifyMetaMaskAdr=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getCitizen(3);case 2:case"end":return e.stop()}}),e)}))),s.handleChange=function(e){s.setState(Object(c.a)({},e.target.name,e.target.value))},s.register=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getCitizen(1);case 2:if(!s.state.citizen.ssn){e.next=6;break}s.setState({statusMessage:"Click register again."}),e.next=14;break;case 6:if(1==s.state.citizen.count){e.next=10;break}s.setState({statusMessage:"Error: either you spelled something wrong or this citizen is already registered with another address."}),e.next=14;break;case 10:return s.setState({statusMessage:"Registering..."}),e.next=13,s.postAddress();case 13:s.setState({statusMessage:""});case 14:case"end":return e.stop()}}),e)}))),s.fillRandom=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getCitizen(2);case 2:console.log(s.state.citizen),s.state.citizen.dob&&s.setState({fname:s.state.citizen.first_name,lname:s.state.citizen.last_name,ssn:s.state.citizen.ssn,dob:s.state.citizen.dob.substring(0,10)});case 4:case"end":return e.stop()}}),e)}))),s.state={account:"",town:"",fname:"",lname:"",dob:"",ssn:"",registered:!1,citizen:{},statusMessage:""},s.handleChange=s.handleChange.bind(Object(b.a)(s)),s.getCitizen=s.getCitizen.bind(Object(b.a)(s)),s.postAddress=s.postAddress.bind(Object(b.a)(s)),s.register=s.register.bind(Object(b.a)(s)),s.bind=s.fillRandom.bind(Object(b.a)(s)),s}return Object(h.a)(n,[{key:"componentWillMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start"),e.next=3,this.loadWeb3();case 3:return e.next=5,this.loadBlockchainData();case 5:return e.next=7,this.verifyMetaMaskAdr();case 7:this.state.citizen.ssn&&(this.setState({fname:this.state.citizen.first_name,lname:this.state.citizen.last_name,dob:this.state.citizen.dob,ssn:this.state.citizen.ssn,registered:!0}),console.log(this.state)),console.log("end");case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadWeb3",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=6;break}return window.web3=new y.a(window.ethereum),e.next=4,window.ethereum.enable();case 4:e.next=7;break;case 6:window.web3?window.web3=new y.a(window.web3.currentProvider):window.alert("Non-Ethereum browser detected");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"loadBlockchainData",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.next=3,t.eth.getAccounts();case 3:n=e.sent,this.setState({account:n[0]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCitizen",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n,s,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URL("https://electchain-scvs.herokuapp.com/:".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT)),s={ssn:this.state.ssn,fname:this.state.fname,lname:this.state.lname,dob:this.state.dob,address:this.state.account,type:t},Object.keys(s).forEach((function(e){return n.searchParams.append(e,s[e])})),e.next=5,fetch(n,{method:"get",mode:"cors",headers:{"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e),a.setState({citizen:e}),1==a.state.citizen.count&&a.setState({registered:!0}),e}));case 5:e.sent;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"postAddress",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL("https://electchain-scvs.herokuapp.com/:".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT)),n={ssn:this.state.ssn,fname:this.state.fname,lname:this.state.lname,dob:this.state.dob,address:this.state.account},Object.keys(n).forEach((function(e){return t.searchParams.append(e,n[e])})),e.next=5,fetch(t,{method:"post",mode:"cors",headers:{"Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e),s.setState({citizen:e}),e}));case 5:e.sent;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(O,{account:this.state.account,town:this.state.town}),this.state.registered?Object(f.jsx)(k,{fname:this.state.fname,lname:this.state.lname}):Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{handle:this.handleChange,register:this.register,fname:this.state.fname,lname:this.state.lname,ssn:this.state.ssn,dob:this.state.dob},this.state.ssn),Object(f.jsx)("button",{onClick:Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.fillRandom());case 1:case"end":return t.stop()}}),t)}))),children:"Random Citizen"})]}),Object(f.jsx)("p",{children:this.state.statusMessage})]})}}]),n}(s.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,532)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root")),T()}},[[506,1,2]]]);
//# sourceMappingURL=main.9ed7cd25.chunk.js.map