"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="auth-form">
      <label className="form-field">
        <span>Email address</span>
        <input
          autoComplete="email"
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
      </label>
      <label className="form-field">
        <span>Password</span>
        <input
          autoComplete="current-password"
          name="password"
          placeholder="Your password"
          required
          type="password"
        />
      </label>
      {state.error && (
        <p className="form-error" role="alert">
          {state.error}
        </p>
      )}
      <button className="form-submit" disabled={pending} type="submit">
        {pending ? "Signing in..." : "Sign in"}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        New to Morrow? <a href="/register">Create an account</a>
      </p>
    </form>
  );
}