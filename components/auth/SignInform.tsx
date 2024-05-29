"use client"
import { signInSchema } from "@/constants/form-schemas.const"
import { signIn } from "@/lib/actions/auth/signin.action"
import { SignInParams } from "@/lib/models/auth.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import CustomInput from "../app-ui/CustomInput"
import { Button } from "../ui/button"
import { Form } from "../ui/form"

const formSchema = signInSchema
const SignInForm = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const form = useForm<SignInParams>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: SignInParams) => {
    setIsLoading(true)
    setError("")
    try {
      const response = await signIn(values)
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
            {user ? "Link Account" : "Sign In"}
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
              {/*Correct but not needed*/}
              {/* <CustomInput<SignInParams> */}{" "}
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
                    "Sign In"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              Don&apos;t have an account?
            </p>
            <Link href="/sign-up" className="form-link">
              Sign up
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}
export default SignInForm
