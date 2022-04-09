import { MessageRepository } from "../../Domain";
import { Message } from "../../Domain";
import { DataError } from "../../../common/Domain/DataError";

const messages: Message[] =[
  {
      id: 1,
      text: 'Text first one',
      date: new Date(),
      userId: 1,
  },
	{
		id: 2,
		text: 'Text first two',
		date: new Date(),
		userId: 1,
	},
	{
		id: 3,
		text: 'Text second one',
		date: new Date(),
		userId: 2,
	},

];

const filterMessagesByUserId = (messages:Message[], userId:number) => {
    return messages.filter(message => message.userId === userId);
}

export class MessageInMemory implements MessageRepository {
    get(userId:number): Promise<Message[] | DataError> {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    if (userId) {
                        resolve(filterMessagesByUserId(messages, userId))
                    }
                    resolve(messages);
                } catch(error) {
                    const Error = (error as Error);
                    resolve({ kind: "UnexpectedError", error: Error });
                }
            })
        }
        );
    }
}