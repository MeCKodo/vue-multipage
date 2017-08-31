// 配置了别名,可简写可不简写, 对于懒人的我喜欢ide的补全,所以不简写
// import Vue from 'vue';
import myHead from '../../components/home/home-header.vue';
import IndexInfo from 'components/home/index-info.vue';
import Loading from 'components/common/loading.vue';
import vueTap from 'v-tap';
import url from '../ajaxurl';
console.log(url,'---我是测试环境变量配置用');

Vue.use(vueTap);
new Vue({
	el: '#container',
	methods: { 
		sayHi() {
			require.ensure([], function () {
				var say = require('../tools').say;
				say('hi');
			});
		},
		tap() {
			console.log('hahah');
		},
	},
	components: {
		IndexInfo, Loading, myHead
	}
});
