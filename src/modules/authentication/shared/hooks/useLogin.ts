import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { QUERY_KEYS } from "@/shared/enums/query-keys.enum";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: onLogin, isPending } = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: ({ email, password }: any) => login(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData([QUERY_KEYS.CURRENT_USER], user?.user);
      navigate("/admin-dashboard", { replace: true });
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { onLogin, isPending };
}
