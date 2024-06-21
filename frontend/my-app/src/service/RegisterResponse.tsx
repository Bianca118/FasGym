import AbstractRequestData from "./AbstractRequestData";

export default interface RegisterResponse extends AbstractRequestData{
    returnData: {
        id: number;
        name: string;
        email:string;
        password:string;
        phone: string,
        id_card: string,
        qr_code: string,
    }
}