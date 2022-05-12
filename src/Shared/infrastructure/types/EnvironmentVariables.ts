type EnvironmentVariable = 
| 'BASE_URL' 
| 'API_READONLY_TOKEN';

export const getEnvironmentVariable = (key: EnvironmentVariable) => {
    return process.env[key];
};
