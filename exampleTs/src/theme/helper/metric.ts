export const getMetric = (spacing: number, overrideProperties?: any) => ({
	toolbar: {
		android: {
			marginLeft: spacing,
		},
	},
	container: {
		padding: spacing,
	},
	tabbarNavigation: {
		borderTopWith: 0.25,
	},
	...overrideProperties,
})
