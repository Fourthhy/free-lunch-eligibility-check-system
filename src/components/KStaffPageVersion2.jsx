import HeaderBar from "./reusableComponents/HeaderBar";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const KStaffPageVersion2 = () => {
  const [studentID, setStudentID] = useState("");
  const [mealStatus, setMealStatus] = useState("INELIGIBLE");
  const [studentName, setStudentName] = useState("Surname, Firstname M.I.");
  const [course, setCourse] = useState("Program and Year");

  // Simulate fetching data from an API or database
  const fetchStudentData = (id) => {
    const mockDatabase = {
      "21-00012345": {
        name: "Manlulu, Ines C.",
        course: "BS INFORMATION SYSTEMS 3",
        mealStatus: "ELIGIBLE",
      },
      "21-00067890": {
        name: "Garcia, Juan A.",
        course: "BS COMPUTER SCIENCE 2",
        mealStatus: "CLAIMED",
      },
    };
    return mockDatabase[id] || null;
  };

  useEffect(() => {
    if (studentID.trim()) {
      const data = fetchStudentData(studentID);
      if (data) {
        setStudentName(data.name);
        setCourse(data.course);
        setMealStatus(data.mealStatus);
      } else {
        setStudentName("Surname, Firstname M.I.");
        setCourse("Program and Year");
        setMealStatus("INELIGIBLE");
      }

      // Auto-clear the input after 3 seconds
      const timer = setTimeout(() => setStudentID(""), 1500);
      return () => clearTimeout(timer);
    }
  }, [studentID]);

  const handleInputChange = (e) => {
    setStudentID(e.target.value);
  };

  const clearInput = () => {
    setStudentID("");
  };

  const getLabelStyle = () => {
    switch (mealStatus) {
      case "ELIGIBLE":
        return "text-[#17634F] bg-[#BCF0DA]";
      case "CLAIMED":
        return "text-[#F8F8F8] bg-[#A9A9A9]";
      case "INELIGIBLE":
      default:
        return "text-[#8C3939] bg-[#FBD5D5]";
    }
  };

  return (
    <>
      <HeaderBar />

      <main
        className="relative w-full bg-cover bg-center flex justify-center items-center"
        style={{
          height: "calc(100vh - 145px)",
          backgroundImage: "url('./src/assets/K_Staff_Page/bg-building.svg')",
        }}
      >
        <div className="absolute inset-0 bg-[#1F3463] bg-opacity-80 backdrop-blur-[5px]"></div>

        <div className="form-wrapper max-w-[60%] flex flex-col justify-center items-center relative z-10">
          <div className="grid grid-cols-[auto,1fr] gap-7 px-20 pb-10 z-10">
            <div className="profile-picture">
              <img
                src="./src/assets/K_Staff_Page/user-default.svg"
                alt="Profile"
                className="max-w-none"
              />
            </div>
            <div className="student-info flex flex-col justify-end items-start">
              <div className="text-nowrap text-white">
                <p className="text-3xl font-bold mb-1">{studentName}</p>
                <p className="text-2xl font-regular">{course}</p>
              </div>
            </div>
            <div className="meal-status">
              <div className="text-nowrap cursor-default">
                <p className="text-2xl font-light text-white mb-2">Meal Status:</p>
                <div
                  className={`meal-status-label text-center text-2xl font-bold py-[2px] rounded-[4px] ${getLabelStyle()}`}
                >
                  <p>{mealStatus}</p>
                </div>
              </div>
            </div>
            <div className="input-form relative">
              <label
                htmlFor="student-id"
                className="block text-2xl font-light text-white mb-2"
              >
                Student ID:
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="student-id"
                  name="student-id"
                  value={studentID}
                  onChange={handleInputChange}
                  className="px-[12px] py-[5px] rounded-[4px] w-full text-base 
                  font-light placeholder:text-slate-400 block bg-white 
                  border border-slate-500 shadow-sm focus:outline-none focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff]"
                  placeholder="XX-XXXXXXXX"
                />
                {studentID && (
                  <button
                    onClick={clearInput}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="bg-blue w-full min-h-[15em] max-w-[724px] max-h-[275px] bg-[#1F3463] rounded-[10px] border-[1px] border-[#FAFAFA] absolute bottom-0 z-0"></div>
        </div>
      </main>
    </>
  );
};

export default KStaffPageVersion2;
