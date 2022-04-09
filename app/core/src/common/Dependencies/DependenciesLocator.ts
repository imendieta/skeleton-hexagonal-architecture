import { MessagePloc } from "../../Messages/Infrastructure/Ploc/MessagePloc";
import {MessageInMemory} from "../../Messages/Infrastructure/Data/MessageInMemory";
import {GetMessageUseCase} from "../../Messages/Application/GetMessageUseCase";

function provideMessagePloc(): MessagePloc {
	const messageRepository = new MessageInMemory();
	const getMessageUseCase = new GetMessageUseCase(messageRepository);
	return new MessagePloc(getMessageUseCase);
}

export const DependeciesLocator = {
	provideMessagePloc,
};