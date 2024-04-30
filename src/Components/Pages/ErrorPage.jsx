import { Helmet } from "react-helmet";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className="h-full w-full flex flex-col justify-center items-center "> 
        <Helmet>
            <title>
                {error.message}
            </title>
        </Helmet>
            <h1 className="text-[150px] lg:text-[200px] font-bold text-center">{error.status || "!"}</h1>
            <h2 className="text-3xl lg:text-4xl text-center font-bold">Oops! Page {error.statusText || error.message}</h2>
            <p className="text-sm text-center mt-3">The page you are looking for might have been removed had <br />its name changed or is temporarily unavailable.</p>
            {
                error.status === 404 &&
                <Link to="/">
                    <button className="btn btn-error btn-primary mt-8">Go Back Home</button>
                </Link>
            }
            
        </div>
    );
};

export default ErrorPage;