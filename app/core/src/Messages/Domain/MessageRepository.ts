import { Message } from "./Message";
import { DataError } from "../../common/Domain/DataError";

export interface MessageRepository {
    get(userId:number): Promise<Message[] | DataError>;
}