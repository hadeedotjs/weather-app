import { config } from "dotenv"
import axios from "axios"
dotenv.config()

const api = process.env.base_URL

// export const getWeather = (city) => {
    
// }

export const getWeather = async (city) =>{
    const res = await axios(`${api}&q=${city}&aqi=yes`)
    return res.json()
}