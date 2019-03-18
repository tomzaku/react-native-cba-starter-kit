import { AppTheme } from "@theme/index";
import { StyleSheet } from 'react-native'


export default ({ palette, metric }: AppTheme) => {
    return StyleSheet.create({
		container: {
            padding: metric.xs,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: 200,
            height: 200,
        },
        button: {
            width: 200,
        }
	})

}