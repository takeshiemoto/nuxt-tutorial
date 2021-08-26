<template>
  <div class="p-4">
    <table class="table-fixed">
      <thead>
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Teacher</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">xxx</td>
          <td class="border px-4 py-2">John</td>
          <td class="border px-4 py-2">yyyzzz</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'StudentList',
  setup() {
    return {};
  },
});
</script>
