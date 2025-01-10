import * as React from "react"
import { useState, useEffect } from "react";
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
import { useSidebar } from "@/components/ui/sidebar"; // Adjust the import path accordingly

export default function Page() {
  const [active, setActive] = useState(true);
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(x => x).join('');

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    function handleBreadcrumb() {
      let list = [];

      switch (pathname) {
        case 'adminPageinsight':
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
          list = [{ parent: "Schedule" }];
          break;
        case 'adminPagemasterlistACT-students':
          list = [{ parent: "Masterlist", child: "ACT students" }];
          break;
        case 'adminPagemasterlistBSIS-students':
          list = [{ parent: "Masterlist", child: "BSIS students" }];
          break;
        case 'adminPageoperation':
          list = [{ parent: "Daily Operation" }];
          break;
        case 'adminPagechangePassword':
          setActive(false); // Update state without causing re-render loop
          list = [{ parent: "Change Password" }];
          break;
        default:
          list = []; // Default case if no match
      }

      console.log(pathname);
      return list;
    }

    setBreadcrumbs(handleBreadcrumb());
  }, [pathname]); // Run effect when pathname changes

  return (
    <>
      <HeaderBar />

      <div>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4">

                <div className={active ? `flex items-center gap-2` : `hidden`}>
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                </div>

                {/* BREADCRUMB FOR NAV, DO NOT TOUCH IT!! */}
                <Breadcrumb>
                  <BreadcrumbList>

                    <BreadcrumbItem className="hidden md:block">
                      Admin Dashboard
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    {breadcrumbs.map((item, index) => (
                      <React.Fragment key={index}>
                        <BreadcrumbItem className="hidden md:block">
                          {item.parent}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        {item.child && (
                          <BreadcrumbItem className="hidden md:block">
                            {item.child}
                          </BreadcrumbItem>
                        )}
                      </React.Fragment>
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