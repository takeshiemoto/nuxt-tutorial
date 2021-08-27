<template>
  <div>
    <input
      v-model="input"
      name="name"
      placeholder="Name"
      class="
        px-5
        w-full
        border
        rounded
        px-3
        py-2
        text-gray-700
        focus:outline-none focus:border-gray-600
      "
    />
    <div>{{ JSON.stringify(errors) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

import { userInputValidator } from '~/utils/userInputValidator';
import { minLength, required } from '~/utils/validators';

export default defineComponent({
  name: 'InputName',
  props: {
    value: {
      type: String as PropType<string>,
      required: true,
      defaultValue: '',
    },
  },
  setup(props, { emit }) {
    const { input, errors } = userInputValidator(
      props.value,
      [minLength(5), required()],
      (value) => emit('input', value)
    );

    return {
      input,
      errors,
    };
  },
});
</script>
