import { Ploc } from "../../../common/Infrastructure/presentation";
import { messageInitialState, MessageState } from "./MessageState";
import { GetMessageUseCase } from "../../Application/GetMessageUseCase";
import { DataError } from "../../../common/Domain/DataError";

export class MessagePloc extends Ploc<MessageState> {
	constructor(private getMessageUseCase: GetMessageUseCase) {
		super(messageInitialState);
	}

	async search(userId:number) {
		const messageResults = await this.getMessageUseCase.execute(userId);
		console.log(messageResults);
	}

	private handleError(userId: number, error: DataError): MessageState {
		switch (error.kind) {
			case "UnexpectedError": {
				return {
					userId,
					kind: "ErrorMessageState",
					error: "Sorry, an error has ocurred. Please try later again",
				};
			}
		}
	}


}