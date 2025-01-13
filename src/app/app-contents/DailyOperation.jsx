import { Pencil } from 'lucide-react';
import { useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableRow,
} from "@/components/ui/table";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Input } from '@/components/ui/input';

export default function DailyOperation() {
    const Badge = ({ status }) => {
        switch (status) {
            case 'claimed':
                return <span className={`bg-[#A9A9A9] w-[60%] ml-[11%] h-4 flex items-center justify-center px-2 py-1 rounded-[10px] text-white `} />
            case 'eligible':
                return <span className={`bg-[#60A577] w-[60%] ml-[11%] h-4 flex items-center justify-center px-2 py-1 rounded-[10px] text-white `} />
            case 'ineligible':
                return <span className={`bg-[#E3212E90] w-[60%] ml-[11%] h-4 flex items-center justify-center px-2 py-1 rounded-[10px] text-white `} />

            default:
                return <h1>404 Not Found</h1>;
        }
    };

    // Store data for each day
    const [studentData, setStudentData] = useState({
        monday: [
            { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' },
            { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'claimed' },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Isabella Young", studentID: "6083822831404", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Olivia Lewis", studentID: "1785924000172", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Chris Johnson", studentID: "6478382181262", courseAndYear: "BSIS-4", mealStatus: 'claimed' },
            { name: "Jane Smith", studentID: "7374456913236", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Emani Poole", studentID: "1717265896386", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Isabella Young", studentID: "4770702994548", courseAndYear: "BSIS-4", mealStatus: 'claimed' },
            { name: "Olivia Lewis", studentID: "9205144578984", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "David Lee", studentID: "5186966412204", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' }
        ],
        tuesday: [
            { name: "Sophia Green", studentID: "8472563925812", courseAndYear: "BSIS-3", mealStatus: 'eligible' },
            { name: "Mason Garcia", studentID: "1009385624798", courseAndYear: "BSIS-2", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' }, { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Isabella Young", studentID: "6083822831404", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Olivia Lewis", studentID: "1785924000172", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Chris Johnson", studentID: "6478382181262", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Jane Smith", studentID: "7374456913236", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Emani Poole", studentID: "1717265896386", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Isabella Young", studentID: "4770702994548", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Olivia Lewis", studentID: "9205144578984", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "David Lee", studentID: "5186966412204", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' }
        ],
        wednesday: [
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: 'ineligible' }, { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Isabella Young", studentID: "6083822831404", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Olivia Lewis", studentID: "1785924000172", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Chris Johnson", studentID: "6478382181262", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Jane Smith", studentID: "7374456913236", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Emani Poole", studentID: "1717265896386", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Isabella Young", studentID: "4770702994548", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Olivia Lewis", studentID: "9205144578984", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "David Lee", studentID: "5186966412204", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' }
        ],
        thursday: [
            { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' }, { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Isabella Young", studentID: "6083822831404", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Olivia Lewis", studentID: "1785924000172", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Chris Johnson", studentID: "6478382181262", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Jane Smith", studentID: "7374456913236", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Emani Poole", studentID: "1717265896386", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Isabella Young", studentID: "4770702994548", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Olivia Lewis", studentID: "9205144578984", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "David Lee", studentID: "5186966412204", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' }
        ],
        friday: [
            { name: "Sophia Green", studentID: "8472563925812", courseAndYear: "BSIS-3", mealStatus: 'eligible' },
            { name: "Chloe Scott", studentID: "8127653094875", courseAndYear: "BSIS-3", mealStatus: 'ineligible' }, { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Isabella Young", studentID: "6083822831404", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Olivia Lewis", studentID: "1785924000172", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Chris Johnson", studentID: "6478382181262", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Jane Smith", studentID: "7374456913236", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Emani Poole", studentID: "1717265896386", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Isabella Young", studentID: "4770702994548", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Olivia Lewis", studentID: "9205144578984", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "David Lee", studentID: "5186966412204", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' }
        ],
        saturday: [
            { name: "Zoe Anderson", studentID: "3082645784093", courseAndYear: "BSIT-1", mealStatus: 'ineligible' },
            { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Emily Martinez", studentID: "8496573124985", courseAndYear: "BSIT-4", mealStatus: 'ineligible' }, { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Isabella Young", studentID: "6083822831404", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Olivia Lewis", studentID: "1785924000172", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Chris Johnson", studentID: "6478382181262", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Jane Smith", studentID: "7374456913236", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Emani Poole", studentID: "1717265896386", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Isabella Young", studentID: "4770702994548", courseAndYear: "BSIS-4", mealStatus: 'ineligible' },
            { name: "Olivia Lewis", studentID: "9205144578984", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "David Lee", studentID: "5186966412204", courseAndYear: "BSIS-4", mealStatus: 'eligible' },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: 'ineligible' },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: 'eligible' }
        ]
    });

    const StudentList = ({ data, day }) => {
        const [editRowIndex, setEditRowIndex] = useState(null);
        const [editedData, setEditedData] = useState(data);

        const handleEditClick = (index) => {
            setEditRowIndex(index);
        };

        const handleChange = (e, index, field) => {
            const updatedData = [...editedData];
            updatedData[index][field] = e.target.value;
            setEditedData(updatedData);
        };

        const handleSave = () => {
            setEditRowIndex(null);
            // Update the main studentData with the edited data
            setStudentData((prevData) => ({
                ...prevData,
                [day]: editedData,
            }));
        };

        const handleAddRow = () => {
            const newRow = {
                name: 'Name',
                studentID: '22-00',
                courseAndYear: 'BS',
                mealStatus: false,
            };
            setEditedData([...editedData, newRow]);
        };

        return (
            <div className="overflow-y-auto max-h-[60vh]">
                {/* Custom sticky header outside of the Table */}
                <div className="sticky top-0 z-10 bg-[#1f3463] text-white flex h-12 text-center align-middle font-medium ">
                    <div className="flex-1  p-4 text-center align-middle">Name</div>
                    <div className="flex-1  p-4 text-center align-middle">ID Number</div>
                    <div className="flex-1  p-4 text-center align-middle">Course and Year</div>
                    <div className="flex-1  p-4 text-center align-middle">Meal Status</div>
                    {/* <div className="flex-none w-[8em]  p-4 text-center align-middle">Edit</div> */}
                </div>

                {/* Table body with TableRow and TableCell */}
                <Table className="relative">
                    <TableCaption>Students Masterlist</TableCaption>
                    <TableBody className="flex flex-col justify-around items-center">
                        {editedData.map((data, index) => (
                            <TableRow key={index} className="w-full flex flex-1">
                                <TableCell className="flex-1">
                                    {editRowIndex === index ? (
                                        <Input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => handleChange(e, index, 'name')}
                                            className="border px-2 py-1 rounded"
                                        />
                                    ) : (
                                        data.name
                                    )}
                                </TableCell>
                                <TableCell className="flex-1">
                                    {editRowIndex === index ? (
                                        <Input
                                            type="text"
                                            value={data.studentID}
                                            onChange={(e) => handleChange(e, index, 'studentID')}
                                            className="border px-2 py-1 rounded"
                                        />
                                    ) : (
                                        data.studentID
                                    )}
                                </TableCell>
                                <TableCell className="flex-1">
                                    {editRowIndex === index ? (
                                        <Input
                                            type="text"
                                            value={data.courseAndYear}
                                            onChange={(e) => handleChange(e, index, 'courseAndYear')}
                                            className="border px-2 py-1 rounded"
                                        />
                                    ) : (
                                        data.courseAndYear
                                    )}
                                </TableCell>
                                <TableCell className="flex justify-center items-center flex-1">
                                    <TooltipProvider className="w-full flex justify-center items-center flex-1">
                                        <Tooltip className="w-full flex justify-center items-center flex-1">
                                            <TooltipTrigger className="w-full flex justify-center items-center flex-1"><Badge status={data.mealStatus} /></TooltipTrigger>
                                            <TooltipContent>
                                                <p>{data.mealStatus.charAt(0).toUpperCase() + data.mealStatus.slice(1).toLowerCase()}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                </TableCell>
                                {/* <TableCell className="w-[8em] flex justify-center items-center flex-none ">
                                    {editRowIndex === index ? (
                                        <button onClick={handleSave} className="text-green-500">
                                            Save
                                        </button>
                                    ) : (
                                        <Pencil size={16} className="m-auto cursor-pointer" onClick={() => handleEditClick(index)} />
                                    )}
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* Button to add new row */}
                    {/* <div className="flex justify-end mr-4 mt-4">
                    <button
                        onClick={handleAddRow}
                        className="bg-[#1f3463] text-white px-4 py-2 rounded-lg"
                    >
                        Add Student
                    </button>
                </div> */}
                </Table>


            </div>
        );
    };

    return (
        <div className="tabs-wrapper w-full">
            <Tabs defaultValue="monday" className="w-full">
                <TabsList>
                    <TabsTrigger value="monday">Monday</TabsTrigger>
                    <TabsTrigger value="tuesday">Tuesday</TabsTrigger>
                    <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
                    <TabsTrigger value="thursday">Thursday</TabsTrigger>
                    <TabsTrigger value="friday">Friday</TabsTrigger>
                    <TabsTrigger value="saturday">Saturday</TabsTrigger>
                </TabsList>
                <TabsContent value="monday"><StudentList data={studentData.monday} day="monday" /></TabsContent>
                <TabsContent value="tuesday"><StudentList data={studentData.tuesday} day="tuesday" /></TabsContent>
                <TabsContent value="wednesday"><StudentList data={studentData.wednesday} day="wednesday" /></TabsContent>
                <TabsContent value="thursday"><StudentList data={studentData.thursday} day="thursday" /></TabsContent>
                <TabsContent value="friday"><StudentList data={studentData.friday} day="friday" /></TabsContent>
                <TabsContent value="saturday"><StudentList data={studentData.saturday} day="saturday" /></TabsContent>
            </Tabs>
        </div>
    );
}
