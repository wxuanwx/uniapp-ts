import type { Uni as _Uni } from "@dcloudio/types";
import type Utils from '@/utils/index';
import type { Uv } from "./uv";
declare global {
	/**
	 *拓展全局变量Uni
	 */
	interface Uni extends _Uni {
		$uv : Uv;
		$Utils : typeof Utils
	}
}