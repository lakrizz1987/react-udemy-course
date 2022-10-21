import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Route } from 'react-router-dom';
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const DUMMY_DATA = [
    { id: 'p1', author: 'Ivo', text: 'Learning React is super!' },
    { id: 'p2', author: 'Vito', text: 'Learning Angular is great!' },
]

const QuoteDetails = () => {
    const params = useParams();
    const currentQuote = DUMMY_DATA.find(x => x.id === params.id)

    if (!currentQuote) {
        return <h1>No quote found!</h1>
    }
    return (
        <Fragment>
            <HighlightedQuote text={currentQuote.text} author={currentQuote.author} />
            <Route path={`/quotes/${params.id}`} exact>
                <div className="centered">
                    <Link to={`/quotes/${params.id}/comments`} className="btn--flat">Load Commnets</Link>
                </div>
            </Route>

            <Route path={`/quotes/${params.id}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
};

export default QuoteDetails;