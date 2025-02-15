import { useState } from "react"
import { IoMdArrowBack } from "react-icons/io";
import { X, CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"
import HeaderBar from "./reusableComponents/HeaderBar"

export default function LoginPage() {
    const [error, setError] = useState(null);

    return (
        <>
            <HeaderBar />
            <div
                className="h-[calc(100vh-110px)] w-[100%] bg-cover bg-center relative flex justify-center items-center"
                style={{ 'backgroundImage': 'url(/background-image.svg)' }}>
                <div className="absolute inset-0 bg-[#1F3463] bg-opacity-80 backdrop-blur-[5px] z-0"></div>

                <div className="absolute top-0 left-0 px-4 py-2 flex items-center">
                  <Link to="/">
                    <button
                      className="flex items-center text-[#F8F8F899] hover:text-[#F8F8F8]">
                      <CircleArrowLeft size={24} className="mr-2" /> {/* Back Icon */}
                      <span className="text-lg">Back</span>
                    </button>
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
                                            placeholder="Enter username" />
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
                                            placeholder="Enter password" />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <Link to="/adminPage ">
                                    <button className="w-[280px] h-[40px] mt-[20px] rounded-[8px] bg-[#3B82F6] text-white"> LOG-IN </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}