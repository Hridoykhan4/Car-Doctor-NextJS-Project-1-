"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import z from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

const loginUser = async (payload) => {
  try {
    const validation = loginSchema.safeParse(payload);
    if (!validation.success) {
      return {
        success: false,
        message: validation.error.errors[0].message,
      };
    }

    const { email, password } = validation.data;
    const normalizedEmail = email.toLowerCase().trim();
    const userCollection = dbConnect(collectionNamesObj.userCollection);

    const user = await userCollection.findOne({ email: normalizedEmail });

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    // CRITICAL FIX: Added 'await' here
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const { password: _, ...userInfo } = user;

    return {
      success: true,
      message: "Login Successful",
      data: JSON.parse(JSON.stringify(userInfo)),
    };
  } catch (err) {
    console.error("Login Error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};

export default loginUser;
