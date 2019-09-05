(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{365:function(s,e,t){"use strict";t.r(e);var a=t(24),n=Object(a.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[s._v("#")]),s._v(" Getting Started")]),s._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("COMPATIBILITY NOTE")]),s._v(" "),t("p",[s._v("VuePress requires Node.js >= 8.")])]),s._v(" "),t("h2",{attrs:{id:"global-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-installation","aria-hidden":"true"}},[s._v("#")]),s._v(" Global Installation")]),s._v(" "),t("p",[s._v("If you only want to play around with VuePress, you can install it globally:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install globally")]),s._v("\nyarn global add vuepress "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR npm install -g vuepress")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a markdown file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" README.md\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# start writing")]),s._v("\nvuepress dev\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build")]),s._v("\nvuepress build\n")])])]),t("h2",{attrs:{id:"inside-an-existing-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inside-an-existing-project","aria-hidden":"true"}},[s._v("#")]),s._v(" Inside an Existing Project")]),s._v(" "),t("p",[s._v("If you have an existing project and would like to keep documentation inside the project, you should install VuePress as a local dependency. This setup also allows you to use CI or services like Netlify for automatic deployment on push.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install as a local dependency")]),s._v("\nyarn add -D vuepress "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR npm install -D vuepress")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a docs directory")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a markdown file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",[s._v("We currently recommend using "),t("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),t("OutboundLink")],1),s._v(" instead of npm when installing VuePress into an existing project that has webpack 3.x as a dependency, because npm fails to generate the correct dependency tree in this case.")])]),s._v(" "),t("p",[s._v("Then, add some scripts to "),t("code",[s._v("package.json")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("You can now start writing with:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yarn docs:dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR npm run docs:dev")]),s._v("\n")])])]),t("p",[s._v("To generate static assets, run:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yarn docs:build "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or npm run docs:build")]),s._v("\n")])])]),t("p",[s._v("By default, the built files will be in "),t("code",[s._v(".vuepress/dist")]),s._v(", which can be configured via the "),t("code",[s._v("dest")]),s._v(" field in "),t("code",[s._v(".vuepress/config.js")]),s._v(". The built files can be deployed to any static file server. See "),t("router-link",{attrs:{to:"/guide/deploy.html"}},[s._v("Deployment Guide")]),s._v(" for guides on deploying to popular services.")],1)])},[],!1,null,null,null);e.default=n.exports}}]);