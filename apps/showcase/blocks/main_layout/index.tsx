"use client"

import { TooltipProvider } from "@ui/components/ui/tooltip"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@ui/components/ui/sidebar"
import { Branding } from "./branding"
import { NavLinks } from "./nav-links"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader className="flex-row items-center justify-between">
            <Branding />
            <SidebarTrigger />
          </SidebarHeader>
          <SidebarContent>
            <NavLinks />
          </SidebarContent>
          <SidebarFooter className="p-2 text-xs text-sidebar-foreground/50 text-center">
            Ultra PDF
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
