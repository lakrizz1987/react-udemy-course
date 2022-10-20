import QuoteList from "../components/quotes/QuoteList";


const DUMMY_DATA = [
    {id:Math.random().toString(), author: 'Ivo', text:'Learning React is super!'},
    {id:Math.random().toString(), author: 'Vito', text:'Learning Angular is great!'},
]

const AllQuotes = () =>{
    return(
        <QuoteList quotes={DUMMY_DATA}/>
    )
};

export default AllQuotes;