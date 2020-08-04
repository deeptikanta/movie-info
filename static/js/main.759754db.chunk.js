(this["webpackJsonpmovie-info"]=this["webpackJsonpmovie-info"]||[]).push([[0],{64:function(e,t,a){e.exports=a(82)},69:function(e,t,a){},70:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(21),r=a.n(i),c=(a(69),a(29)),l=a(5),s=(a(70),a(24)),p=a(25),d=a(28),m=a(26),u=a(109),h=a(6),f=a(50),v=a.n(f),E=a(23),g=a(20),y=a(101),b=a(107),O=a(108),M=a(55),x=a.n(M),w=a(110),j=a(104),I=a(105),R=a(37),S=function(){return{root:{maxWidth:345},paddingForCard:{padding:"22px"},typography:{color:"#fff"},media:{height:0,paddingTop:"56.25%",cursor:"pointer"},avatar:{backgroundColor:"red"},search:{position:"relative",borderRadius:"2px",backgroundColor:"#0000008f",border:"2px solid #0080006b","&:hover":{backgroundColor:"#000000",cursor:"pointer",border:"2px solid #0080008f"},marginLeft:0,width:"100%"},searchIcon:{padding:"1px",height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputInput:{width:"100%"},inputRoot:{color:"inherit"}}},k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={searchedMovieName:"",page:1,redirect:!1},n.searchForMovie=n.searchForMovie.bind(Object(E.a)(n)),n.handleScroll=n.handleScroll.bind(Object(E.a)(n)),n}return Object(p.a)(a,[{key:"handleScroll",value:function(){var e=this.props,t=e.movieList,a=e.apiKey,n=this.state,o=n.searchedMovieName,i=n.page,r="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,c=document.body,l=document.documentElement,s=Math.max(c.scrollHeight,c.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight);r+window.pageYOffset>=s-1&&t.totalResults>10*i&&(this.props.fetchMovieListNextCycle(a,o,i+1),this.setState({page:i+1}))}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"changeInput",value:function(e){this.setState({searchedMovieName:e.target.value.trim()})}},{key:"searchForMovie",value:function(){var e=this.props.apiKey,t=this.state.searchedMovieName;t&&this.props.fetchMovieList(e,t)}},{key:"movieDetails",value:function(e){this.setState({redirect:!0,selectedMovie:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.redirect,n=t.selectedMovie,i=this.props,r=i.classes,c=i.allMovies,s=i.notificationMsg;return a&&n?o.a.createElement(l.a,{to:"/movieDetails/".concat(n.imdbID)}):o.a.createElement(y.a,{container:!0,justify:"center"},o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement(y.a,{container:!0,justify:"center"},o.a.createElement(y.a,{item:!0,xs:11,sm:8,md:6},o.a.createElement("div",{className:r.search},o.a.createElement("div",{className:r.searchIcon},"\xa0",o.a.createElement(x.a,null)),o.a.createElement(O.a,{id:"search-input",onBlur:this.changeInput.bind(this),placeholder:"Search for Movie Name",classes:{root:r.inputRoot,input:r.inputInput},inputProps:{"aria-label":"search"}}))),o.a.createElement(y.a,{item:!0,xs:10,sm:3,md:2},o.a.createElement(b.a,{variant:"contained",color:"secondary",onClick:this.searchForMovie},"Search"))),o.a.createElement("br",null),s&&o.a.createElement(y.a,{item:!0,xs:11,sm:8,md:10},o.a.createElement(R.a,{variant:"body2",component:"p",className:r.typography},s)),o.a.createElement(y.a,{container:!0},c.length>0&&c.map((function(t,a){return o.a.createElement(y.a,{item:!0,xs:11,sm:6,md:4,className:r.paddingForCard,key:a},o.a.createElement(w.a,{className:r.root,onClick:e.movieDetails.bind(e,t)},o.a.createElement(j.a,{title:t.Title,subheader:t.Year}),o.a.createElement(I.a,{className:r.media,image:t.Poster,title:t.Title})))})))),o.a.createElement("div",{className:"scrollDiv"}))}}]),a}(o.a.Component),N=Object(g.c)((function(e){var t=e.DashBoardReducer;return{apiKey:t.apiKey,allMovies:t.allMovies,movieList:t.movieList,notificationMsg:t.notificationMsg}}),{fetchMovieList:function(e,t){return function(a){return fetch("https://www.omdbapi.com/?apikey=".concat(e,"&s=").concat(t,"&&page=1")).then((function(e){return e.json()})).then((function(e){"False"===e.Response?a({payload:"Record Not Found",type:"MOVIE_RECORD_MISSING"}):a({payload:e,type:"FETCH_MOVIE_LIST"})})).catch((function(e){return a({payload:"oops ,Somthing went wrong,Please try agin later",type:"NETWORK_ERROR"})}))}},fetchMovieListNextCycle:function(e,t,a){return function(n){return fetch("https://www.omdbapi.com/?apikey=".concat(e,"&s=").concat(t,"&page=").concat(a)).then((function(e){return e.json()})).then((function(e){"False"===e.Response?n({payload:"Record Not Found",type:"MOVIE_RECORD_MISSING"}):n({payload:e,type:"FETCH_MOVIE_LIST_MORE"})})).catch((function(e){return n({payload:"oops ,Somthing went wrong,Please try agin later",type:"NETWORK_ERROR"})}))}}})(Object(h.a)(S)(k)),C=a(106),_=function(){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto"},expandOpen:{transform:"rotate(180deg)"}}},T=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={reDirect:!1},n.handleExpandClick=n.handleExpandClick.bind(Object(E.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.apiKey,a=e.match.params;a.id&&this.props.fetchMovieDetail(t,a.id)}},{key:"componentWillUnmount",value:function(){this.props.unMountMovieList()}},{key:"handleExpandClick",value:function(){this.setState({expanded:!0})}},{key:"render",value:function(){var e=this,t=this.props,a=t.searchedMovie,n=t.classes;return this.state.reDirect?o.a.createElement(l.a,{to:"/"}):o.a.createElement(y.a,{container:!0,justify:"center"},o.a.createElement(y.a,{item:!0,xs:11,sm:9,md:6},Object.keys(a).length>0?o.a.createElement(w.a,null,o.a.createElement(j.a,{title:a.Title,subheader:a.Year}),o.a.createElement(I.a,{className:n.media,image:a.Poster,title:a.Title}),o.a.createElement(C.a,null,o.a.createElement(y.a,{container:!0},o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement("b",null," Actors :"),o.a.createElement(R.a,{paragraph:!0},a.Actors),o.a.createElement("b",null,"Director :"),o.a.createElement(R.a,{paragraph:!0},a.Director),o.a.createElement("b",null,"Production :"),o.a.createElement(R.a,{paragraph:!0},a.Production),o.a.createElement("b",null,"Genre :"),o.a.createElement(R.a,{paragraph:!0},a.Genre),o.a.createElement("b",null,"imdbRating:"),o.a.createElement(R.a,{paragraph:!0},a.imdbRating),o.a.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"},a.Plot))))):o.a.createElement(R.a,{paragraph:!0},"Record not Found"),o.a.createElement("br",null),o.a.createElement(b.a,{variant:"contained",color:"secondary",onClick:function(){e.setState({reDirect:!0})}},"Back")))}}]),a}(o.a.Component),L=Object(g.c)((function(e){var t=e.DashBoardReducer;return{apiKey:t.apiKey,searchedMovie:t.searchedMovie}}),{fetchMovieDetail:function(e,t){return function(a){return fetch("http://www.omdbapi.com/?apikey=".concat(e,"&i=").concat(t)).then((function(e){return e.json()})).then((function(e){"False"===e.Response?a({payload:"Record Not Found",type:"MOVIE_RECORD_MISSING"}):a({payload:e,type:"FETCH_SEARCHED_MOVIE_DETAILS"})})).catch((function(e){return a({payload:"oops ,Somthing went wrong,Please try agin later",type:"NETWORK_ERROR"})}))}},unMountMovieList:function(){return function(e){e({type:"UN_MOUNT_MOVIE_LIST"})}}})(Object(h.a)(_)(T)),D=function(){return{accountLink:{"&:hover":{color:"#0086d1"},color:"#0066c0",cursor:"pointer"},appBar:{position:"fixed",width:"100%"},content:{flexGrow:1,marginTop:"12px",padding:"3px",width:"calc(100% - 72px)",position:"relative",minHeight:"calc(100vh - 115px - 12px)",boxSizing:"border-box"},contentOpen:{width:"100%",marginTop:"11px"},drawerPaper:{"& .MuiListItemIcon-root-68":{color:"white"},"& span":{color:"white"},backgroundColor:"#1f5a9e !important",color:"white",marginTop:"57px",maxHeight:"92vh",overflowX:"hidden",overflowY:"auto",position:"fixed",whiteSpace:"nowrap",width:225,zIndex:"1"},drawerPaperClose:{overflowX:"hidden",width:"46px"},footerContainer:{position:"absolute",left:0,right:0,bottom:"-115px",zIndex:-1},hide:{display:"none"},loaderLine:{flexGrow:1,position:"fixed",top:"60px",width:"100%",zIndex:4},menuButton:{marginLeft:12,marginRight:36},portalName:{left:"100px"},root:{color:"grey",display:"flex",flexGrow:1,fontSize:"13px",position:"relative",zIndex:1},space:{marginTop:"25px"},toolbar:{alignItems:"center",display:"flex",justifyContent:"flex-end",padding:"0 8px"}}},H=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={open:!0},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=v()(e.content,this.state.open?e.contentOpen:e.contentClose);return n.createElement("div",{style:{display:"flex",flexGrow:1,width:"100%",position:"relative",zIndex:1}},n.createElement("main",{className:t},n.createElement("div",{className:e.toolbar}),n.createElement("div",{style:{marginTop:"60px"}},n.createElement(l.b,{exact:!0,path:"/",component:N,key:"AppHome"}),n.createElement(l.b,{exact:!0,path:"/movieDetails/:id",component:L,key:"AppHome"}))))}}]),a}(n.Component),F=Object(u.a)()(Object(h.a)(D)(H));var K=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(c.a,null,o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!1,path:"/",component:F,key:"AppLogin"})))))},V=a(22),A=a(49),P=a(58),G=a(56),B=a(57),W=a.n(B),z=a(36),U=a(16),Y={allMovies:[],movieList:{},apiKey:"b9bd48a6",notificationMsg:"",searchedMovie:{}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE_LIST":return Object(U.a)(Object(U.a)({},e),{},{movieList:t.payload,notificationMsg:"",allMovies:t.payload.Search});case"MOVIE_RECORD_MISSING":case"NETWORK_ERROR":return Object(U.a)(Object(U.a)({},e),{},{notificationMsg:t.payload});case"FETCH_MOVIE_LIST_MORE":return Object(U.a)(Object(U.a)({},e),{},{movieList:t.payload,allMovies:[].concat(Object(z.a)(e.allMovies.slice(0,e.allMovies.length-1)),Object(z.a)(t.payload.Search),Object(z.a)(e.allMovies.slice(0)))});case"FETCH_SEARCHED_MOVIE_DETAILS":return Object(U.a)(Object(U.a)({},e),{},{searchedMovie:t.payload});case"UN_MOUNT_MOVIE_LIST":return Y;default:return e}},X=Object(V.c)({DashBoardReducer:J}),$=(a(78),W()()),q=[G.a,Object(A.a)($)],Q=V.d.apply(void 0,[V.a.apply(void 0,q)].concat([])),Z=Object(V.e)(Object(P.a)($)(X),{},Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g.a,{store:Z},o.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.759754db.chunk.js.map