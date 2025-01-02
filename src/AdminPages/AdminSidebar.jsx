
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/reusableComponents/AppSidebar";

export default function AdminSidebar({ children }) {
  return (
    <>
      <SidebarProvider>
        <div style={{ display: "flex" }} className="relative">
          <AppSidebar />
          <main style={{ flex: 1 }}>
            <div>
              <SidebarTrigger />
            </div>
            
            {children}
          </main>
        </div>
      </SidebarProvider>
    </>

  );
}