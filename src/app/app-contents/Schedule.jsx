import { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function Schedule() {
    const [schedule,setSchedule] = useState({
        course:""

    })

    return (
        <>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-[#1f3463] text-white">
                        <TableHead></TableHead>
                        <TableHead className="w-auto">Monday</TableHead>
                        <TableHead className="w-auto">Tuesday</TableHead>
                        <TableHead className="w-auto">Wednesday</TableHead>
                        <TableHead className="w-auto">Thursday</TableHead>
                        <TableHead className="w-auto">Friday</TableHead>
                        <TableHead className="w-auto">Saturday</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </>
    )
}