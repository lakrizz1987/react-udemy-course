import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from '../hooks/use-http'
import { addQuote } from "../lib/api";

const CreateQuotes = () => {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes')
        }
    }, [status,history])

    const onAddHandler = (data) => {
        sendRequest(data)
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={onAddHandler} />
    )
};

export default CreateQuotes;