import { useNavigation } from "@react-navigation/native";
import { RootStackParamListType } from "../navigator/NavigatorType";
import { StackNavigationProp } from "@react-navigation/stack";

export const useAppNavigation = () => {
    return useNavigation<StackNavigationProp<RootStackParamListType>>();
};