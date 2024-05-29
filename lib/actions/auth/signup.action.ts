"use server"
import { cookies } from "next/headers"
import { ID } from "node-appwrite"
import { SignUpParams } from "../../models/auth.model"
import { parseStringify } from "../../utils/utils"
import { createAdminClient } from "../appwrite/appwrite"

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData

  try {
    const { account } = await createAdminClient()
    console.log(`🚀 ~ signUp ~ account:`, account)

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    )
    console.log(`🚀 ~ signUp ~ newUserAccount:`, newUserAccount)

    const session = await account.createEmailPasswordSession(email, password)
    console.log(`🚀 ~ signUp ~ session:`, session)

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true
    })

    return parseStringify(newUserAccount)
  } catch (error) {
    console.error("Error", error)
  }
}
