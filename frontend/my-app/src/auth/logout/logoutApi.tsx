
export async function logoutApi(token : string) {
    try {
        const response = await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        });
        localStorage.removeItem('token');
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
