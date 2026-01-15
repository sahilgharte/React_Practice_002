import {useRouteError} from 'react-router';

const error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className="error-container">
            <h1>Oops! Something went wrong.</h1>
            <h2>{error.status}: {error.statusText}</h2>
            <p>{error.data}</p>
        </div>
    );
};

export default error;