import { useState } from "react"
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom"
import HeaderBar from "./reusableComponents/HeaderBar"

export default function LoginPage() {
    const [error, setError] = useState('error');

    return (
        <>
            <HeaderBar />
            <div
                className="h-[calc(100vh-110px)] w-[100%] bg-cover bg-center relative flex justify-center items-center"
                style={{ 'backgroundImage': 'url(/background-image.svg)' }}>
                <div className="absolute inset-0 bg-[#1F3463] bg-opacity-80 backdrop-blur-[5px] z-0"></div>
                <div className="absolute w-[100%] h-[100%] font-roboto text-[16px] text-white p-[10px]">
                    <Link className="flex" to="/">
                        <IoMdArrowBack className="mt-[3px] mr-[5px]"/>
                        back
                    </Link>
                </div>
                <div className="absolute">
                    <div className="text-[40px] text-white font-roboto font-bold flex justify-center mb-[35px]">
                        Log-in as Admin
                    </div>
                    <div className="w-[330px] h-[280px] bg-white border-[1px] border-white font-roboto text-[16px] rounded-[8px]">
                        <div className="flex justify-center items-center">
                            <form>
                                <div className="w-[280px] mt-[15px] h-[85px]">
                                    <div>
                                        <p>
                                            Username
                                        </p>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="border-gray border-[1px] w-[280px] h-[40px] mt-[5px] rounded-[8px] pl-[10px]"
                                            placeholder="Value" />
                                    </div>
                                    <div>
                                        <p className="pt-[5px] text-[#ff0000]">
                                            { error }
                                        </p>
                                        
                                    </div>
                                </div>

                                <div className="w-[280px] mt-[15px] h-[70px]">
                                    <div>
                                        <p>
                                            Password
                                        </p>
                                    </div>

                                    <div>
                                        <input
                                            type="password"
                                            className="border-gray border-[1px] w-[280px] h-[40px] mt-[5px] rounded-[8px] pl-[10px]"
                                            placeholder="Value" />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <button className="w-[280px] h-[40px] mt-[20px] rounded-[8px] bg-[#3B82F6] text-white"> LOG-IN </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}