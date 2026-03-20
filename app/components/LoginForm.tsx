"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

 const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.message || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setErrorMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prime-login-v1-card">
      <h1 className="prime-login-v1-title">Welcome Back</h1>
      <p className="prime-login-v1-subtitle">
        Sign in to access your admin dashboard.
      </p>

      <form onSubmit={handleLogin} className="prime-login-v1-form">
        <div className="prime-login-v1-field">
          <label className="prime-login-v1-label">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="prime-login-v1-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="prime-login-v1-field">
          <label className="prime-login-v1-label">Password</label>
          <div className="prime-login-v1-password-wrap">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="prime-login-v1-input prime-login-v1-input-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="prime-login-v1-eye"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        {/* <div className="prime-login-v1-row">
          <label className="prime-login-v1-checkbox-wrap">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember Me</span>
          </label>

          <button type="button" className="prime-login-v1-link-btn">
            Forgot Password?
          </button>
        </div> */}

        {errorMsg ? (
          <p className="prime-login-v1-error">{errorMsg}</p>
        ) : null}

        <button
          type="submit"
          className="prime-login-v1-submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}