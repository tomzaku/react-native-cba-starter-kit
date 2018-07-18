

const samplePartial = {
	a: '1',
	b: '2',
}

let testPartial: Partial<typeof samplePartial>
testPartial = {
	a: 'must string',
}

let testPickOnce: Pick<typeof samplePartial, 'a'>

testPickOnce = {
	a: '1',
	b: '4', // Throw error, only contains property a
}
let testPick: Pick<typeof samplePartial, 'a' | 'b'>

testPick = {
	a: '1',
	b: '4',
}

let testRecord: Record<'foo' | 'bar', number>

testRecord = {
	foo: 1,
	bar: 2,
}

testRecord = {
	foo: '1', // must to be number
	bar: 2,
}



// Record
// K is introduced as a new Generic Type Parameter and is inferred from the context
// e.g.
type ExtractChildren<T> = T extends { children: infer C } ? C : React.ReactNode

type Foo = ExtractChildren<{ children: number }> // number
type FooReact = ExtractChildren<{}> // React.ReactNode
