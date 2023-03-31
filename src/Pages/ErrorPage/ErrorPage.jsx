import {useRouteError} from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    console.log(error);

  return (
    <div>
      <h1>Error {error.status}</h1>
        <p>{error.statusText}</p>
    </div>
  );
}

export default ErrorPage;