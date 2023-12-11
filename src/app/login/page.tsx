import LoginButton from "@/components/login-button";

export default function Login() {
  return (
    <div className="h-[calc(100vh-64px)] w-full flex items-center justify-center gap-8 flex-col">
      <p>Login</p>
      <LoginButton />
    </div>
  );
}
