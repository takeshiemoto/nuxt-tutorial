<template>
  <div class="w-full h-screen flex items-center justify-center">
    <form
      class="w-full md:w-1/3 bg-white rounded-lg"
      @submit.prevent="handleSubmit"
    >
      <h2 class="text-3xl text-center text-gray-700 mb-4">Login Form</h2>
      <div class="px-12 pb-10">
        <div class="w-full flex flex-col gap-5">
          <div class="flex items-center">
            <input
              v-model="userName"
              type="text"
              placeholder="Username"
              class="
                px-5
                w-full
                border
                rounded
                px-3
                py-2
                text-gray-700
                focus:outline-none focus:border-green-600
              "
            />
          </div>
          <div class="w-full">
            <div class="flex items-center">
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="
                  px-5
                  w-full
                  border
                  rounded
                  px-3
                  py-2
                  text-gray-700
                  focus:outline-none focus:border-green-600
                "
              />
            </div>
          </div>
          <button
            type="submit"
            class="
              w-full
              py-2
              rounded-full
              bg-green-600
              text-gray-100
              focus:outline-none
            "
          >
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Login',
  setup() {
    const { $auth } = useContext();
    const defaultValues = { userName: '', password: '' };
    const formState =
      reactive<{ userName: string; password: string }>(defaultValues);

    const handleSubmit = async () => {
      await $auth
        .loginWith('local', {
          data: {
            username: formState.userName,
            password: formState.password,
          },
        })
        .catch(() => window.alert('ログイン失敗'));

      Object.assign(formState, defaultValues);
    };

    return {
      ...toRefs(formState),
      handleSubmit,
    };
  },
});
</script>
