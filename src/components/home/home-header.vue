<template>
	<h1>
		我是home业务模块下的公共头部,修改我home业务模块下的js都会编译
	</h1>
</template>
<style>

</style>
<script>
	// 这个是home业务模块下的通用组件
	// 修改了这个组件,home下的js都会编译一次
	export default{
		ready() {
			console.log('home-header,测试所有home业务模块下的js都会被编译');
		}
	}
</script>