export async function getPhoto (token : string){
    try {
        const response = await fetch('http://localhost:8000/api/getPhoto', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        // @ts-ignore
        throw error;
    }
}