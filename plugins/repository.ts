import { Plugin } from '@nuxt/types';
import { createRepository } from '~/api/create-repository';

const repository: Plugin = (context, inject) => {
  const repositories = createRepository(context);
  inject('repository', repositories);
};

export default repository;
