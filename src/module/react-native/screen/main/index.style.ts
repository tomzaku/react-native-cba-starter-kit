import { AppTheme } from "@theme/index";
import { StyleSheet } from 'react-native'


export default ({ palette, metric }: AppTheme) => {
    return StyleSheet.create({
		container: {
            padding: metric.xs,
        },
	})

}