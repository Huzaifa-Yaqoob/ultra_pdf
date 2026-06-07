"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Eye, FileCog, Hammer, Wrench } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@ui/components/ui/sidebar"

const links = [
  { href: "/builder", label: "Builder", icon: Hammer },
  { href: "/viewer", label: "Viewer", icon: Eye },
  { href: "/editor", label: "Editor", icon: FileCog },
  { href: "/tools", label: "Tools", icon: Wrench },
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <SidebarMenu className="gap-1">
      {links.map(({ href, label, icon: Icon }) => (
        <SidebarMenuItem key={href}>
          <SidebarMenuButton
            isActive={pathname === href}
            tooltip={label}
            className={pathname === href ? "data-active:bg-primary! data-active:text-on-primary!" : ""}
            render={<Link href={href} />}
          >
            <Icon />
            <span>{label}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
