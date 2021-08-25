import { NuxtConfig } from '@nuxt/types';
import { Auth } from '@nuxtjs/auth-next';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

import { Repository } from '~/api/types';

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-tutorial',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  plugins: ['@/plugins/repository'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
        },
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'POST',
          },
          user: false,
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    prefix: '/api',
  },

  proxy: {
    '/api/': {
      target: 'http://localhost:3333',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ['auth'],
  },
};

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth;
    $axios: NuxtAxiosInstance;
    $repository: {
      students: string;
    };
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $repository: Repository;
  }

  interface Context {
    $repository: Repository;
  }
}

export default config;
