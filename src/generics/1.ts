import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
    try {
        const response = await axios.get<T>(url);
        return response.data;
    }
        catch (error) {
            throw new Error(`Error fetching from ${url}: ${error}`);
        }
    }
interface User {
    id: number,
    name: string,
    email: string
}
async function getData() {
    const url = 'http://example.com/users/245';
    const user = await fetchData<User>(url);
    return user;
}
getData()