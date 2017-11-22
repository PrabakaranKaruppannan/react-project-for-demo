import baseUrl from './baseUrl';
import User from '../models/user';
import ApiError from './apiError';

export async function getUsers(): Promise<User[]> {
    const requestUrl = `${baseUrl}users`;
    const response = await fetch(requestUrl);
    if (response.ok) {
        return await response.json();
    } else {
        throw new ApiError(response.status, response.statusText);
    }
}