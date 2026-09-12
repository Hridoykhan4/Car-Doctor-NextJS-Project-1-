"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import z, { success } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerUser = async (payload) => {
  // validating payload
  try {
    const validation = registerSchema.safeParse(payload);
    if (!validation.success)
      return { success: false, message: validation.error.errors[0].message };
    const { name, email, password } = validation.data;
    const userCollection = dbConnect(collectionNamesObj.userCollection);
    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = await userCollection.findOne({
      email: normalizedEmail,
    });
    if (existingUser)
      return {
        success: "false",
        message: "An account with this email already exists",
      };
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email: normalizedEmail,
      password: hashedPass,
      role: "user",
      createdAt: new Date(),
    };

    const result = await userCollection.insertOne(newUser);

    if (!result.insertedId)
      return {
        success: false,
        message: "Failed to create account. Please try again",
      };

    return {
      success: true,
      message: "Account created successfully! Please login.",
    };
  } catch (error) {
    console.log("Register User Error", error);
    return {
      success: false,
      message: "Internal Server Error, Please try again later",
    };
  }
};
