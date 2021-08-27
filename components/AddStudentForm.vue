<template>
  <form class="flex flex-col gap-5" @submit.prevent="submit">
    <InputName v-model="username" />
    <SubmitButton />
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api';

import InputName from '~/components/InputName.vue';
import SubmitButton from '~/components/SubmitButton.vue';

export default defineComponent({
  name: 'AddStudentForm',
  components: { SubmitButton, InputName },
  setup() {
    const formState = reactive({
      username: '',
    });

    const submit = () => {
      // eslint-disable-next-line no-console
      console.log(formState);
    };
    return {
      ...toRefs(formState),
      submit,
    };
  },
});
</script>
