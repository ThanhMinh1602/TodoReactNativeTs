import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import textStyle from "../constants/textStyle";

export const globalStyles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    loginForm: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 41,
        paddingBottom: 30
    },
    inputStyle: {
        backgroundColor: colors.placeHolderColor,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingTop: 12,
        paddingBottom: 12,
        ...textStyle.semiBold14,
    }
});