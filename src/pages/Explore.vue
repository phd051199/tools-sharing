<template>
  <v-container>
    <v-responsive class="align-centerfill-height mx-auto">
      <div class="font-weight-black text-h3 my-4">Explore</div>
      <div class="text-h5 mb-8">Featured Scripts</div>

      <v-row v-if="data">
        <v-col cols="6" v-for="n in data" :key="n.id">
          <v-card :elevation="0" @click="() => false" v-if="n.path">
            <template #title>
              <v-card-title class="font-weight-black">{{
                'Script ' + n.id
              }}</v-card-title>
            </template>

            <template #subtitle>
              <span class="font-bold">by John Lindquist</span>
            </template>

            <v-divider>
              <v-btn flat class="text-none z-2" append-icon="$vuetify"
                >Install
              </v-btn>
            </v-divider>

            <div class="mt-4">
              <v-card-subtitle class="font-[monaco]!">
                // Created: {{ $dayjs(n.createdAt).format('YYYY/MM/DD') }}
              </v-card-subtitle>
              <v-card-subtitle class="font-[monaco]!">
                // Path: {{ n.path }}
              </v-card-subtitle>
            </div>

            <highlightjs :autodetect="true" :code="code" />
          </v-card>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col cols="6" v-for="n in 4" :key="n">
          <v-card flat>
            <v-skeleton-loader flat type="card, article"></v-skeleton-loader>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import * as parserBabel from 'prettier/parser-babel';
import * as prettierPluginEstree from 'prettier/plugins/estree';
import prettier from 'prettier/standalone';

import { apiGetScripts } from '@/apis/script';

const { data } = apiGetScripts.fetch();

const code = ref(`
    const dateFns = await npm('date-fns')
    const prettier = await npm('prettier')
                const YAML = await npm('yaml')
    const slugify = await npm('@sindresorhus/slugify')
                      const {format: formatDate} = await npm('date-fns')
    const makeMetascraper = await npm('metascraper')
    const {$filter, toRule} = await npm('@metascraper/helpers')

    const unsplashTitleToAlt= toRule(s => s.replace(/photo-.*$/, ''))
    const unsplashOGTitleToAuthor = toRule(str =>
      str.replace(/Photo by (.*?) on Unsplash/, '$1'),
    )
    const unsplashImageToPhotoId = toRule(str =>
      new URL(str).pathname.replace('/', ''),
    )

    const metascraper = makeMetascraper([
      {
        unsplashPhotoId: [
          unsplashImageToPhotoId($ =>
            $('meta[property="og:image"]').attr('content'),
          ),
        ],
      },
      {
        author: [
          unsplashOGTitleToAuthor($ =>
            $('meta[property="og:title"]').attr('content'),
          ),
        ],
      },
      {alt: [unsplashTitleToAlt($ => $('title').text())]},
    ])
`);

code.value = await prettier.format(code.value, {
  parser: 'babel',
  languages: 'ts',
  plugins: [parserBabel, prettierPluginEstree]
});
</script>

<style lang="scss">
.hljs {
  background: unset;
  font-family: 'monaco' !important;
  font-size: small;

  [class^='hljs-'] {
    font-family: 'monaco' !important;
  }
}

.v-divider {
  &__content {
    position: absolute;
    right: 16px;
  }
}
</style>
