<template>
  <div
    class="
      bg-white
      my-12
      pb-6
      w-full
      justify-center
      items-center
      overflow-hidden
      md:max-w-sm
      rounded-lg
      shadow-sm
      mx-auto
    "
  >
    <div class="relative h-40">
      <img
        class="absolute h-full w-full object-cover"
        src="~/assets/images/profile_bg.jpeg"
        alt=""
      />
    </div>
    <div
      class="
        relative
        shadow
        mx-auto
        h-24
        w-24
        -my-12
        border-white
        rounded-full
        overflow-hidden
        border-4
      "
    >
      <img
        class="object-cover w-full h-full"
        src="~/assets/images/profile.jpg"
        alt=""
      />
    </div>
    <div class="mt-16">
      <h1 class="text-lg text-center font-semibold">{{ student.name }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

type Props = {
  student: {
    id: string;
    name: string;
    teacher: string;
  };
};

export default defineComponent({
  name: 'ProfileCard',
  props: {
    student: {
      type: Object as PropType<Props['student']>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
