import { MessageRepository } from "../Domain";
import { Message } from "../Domain";
import { DataError } from "../../common/Domain/DataError";

export class GetMessageUseCase {
    private messageRepository: MessageRepository;
    constructor(messageRepository:MessageRepository) {
        this.messageRepository = messageRepository;
    }

    execute(userId:number): Promise<Message[] | DataError> {
        return this.messageRepository.get(userId);
    }
}