export async function taskApi() {
    try {
        const response = await fetch('http://localhost:8000/api/tasks');
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}