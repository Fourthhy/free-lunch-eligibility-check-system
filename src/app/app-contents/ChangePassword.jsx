import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function ChangePassword() {
    const EnterOldPassword = () => {
        return (
            <div className="w-full">
                <Label className="ml-[10px]">
                    Current Password
                </Label>
                <Input type="password" className="focus:outline-none" />
            </div>
        )
    }
    const EnterNewPassword = () => {
        return (
            <div className="w-full">
                <Label className="ml-[10px] focus:outline-none">
                    New Password
                </Label>
                <Input type="password" className="focus:outline-none" />
            </div>
        )
    }

    const ConfirmNewPassword = () => {
        return (
            <div className="w-full">
                <Label className="ml-[10px] focus:outline-none">
                    Confirm Password
                </Label>
                <Input type="password" className="focus:outline-none" />
            </div>
        )
    }

    const SubmitButton = () => {
        return (
            <div className="w-full">
                <Link to="/adminPage/insights/daily">
                    <Button className="w-full bg-[#3B82F6] hover:bg-[#1F3463]"> Save Password </Button>
                </Link>
            </div>
        )
    }

    return (
        <>
            <div className="h-[490px] w-full flex justify-center items-center">
                <div className="bg-sidebar-accent w-[320px] h-[340px] rounded-[10px] mb-[100px] flex items-center justify-center"> {/*GRAY AREA*/}
                    <div className="bg-white w-[250px] h-[290px] rounded-[5px] flex justify-center"> {/*FORM AREA*/}
                        <div className="w-[220px] h-full flex flex-col justify-center items-center gap-[5px] border-1px border-black"> {/*SIZE WIDTH*/}
                            <EnterOldPassword />
                            <EnterNewPassword />
                            <ConfirmNewPassword />
                            <SubmitButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}