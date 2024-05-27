"use client"
import { sidebarLinks } from "@/constants/sidebar-links.const"
import { User } from "@/lib/models/user/user.model"
import { cn } from "@/lib/utils/ui/cn.util"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type SidebarProps = {
  user: User
}
function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <div className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Bancos logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Bancos</h1>
        </Link>

        {sidebarLinks.map(item => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}

        {/* <PlaidLink user={user} /> */}
      </div>

      {/* <Footer user={user} /> */}
    </aside>
  )
}

export default Sidebar
