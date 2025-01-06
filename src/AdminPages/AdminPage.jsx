import HeaderBar from "../components/reusableComponents/HeaderBar";
import AdminSidebar from "./AdminSidebar";


function AdminPage() {
    return (
        <>
            <HeaderBar />
                <div className="ml-[30px] h-screen w-screen absolute">
                    content
                </div>
            <AdminSidebar />
            
        </>
    )
}

export default AdminPage