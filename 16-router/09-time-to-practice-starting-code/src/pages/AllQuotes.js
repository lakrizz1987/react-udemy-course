import { useEffect, useState } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";


const DUMMY_DATA = [
    { id: 'p1', author: 'Ivo', text: 'Learning React is super!' },
    { id: 'p2', author: 'Vito', text: 'Learning Angular is great!' },
]

const AllQuotes = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function getAll(){
            const data = await getAllQuotes()
            setQuotes(data)
        }
        getAll()
    }, [])

    return (
        <QuoteList quotes={quotes} />
    )
};

export default AllQuotes;