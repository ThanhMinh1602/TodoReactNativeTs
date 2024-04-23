import { StyleSheet } from "react-native";
import { fontFamily } from "./fontFamilies";
import { colors } from "./colors";

const textStyle = StyleSheet.create({
    semiBold16: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.textColor
    },
    semiBold16Gr: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.borderColor
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
    },
    semiBold12: {
        fontSize: 12,
        fontFamily: fontFamily.semiBold,
        color: colors.textColor
    },
    semiBold12Blue: {
        fontSize: 12,
        fontFamily: fontFamily.semiBold,
        color: colors.primaryColor
    },
    medium14: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.textColor
    },
    medium12: {
        fontSize: 12,
        fontFamily: fontFamily.medium,
        color: colors.textColor
    },
    medium14W: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.backgroundColor
    }
});
export default textStyle;