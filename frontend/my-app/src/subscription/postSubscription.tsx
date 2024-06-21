export async function postSubscription (id_plan:number, token:string){
    try {
        const response = await fetch(`http://localhost:8000/api/subscription?id_plan=${id_plan}`, {
            method: 'POST',
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