type EnvironmentVariable =
  | "API"
  | "SELF"
  | "AUTH0_DOMAIN"
  | "AUTH0CONNECTION"
  | "AUTH0_CLIENT_ID"
  | "AUTH0_AUDIENCE"
  | "COBEE_IBAN"
  | "ESLINT_NO_DEV_ERRORS"
  | "SPLIT_APIKEY";

export const getEnvironmentVariable = (key: EnvironmentVariable) => {
  return process.env[`REACT_APP_${key}`];
};
