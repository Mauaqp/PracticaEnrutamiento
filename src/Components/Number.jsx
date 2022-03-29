import React from "react";
import { useParams } from 'react-router-dom';

const Number = () => {
    const params = useParams();

    return (
        <div>The number is "{params.number}" </div>
    );
}

export default Number;