import * as Font from "expo-font"
import {DB} from "./db"
export async function bootstrap() {
  try {
    await Font.loadAsync({
      "regular": require("../assets/fonts/OpenSans-Regular.ttf"),
      "bold":require("../assets/fonts/OpenSans-Bold.ttf")
    })
    await DB.init()
    console.log("Create DB")
  } catch {
    console.log("ERROR")
  }
    
  }