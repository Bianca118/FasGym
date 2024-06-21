
export async function login(email: string, password: string) {
    try {
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
