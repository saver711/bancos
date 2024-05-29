"use client"

import { signUpSchema } from "@/constants/form-schemas.const"
import { signUp } from "@/lib/actions/auth/signup.action"
import { SignUpParams } from "@/lib/models/auth.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import CustomInput from "../app-ui/CustomInput"
import { Button } from "../ui/button"
import { Form } from "../ui/form"

const formSchema = signUpSchema
const SignUpForm = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const form = useForm<SignUpParams>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      address1: "",
      city: "",
      dateOfBirth: "",
      firstName: "",
      lastName: "",
      postalCode: "",
      ssn: "",
      state: ""
    }
  })

  const onSubmit = async (values: SignUpParams) => {
    setIsLoading(true)
    setError("")
    try {
      const newUser = await signUp(values)
      console.log(`🚀 ~ onSubmit ~ newUser:`, newUser)
      setUser(newUser)
    } catch (error) {
      console.log(`🚀 ~ onSubmit ~ error:`, error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="auth-form">
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
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                />
                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your first name"
                />
              </div>
              <CustomInput
                control={form.control}
                name="address1"
                label="Address"
                placeholder="Enter your specific address"
              />
              <CustomInput
                control={form.control}
                name="city"
                label="City"
                placeholder="Enter your city"
              />
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="state"
                  label="State"
                  placeholder="Example: NY"
                />
                <CustomInput
                  control={form.control}
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Example: 11101"
                />
              </div>
              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="YYYY-MM-DD"
                />
                <CustomInput
                  control={form.control}
                  name="ssn"
                  label="SSN"
                  placeholder="Example: 1234"
                />
              </div>
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              Already have an account?
            </p>
            <Link href="/sign-in" className="form-link">
              Sign In
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}
export default SignUpForm
