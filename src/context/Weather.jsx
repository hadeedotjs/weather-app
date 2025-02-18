import { createContext, useContext } from "react";

//created context
const WeatherContext = createContext(null)

// create a use weather hook

export const useWeather = () =>{
    return useContext(WeatherContext)
}


export const WeatherProvider = (props) =>{
    const [data, setData] = useState(null)
    const [city, setCity] = useState(null)
    return (
        // children wil get wrapped under weatherContext ke provider
        <WeatherContext.Provider>{props.children}</WeatherContext.Provider>
    )
}