import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamListType } from "../navigator/NavigatorType";

export const useAppNavigation = () => {
    return useNavigation<NavigationProp<RootStackParamListType>>();
};