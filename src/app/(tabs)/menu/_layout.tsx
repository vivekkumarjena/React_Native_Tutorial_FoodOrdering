import { Stack } from "expo-router";

export default function menuLayout() {
    return(
    <Stack>
        <Stack.Screen name="index" options={{title:'Menu'}} />
    </Stack>
); 
}