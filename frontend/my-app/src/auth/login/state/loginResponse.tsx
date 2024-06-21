import AbstractRequestData from "../../../service/AbstractRequestData";
import UserType from "../../../UserType";

export default interface LoginResponse extends AbstractRequestData{
    returnData: UserType;
}