<template>
	<view class="container">

	</view>
</template>

<script setup lang="ts">
	import { ref, toRefs } from 'vue';
	import useScroll from '@/hooks/useScroll';
	import { findPage } from '@/apis/article';
	const list = ref<any[]>([])
	const { page, limit, isReachBottom } = toRefs({
		page: 1,
		limit: 20,
		isReachBottom: false
	})
	const init = async () => {
		getList();
	}
	// 示例
	const getList = async () => {
		let params = {
			page: page.value,
			limit: limit.value
		};
		const data = await findPage(params);
		if (page.value === 1) {
			list.value = data;
		} else {
			list.value.push(...data);
		}
		isReachBottom.value = data.length < limit.value
	}
	// 设置滚动分页
	useScroll(getList, { page, limit, isReachBottom })
	// 初始化
	init();
</script>

<style lang="scss" scoped>
	.container {
		$bg: #F5F7F9;
		width: 100%;

		.p-20-0 {
			padding: 20rpx 0;
		}

		.p-32-0 {
			padding: 32rpx 0;
		}

		.swiper {
			padding: 24rpx 32rpx 40rpx;
		}

		.m-t-40 {
			margin-top: 40rpx;
		}

		.follow {
			box-sizing: border-box;
			width: 100%;
			padding: 22rpx 28rpx 22rpx 32rpx;
			background: #EAF1FE;

			&__content {
				.logo {
					width: 88rpx;
					height: 88rpx;
				}
			}

			&__btn {
				box-sizing: border-box;
				padding: 0 30rpx;
				background: rgba(216, 216, 216, 0);
				border-radius: 32rpx;
				border: 2rpx solid #327BFA;
				font-size: 24rpx;
				font-weight: 700;
				color: #327BFA;
				line-height: 64rpx;
			}
		}

		.tabs {
			:deep(.u-tabs__wrapper__nav__item) {
				padding: 0 54rpx;
			}
		}

		.menu {
			padding: 0 56rpx;
			margin-bottom: 40rpx;

			&__item-icon {
				width: 96rpx;
				height: 96rpx;
			}

			&__item-name {
				font-size: 28rpx;
				color: #202A33;
				margin-top: 24rpx;
			}
		}

		.content {
			background: $bg;
		}

		.list {
			&__item {
				background: #FFF;
				margin-top: 24rpx;
			}

			&__item:first-child {
				margin-top: 0;
			}

			&__header,
			&__btn,
			&__describe {
				box-sizing: border-box;
				padding: 28rpx 40rpx;
			}

			&__header {
				border-bottom: 2rpx solid rgba(0, 0, 0, 0.06);

				&-name {
					max-width: 440rpx;
					font-size: 32rpx;
					font-weight: 700;
					color: #202A33;
				}

				&-price {
					white-space: nowrap;
					font-size: 28rpx;
					color: #A8B4BF;
				}
			}

			&__describe {
				font-size: 24rpx;
				color: #A8B4BF;
			}

			&__btn {
				&-item {
					padding: 0 68rpx;
					color: #327BFA;
					font-size: 28rpx;
					line-height: 64rpx;
					border-radius: 32rpx;
					margin-left: 28rpx;
					border: 2rpx solid #327BFA;

					&--solid {
						color: #FFF;
						background: #327BFA;
					}

					&--disable {
						color: #bbbdbe;
						border: none;
						background: #e8e8e8;
					}
				}
			}
		}
	}
</style>