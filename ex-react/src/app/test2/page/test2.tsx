import * as React from 'react'
import { compose, pure } from 'recompose'

export const Test2View = () => (
	<>
		<h1>Test2</h1>
	</>
)

export const Test2Page = compose(pure)(Test2View)
