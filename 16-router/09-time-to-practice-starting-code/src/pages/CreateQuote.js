import QuoteForm from "../components/quotes/QuoteForm";


const CreateQuotes = () => {
    
    const onAddHandler = (data) => {
        console.log(data)
    }

    return (
        <QuoteForm onAddQuote={onAddHandler} />
    )
};

export default CreateQuotes;