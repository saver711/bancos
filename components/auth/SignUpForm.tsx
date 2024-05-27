"use client"

import { signUpSchema } from "@/constants/form-schemas.const"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomInput from "../app-ui/CustomInput"
import { Button } from "../ui/button"
import { Form } from "../ui/form"

const formSchema = signUpSchema
const SignUpForm = () => {
  const [user, setUser] = useState(null)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className="cursor-pointer flex items-center gap-1 px-4">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Bancos logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Bancos
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h2 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h2>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          {/* <PlaidLink user={user} variant="primary" /> */}
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="ahwork711@gmail.com"
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </section>
  )
}
export default SignUpForm
