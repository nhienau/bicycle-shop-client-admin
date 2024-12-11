import { useUser } from "@/features/authentication/useUser";
import Spinner from "./Spinner";
import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const { user, isLoading, isFetching, isError } = useUser();

  if (isLoading || isFetching) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <section className="mx-auto my-0 max-w-6xl px-4 py-5">
          <div className="flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        </section>
      </div>
    );
  }

  if (user) return <Navigate to="/app/product" />;

  return <Outlet />;
}

export default AuthLayout;
