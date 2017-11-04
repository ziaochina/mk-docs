import { Toast, Notification, Modal } from 'mk-component'
import { componentFactory } from 'mk-meta-engine'
import { fetch,history } from 'mk-utils'
import Markdown from './components/markdown'
import './mock.js' //脱离后台测试，启用mock，否则这行注释

import mdAbout from './docs/about.md'
import mdHelloWorld from './docs/helloWorld.md'
import mdDemoList from './docs/demoList.md'
import mdDemo from './docs/demo.md'
import mdCore from './docs/core.md'
import mdAppTemplates from './docs/appTemplates.md'
import mdServiceTemplates from './docs/serviceTemplates.md'
import mdCmd from './docs/cmd.md'

var _options = {}

//配置fetch
fetch.config({
	mock: true, //脱离后台测试，启用mock，否则这行注释

	//fetch支持切面扩展（before,after），对restful api统一做返回值或者异常处理
	after: (url, response) => {
		if (response.result) {
			return response.value
		}
		else {
			Toast.error(response.error.message)
			throw { url, response }
		}
	}
})

//支持url hash别名配置
history.config({
	isAlias: (pathName) => {
		if(!pathName || pathName == '/')
			return false
		const reg = /\/(mk-app-portal\/){0,1}([\s\S]+)/
		const ret = pathName.match(reg)
		return !ret[1]
	},
	toAlias: (pathName) => {
		if(!pathName || pathName == '/')
			return false
		const reg = /\/(mk-app-portal\/){0,1}([\s\S]+)/
		return pathName.replace(reg, (all,  portal, app) => {
			return all.replace(portal, '').replace(/markdown\?v=/g, '')
		})
	},
	toRealName: (pathName) => {pathName.replace('/','')
		return `/mk-app-portal/markdown?v=${pathName.replace('/','')}`
		
	}
})


//元数据引擎注册markdown组件
componentFactory.registerComponent('Markdown', Markdown)

function config(options) {
	Object.assign(_options, options)

	//对应用进行配置，key会被转换为'^<key>$'跟app名称正则匹配
	_options.apps && _options.apps.config({
		//'*': { webapi } //正式网站应该有一个完整webapi对象，提供所有web请求函数
		'mk-app-portal': {
			menu: [{
				key: '1',
				name: '示例',
				isDefault: true,
				appName: 'markdown?v=example',
				icon: 'heart',
				appParams: { content: mdDemoList }
			}, {
				key: '2',
				name: 'hello world',
				appName: 'markdown?v=new-helloworld',
				icon: 'smile',
				appParams: { content: mdHelloWorld }
			}, {
				key: '3',
				name: '复杂项目创建过程',
				appName: 'markdown?v=new-project',
				icon: 'like',
				appParams: { content: mdDemo }
			}, {
				key: '4',
				name: '核心项目',
				appName: 'markdown?v=core',
				icon: 'pay-circle',
				appParams: { content: mdCore }
			}, {
				key: '5',
				name: 'app模板项目',
				appName: 'markdown?v=app-template',
				icon: 'appstore',
				appParams: { content: mdAppTemplates }
			}, {
				key: '6',
				name: 'service模板项目',
				appName: 'markdown?v=service-template',
				icon: 'cloud',
				appParams: { content: mdServiceTemplates }
			}, {
				key: '7',
				name: 'mk常用命令',
				appName: 'markdown?v=cmd',
				icon: 'code',
				appParams: { content: mdCmd }
			},{
				key: '8',
				name: '关于',
				appName: 'markdown?v=about',
				icon: 'question-circle',
				appParams: { content: mdAbout }
			}]
		}
	})

	_options.targetDomId = 'app' //react render到目标dom
	_options.startAppName = 'mk-app-portal' //启动app名，需要根据实际情况配置

	_options.toast = Toast //轻提示使用组件，mk-meta-engine使用
	_options.notification = Notification //通知组件
	_options.modal = Modal //模式弹窗组件
	return _options
}

config.current = _options

export default config