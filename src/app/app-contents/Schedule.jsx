import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function Schedule() {
    const Badge = ({ status }) => {
        return (
            <span className={`w-full h-4 flex items-center justify-center px-2 py-1 rounded-[10px] text-white 
                            ${status ? 'bg-[#60A577]' : 'bg-[#E3212E90]'}`}>
            </span>
        );
    };

    const mockSchedule = [
        {
            course: "ACT-1",
            days: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true
            }
        },
        {
            course: "ACT-2",
            days: {
                monday: true,
                tuesday: false,
                wednesday: true,
                thursday: false,
                friday: true
            }
        },
        {
            course: "BSIS 1",
            days: {
                monday: false,
                tuesday: true,
                wednesday: false,
                thursday: true,
                friday: false
            }
        }, {
            course: "BSIS-2",
            days: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true
            }
        },
        {
            course: "BSIS-3",
            days: {
                monday: true,
                tuesday: false,
                wednesday: true,
                thursday: false,
                friday: true
            }
        },
        {
            course: "BSIS-4",
            days: {
                monday: false,
                tuesday: true,
                wednesday: false,
                thursday: true,
                friday: false
            }
        }
    ];

    return (
        <>
            <Table>
                <TableCaption>Weekly Course Meal Schedule</TableCaption>
                <TableHeader >
                    <TableRow isHeaderRow className="bg-[#1f3463] text-white">
                        <TableHead>Course</TableHead>
                        <TableHead>Monday</TableHead>
                        <TableHead>Tuesday</TableHead>
                        <TableHead>Wednesday</TableHead>
                        <TableHead>Thursday</TableHead>
                        <TableHead>Friday</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockSchedule.map((schedule, index) => (
                        <TableRow key={index}>
                            <TableCell>{schedule.course}</TableCell>
                            <TableCell><Badge status={schedule.days.monday} /></TableCell>
                            <TableCell><Badge status={schedule.days.tuesday} /></TableCell>
                            <TableCell><Badge status={schedule.days.wednesday} /></TableCell>
                            <TableCell><Badge status={schedule.days.thursday} /></TableCell>
                            <TableCell><Badge status={schedule.days.friday} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
