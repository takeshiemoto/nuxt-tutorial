<template>
  <div>
    <Nav />
    <StudentList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import Nav from '~/components/Nav.vue';
import StudentList from '~/components/StudentList.vue';

export default defineComponent({
  components: { StudentList, Nav },
  setup() {
    return {};
  },
});
</script>
