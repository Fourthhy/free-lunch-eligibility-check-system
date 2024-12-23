import HeaderBar from "./reusableComponents/HeaderBar";
import { ArrowLeft, CircleArrowLeft } from 'lucide-react';
import { useState, useEffect } from "react";

const changeLabel = () => {
  return (
    <>
      <p className="text-[#31943C] bg-[#87FF95] ">ELIGIBLE</p>
      <p className="text-[#31943C] bg-[#87FF95] ">INELIGIBLE</p>
      <p className="text-[#31943C] bg-[#87FF95] ">CLAIMED</p>
    </>
  )
}

const changeName = () => {
  return (
    <>

    </>
  )
}

const changeCourse = () => {
  return (
    <>

    </>
  )
}



const KStaffPageVersion2 = () => {

  // const [mealStatus,setMealStatus] = useState ('Eligible');
  // useEffect

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

        <div className="absolute inset-0 bg-[#1F3463] bg-opacity-80 backdrop-blur-sm"></div>


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
                <p className="text-3xl font-bold mb-1">Manlulu, Ines C.</p>
                <p className="text-2xl font-regular">BS INFORMATION SYSTEMS 3</p>
              </div>
            </div>
            <div className="meal-status">
              <div className="text-nowrap cursor-default">
                <p className="text-2xl font-light text-white mb-2">Meal Status:</p>
                <div className="meal-status-label text-center  text-2xl font-black">
                  {/* <EligibleLabel /> */}
                  <p className="text-[#31943C] bg-[#87FF95] py-[2px] rounded-[4px]">ELIGIBLE</p>
                </div>
              </div>
            </div>
            <div className="input-form">
              <label
                htmlFor="student-id"
                className="block text-2xl font-light text-white mb-2"
              >
                Student ID:
              </label>
              <input
                type="text"
                id="student-id"
                name="student-id"
                className="px-[12px] py-[5px] rounded-[4px] w-full text-base 
                font-light placeholder:text-slate-400 block bg-white 
                border border-slate-500 shadow-sm focus:outline-none focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff]"
                placeholder="XX-XXXXXXXX "
              />
            </div>
          </div>

          <div className="bg-blue w-full min-h-[15em] max-w-[724px] max-h-[275px] bg-[#1F3463] rounded-[10px] border-[1px] border-[#FAFAFA] absolute bottom-0 z-0"></div>
        </div>
      </main>

    </>
  );
};

export default KStaffPageVersion2;
