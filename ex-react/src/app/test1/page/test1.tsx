import * as React from 'react'
import { compose, pure } from 'recompose'

export const Test1View = () => (
	<>
		<h1>Test1</h1>
	</>
)

export const Test1Page = compose(pure)(Test1View)
