import type { User } from "@/types/apis";
import { defineStore } from 'pinia';
import Utils from '@/utils/index';
import {
	computed,
	ref,
	Ref
} from 'vue';

export const useUserStore = defineStore('user', () => {
	const userInfo : Ref<User.Info | undefined> = ref(Utils.getStorage<User.Info>('user_info') || undefined)

	const userId = computed(() => userInfo.value?.id)
	const isLogin = computed(() => !!userId.value)

	const setUserInfo = (data ?: User.Info) => {
		userInfo.value = data;
		Utils.setStorage('user_info', data);
	}

	const getUserInfo = async () => {
		return Utils.getStorage('user_info');
	}

	return {
		isLogin,
		userId,
		userInfo,
		setUserInfo,
		getUserInfo
	};
});