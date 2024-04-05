import Link from "next/link";
import React from "react";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/products">Products</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/forgot-password">Forgot Password</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Home