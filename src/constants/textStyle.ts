import { StyleSheet } from "react-native";
import { fontFamily } from "./fontFamilies";
import { colors } from "./colors";

const textStyle = StyleSheet.create({
    semiBold16: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.textColor
    },
    semiBold14Gr: {
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.borderColor
    },
    semiBold14: {
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.textColor
    }
});
export default textStyle;