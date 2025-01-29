"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog"
import {
  Lock,
  LogOut,
  ChevronsUpDown,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavUser({ user }) {
  const { isMobile, toggleSidebar } = useSidebar()
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user session, etc.)
    navigate('/admin'); // Navigate to the admin page after logout
    setLogoutPopupVisible(false); // Close the logout popup
  };

  const handleCancel = () => {
    setLogoutPopupVisible(false); // Close the logout popup
  };

  const handleLogOutClick = () => {
    setLogoutPopupVisible(true); // Open the popup dialog only when explicitly triggered
    Event.nativeEvent.stopImmediatePropagation();
  };

  return (
    <>
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

              {/* AlertDialog is now only triggered when the user clicks "Log out" */}
              <AlertDialog open={isLogoutPopupVisible} onOpenChange={setLogoutPopupVisible} variant='destructive'>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem onClick={handleLogOutClick}>
                    <div className="cursor-pointer flex items-center">
                      <div className="mr-[10px]">
                        <LogOut />
                      </div>
                      Log out
                    </div>
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      onClick={() => {
                        setLogoutPopupVisible(false);
                        Event.nativeEvent.stopImmediatePropagation();
                      }}
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-500"
                      onClick={() => {
                        handleLogout();
                        setLogoutPopupVisible(false);
                        Event.nativeEvent.stopImmediatePropagation();
                      }}
                    >
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  )
}
