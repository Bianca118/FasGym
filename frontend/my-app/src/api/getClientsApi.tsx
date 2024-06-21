
export async function getClientsApi(id : number) { //aici voi pune type ClientType dar momentan nu am de unde lua din roorstate emailul ca nu sunt logat
    try {
        const response = await fetch(`http://localhost:8000/api/clients/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}