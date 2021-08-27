import { ref, watch } from '@nuxtjs/composition-api';

import { Validator } from '~/utils/validators';

export const userInputValidator = (
  startVal: string,
  validators: Validator[],
  onValidate: (value: string) => void
) => {
  const input = ref(startVal);
  const errors = ref<(string | null)[]>([]);

  watch(input, (value) => {
    errors.value = validators
      .map((validator) => validator(value))
      .filter((error) => error !== null);
    onValidate(value);
  });

  return {
    input,
    errors,
  };
};
