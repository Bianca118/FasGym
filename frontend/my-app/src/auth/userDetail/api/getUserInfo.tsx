export async function getUserInfo (token: string)  {

    try {
        const response = await fetch('http://localhost:8000/api/detail', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Eroare:', error);
    }
}