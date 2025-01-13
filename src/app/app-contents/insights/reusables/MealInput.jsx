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
            </CardHeader>
            <CardContent>
            <div className="w-full">
                <div className="focus:outline-none">
                    <Input type="text"/>
                </div>
            </div>
            </CardContent>
        </Card>
    )
}

export default MealInput