export async function getPlans() {
    try {
        const response = await fetch(`http://localhost:8000/api/plans`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}