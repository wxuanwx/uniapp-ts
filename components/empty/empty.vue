<template>
	<view class="empty" :style="{'background-color': bgColor, 'padding': `${padding}rpx 0`}">{{message}}</view>
</template>

<script setup lang="ts">
	interface Props {
		padding ?: number
		message ?: string
		bgColor ?: string
	}
	const { padding, message, bgColor } = withDefaults(defineProps<Props>(), {
		padding: 52,
		message: '没有更多数据了',
		bgColor: ''
	})
</script>

<style lang="scss" scoped>
	.empty {
		width: 100%;
		font-size: 24rpx;
		color: #A8B4BF;
		text-align: center;
	}
</style>