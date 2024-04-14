import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const SetupComponents = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {children}

        <Toaster richColors />
      </>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default SetupComponents;
