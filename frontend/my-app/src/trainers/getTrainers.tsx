export async function getTrainers (){
    try {
        const response = await fetch('http://localhost:8000/api/trainers', {
            method: 'GET',
            headers: {
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