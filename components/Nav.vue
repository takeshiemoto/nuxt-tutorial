<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">School App</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <NuxtLink
          to="/"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-gray-400
            hover:text-white
            mr-4
          "
        >
          STUDENTS
        </NuxtLink>
      </div>
    </div>
    <div>
      <button
        class="
          text-sm
          px-4
          py-2
          leading-none
          border
          rounded
          text-white
          border-white
          hover:border-transparent hover:text-gray-500 hover:bg-white
          mt-4
          lg:mt-0
        "
        @click="logout()"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Nav',
  setup() {
    const { $auth } = useContext();
    const logout = async () => {
      await $auth.logout();
    };

    return {
      logout,
    };
  },
});
</script>
