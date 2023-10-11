<template>
	<view class="uni-calendar-item__weeks-box" :class="{
		'uni-calendar-item--disable': weeks.disable,
		'uni-calendar-item--before-checked-x': weeks.beforeMultiple,
		'uni-calendar-item--multiple': weeks.multiple,
		'uni-calendar-item--after-checked-x': weeks.afterMultiple,
	}" @click="choiceDate(weeks)" @mouseenter="handleMousemove(weeks)">
		<view class="uni-calendar-item__weeks-box-item" :class="{
			'uni-calendar-item--checked': calendar.fullDate === weeks.fullDate && (calendar.userChecked || !checkHover),
			'uni-calendar-item--checked-range-text': checkHover,
			'uni-calendar-item--before-checked': weeks.beforeMultiple,
			'uni-calendar-item--multiple': weeks.multiple,
			'uni-calendar-item--after-checked': weeks.afterMultiple,
			'uni-calendar-item--disable': weeks.disable,
		}">
			<text v-if="selected && weeks.extraInfo" class="uni-calendar-item__weeks-box-circle"></text>
			<view
				class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text">
				{{ weeks.date }}</view>
			<view
				class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text"
				style="font-size: 12px;">
				{{ lunar.getDayInChinese() === '初一' ? lunar.getMonthInChinese() + '月' : lunar.getDayInChinese() }}</view>
		</view>
		<view
			class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text jieqi"
			style="position: absolute; top: 50px; line-height: 1; font-size: 12px;">
			{{ lunar.getJieQi() }}
		</view>
		<view
			class="uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text jieri"
			style="position: absolute; top: 50px; line-height: 1; font-size: 12px;">
			{{ lunar.getFestivals().join() }}
		</view>
		<view :class="{ 'uni-calendar-item--today': weeks.isToday }"></view>
	</view>
</template>

<script>
import { Solar } from 'lunar-javascript';
export default {
	props: {
		weeks: {
			type: Object,
			default() {
				return {}
			}
		},
		calendar: {
			type: Object,
			default: () => {
				return {}
			}
		},
		selected: {
			type: Array,
			default: () => {
				return []
			}
		},
		checkHover: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			lunar: {}
		}
	},
	created() {
		this.lunar = Solar.fromYmd(this.weeks.year, this.weeks.month, this.weeks.date).getLunar()
	},
	watch: {
		weeks: {
			handler() {
				this.lunar = Solar.fromYmd(this.weeks.year, this.weeks.month, this.weeks.date).getLunar()
			},
			deep: true
		}
	},
	methods: {
		choiceDate(weeks) {
			this.$emit('change', weeks)
		},
		handleMousemove(weeks) {
			this.$emit('handleMouse', weeks)
		}
	}
}
</script>

<style lang="scss" >
$uni-primary: #007aff !default;

.uni-calendar-item__weeks-box {
	flex: 1;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1px 0;
	position: relative;
}

.uni-calendar-item__weeks-box-text {
	font-size: 14px;
	// font-family: Lato-Bold, Lato;
	font-weight: bold;
	color: darken($color: $uni-primary, $amount: 40%);

	&.jieqi {
		color: #aaa;
	}

	&.jieri {
		color: #dd524d;
	}
}

.uni-calendar-item__weeks-box-item {
	position: relative;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 56px;
	/* #ifdef H5 */
	cursor: pointer;
	/* #endif */
}


.uni-calendar-item__weeks-box-circle {
	position: absolute;
	top: 5px;
	right: 5px;
	width: 8px;
	height: 8px;
	border-radius: 8px;
	background-color: #dd524d;

}

.uni-calendar-item__weeks-box .uni-calendar-item--disable {
	cursor: default;
}

.uni-calendar-item--disable .uni-calendar-item__weeks-box-text-disable {
	color: #D1D1D1;
}

.uni-calendar-item--today {
	position: absolute;
	top: 10px;
	right: 17%;
	background-color: #dd524d;
	width: 6px;
	height: 6px;
	border-radius: 50%;
}

.uni-calendar-item--extra {
	color: #dd524d;
	opacity: 0.8;
}

.uni-calendar-item__weeks-box .uni-calendar-item--checked {
	background-color: $uni-primary;
	// border-radius: 50%;
	border-radius: 12px;
	box-sizing: border-box;
	border: 3px solid #fff;
}

.uni-calendar-item--checked .uni-calendar-item--checked-text {
	color: #fff;
}

.uni-calendar-item--multiple .uni-calendar-item--checked-range-text {
	color: #333;
}

.uni-calendar-item--multiple {
	background-color: #F6F7FC;
	// color: #fff;
}

.uni-calendar-item--multiple .uni-calendar-item--before-checked,
.uni-calendar-item--multiple .uni-calendar-item--after-checked {
	background-color: $uni-primary;
	// border-radius: 50%;
	border-radius: 12px;
	box-sizing: border-box;
	border: 3px solid #F6F7FC;
}

.uni-calendar-item--before-checked .uni-calendar-item--checked-text,
.uni-calendar-item--after-checked .uni-calendar-item--checked-text {
	color: #fff;
}

.uni-calendar-item--before-checked-x {
	border-top-left-radius: 50px;
	border-bottom-left-radius: 50px;
	box-sizing: border-box;
	background-color: #F6F7FC;
}

.uni-calendar-item--after-checked-x {
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	background-color: #F6F7FC;
}
</style>
