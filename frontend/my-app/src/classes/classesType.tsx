
export default interface ClassesType
{
    id:number,
    name: string,
    trainer: {
        id: number;
        name: string;
    },
    date: string,
    seats: number,
    remaining_seats:number,
    // "created_at": null,
    // "updated_at": null
}