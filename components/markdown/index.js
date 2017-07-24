import React from 'react'

export default function Markdown(props) {
	return (
		<div className='markdown-body' dangerouslySetInnerHTML={{ __html: props.content }}>
		</div>
	)
}
