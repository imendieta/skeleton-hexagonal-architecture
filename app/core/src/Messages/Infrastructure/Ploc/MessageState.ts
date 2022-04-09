import {Message} from "../../Domain";

export interface CommonMessageState {
	userId:number;
}
export interface LoadingPeople {
	kind: 'LoadingMessageState';
}

export interface LoadedMessageState {
	kind: 'LoadedMessageState';
	message: Array<Message>;
}

export interface ErrorMessageState {
	kind: 'ErrorMessageState';
	error: string;
}

export type MessageState = (LoadingPeople | LoadedMessageState | ErrorMessageState) & CommonMessageState;

export const messageInitialState: MessageState = {
	kind: 'LoadingMessageState',
	userId: 0,
};