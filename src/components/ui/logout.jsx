
export function LogoutPopup({ onLogout, onCancel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-roboto">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
                <h2 className="text-lg font-semibold mb-4">Are you sure you want to log out?</h2>
                <div className="flex justify-end">
                    <button 
                        className="bg-[#3B82F6] text-white px-4 py-2 rounded mr-2"
                        onClick={onLogout}
                    >
                        Log Out
                    </button>
                    <button 
                        className="bg-sidebar-accent text-black px-4 py-2 rounded"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
