import { StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/global_style";

export const splashStyle = StyleSheet.create({
    logo: {
        width: 131,
        height: 131,
        margin: 'auto'
    },
    container: {
        ...globalStyles.container,
        alignItems: 'center',
        justifyContent: 'center'
    }
});