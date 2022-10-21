import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";


const CreateQuotes = () => {
    const history = useHistory();

    const onAddHandler = (data) => {
        console.log(data)
        history.push('/quotes')

    }

    return (
        <QuoteForm onAddQuote={onAddHandler} />
    )
};

export default CreateQuotes;