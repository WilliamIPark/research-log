(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return C});n(52);var A=n(8),a=n.n(A),r=n(0),o=n.n(r),i=n(148),c=n(164),s=n.n(c),l=n(162),u=n.n(l),E=n(159),d=n(161),p=n(147),g=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=s()(this,"props.data.site.siteMetadata.title"),e=s()(this,"props.data.site.siteMetadata.description"),n=s()(this,"props.data.allMarkdownRemark.edges");return o.a.createElement(d.a,{location:this.props.location},o.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:e}],title:t}),o.a.createElement(E.a,null),n.map(function(t){var e=t.node,n=s()(e,"frontmatter.title")||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},o.a.createElement(i.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(o.a.Component);e.default=g;var C="3352422197"},147:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s});var A=n(170),a=n.n(A),r=n(171),o=n.n(r),i=new a.a(o.a);var c=i.rhythm,s=i.scale},148:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return d}),n.d(e,"StaticQuery",function(){return p});var A=n(0),a=n.n(A),r=n(5),o=n.n(r),i=n(146),c=n.n(i);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return i.withPrefix}),n.d(e,"navigate",function(){return i.navigate}),n.d(e,"push",function(){return i.push}),n.d(e,"replace",function(){return i.replace}),n.d(e,"navigateTo",function(){return i.navigateTo});var s=n(27);n.d(e,"waitForRouteChange",function(){return s.c});var l=n(149),u=n.n(l);n.d(e,"PageRenderer",function(){return u.a});var E=n(40);n.d(e,"parsePath",function(){return E.a});var d=a.a.createContext({}),p=function(t){return a.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(t,e,n){var A;t.exports=(A=n(154))&&A.default||A},154:function(t,e,n){"use strict";n.r(e);n(38);var A=n(0),a=n.n(A),r=n(5),o=n.n(r),i=n(56),c=n(1),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(i.a,Object.assign({key:e.pathname,location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},159:function(t,e,n){"use strict";var A=n(8),a=n.n(A),r=n(0),o=n.n(r),i=(n(168),n(169),n(160),n(147)),c=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{marginBottom:Object(i.a)(2.5)}},o.a.createElement("p",null,'A digital scrapbook by William Park. It contains details about my final project "Habeats" for my final project at Interaction Design Belfast.'),o.a.createElement("p",null,o.a.createElement("strong",null,"This material is my submission for IXD501.")))},e}(o.a.Component);e.a=c},160:function(t,e){t.exports="data:image/jpeg;base64,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"},161:function(t,e,n){"use strict";n(38);var A=n(8),a=n.n(A),r=n(0),o=n.n(r),i=n(148),c=n(147),s=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,A=e.children;return t="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Habeats Scrapbook")):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},o.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Habeats Scrapbook")),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,A)},e}(o.a.Component);e.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-8c89aad1e068e5583173.js.map