export async function modifyInfoUser (token :string, name: string, phone:string){
    try {
        const response = await fetch(`http://localhost:8000/api/updateInfoUser?name=${name}&phone=${phone}`, {
            method: 'PATCH',
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
