import type {
	HttpRequestConfig,
	HttpRequestTask,
	HttpRequestAbstract,
	HttpUploadTask,
	HttpData,
	HttpDownloadTask,
} from "@/uni_modules/uv-ui-tools/libs/luch-request";
declare class Http extends HttpRequestAbstract {
	request<T, D = HttpRequestTask>(
		config : HttpRequestConfig<D>
	) : Promise<T>;

	get<T, D = HttpRequestTask>(
		url : string,
		config ?: HttpRequestConfig<D>
	) : Promise<T>;

	delete<T, D = HttpRequestTask>(
		url : string,
		data ?: HttpData,
		config ?: HttpRequestConfig<D>
	) : Promise<T>;

	post<T, D = HttpRequestTask>(
		url : string,
		data ?: HttpData,
		config ?: HttpRequestConfig<D>
	) : Promise<T>;

	put<T, D = HttpRequestTask>(
		url : string,
		data ?: HttpData,
		config ?: HttpRequestConfig<D>
	) : Promise<T>;

	upload<T, D = HttpUploadTask>(
		url : string,
		config ?: HttpRequestConfig<D>
	) : Promise<T>;

	download<T, D = HttpDownloadTask>(
		url : string,
		config ?: HttpRequestConfig<D>
	) : Promise<T>;
}

export declare interface Uv {
	debounce : (func : Function, wait ?: number, immediate ?: boolean) => void;
	deepClone : (obj : object, cache ?: WeakMap<object, any>) => any;
	guid : (len ?: number, firstU ?: boolean, radix ?: number) => string;
	http : Http;
}

declare module '@/uni_modules/uv-ui-tools' {
	export const $uv: Uv
}
