import {useEffect, useState} from "react";
import axios from "axios";


const App = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState('Loading.')
    const [error, setError] = useState('')
    const [refresh, setRefresh] = useState(0)

    const refreshHandler = () => {
        setRefresh(refresh + 1)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                console.log(response.data)
                setData(response.data)
                setLoading('')
            })
            .catch(function (error) {
                console.log(error)
                setError('Failed to load posts. Please try again.')
            })
            .finally(function () {

            });

    }, [refresh])


    return (
        <>
            <button onClick={refreshHandler}>Refresh</button>
            {Object.values(data).map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
            <h1>{error}</h1>
            <h1>{loading}</h1>
        </>
    )
}

export default App