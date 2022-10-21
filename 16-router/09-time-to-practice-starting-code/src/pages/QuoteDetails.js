import { Fragment, useEffect } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { Route } from 'react-router-dom';
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";




const QuoteDetails = () => {
    const params = useParams();
    const match = useRouteMatch();
    const { sendRequest, status, data: loadedQuate, error } = useHttp(getSingleQuote, true);

    useEffect(()=>{
        sendRequest(params.id)
    },[sendRequest,params.id])

    if (!loadedQuate && status==='pending') {
        return <LoadingSpinner/>
    }

    if(!loadedQuate && error){
        return <h1>{error}</h1>
    }

    if (!loadedQuate && status==='completed') {
        return <h1>No data !!!</h1>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuate.text} author={loadedQuate.author} />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link to={`${match.url}/comments`} className="btn--flat">Load Commnets</Link>
                </div>
            </Route>

            <Route path={`${match.url}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
};

export default QuoteDetails;