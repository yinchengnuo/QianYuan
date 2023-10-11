<!--
 * @Author: 尹成诺
 * @Date: 2023-04-23 10:32:56
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-10-11 22:29:55
 * @Description: file content
-->
<template>
	<view class="container">
		<uni-section title="请输入缘主姓名" type="line">
			<uni-easyinput focus trim="all" v-model="name" placeholder="请输入缘主姓名"></uni-easyinput>
		</uni-section>
		<uni-section title="请选择缘主性别" type="line">
			<uni-data-checkbox mode="button" v-model="sex"
				:localdata="[{ text: '男', value: '男' }, { text: '女', value: '女' }]"></uni-data-checkbox>
		</uni-section>
		<uni-section title="请选择公历生日" type="line">
			<uni-datetime-picker placeholder="请选择缘主生日" hide-second :clear-icon="false" v-model="time" />
		</uni-section>
		<uni-section title="立即测算" type="line">
			<uni-data-checkbox mode="button" v-model="type" :localdata="localdata" @change="submit"></uni-data-checkbox>
		</uni-section>
		<button type="primary" @click="submit">测算</button>

		<uni-card ref="result" v-if="nodes" :title="localdata.find(e => e.value === type).text + ' 测算结果'"
			style="margin: 15px 0;">
			<rich-text :nodes="nodes"></rich-text>
		</uni-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '唐娟',
			sex: '女',
			time: '2000-04-14 08:30',
			type: 'bazisuanming',
			nodes: '',
			localdata: [
				{ text: '八字算命', value: 'bazisuanming' },
				{ text: '日柱论命', value: 'rizhu_lunming' },
				{ text: '八字纳音', value: 'bazinayin' },
				// { text: '称骨算命', value: 'bone' },
				{ text: '生日算命', value: 'shengrisuanming' },
				{ text: '生日书', value: 'shengrishu' },
				// { text: '生日花语', value: 'flower' },
				// { text: '生日密码', value: 'birthday' },
				{ text: '农历算命', value: 'nongli_suanming' },
				{ text: '鬼谷算命', value: 'guiguzi_suanming' },
				// { text: '九星算命', value: 'suanming_zhanbu' },
				{ text: '星宿算命', value: '28xingxiu' },
				{ text: '塔罗算命', value: 'shengri_tarot' },
				{ text: '摸骨算命', value: 'mogusuanming' },
				{ text: '生肖算命', value: 'shengxiao' },
				// { text: '三世书算命', value: 'sanshishu' },
				{ text: '生命灵数', value: 'lingshu' },
				{ text: '本命佛', value: 'benmingfo' },
				{ text: '你的爱情', value: 'love' },
				{ text: '你的事业', value: 'cause' },
				{ text: '你的健康', value: 'health' },
				{ text: '你的性格', value: 'nature' },
				// { text: '你的优点缺点', value: 'merit' },
			]
		}
	},
	computed: {
		params() {
			return {
				name: this.name,
				sex: this.sex,
				year: this.time.slice(0, 4),
				month: this.time.slice(5, 7),
				day: this.time.slice(8, 10),
				hour: this.time.slice(11, 13),
				minute: this.time.slice(14, 16)
			}
		}
	},
	methods: {
		submit() {
			if (!this.name) return uni.showToast({ icon: 'none', title: '请输入缘主姓名' })
			if (!this.name.match(/^(?:[\u4e00-\u9fa5·]{2,16})$/)) return uni.showToast({ icon: 'none', title: '请输入正确的中文姓名' })
			if (!this.sex) return uni.showToast({ icon: 'none', title: '请选择缘主性别' })
			if (!this.time) return uni.showToast({ icon: 'none', title: '请选择缘主生日' })
			uni.showLoading();
			uni.request({ method: 'post', url: '/cesuan?type=' + this.type, data: this.params }).then(({ data }) => {
				this.nodes = data.result
				setTimeout(() => {
					this.$refs.result.$el.scrollIntoView({ behavior: 'smooth' })
				}, 123)
			}).finally(() => uni.hideLoading())
		}
	}
}
</script>

<style>
.container {
	padding: 8px;
	font-size: 14px;
	line-height: 24px;
}
</style>