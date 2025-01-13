import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Pencil, Trash } from 'lucide-react';

export default function Schedule() {
    const [schedule, setSchedule] = useState([
        {
            course: "ACT-1",
            days: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: true
            }
        },
        {
            course: "ACT-2",
            days: {
                monday: true,
                tuesday: false,
                wednesday: true,
                thursday: false,
                friday: true,
                saturday: true
            }
        },
        {
            course: "BSIS 1",
            days: {
                monday: false,
                tuesday: true,
                wednesday: false,
                thursday: true,
                friday: false,
                saturday: true
            }
        },
        {
            course: "BSIS-2",
            days: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: true
            }
        },
        {
            course: "BSIS-3",
            days: {
                monday: true,
                tuesday: false,
                wednesday: true,
                thursday: false,
                friday: true,
                saturday: true
            }
        },
        {
            course: "BSIS-4",
            days: {
                monday: false,
                tuesday: true,
                wednesday: false,
                thursday: true,
                friday: false,
                saturday: false

            }
        }
    ]);

    const [editRowIndex, setEditRowIndex] = useState(null);
    const [tempSchedule, setTempSchedule] = useState(schedule);

    const handleEditClick = (index) => {
        setEditRowIndex(index);
        setTempSchedule(schedule);
    };

    const handleChange = (e, rowIndex, day) => {
        const updatedSchedule = [...tempSchedule];
        updatedSchedule[rowIndex].days[day] = e.target.value === "true";
        setTempSchedule(updatedSchedule);
    };

    const handleCourseChange = (e, index) => {
        const updatedSchedule = [...tempSchedule];
        updatedSchedule[index].course = e.target.value.toUpperCase();
        setTempSchedule(updatedSchedule);
    };

    const handleSave = () => {
        setSchedule(tempSchedule);
        setEditRowIndex(null);
    };

    const handleDelete = (index) => {
        const updatedSchedule = schedule.filter((_, i) => i !== index);
        setSchedule(updatedSchedule);
    };

    const handleAddRow = () => {
        const newSchedule = {
            course: "BS",
            days: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: true
            }
        };
        setSchedule([...schedule, newSchedule]);
    };

    const Badge = ({ status }) => (
        <span className={`w-full h-4 flex items-center justify-center px-2 py-1 rounded-[10px] text-white 
                        ${status ? 'bg-[#60A577]' : 'bg-[#E3212E90]'}`}
        />
    );

    return (
        <div className="overflow-y-auto max-h-[70vh]">
            {/* Custom sticky header outside of the Table */}
            <div className="sticky top-0 z-10 bg-[#1f3463] text-white flex justify-center items-center h-12 text-center align-middle font-medium ">
                <div className="flex-none w-[8em]   p-4 text-center align-middle">Course</div>
                <div className="flex-1   p-4 text-center align-middle">Monday</div>
                <div className="flex-1   p-4 text-center align-middle">Tuesday</div>
                <div className="flex-1   p-4 text-center align-middle">Wednesday</div>
                <div className="flex-1   p-4 text-center align-middle">Thursday</div>
                <div className="flex-1   p-4 text-center align-middle">Friday</div>
                <div className="flex-1   p-4 text-center align-middle">Saturday</div>
                <div className="flex-none w-[8em] p-4 text-center align-middle">Actions</div>
            </div>

            <Table className="relative">
                <TableCaption>Weekly Course Meal Schedule</TableCaption>
                <TableBody className="flex flex-col justify-around items-center">
                    {schedule.map((scheduleItem, index) => (
                        <TableRow key={index} className="w-full flex flex-1">
                            <TableCell className="w-[8em] flex-none  ">
                                {editRowIndex === index ? (
                                    <input
                                        type="text"
                                        value={tempSchedule[index].course}
                                        onChange={(e) => handleCourseChange(e, index)}
                                        className="overflow-x-hidden max-w-[5em] border px-2 py-1 rounded"
                                    />
                                ) : (
                                    scheduleItem.course
                                )}
                            </TableCell>
                            {Object.keys(scheduleItem.days).map(day => (
                                <TableCell key={day} className="flex-1 ">
                                    {editRowIndex === index ? (
                                        <select
                                            value={tempSchedule[index].days[day]}
                                            onChange={(e) => handleChange(e, index, day)}
                                            className="border px-2 py-1 rounded"
                                        >
                                            <option value={true}>Eligible</option>
                                            <option value={false}>Not Eligible</option>
                                        </select>
                                    ) : (
                                        <>
                                            <TooltipProvider className="w-full flex justify-center items-center flex-1">
                                                <Tooltip className="w-full flex justify-center items-center flex-1">
                                                    <TooltipTrigger className="w-full flex justify-center items-center flex-1">  <Badge status={scheduleItem.days[day]} /></TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{scheduleItem.days[day] ? 'Eligible' : 'Ineligible'}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>

                                        </>


                                    )}
                                </TableCell>
                            ))}
                            <TableCell className="w-[8em] flex justify-center items-center flex-none ">
                                {editRowIndex === index ? (
                                    <button onClick={handleSave} className="px-2 py-1 text-center align-middle text-green-500">
                                        Save
                                    </button>
                                ) : (
                                    <div className='flex justify-center items-center gap-5 max-w-[4em]'>
                                        <Pencil size={18} onClick={() => handleEditClick(index)} className="cursor-pointer" />
                                        <Trash size={18} onClick={() => handleDelete(index)} className="text-red-500 cursor-pointer" />
                                    </div>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Add Schedule Button */}
            <div className="flex justify-end mr-4 mt-4">
                <button
                    onClick={handleAddRow}
                    className="bg-[#1f3463] text-white px-4 py-2 rounded-lg"
                >
                    Add Schedule
                </button>
            </div>
        </div>
    );
}
