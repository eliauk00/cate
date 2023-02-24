<template>
	<view class="content">
		<view class="top"></view>
		<view class="img-content">
			<view class="img-3d">
				<img class='img-box img-box-1' src="../../static/we/we1.jpg" alt="">
				<img class='img-box img-box-2' src="../../static/we/we2.jpg" alt="">
				<img class='img-box img-box-3' src="../../static/we/we3.jpg" alt="">
				<img class='img-box img-box-4' src="../../static/we/we4.jpg" alt="">
				<img class='img-box img-box-5' src="../../static/we/we5.jpg" alt="">
				<img class='img-box img-box-6' src="../../static/we/we6.jpg" alt="">
			</view>
		</view>
		<view class="timer">
			我们在一起共 {{ timer }}
		</view>
	</view>
</template>

<script setup>
  import { ref, toRefs , onMounted } from 'vue'
			let time = '2022/12/01 20:25:00'
			time = time.replace(/-/g, "/")  // 把 - 转成 /
  		    let timer = ref()
		    let timerFun = ()=>{
		        let dateEnd = new Date()            // 获取当前时间
				let dateBegin = new Date(time)  // 指定时间
		        let dateDiff = dateEnd.getTime() - dateBegin.getTime();      // 时间差的毫秒数
		        let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
		        let leave1 = dateDiff % (24*3600*1000)    // 计算天数后剩余的毫秒数
		        let hours = Math.floor(leave1/(3600*1000))// 计算出小时数
		        let leave2 = leave1 % (3600*1000)    // 计算小时数后剩余的毫秒数
		        let minute = Math.floor(leave2/(60*1000))// 计算相差分钟数
		        let leave3 = leave2 % (60*1000)      // 计算分钟数后剩余的毫秒数
		        let seconds = Math.round(leave3/1000)     // 除去以上之后获取到的秒
				timer.value = dayDiff+'天'+hours+'时'+minute+'分'+seconds+'秒'
			}
		    setInterval(()=>{
		    	timerFun()
		    },1000)
</script>

<style lang="scss" scoped>
	.content{height: 100vh;background: #e7ffe6;}
	.top{width: 100%;height: 128rpx;background: linear-gradient(900deg, #9fff89, transparent);}
	.img-content{perspective: 884rpx;width: 100%;height: 45vh;background: linear-gradient(to bottom, #22273e 0%,#88f771 50%, #22273e 100%); display: flex; justify-content: center; }
	.img-3d{display: flex; margin-top: 103rpx;width: 274rpx;height: 300rpx; transform-style: preserve-3d;animation: action 20s linear infinite; align-items: center;
		// &:hover{animation-play-state: paused;}  // 悬停停止动画
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
