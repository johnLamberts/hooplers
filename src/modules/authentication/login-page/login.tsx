import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useLogin from "../shared/hooks/useLogin";

const Login = () => {
  const { onLogin, isPending } = useLogin();

  const form = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLoginSubmit = (userCredentials: Record<string, any>) => {
    onLogin(userCredentials);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Welcome to Hooplers
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  {...form.register("email")}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    className="ml-auto inline-block text-sm underline"
                    to="#"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  required
                  type="password"
                  {...form.register("password")}
                />
              </div>
              <Button disabled={isPending} className="w-full" type="submit">
                Login
              </Button>
              <Button className="w-full" variant="outline">
                Login with Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link className="underline" to="#">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Login;
