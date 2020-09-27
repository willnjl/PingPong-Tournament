(this["webpackJsonpping-pong-tournament"]=this["webpackJsonpping-pong-tournament"]||[]).push([[0],{21:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=(t(23),t(8)),l=t.n(c),u=t(7),o=t(13),i=t.n(o),s=t(3),m=t(6),d=t(1),v=t(15),f=t(16),g=t(5),p=t(19),b=t(18),h=function(e){Object(p.a)(t,e);var n=Object(b.a)(t);function t(e){var a;return Object(v.a)(this,t),(a=n.call(this,e)).state={names:["",""],toggleHover:!1,numOfPlayers:2,rules:{scoreToWin:a.props.rules.scoreToWin,alternateServe:a.props.rules.alternateServe}},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.addPlayer=a.addPlayer.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a.setScoreToWin=a.setScoreToWin.bind(Object(g.a)(a)),a.setAlternateServe=a.setAlternateServe.bind(Object(g.a)(a)),a.toggleHover=a.toggleHover.bind(Object(g.a)(a)),a}return Object(f.a)(t,[{key:"setAlternateServe",value:function(e){this.setState({rules:Object(d.a)(Object(d.a)({},this.state.rules),{},{alternateServe:e.currentTarget.value})})}},{key:"setScoreToWin",value:function(e){this.setState({rules:Object(d.a)(Object(d.a)({},this.state.rules),{},{scoreToWin:e.currentTarget.value})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.names.length%2===0&&this.props.submitSetup(this.state)}},{key:"addPlayer",value:function(e){e.preventDefault();var n=this.state,t=n.names,a=n.field;""!==a&&this.setState({names:[].concat(Object(m.a)(t),[a])})}},{key:"handleNumOfPlayers",value:function(e){var n=this.state,t=n.names,a=n.numOfPlayers,r=e.currentTarget.value,c=Object(m.a)(this.state.names);if(r>a)for(var l=c.length;l<r;l+=1)c.push("");else c=t.filter((function(n,t){return t<e.currentTarget.value}));this.setState({names:c,numOfPlayers:e.currentTarget.value})}},{key:"handleChange",value:function(e,n){var t=e.currentTarget.value,a=Object(m.a)(this.state.names);a[n]=t,this.setState({names:a})}},{key:"toggleHover",value:function(){this.setState({toggleHover:!this.state.toggleHover})}},{key:"render",value:function(){for(var e=this,n=[],t=function(t){n.push(r.a.createElement("input",{key:t,onChange:function(n){return e.handleChange(n,t)},value:e.state.names[t],placeholder:"Player "+(t+1)+"'s name",maxLength:"10",required:!0}))},a=0;a<this.state.numOfPlayers;a+=1)t(a);var c=this.state.names.every((function(e){return""!==e}));return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"scoreToWin"},"Score to win:"),r.a.createElement("select",{name:"scoreToWin",onChange:function(n){return e.setScoreToWin(n)},value:this.state.rules.scoreToWin},[21,11,7].map((function(e,n){return r.a.createElement("option",{key:n,value:e},e)})))),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"alternateServe"},"Alternate serves every:"),r.a.createElement("select",{name:"alternateServe",onChange:function(n){return e.setAlternateServe(n)},value:this.state.rules.alternateServe},[5,3,2].map((function(e,n){return r.a.createElement("option",{key:n,value:e},e)})))),r.a.createElement("div",{className:"form__group"},r.a.createElement("label",{htmlFor:"numOfPlayers"},"Number of competitors:"),r.a.createElement("select",{name:"numOfPlayers",onChange:function(n){return e.handleNumOfPlayers(n)}},[2,4,8].map((function(e,n){return r.a.createElement("option",{key:n,value:e},e)})))),r.a.createElement("div",{className:"form__names-container"},n.map((function(e){return e}))),c?r.a.createElement("button",{className:"button",onClick:function(n){return e.handleSubmit(n)}},"submit"):r.a.createElement("div",{onPointerEnter:function(){return e.toggleHover()},onPointerLeave:function(){return e.toggleHover()}},r.a.createElement("button",{disabled:!0},"submit")),r.a.createElement("div",{className:"validator"},this.state.toggleHover?r.a.createElement("p",null,"provide names to proceed"):r.a.createElement("p",null)))}}]),t}(a.Component),E=Object(s.b)((function(e){return{rules:e.rules}}),(function(e){return{submitSetup:function(n){var t=n.names,a=n.rules;return e({type:"SUBMIT",names:t,rules:a})}}}))(h);function O(e){var n=e.handleClick;return e.setup?r.a.createElement("button",{className:"button--reset",onClick:function(){return n()}},"start over"):null}t(37);function y(e){var n=e.roundsRemaining;return r.a.createElement("div",{className:"round-title"},r.a.createElement("h3",null,function(e){switch(e){case 3:return"Quarter Final";case 1:return"Semi Final";case 0:return"Final";default:return"Rounds Remaining ".concat(e)}}(n)))}function j(e){var n=e.player1,t=e.player2,a=e.winner;return r.a.createElement("div",{className:"match-card__complete"},r.a.createElement("div",null,r.a.createElement("p",null,n.name),r.a.createElement("p",null,n.score)),r.a.createElement("div",null,r.a.createElement("p",null,1===a?n.name:t.name," ","\ud83c\udfc5")),r.a.createElement("div",null,r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.score)))}function S(e){var n=e.player,t=e.gameId,a=e.handleScore,c=e.serving;return r.a.createElement("div",{className:"player "},r.a.createElement("h3",{className:"name info"},n.name),r.a.createElement("div",{className:"info"},c?"\ud83c\udfd3":null),r.a.createElement("h3",{className:"info"},n.score),r.a.createElement("div",{className:"score-btn_container"},r.a.createElement("button",{className:"score-btn__minus",onClick:function(){return a(n.id,t,-1)}},"-"),r.a.createElement("button",{className:"score-btn__plus",onClick:function(){return a(n.id,t,1)}},"+")))}var N=Object(s.b)((function(e,n){var t=e.games,a=e.rules;return{game:t[n.gameId],alternateServe:a.alternateServe}}),(function(e){return{handleScore:function(n,t,a){return e({type:"SCORE",playerId:n,gameId:t,value:a})}}}))((function(e){var n=e.game,t=e.handleScore,a=n.player1,c=n.player2,l=n.winner,u=n.player1Serving;return r.a.createElement(r.a.Fragment,null,0===l?r.a.createElement("div",{className:"match-card"},r.a.createElement(S,{player:a,handleScore:t,gameId:n.id,serving:u}),r.a.createElement(S,{player:c,handleScore:t,gameId:n.id,serving:!u})):r.a.createElement(j,{player1:a,player2:c,winner:l}))})),k=t(20);var w=Object(s.b)((function(e,n){return{roundsRemaining:e.roundsRemaining,record:n.record}}),(function(e){return{handleDraw:function(){return e({type:"DRAW"})},handleNewGame:function(){return e({type:"NEW_GAME"})}}}))((function(e){var n=e.roundsRemaining,t=e.record,a=e.handleDraw,c=e.handleNewGame,l=function(e,n){return r.a.createElement(r.a.Fragment,{key:n},r.a.createElement(y,{roundsRemaining:e[0].roundsRemaining}),r.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("tbody",null,function(e){return e.map((function(e){var n=e.player1,t=e.player2,a=e.winner,c=n.score>t.score,l=e.roundsRemaining>0?"\ud83c\udfc5":"\ud83c\udfc6";return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,1===a?l:null),r.a.createElement("td",{className:c?null:"strikethrough"},n.name),r.a.createElement("td",{className:c?null:"strikethrough"},n.score),r.a.createElement("td",{className:c?"strikethrough":null},t.score),r.a.createElement("td",{className:c?"strikethrough":null},t.name),r.a.createElement("td",null,2===a?l:null))}))}(e))))};return r.a.createElement("div",{className:"round_over"},t.map((function(e,n){return r.a.createElement(r.a.Fragment,{key:n},l(e))})),n>0?r.a.createElement("button",{className:"button",onClick:a},"Next Round..."):r.a.createElement("button",{className:"button",onClick:c},"New Game"))}));var _=Object(s.b)((function(e){return{roundsRemaining:e.roundsRemaining,games:e.games,roundFin:e.roundFin,record:e.record}}))((function(e){var n=e.roundsRemaining,t=e.games,a=e.roundFin,c=e.record;return a?r.a.createElement(w,{record:c}):r.a.createElement("div",null,r.a.createElement(y,{roundsRemaining:n}),t.map((function(e){return r.a.createElement(N,{key:e.id,gameId:e.id})})))}));function C(e){return e.roundFin?r.a.createElement("button",{className:"print",onClick:function(){return window.print()}},"Print"):null}var T=function(e){var n=e.setup,t=e.roundFin,a=e.handleClick;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"title"},"Ping Pong Tournament")),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement(_,null)),r.a.createElement("div",{className:"buttons-bottom"},r.a.createElement(C,{roundFin:t}),r.a.createElement(O,{handleClick:function(){return a()},setup:n}))):r.a.createElement(E,null))},R=Object(s.b)((function(e){return{setup:e.setup,roundFin:e.roundFin,handleClick:e.handleClick}}),(function(e){return{handleClick:function(){return e({type:"NEW_GAME"})}}}))(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F={setup:!1,roundFin:!1,roundsRemaining:0,record:[],rules:{alternateServe:5,scoreToWin:21},games:[{id:0,winner:0,player1:{id:1,name:"",score:0},player2:{id:2,name:"",score:0}}]},W=function(e){return Math.floor(Math.random()*e.length-1)},P=function(e){var n=e.names.map((function(e,n){return{name:e,score:0}})),t=[];if(n.length>1)for(var a=0;n.length>0;){var r=W(n),c=W(n);if(r!==c){var l={id:a,winner:0,player1Serving:!0,player1:Object(d.a)(Object(d.a)({},n.splice(r,1)[0]),{},{id:1}),player2:Object(d.a)(Object(d.a)({},n.splice(c,1)[0]),{},{id:2})};t.push(l),a+=1}}return Object(d.a)(Object(d.a)({},e),{},{setup:!0,roundFin:!1,games:t,pool:n,names:[]})},I=function(e){return Object(d.a)(Object(d.a)({},e),{},{roundsRemaining:e.games.length-1})},A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.b,H=Object(u.c)((function(e,n){switch(n.type){case"SCORE":return function(e){var n=e.games.every((function(e){return function(e){return 0!==e.winner}(e)}));if(n){var t=Object(m.a)(e.record),a=e.games.map((function(n){return Object(d.a)(Object(d.a)({},n),{},{roundsRemaining:e.roundsRemaining})}));return t.unshift(a),Object(d.a)(Object(d.a)({},e),{},{roundFin:n,record:t})}return e}(function(e){var n=e.state,t=e.action,a=n.games,r=n.rules,c=t.gameId,l=a.map((function(e,n){if(n===c){var t=e.player1,a=e.player2;if(t.score>=r.scoreToWin&&t.score-a.score>2)return Object(d.a)(Object(d.a)({},e),{},{winner:1});if(a.score>=r.scoreToWin&&a.score-t.score>2)return Object(d.a)(Object(d.a)({},e),{},{winner:2})}return e}));return Object(d.a)(Object(d.a)({},n),{},{games:l})}(function(e,n){var t=e.games,a=e.rules,r=n.playerId,c=n.gameId,l=n.value,u=t.map((function(e,n){if(n===c){var t=e.player1,u=e.player2,o=a.scoreToWin-2,i=(t.score+u.score+l)%(t.score+l>=o&&u.score+l>=o?2:a.alternateServe)===0?!e.player1Serving:e.player1Serving;if(1===r&&t.score+l>=0)return Object(d.a)(Object(d.a)({},e),{},{player1Serving:i,player1:Object(d.a)(Object(d.a)({},t),{},{score:t.score+l})});if(u.score+l>=0)return Object(d.a)(Object(d.a)({},e),{},{player1Serving:i,player2:Object(d.a)(Object(d.a)({},u),{},{score:u.score+l})})}return e}));return{state:Object(d.a)(Object(d.a)({},e),{},{games:u}),action:n}}(e,n)));case"DRAW":return I(P(function(e){var n=e.games.reduce((function(e,n){var t=1===n.winner?n.player1.name:n.player2.name;return e.push(t),e}),[]);return Object(d.a)(Object(d.a)({},e),{},{names:n})}(e)));case"SUBMIT":return I(P(function(e,n){var t=n.names,a=n.rules;return Object(d.a)(Object(d.a)({},e),{},{names:t,rules:a})}(e,n)));case"NEW_GAME":return function(e,n){return Object(d.a)(Object(d.a)({},n),{},{rules:e.rules})}(e,F);default:return e}}),F,A(i()()));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:H},r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.91f79376.chunk.js.map