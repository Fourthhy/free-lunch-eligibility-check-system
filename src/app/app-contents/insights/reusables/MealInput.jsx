import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const MealInput = () => {
    return (
        <Card className="bg-sidebar-accent h-full">
            <CardHeader>
                <CardTitle> Today's meal </CardTitle>
                <CardDescription> Input Below </CardDescription>
            </CardHeader>
            <div className="w-[90%]">
                <div className="ml-[10px] focus:outline-none">
                    <Input type="text"/>
                </div>
            </div>
        </Card>
    )
}

export default MealInput