"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpForm() {
  const router = useRouter();

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    router.push("/dashboard");
  }
  function goToLogin(e : React.FormEvent){
    e.preventDefault();
    router.push("/");
  }
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-primanry-50 to-primary-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign up to your account</CardTitle>
          <CardDescription>
            Enter your email below to Sign up to your account
          </CardDescription>
          <CardAction>
            <Button onClick={goToLogin} variant="link">Login</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
            <CardFooter className="flex-col gap-2 p-4">
              <Button type="submit" className="w-full">
                Sign up
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}