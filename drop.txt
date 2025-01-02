import HeaderBar from "./reusableComponents/HeaderBar";


const KStaffPage = () => {
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

        <div className="relative form-wrapper flex max-w-[60%]">
          <div className="bg-blue w-full min-h-[60%] bg-[#1F3463] rounded-[10px] border-[1px] border-[#FAFAFA] absolute bottom-0 z-0 "></div>
          <section className="infos flex flex-col justify-center items-center z-10 mr-8 ml-16">
            <div className="profile-pic mb-4" >
              <img src="./src/assets/K_Staff_Page/user-default.svg" alt="" />
            </div>
            <div className="student-name mb-4">
              <p className="text-base text-white font-regular text-nowrap ">NAME OF STUDENT </p>
            </div>
            <div className="fl-status mb-4 border-[0px] rounded-[8px] border-[#3B82F6] px-[20px] py-[5px]  bg-[#3B82F650]">
              <p className="text-base text-white font-semibold">CLAIMED</p>
            </div>
          </section>
          <section className="input-form z-10 ml-8 mr-16">
            <div className="course-year mb-8">
              <p className="text-4xl text-white font-black">BACHELOR OF SCIENCE IN INFORMATION SYSTEM</p>
            </div>

            <div className="student-id">
              <label
                htmlFor="student-id"
                className="block text-base text-white font-regular text-nowrap mb-4"
              >
                Student ID
              </label>
              <input
                type="text"
                id="student-id"
                name="student-id"
                className="px-[20px] py-[5px] rounded-[4px] w-full"
                placeholder="XX-XXXXXXXX "
              />
            </div>
          </section>

        </div>
        <div className="wrapper-backbutton absolute top-0 left-0 m-[1em] ">Back</div>
      </main>

    </>
  );
};

export default KStaffPage;
