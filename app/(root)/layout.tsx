import MobileNav from "@/components/layout/MobileNav"
import Sidebar from "@/components/layout/Sidebar"
import Image from "next/image"
import { redirect } from "next/navigation"

export default function BaseLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const loggedInUser = { firstName: "Ahmed" }

  if (!loggedInUser) redirect("/sign-in")
  return (
    <main className="flex h-screen w-full font-inter">
      {/* @ts-ignore-error */}
      <Sidebar user={loggedInUser} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            {/* @ts-ignore-error */}
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  )
}
