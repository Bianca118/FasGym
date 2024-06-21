
export async function register(name: string, email: string, password: string, phone: string) {
        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, phone })
        });
        const data = await response.json();
        return data;

}
