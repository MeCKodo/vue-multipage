// 二哲 - 2016年08月15日
const path = require('path');
const gulp = require('gulp');
const ugjs = require('gulp-uglify');
const watch = require('gulp-watch');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const named = require('vinyl-named');
const del = require('del');
const watchPath = require('gulp-watch-path');
const replace = require('gulp-replace');

const rev = require('gulp-rev');
const ifElse = require('gulp-if-else');
const browserSync = require('browser-sync').create();
const base64 = require('gulp-base64');
const runSequence = require('run-sequence');
const bsReload = browserSync.reload;
const postcss = require('gulp-postcss'); //postcss本身
const autoprefixer = require('autoprefixer');
const precss = require('precss'); //提供像scss一样的语法
const cssnano = require('cssnano');  //更好用的css压缩!
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const revCollector = require('gulp-rev-collector');
const exec = require('child_process').exec;
const CDN = 'yourCDNLink';
var webpackConfig = {
	resolve: {
		root: path.join(__dirname, 'node_modules'),
		alias: {
			components: '../../components' // 组件别名,js里引用路径可直接 'components/xxx/yyy'
		},
		extensions: ['', '.js', '.vue', '.scss', '.css']
	},
	output: {
		// publicPath: 'yourcdnlink/static/',
		filename: 'es6/[name].js',
		chunkFilename: 'es6/[id].js?[hash]'
	},
	module: {
		noParse: [/vue.js/],
		loaders: [
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			{
				test: /\.(png|jpe?g|gif)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 5000, // 换成你想要得大小
					name: 'images/[name].[ext]?[hash:10]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 5000, // 换成你想要得大小
					name: 'fonts/[name].[hash:7].[ext]'
				}
			}
		]
	},
	plugins: [],
	babel: { //配置babel
		"presets": ["es2015",'stage-2'],
		"plugins": ["transform-runtime"]
	}
};

const processes = [
	autoprefixer({browsers: ['last 2 version', 'safari 5', 'opera 12.1', 'ios 6', 'android 4', '> 10%']}),
	precss,
	cssnano
];
// background: color($blue blackness(20%));  precss为了用这样的语法
const src = {
	css: './src/static/css/**/*.css',
	es6: './src/static/es6/**/*.js',
	fonts: './src/static/fonts/**/*.{eot,svg,ttf,woff}',
	images: './src/static/images/**/*.{png,jpg,jpeg}',
	js: './src/js/**/*.js',
	sass: './src/sass/**/*.scss',
	components: './src/components/**/*.vue',
	views: './src/views/**/*.html'
};
const dist = {
	css: './public/static/css/',
	es6: './public/static/es6',
	fonts: './public/static/fonts/',
	images: './public/static/images/',
	js: './public/static/js/',
	sass: './public/static/sass/',
	views: './public/views'
};

var BUILD = 'DEV';
gulp.task('build', function () {
	BUILD = 'PUBLIC';
	webpackConfig.plugins.push(new webpack.DefinePlugin({
		NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'production'
	}));
	build(function() {
		del(['./src/tmp'])
	});
});
gulp.task('reload', function () {
	browserSync.init(src.views, {
		startPath: "/views/",
		server: {
			baseDir : ['./src']
		},
		notify: false
	});
	webpackConfig.plugins.push(new webpack.DefinePlugin({
		NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'dev'
	}));
	init();// watch
});
gulp.task('css:dev', function () {
	
	return gulp.src(src.css)
	.pipe(gulp.dest(dist.css));
});
gulp.task('css:build', function () {
	return gulp.src(src.css)
	.pipe(base64({
		extensions: ['png', /\.jpg#datauri$/i],
		maxImageSize: 10 * 1024 // bytes,
	}))
	.pipe(ifElse(BUILD === 'PUBLIC', function () {
		return postcss(processes)
	}))
	.pipe(rev())
	.pipe(gulp.dest(dist.css))
	.pipe(rev.manifest())
	.pipe(gulp.dest(dist.css))
	
});
gulp.task('sass', function () {
	return gulp.src(src.sass)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss(processes))
	.pipe(replace('/assets', ''))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./src/static/css/'));
});
gulp.task('js', function () {
	
	watch([src.js], function (event) {
		var paths = watchPath(event, src.js, './src/static/es6/');
		var sp = paths.srcPath.indexOf('\\') > -1 ? '\\' : '/';
		
		if(paths.srcPath.split(sp).length === 3) { // 共有库情况,要编译所有js
			compileJS(['./src/js/**/*.js','!./src/js/lib/*.js']);
		} else { // 否则 只编译变动js
			compileJS(paths.srcPath);
		}
	})
	
});
gulp.task('component', function () {
	
	watch(['./src/components/**/*.vue'], function (event) {
		var sp = event.path.indexOf('\\') > -1 ? '\\' : '/';
		var business = event.path.split(sp).slice(-2);
		var jsFile   = business[1].split('-')[0];
		var path;
		if (business[0] === 'common') {
			path = ['./src/js/**/*.js','!./src/js/lib/*.js'];
		} else if (business[0] === jsFile) {
			path = './src/js/'+ business[0] +'/*.js';
		} else {
			path = './src/js/' + business[0] + '/' + jsFile + '.js';
		}
		compileJS(path);
	})
	
});
gulp.task('clean', function () {
	del([
		'public/static/es6/**/*',
		'public/static/css/**/*'
	]);
});
gulp.task('ugjs:build', function () {
	return gulp.src('./src/tmp/**/*.js')
	.pipe(ifElse(BUILD === 'PUBLIC', ugjs))
	.pipe(rev())
	.pipe(gulp.dest('./public/static/'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('./public/static/'))
});
gulp.task('js:compile', function () {
	cp('./src/js/lib/*.js','./src/static/es6/lib');
	return compileJS(['./src/js/**/*.js','!./src/js/lib/*.js']);
});
gulp.task('js:build', function () {
	cp('./src/js/lib/*.js','./src/tmp/es6/lib');
	return compileJS(['./src/js/**/*.js','!./src/js/lib/*.js'],'./src/tmp');
});
gulp.task('views:build', function () {
	return gulp.src(['./public/**/*.json', src.views])
	.pipe(revCollector({
		replaceReved: true
	}))
	.pipe(replace('../../assets', ''+ CDN +'/static')) // 直接html页面引入样式情况
	.pipe(replace('../assets', ''+ CDN +'/static')) // 直接html页面引入样式情况
	.pipe(replace('../../', ''+ CDN +'/')) // 替换html页面静态资源地址
	.pipe(replace('../', ''+ CDN +'/')) // 替换html页面静态资源地址
	.pipe(gulp.dest(dist.views));
});
gulp.task('views', function () {
	return gulp.src(src.views)
	.pipe(gulp.dest(dist.views));
});

gulp.task('images', function () {
	gulp.src(src.images)
	.pipe(gulp.dest(dist.images));
});
gulp.task('fonts', function () {
	return gulp.src(src.fonts)
	.pipe(gulp.dest(dist.fonts));
});

function init() {
	watch([src.sass]).on('change', function () {
		runSequence('sass', 'css:dev', function () {
			bsReload();
		});
	});
	gulp.start('js', 'component');
	watch([src.views]).on('change', function() {
		runSequence('views', function () {
			bsReload()
		});
	});
	watch('./src/assets/images/**/*.*', function () {
		cp('./src/assets/images/**/*.*','./src/static/images');
	});
	watch('./src/assets/fonts/**/*.{eot,svg,ttf,woff}', function () {
		cp('./src/assets/fonts/**/*.{eot,svg,ttf,woff}','./src/static/fonts');
	});
	watch('./src/js/lib/*.js', function () {
		cp('./src/js/lib/*.js','./src/static/es6/lib');
	});
	// 初始化无需编译的lib库
	cp('./src/js/lib/*.js','./src/static/es6/lib');
	cp('./src/js/lib/*.js','./public/static/es6/lib');
	cp('./src/assets/images/**/*.*','./src/static/images');
	cp('./src/assets/fonts/**/*.{eot,svg,ttf,woff}','./src/static/fonts');
}
function compileJS(path,dest) {
	dest = dest || './src/static';
	webpackConfig.output.publicPath = BUILD === 'PUBLIC' ? ''+ CDN +'/static/' : '/static/';
	
	return gulp.src(path)
	.pipe(named(function (file) {
		var path = JSON.parse(JSON.stringify(file)).history[0];
		var sp = path.indexOf('\\') > -1 ? '\\js\\' : '/js/';
		var target = path.split(sp)[1];
		return target.substring(0,target.length - 3);
	}))
	.pipe(webpackStream(webpackConfig))
	.on('error',function(err) {
		this.end()
	})
	.pipe(browserSync.reload({
		stream: true
	}))
	.pipe(gulp.dest(dest))
}
function cp(from,to) {
	gulp.src(from)
	.pipe(gulp.dest(to));
}

function build(cb) {
	cp('./src/assets/images/**/*.*','./src/static/images');
	cp('./src/assets/fonts/**/*.{eot,svg,ttf,woff}','./src/static/fonts');
	runSequence('clean','sass', 'css:build','js:build', 'ugjs:build', 'views:build', 'images', 'fonts',function() {
		// 上传静态资源文件到CDN
		cb && cb();
		/*exec('node upload.js', function (err, output) {
			if(err) console.log(err);
			console.log(output);
		});*/
	});
}
