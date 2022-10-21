import QuoteList from "../components/quotes/QuoteList";
import { useEffect, useState } from "react";
import { getAllQuotes } from "../lib/api";


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