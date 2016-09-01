<template>
    <div id="loading">
		<!--修改这里试试,所有js都会编译,因为他是common全局公用的-->
		<h4>loading组件 正在加载中,请稍等...</h4>
		<!-- 测试字体文件 -->
		<i class="iconfont">&#xe684;&#xe684;&#xe684;</i>
	</div>
</template>
<style scoped rel="stylesheet/scss" lang="sass">
	i {
		font-size:20px;
		color: #abcedf;
	}
	@font-face {font-family: 'iconfont';
		src: url('../../assets/fonts/iconfont.eot'); /* IE9*/
		src: url('../../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('../../assets/fonts/iconfont.woff') format('woff'), /* chrome、firefox */
		url('../../assets/fonts/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
		url('../../assets/fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
	}
	.iconfont{
		font-family:"iconfont" !important;
		font-size:16px;font-style:normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;}
</style>
<script>
    // common是所有业务模块下的通用组件
	// 修改common下的组件,所有业务模块的入口js都会编译
    export default{
    	ready() {
    		console.log('loading,测试所有入口js都会被编译')
		}
    }
</script>