<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
			<view class="list">
				<view class="list-box" :class="{'list-box-1':id===index}" v-for="(item,index) in list">
					{{item}}
				</view>
			</view>
			<view class="button" @click="prepare">
				点击抽奖
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '抽奖',
				list:['肠粉','面食','米饭','鱼','食物2','食物3','食物4','食物5','食物6','食物7','食物8'],
				id:0,
				stop:false,
			}
		},
		onLoad() {

		},
		methods: {
			stopTimer(){
				this.stop = false
				clearTimeout(this.timer)
			},
			prepare(){
				if(this.stop)return;
				this.start()
			},
			start(time = 800,state = true){
				this.stop = true;
				const a = Math.floor(Math.random() * (this.list.length - min + 1)) + min;
				let max = this.list.length-1  // 最大数
				let min = 0			// 最小数
				let lucky = Math.floor(Math.random() * (max - min + 1)) + min;  // 产生的数字下标
				this.timer = setTimeout(()=>{
					this.id = lucky
					// 加速的两个状态 state = true 加速 state = false 减速
					if(state){
						time -= 50
						// 如果低于200 改变状态 开始减速
						if(time < 100){
							state = !state
						}
					} else{
						time += 10
						if(time > 300){
							// 结束倒计时
							this.stopTimer()
							return
						}
					}
					this.start(time,state) // 回调自己
				},time)
			}
		},
		beforeDestroy(){		  clearTimeout(this.timer)		}
	}
</script>

<style scoped lang="scss">
	.content {display: flex;flex-direction: column;align-items: center;justify-content: center;}
	.logo {height: 200rpx;width: 200rpx;margin-top: 200rpx;margin-left: auto;margin-right: auto;margin-bottom: 50rpx;}
	.text-area {display: flex;flex-direction: column;width: 100%;}
	.title {font-size: 36rpx;color: #8f8f94;display: flex;}
	.list{width: 100%;display: flex;flex-wrap: wrap;padding: 30rpx 36rpx;box-sizing: border-box;}
	.button{width: 5em;text-align: center;margin: auto;background: #00d0ff;color: #fff;height: 1.5em;line-height: 1.5em;}
	.list-box{padding: 40rpx; transition-duration: .5s;
		&-1{color: #00aaff;transform: rotate(360deg);}
		&-2{color: #00aaff;animation:rotate 1s linear;}
	}
	@keyframes rotate{
	            0%   {transform: scaleX(1)}
	            50%  {transform: scaleX(-1)}
	            100% {transform: scaleX(1)}
	        }
</style>
