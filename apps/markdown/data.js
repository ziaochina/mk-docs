export function getMeta() {
	return {
		name: 'root',
		component: 'Markdown',
		content:'{{$getContent()}}'
	}
}