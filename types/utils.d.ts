export interface ModalParams {
	title ?: string;
	content ?: string;
	confirm ?: Function;
	cancel ?: Function
}
export type CallbackFunction = (result ?: any) => void

export interface ShareAppMessageData {
	title : string;
	path : string;
	imageUr ?: string;
	content ?: string;
	desc ?: string;
	bgImgUrl ?: string;
	query ?: string;
	templateId ?: string;
	mpId ?: string;
	type ?: number;
	mpPath ?: string;
	channel ?: string;
	url ?: string;
	success ?: CallbackFunction;
	fail ?: CallbackFunction;
	complete ?: CallbackFunction;
}