<template>
  <button
    type="submit"
    class="w-full py-2 rounded bg-gray-700 text-white focus:outline-none"
  >
    Submit
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SubmitButton',
  setup() {
    return {};
  },
});
</script>
