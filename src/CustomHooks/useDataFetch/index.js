import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetch = (api) => {

    const [data, setData] = useState([])
    const [error, setError] = useState([])

    const fetchUrl = async () => {
        try {
            const response = await axios.get(api)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(async () => {
        await fetchUrl()
    }, [])

    return [data, error]
}

export default useDataFetch;