<template>
	<view class="content">
		<view class="top"></view>
		<view class="img-content">
			<view class="img-3d">
				<view style="background: url('../../static/we/we1.jpg') no-repeat center center / 100% 100% ;" class='img-box img-box-1'></view>
				<view style="background: url('../../static/we/we2.jpg') no-repeat center center / 100% 100% ;" class='img-box img-box-2'></view>
				<view style="background: url('../../static/we/we3.jpg') no-repeat center center / 100% 100% ;" class='img-box img-box-3'></view>
				<view style="background: url('../../static/we/we4.jpg') no-repeat center center / 100% 100% ;" class='img-box img-box-4'></view>
				<view style="background: url('../../static/we/we5.jpg') no-repeat center center / 100% 100% ;" class='img-box img-box-5'></view>
				<view style="background: url('../../static/we/we6.jpg') no-repeat center center / 100% 100% ;" class='img-box img-box-6'></view>
			</view>
		</view>
		<view class="timer">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		onLoad() {
			
		},
		mounted(){
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
	.content{height: 100vh;background: #e7ffe6;}
	.top{width: 100%;height: 128rpx;background: linear-gradient(900deg, #9fff89, transparent);}
	.img-content{perspective: 884rpx;width: 100%;height: 45vh;background: linear-gradient(to bottom, #22273e 0%,#88f771 50%, #22273e 100%); display: flex; justify-content: center; }
	.img-3d{display: flex; margin-top: 103rpx;width: 274rpx;height: 300rpx; transform-style: preserve-3d;animation: action 20s linear infinite; align-items: center;
		&:hover{animation-play-state: paused;}  // 悬停停止动画
	}
	
	@keyframes action{
		from{
			transform: rotateY(0deg);
		}
		to{
			transform: rotateY(360deg);
		}
	}
	// 以下是图片和图片的通用样式
	.img-box{width: 274rpx;height: 224rpx; position: absolute; -webkit-box-reflect: below 30rpx -webkit-linear-gradient(transparent 10%,rgba(255,255,255,0.3)); 
		&-1{background-color: #47cc00;}
		&-2{background-color: #cc0000;}
		&-3{background-color: #72cbcc;}
		&-4{background-color: #0534cc;}
		&-5{background-color: #ff55ff;}
		&-6{background-color: #ffff7f;}
		&:nth-child(1){transform: translateZ(300rpx)}
		&:nth-child(2){transform: rotateY(60deg) translateZ(300rpx); }
		&:nth-child(3){transform: rotateY(120deg) translateZ(300rpx); }
		&:nth-child(4){transform: rotateY(180deg) translateZ(300rpx); }
		&:nth-child(5){transform: rotateY(240deg) translateZ(300rpx); }
		&:nth-child(6){transform: rotateY(300deg) translateZ(300rpx); }
	}
	
	    
	    
</style>
