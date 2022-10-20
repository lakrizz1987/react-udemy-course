import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Route } from 'react-router-dom';
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Quote Details</h1>
            <p>{params.id}</p>
            <Route path={`/quotes/${params.id}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
};

export default QuoteDetails;