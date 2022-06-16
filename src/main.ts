import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "highlight.js/styles/github.css";
import "./index.css";

import hljs from "highlight.js/lib/core";
import hljsDefineVue from "highlightjs-vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";

hljsDefineVue(hljs);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);

const app = createApp(App);

app.use(router);
app.use(hljsVuePlugin);

app.mount("#app");
