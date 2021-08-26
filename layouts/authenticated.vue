<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import Nav from '~/components/Nav.vue';

export default defineComponent({
  name: 'Authenticated',
  components: { Nav },
  setup() {
    return {};
  },
});
</script>
