export async function cancelBooking(token: string, class_id : number) {
    try {
        const response = await fetch(`http://localhost:8000/api/cancel?id_class=${class_id}`, {
            method: 'DELETE',
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
