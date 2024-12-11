import { Navigate } from "react-router-dom";

function AppPage() {
  return <Navigate to="/app/product" replace={true} />;
}

export default AppPage;
