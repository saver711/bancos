"use server"

import { createSessionClient } from "../appwrite/appwrite"

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient()
    return await account.get()
  } catch (error) {
    return null
  }
}
