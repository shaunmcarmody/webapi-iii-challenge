(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(64)},35:function(t,e,n){},36:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(27),r=n.n(o),s=n(8),i=(n(35),n(6)),u=(n(36),n(9)),l=n(10),p=n(13),m=n(11),h=n(14),d=n(12),f=n.n(d),v=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={posts:[]},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;f.a.get("http://localhost:5000/api/users/".concat(e,"/posts")).then(function(e){t.setState({posts:e.data})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.posts.map(function(t){return c.a.createElement("article",{key:t.id},c.a.createElement("h1",null,t.postedBy),c.a.createElement("p",null,t.text))}))}}]),e}(c.a.Component),E=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={users:[]},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;f.a.get("http://localhost:5000/api/users/").then(function(e){t.setState({users:e.data})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},this.state.users.map(function(t){return c.a.createElement("div",{key:t.id},c.a.createElement(s.b,{to:"".concat(t.id,"/posts"),id:t.id},t.name))}))}}]),e}(c.a.Component),b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,{exact:!0,path:"/",component:E}),c.a.createElement(i.a,{exact:!0,path:"/:id/posts",component:function(t){return c.a.createElement(v,t)}}))};r.a.render(c.a.createElement(s.a,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a352d931.chunk.js.map