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
        <tr v-for="student in students" :key="student.id">
          <td class="border px-4 py-2">{{ student.id }}</td>
          <td class="border px-4 py-2">{{ student.name }}</td>
          <td class="border px-4 py-2">{{ student.teacher }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

type Props = {
  students: { id: string; name: string; teacher: string }[];
};

export default defineComponent({
  name: 'StudentList',
  props: {
    students: {
      type: Array as PropType<Props['students']>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
