export const validateUsername = (_: any, value: string) => {
  if (!value) {
    return Promise.reject("Username is required");
  }
  if (value.length < 3) {
    return Promise.reject("Minimum 3 characters");
  }
  return Promise.resolve();
};
