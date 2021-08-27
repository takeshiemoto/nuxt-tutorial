<template>
  <div class="p-6">
    <AddStudentForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import AddStudentForm from '~/components/AddStudentForm.vue';

export default defineComponent({
  components: { AddStudentForm },
  layout: 'authenticated',
  setup() {
    return {};
  },
});
</script>
