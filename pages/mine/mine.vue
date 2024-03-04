<template>
	<view class="user">{{userInfo?.userName || '匿名用户'}}</view>
</template>

<script setup lang="ts">
	import { toRefs } from "vue";
	import { useUserStore } from "@/store";
	const { userInfo } = toRefs(useUserStore())

</script>

<style lang="scss" scoped>

</style>