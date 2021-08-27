export const minLength = (min: number) => {
  return (input: string) =>
    input.length < min ? `Value must be at least ${min} characters` : null;
};

export const required = () => {
  return (input: string) => (input === '' ? `Required fields` : null);
};

type MinLengthValidator = ReturnType<typeof minLength>;
type RequiredValidator = ReturnType<typeof required>;

export type Validator = MinLengthValidator | RequiredValidator;
