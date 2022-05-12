// import { getEnvironmentVariable } from '../types/EnvironmentVariables';

export default function getAccessToken() {
    return process.env['NEXT_PUBLIC_API_FULL'];
}
