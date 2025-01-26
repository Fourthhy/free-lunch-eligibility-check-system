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
                <CardTitle> Wednesday </CardTitle>
                <CardDescription> January 29, 2025 </CardDescription>
            </CardHeader>
            <CardFooter>
            <CardDescription> Week 5 </CardDescription>
            </CardFooter>
        </Card>
    )
}

export default DailyCard