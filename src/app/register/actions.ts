"use server";

import { Prisma } from "@/generated/prisma/client";
import { hashPassword } from "@/lib/password";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function registerAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim().slice(0, 80);
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (
    !/^\S+@\S+\.\S+$/.test(email) ||
    password.length < 8 ||
    password.length > 128
  ) {
    redirect("/register?error=invalid");
  }

  try {
    await prisma.user.create({
      data: {
        name: name || null,
        email,
        passwordHash: await hashPassword(password),
      },
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      redirect("/register?error=exists");
    }

    throw error;
  }

  redirect("/login?registered=1");
}