import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';
import { cn } from '../../Theming';

export default Colors => StyleSheet.create({
    container: {
        marginVertical: Metrics.width * 0.03,
    },
    titleText: {
        // fontSize: Fonts.size(18),
        color: Colors[cn.settings.titleText],
        marginBottom: Metrics.width * 0.01,
    },
    optionTouchable: {
        flexDirection: 'row',
        marginTop: Metrics.width * 0.02,
        alignItems: 'center',
    },
    iconContainer: {
        width: Metrics.width * 0.04,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.width * 0.03,
    },
    optionTitleText: {
        // fontFamily: Fonts.type.regular,
        // fontSize: Fonts.size(16),
        color: Colors[cn.settings.radioButtonText],
    },
});
