import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundError = () => {
  const navigate = useNavigate();

  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="font-bold leading-tight text-[7rem]">404</h1>
        <span className="font-medium">Oops! Page Not Found!</span>

        <p className="text-center text-muted-foreground">
          It seems like the page you're looking for <br />
          does not exist or might have been removed.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};
export default NotFoundError;
