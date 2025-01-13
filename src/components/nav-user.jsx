"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LogoutPopup } from "@/components/ui/logout"
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  Lock,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({ user }) {
  const { isMobile, toggleSidebar } = useSidebar()
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogoutPopupVisible(false);
    navigate('/admin')
  };

  const handleCancel = () => {
    setLogoutPopupVisible(false);
  };

  return (
    <>
      {isLogoutPopupVisible && (
        <LogoutPopup onLogout={handleLogout} onCancel={handleCancel} />

      )}
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>

            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <Link to="/adminPage/changePassword">
                <DropdownMenuItem onClick={toggleSidebar}>
                  <div className="cursor-pointer flex items-center">
                    <div className="mr-[10px]">
                      <Lock />
                    </div>
                    Change Password
                  </div>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link>
                <DropdownMenuItem onClick={() => setLogoutPopupVisible(true)}>
                  <div className="cursor-pointer flex items-center">
                    <div className="mr-[10px]">
                      <LogOut />
                    </div>
                    Log out
                  </div>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  )
}

