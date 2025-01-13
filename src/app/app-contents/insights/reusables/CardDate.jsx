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
                <CardTitle> Monday </CardTitle>
                <CardDescription> September 11, 2001 </CardDescription>
            </CardHeader>
            <CardFooter>
            <CardDescription> Week 1 </CardDescription>
            </CardFooter>
        </Card>
    )
}

export default DailyCard