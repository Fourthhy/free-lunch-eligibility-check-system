import { AppSidebar } from "@/components/app-sidebar";
import HeaderBar from "@/components/reusableComponents/HeaderBar";
import { Outlet, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(x => x).join('')

  function handleBreadcrumb() {
    let list = [];

    switch (pathname) {
      case 'adminPageinsight':
        list = [{ parent: "insights", child: "Daily" }];
        break;
      case 'adminPageinsightsdaily':
        list = [{ parent: "insights", child: "Daily" }];
        break;
      case 'adminPageinsightsweekly':
        list = [{ parent: "insights", child: "Weekly" }];
        break;
      case 'adminPageinsightsmonthly':
        list = [{ parent: "insights", child: "Monthly" }];
        break;
      case 'adminPageinsightssemestral':
        list = [{ parent: "insights", child: "Semestral" }];
        break;
      case 'adminPageschedule':
        list = [{ parent: "Schedule"}];
        break;  
      case 'adminPagemasterlistACT-students':
        list = [{ parent: "Masterlist", child: "ACT students"}];
        break;
      case 'adminPagemasterlistBSIS-students':
        list = [{ parent: "Masterlist", child: "BSIS students"}];
        break;
      case 'adminPageoperation':
        list = [{ parent: "Daily Operation"}];
        break;


      default:
        list = []; // Default case if no match
    }

    console.log(pathname)
    return list;
  }

  const breadcrumbs = handleBreadcrumb();

  return (
    <>
      <HeaderBar />

      <div>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />

                {/* BREADCRUMB FOR NAV, DO NOT TOUCH IT!! */}
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      Admin Dashboard
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    {breadcrumbs.map((item) => (
                      <>
                        <BreadcrumbItem className="hidden md:block">
                          {item.parent}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem className="hidden md:block">
                          {item.child}
                        </BreadcrumbItem>
                      </>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {/* OUTLET OF ROUTE IN APP.JSX */}
              <Outlet />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  );
}