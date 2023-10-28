"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("sac@abhishekchaturvedi.online");
  const [password, setPassword] = useState("sac@2023");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        console.log("ERRO-> ", result?.error);
        toast.error(result?.error);
        setLoading(false);
        console.log("ERRORRR -> ", result?.error);
      } else {
        toast.success("Logged in successfully");
        // router.push("/");
        router.push(callbackUrl);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-5 shadow bg-light p-5">
            <h2 className="mb-4 text-center">Login</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-4"
                placeholder="Enter your email"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-4"
                placeholder="Enter your password"
              />

              <button
                className="btn btn-primary btn-raised"
                disabled={loading || !email || !password}
              >
                {loading ? "Please wait.." : "Submit"}
              </button>
            </form>

            <button
              className="btn btn-danger btn-raised mb-4"
              onClick={() => signIn("google", { callbackUrl })}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
