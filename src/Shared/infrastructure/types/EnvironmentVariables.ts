type EnvironmentVariable =
  | "API"

export const getEnvironmentVariable = (key: EnvironmentVariable) => {
  return process.env[`REACT_APP_${key}`];
};
