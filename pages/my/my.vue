<template>
	<view>
		<view class="love-box">
			<view class="love"></view>
			<!-- <view class="love-vest"></view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		mounted(){
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
	.love-box{
		    background: linear-gradient(180deg, #1bff00d1, #e990ff , #e2ae6e , #ff9090 , #fff0);
		    height: 100vh;
		.love{animation:rotate-love .4s ease-in infinite alternate;z-index: 2;width: 200rpx;height: 200rpx;background: red;position: absolute;left: 50%;top: 249rpx;transform: translate(-50%,0%) rotate(45deg);
			&::before{content: "";width: 100rpx;background: red;height: 200rpx;left: -100rpx;position: absolute;border-radius: 100rpx 0 0 100rpx;animation:rotate-love-before .4s ease-in infinite alternate;}
			&::after{content: "";width: 200rpx;background: red;height: 100rpx;bottom: 200rpx;position: absolute;border-radius: 100rpx 100rpx 0 0;animation:rotate-love-after .4s ease-in infinite alternate;}
		 }
		@keyframes rotate-love{
		      0%   {width: 200rpx;height: 200rpx;}
		      20%  {width: 205rpx;height: 205rpx;}
				40%  {width: 210rpx;height: 210rpx;}
				60%  {width: 215rpx;height: 215rpx;}
				80%  {width: 220rpx;height: 220rpx;}
		      100% {width: 250rpx;height: 250rpx;}
		  }
		@keyframes rotate-love-before{
		      0%   {width: 100rpx;height: 200rpx;border-radius: 100rpx 0 0 100rpx;}
		      20%  {width: 105rpx;height: 205rpx;border-radius: 105rpx 0 0 105rpx;}
				40%  {width: 110rpx;height: 210rpx;border-radius: 110rpx 0 0 110rpx;}
				60%  {width: 115rpx;height: 215rpx;border-radius: 115rpx 0 0 115rpx;}
				80%  {width: 120rpx;height: 220rpx;border-radius: 120rpx 0 0 120rpx;}
		      100% {width: 150rpx;height: 250rpx;border-radius: 150rpx 0 0 150rpx;}
		  } 
		@keyframes rotate-love-after{
				0%   {width: 200rpx;height: 100rpx;border-radius: 100rpx 100rpx 0 0 ;}
				20%  {width: 205rpx;height: 105rpx;border-radius: 105rpx 105rpx 0 0 ;}
				40%  {width: 210rpx;height: 110rpx;border-radius: 110rpx 110rpx 0 0 ;}
				60%  {width: 215rpx;height: 115rpx;border-radius: 115rpx 115rpx 0 0 ;}
				80%  {width: 220rpx;height: 120rpx;border-radius: 120rpx 120rpx 0 0 ;}
				100% {width: 250rpx;height: 150rpx;border-radius: 150rpx 150rpx 0 0 ;}
		  }
		.love-vest{
			z-index: 1;
			width: 250rpx;
			height: 250rpx;
			background: #c51f1fed;
			position: absolute;
			left: 50%;
			top: 249rpx;
			animation:rotate-love-vest .4s ease-in -.4s infinite alternate;
			transform: translate(-50%,0%) rotate(45deg);
			&::before{animation:rotate-love-vest-before .4s ease-in -.4s infinite alternate;content: "";width: 150rpx;background: #c51f1fed;height: 250rpx;left: -150rpx;position: absolute;border-radius: 150rpx 0 0 150rpx;}
			&::after{animation:rotate-love-vest-after .4s ease-in -.4s infinite alternate;content: "";width: 250rpx;background: #c51f1fed;height: 150rpx;bottom: 250rpx;position: absolute;border-radius: 150rpx 150rpx 0 0;}
		}
		@keyframes rotate-love-vest{
		      0%   {width: 250rpx;height: 250rpx;background: #c51f1fed;}
		      20%  {width: 255rpx;height: 255rpx;background: #c51f1fd1;}
				40%  {width: 260rpx;height: 260rpx;background: #c51f1f9c;}
				60%  {width: 265rpx;height: 265rpx;background: #c51f1f78;}
				80%  {width: 270rpx;height: 270rpx;background: #c51f1f45;}
		      100% {width: 275rpx;height: 275rpx;background: #ff000000;}
		  }
		@keyframes rotate-love-vest-before{
		      0%   {width: 150rpx;height: 250rpx;border-radius: 150rpx 0 0 150rpx;background: #c51f1fed;}
		      20%  {width: 155rpx;height: 255rpx;border-radius: 155rpx 0 0 155rpx;background: #c51f1fd1;}
				40%  {width: 160rpx;height: 260rpx;border-radius: 160rpx 0 0 160rpx;background: #c51f1f9c;}
				60%  {width: 165rpx;height: 265rpx;border-radius: 165rpx 0 0 165rpx;background: #c51f1f78;}
				80%  {width: 170rpx;height: 270rpx;border-radius: 170rpx 0 0 170rpx;background: #c51f1f45;}
		      100% {width: 175rpx;height: 275rpx;border-radius: 175rpx 0 0 175rpx;background: #ff000000;}
		  } 
		@keyframes rotate-love-vest-after{
				0%   {width: 250rpx;height: 150rpx;border-radius: 150rpx 150rpx 0 0 ;background: #c51f1fed;}
				20%  {width: 255rpx;height: 155rpx;border-radius: 155rpx 155rpx 0 0 ;background: #c51f1fd1;}
				40%  {width: 260rpx;height: 160rpx;border-radius: 160rpx 160rpx 0 0 ;background: #c51f1f9c;}
				60%  {width: 265rpx;height: 165rpx;border-radius: 165rpx 165rpx 0 0 ;background: #c51f1f78;}
				80%  {width: 270rpx;height: 170rpx;border-radius: 170rpx 170rpx 0 0 ;background: #c51f1f45;}
				100% {width: 275rpx;height: 175rpx;border-radius: 175rpx 175rpx 0 0 ;background: #ff000000;}
		  }
		// 1 :#c51f1fed
		// 2 :#c51f1fd1
		// 3 :#c51f1f9c
		// 4 :#c51f1f78
		// 5 :#c51f1f45
		// 6 :#ff000000
	}
</style>
