function HeaderBar() {
    return (
        <>
            <div className="h-[110px] w-screen bg-[#1F3463] flex text-white">
                <div className=" h-[100%] w-[50%] flex">

                    <div className="h-[100%] flex flex-col items-center justify-center ml-[20px]">
                        <img src="/logo.svg" alt="" className="h-[100px] w-[100px] " />
                    </div>

                    <div className="h-[100%] w-[100%] flex flex-col justify-center content-center">

                        <div className="w-[100%]">
                            <img src="/header-text.svg" alt="" className="h-[30px]" />
                        </div>

                        <div className="w-[100%]">
                            <img src="/sub-header-text.svg" alt="" className="h-[15px]" />
                        </div>

                    </div>
                </div>

                <div className="h-[100%] w-[50%] flex justify-end items-center mr-[30px]">
                    <img src="/motto-text.svg" alt="" className="h-[25] w-[355]" />
                </div>
            </div>
        </>
    )
}

export default HeaderBar 