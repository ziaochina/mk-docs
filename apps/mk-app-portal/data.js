export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-portal',
		children: [{
			name: 'header',
			component: 'Layout',
			className: 'mk-app-portal-header',
			children: [{
				name: 'left',
				component: 'Layout',
				className: 'mk-app-portal-header-left',
				children: [{
					name: 'logo',
					component: '::img',
					className: 'mk-app-portal-header-left-logo',
					src: '{{$getLogo()}}'
				}, {
					name: 'siteName',
					component: '::h1',
					children: 'Monkey King'
				}]
			}, {
				name: 'right',
				component: 'Layout',
				className: 'mk-app-portal-header-right',
				children: [{
					name:'code',
					component: '::a',
					children:'查看github代码',
					onClick:'{{$github}}'
				},{
					name: 'github',
					component: 'Icon',
					type: 'github',
					onClick:'{{$github}}'
				}]
			}]
		}, {
			name: 'content',
			component: 'Layout',
			className: 'mk-app-portal-content',
			children: [{
				name: 'left',
				component: 'Layout',
				className: 'mk-app-portal-content-left',
				children: [{
					name: 'menu',
					component: 'Menu',
					mode: 'inline',
					theme: 'dark',
					defaultSelectedKeys: "{{data.menuDefaultSelectedKeys}}",
					defaultOpenKeys: "{{data.menuDefaultOpenKeys}}",
					onClick: '{{$menuClick}}',
					children: '{{$getMenuChildren()}}'
				}]
			}, {
				name: 'main',
				component: 'Layout',
				className: 'mk-app-portal-content-main',
				_visible: '{{!!data.content.appName}}',
				children: {
					name: 'app',
					component: 'AppLoader',
					appName: '{{data.content.appName}}',
					'...': '{{data.content.appParams}}'
				}
			}]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			menu: [],
			menuDefaultSelectedKeys: [],
			menuDefaultOpenKeys: [],
			content: {}
		}
	}
}