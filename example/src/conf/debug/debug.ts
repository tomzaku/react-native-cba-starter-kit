
export const debugSimulator = () => {
	if (global.__DEV__) {
		// If ReactNative's yellow box warnings are too much, it is possible to turn
		// it off, but the healthier approach is to fix the warnings.  =)
		console.disableYellowBox = false
	}
	console.disableYellowBox = true
}
