import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteDetails = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Quote Details</h1>
            <p>{params.id}</p>
        </Fragment>
    )
};

export default QuoteDetails;