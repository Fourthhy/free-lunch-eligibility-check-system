import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const DailyCard = () => {
    return (
        <Card className="bg-sidebar-accent h-full">
            <CardContent className="flex flex-col my-[20px] justify-center gap-[10px]">
                <div>
                    <CardTitle> 400 </CardTitle>
                    <CardDescription> meals calimed </CardDescription>
                </div>
                <div>
                    <CardTitle> 100 </CardTitle>
                    <CardDescription> remaining </CardDescription>
                </div>
            </CardContent>
        </Card>
    )
}

export default DailyCard