import { useRouteError } from "react-router-dom";
import Errror404 from "./Error404";

export default function ErrorPage() {
  const error = useRouteError();
  
  function getErrorPage(error) {
    if (error.status === 404) {
      return (
        <Errror404 />
      );
    } else {
      return (
        <div>
          <h1>404: Not Found</h1>
        </div>
      );
    }
  }

  return <>{getErrorPage(error)}</>;
}
