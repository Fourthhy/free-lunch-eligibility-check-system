import { AppSidebar } from "@/components/app-sidebar"
import HeaderBar from "@/components/reusableComponents/HeaderBar"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Insights from "../app-contents/Insights"
import Masterlist from "../app-contents/Masterlist"
import Schedule from "../app-contents/Schedule"
import DailyOperation from "../app-contents/DailyOperation"

export default function Page() {
  return (
    <>
      <HeaderBar />
      <SidebarProvider>
          <AppSidebar />
        <SidebarInset>

          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />

              {/*BREADCRUM FOR NAV, DO NOT TOUCH IT!!*/}
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Sample Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4 pt-0"> {/*THIS IS WHERE YOUR CONTENT GOES*/}
          
          <Insights />
          {/* <Masterlist /> */}
          {/* <Schedule /> */}
          {/* <DailyOperation /> */}

          </div>

        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
