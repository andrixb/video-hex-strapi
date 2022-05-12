type EnvironmentVariable = 
| 'NEXT_PUBLIC_BASE_URL' 
| 'NEXT_PUBLIC_API_READONLY_TOKEN'
| 'NEXT_PUBLIC_API_FULL';

export const getEnvironmentVariable = (key: EnvironmentVariable) => {
    return process.env[`${key}`];
};
