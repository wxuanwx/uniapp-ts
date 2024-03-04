import {
	onPullDownRefresh,
	onReachBottom
} from "@dcloudio/uni-app";
import { ToRefs, toRefs } from "vue";

interface Params {
	page : number
	limit : number
	isReachBottom : boolean
}

export default function (getList : AnyFunction, params : ToRefs<Params>) {
	const { page, isReachBottom } = toRefs(params)
	onPullDownRefresh(() => {
		refresh()
	})
	onReachBottom(() => {
		loadMore()
	})
	const loadMore = () => {
		if (!isReachBottom.value) {
			page.value++;
			getList();
		}
	}
	const refresh = () => {
		page.value;
		getList();
	}
	return {}
}