import 'highlight.js/styles/github.css';

import hljsVuePlugin from '@highlightjs/vue-plugin';
import hljs from 'highlight.js/lib/core';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import type { App } from 'vue';

export default {
  install(app: App) {
    hljs.registerLanguage('javascript', js);
    hljs.registerLanguage('typescript', ts);

    app.use(hljsVuePlugin);
  }
};
