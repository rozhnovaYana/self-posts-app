import * as Font from "expo-font"
export async function bootstrap() {
    await Font.loadAsync({
      "regular": require("../assets/fonts/OpenSans-Regular.ttf"),
      "bold":require("../assets/fonts/OpenSans-Bold.ttf")
    })
  }