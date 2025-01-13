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
            <CardHeader>
                <CardTitle> 400 </CardTitle>
                <CardDescription> Students claimed their meals </CardDescription>
            </CardHeader>
            <CardContent>
                <CardTitle> 100 </CardTitle>
                <CardDescription> remaining </CardDescription>
            </CardContent>
        </Card>
    )
}

export default DailyCard