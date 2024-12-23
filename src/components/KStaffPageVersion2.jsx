import HeaderBar from "./reusableComponents/HeaderBar";

const KStaffPageVersion2 = () => {
  return (
    <>
      <HeaderBar />
      <main
        className="relative  w-full bg-[#1F346398] bg-cover bg-center bg-blend-overlay flex justify-center items-center"
        style={{
          height: "calc(100vh - 145px)",
          backgroundImage: "url('./src/assets/K_Staff_Page/bg-building.svg')",
        }}
      >

        <div className="form-wrapper max-w-[60%] flex flex-col justify-center items-center relative">
          <div className="grid grid-cols-[auto,1fr] gap-4 px-20 pb-10 z-10">
            <div className=" profile-picture">
              <img
                src="./src/assets/K_Staff_Page/user-default.svg"
                alt="Profile"
                className="max-w-none"
              />
            </div>
            <div className=" student-info flex flex-col justify-end items-start">
              <div className="text-nowrap text-white">
                <p className="text-3xl font-bold mb-2">Manlulu, Ines C.</p>
                <p className="text-2xl font-regular">BS INFORMATION SYSTEMS 3</p>
              </div>
            </div>
            <div className=" meal-status">
              <div className="text-nowrap">
                <p className="text-2xl font-light text-white mb-2">Meal Status:</p>
                <div className="meal-status-label bg-[#87FF95] rounded-[4px]">
                  <p className="text-2xl font-black text-[#31943C] text-center">ELIGIBLE</p>
                </div>

              </div>
            </div>
            <div className=" input-form">
              <label
                htmlFor="student-id"
                className="block text-base text-2xl font-light text-white mb-2"
              >
                Student ID:
              </label>
              <input
                type="text"
                id="student-id"
                name="student-id"
                className="px-[20px] py-[5px] rounded-[4px] w-full"
                placeholder="XX-XXXXXXXX "
              />
            </div>
          </div>



          <div className="bg-blue w-full min-h-[14em] w-[100%] max-w-[724px] max-h-[275px] bg-[#1F3463] rounded-[10px] border-[1px] border-[#FAFAFA] absolute bottom-0 z-0 "></div>

        </div>
        <div className="wrapper-backbutton absolute top-0 left-0 m-[1em] ">Back</div>
        {/* <div className="border-[1px] border-[#550000]"> BORDER </div> */}
      </main>

    </>
  );
};

export default KStaffPageVersion2;
