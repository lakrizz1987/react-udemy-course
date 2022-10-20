import QuoteList from "../components/quotes/QuoteList";


const DUMMY_DATA = [
    {id:'p1', author: 'Ivo', text:'Learning React is super!'},
    {id:'p2', author: 'Vito', text:'Learning Angular is great!'},
]

const AllQuotes = () =>{
    return(
        <QuoteList quotes={DUMMY_DATA}/>
    )
};

export default AllQuotes;