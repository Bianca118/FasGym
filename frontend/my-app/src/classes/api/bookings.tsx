export async function bookings (token :string, id_class:number){
    try {
        const response = await fetch(`http://localhost:8000/api/rezervari?id_class=${id_class}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
