import LoginButton from "../components/login";


export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">Welcome Back</h1>

        <p className="mb-8 text-center text-gray-500">Sign in to continue</p>

        <LoginButton />
      </div>
    </div>
  );
}
