import { Pencil } from 'lucide-react';
import { useState } from 'react';
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
        return (
            <span className={`w-[75%] ml-[11%] h-4 flex items-center justify-center px-2 py-1 rounded-[10px] text-white 
                            ${status ? 'bg-[#60A577]' : 'bg-[#E3212E90]'}`} />
        );
    };

    // Store data for each day
    const [studentData, setStudentData] = useState({
        monday: [
            { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Isabella Young", studentID: "6083822831404", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Olivia Lewis", studentID: "1785924000172", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Chris Johnson", studentID: "6478382181262", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Jane Smith", studentID: "7374456913236", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Emani Poole", studentID: "1717265896386", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Isabella Young", studentID: "4770702994548", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Olivia Lewis", studentID: "9205144578984", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "David Lee", studentID: "5186966412204", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: false },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: true },
        ],
        tuesday: [
            { name: "Sophia Green", studentID: "8472563925812", courseAndYear: "BSIS-3", mealStatus: true },
            { name: "Mason Garcia", studentID: "1009385624798", courseAndYear: "BSIS-2", mealStatus: false },
            { name: "James White", studentID: "2546316892537", courseAndYear: "BSIT-1", mealStatus: true },
            { name: "Emily Martinez", studentID: "8496573124985", courseAndYear: "BSIT-4", mealStatus: false },
            { name: "Lily Brown", studentID: "9207645123657", courseAndYear: "BSIS-3", mealStatus: true },
            { name: "Jack Taylor", studentID: "4895712564789", courseAndYear: "BSIS-2", mealStatus: false },
            { name: "Lucas Miller", studentID: "7564398271256", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Zoe Anderson", studentID: "3082645784093", courseAndYear: "BSIT-1", mealStatus: false },
            { name: "Oliver King", studentID: "3987465409510", courseAndYear: "BSIT-3", mealStatus: true },
            { name: "Grace Nelson", studentID: "5739482017435", courseAndYear: "BSIT-2", mealStatus: false },
            { name: "Samuel Harris", studentID: "1962835274920", courseAndYear: "BSIT-4", mealStatus: true },
            { name: "Chloe Scott", studentID: "8127653094875", courseAndYear: "BSIS-3", mealStatus: false },
        ],
        wednesday: [
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: true },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: false },
            { name: "Sophia Green", studentID: "8472563925812", courseAndYear: "BSIS-3", mealStatus: true },
            { name: "Mason Garcia", studentID: "1009385624798", courseAndYear: "BSIS-2", mealStatus: false },
            { name: "Emily Martinez", studentID: "8496573124985", courseAndYear: "BSIT-4", mealStatus: false },
            { name: "James White", studentID: "2546316892537", courseAndYear: "BSIT-1", mealStatus: true },
            { name: "Jack Taylor", studentID: "4895712564789", courseAndYear: "BSIS-2", mealStatus: false },
            { name: "Grace Nelson", studentID: "5739482017435", courseAndYear: "BSIT-2", mealStatus: false },
            { name: "Samuel Harris", studentID: "1962835274920", courseAndYear: "BSIT-4", mealStatus: true },
            { name: "Zoe Anderson", studentID: "3082645784093", courseAndYear: "BSIT-1", mealStatus: false },
            { name: "Lucas Miller", studentID: "7564398271256", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Chloe Scott", studentID: "8127653094875", courseAndYear: "BSIS-3", mealStatus: false },
        ],
        thursday: [
            { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Charlotte Hall", studentID: "3006254805019", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Isabella Young", studentID: "6083822831404", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Olivia Lewis", studentID: "1785924000172", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Chris Johnson", studentID: "6478382181262", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Jane Smith", studentID: "7374456913236", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Emani Poole", studentID: "1717265896386", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Isabella Young", studentID: "4770702994548", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Olivia Lewis", studentID: "9205144578984", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "David Lee", studentID: "5186966412204", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Ava Walker", studentID: "5551234567890", courseAndYear: "BSIT-3", mealStatus: false },
            { name: "Liam Clark", studentID: "2345678901234", courseAndYear: "BSIT-2", mealStatus: true },
        ],
        friday: [
            { name: "Sophia Green", studentID: "8472563925812", courseAndYear: "BSIS-3", mealStatus: true },
            { name: "Mason Garcia", studentID: "1009385624798", courseAndYear: "BSIS-2", mealStatus: false },
            { name: "James White", studentID: "2546316892537", courseAndYear: "BSIT-1", mealStatus: true },
            { name: "Emily Martinez", studentID: "8496573124985", courseAndYear: "BSIT-4", mealStatus: false },
            { name: "Lily Brown", studentID: "9207645123657", courseAndYear: "BSIS-3", mealStatus: true },
            { name: "Jack Taylor", studentID: "4895712564789", courseAndYear: "BSIS-2", mealStatus: false },
            { name: "Lucas Miller", studentID: "7564398271256", courseAndYear: "BSIS-4", mealStatus: true },
            { name: "Zoe Anderson", studentID: "3082645784093", courseAndYear: "BSIT-1", mealStatus: false },
            { name: "Oliver King", studentID: "3987465409510", courseAndYear: "BSIT-3", mealStatus: true },
            { name: "Grace Nelson", studentID: "5739482017435", courseAndYear: "BSIT-2", mealStatus: false },
            { name: "Samuel Harris", studentID: "1962835274920", courseAndYear: "BSIT-4", mealStatus: true },
            { name: "Chloe Scott", studentID: "8127653094875", courseAndYear: "BSIS-3", mealStatus: false },
        ],
        saturday: [
            { name: "Zoe Anderson", studentID: "3082645784093", courseAndYear: "BSIT-1", mealStatus: false },
            { name: "David Lee", studentID: "3638116184074", courseAndYear: "BSIS-4", mealStatus: false },
            { name: "Emily Martinez", studentID: "8496573124985", courseAndYear: "BSIT-4", mealStatus: false },
        ]
    });

    const [editRowIndex, setEditRowIndex] = useState(null);
    const [editedData, setEditedData] = useState(studentData.monday); // Default to Monday

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
    };

    const handleAddRow = () => {
        const newRow = {
            name: '',
            studentID: '',
            courseAndYear: '',
            mealStatus: false,
        };
        setEditedData([...editedData, newRow]);
    };

    const StudentList = () => {
        return (
            <div className="overflow-y-auto max-h-[400px]">
                {/* Custom sticky header outside of the Table */}
                <div className="sticky top-0 z-10 bg-[#1f3463] text-white flex h-12 px-4 text-center align-middle font-medium ">
                    <div className="flex-1 w-1/5 p-2 text-center align-middle">Name</div>
                    <div className="flex-1 w-1/5 p-2 text-center align-middle">ID Number</div>
                    <div className="flex-1 w-1/5 p-2 text-center align-middle">Course & Year</div>
                    <div className="flex-1 w-1/5 p-2 text-center align-middle">Meal Status</div>
                    <div className="flex-1 w-1/5 p-2 text-center align-middle">Edit</div>
                </div>

                {/* Table body with TableRow and TableCell */}
                <Table className="relative">
                    <TableCaption>Students Masterlist</TableCaption>
                    <TableBody>
                        {editedData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell className="w-1/5">
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
                                <TableCell className="w-1/5">
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
                                <TableCell className="w-1/5">
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
                                <TableCell className="w-1/5">
                                    {editRowIndex === index ? (
                                        <select
                                            value={data.mealStatus}
                                            onChange={(e) => handleChange(e, index, 'mealStatus')}
                                            className="border px-2 py-1 rounded"
                                        >
                                            <option value={true}>Eligible</option>
                                            <option value={false}>Not Eligible</option>
                                        </select>
                                    ) : (
                                        <Badge status={data.mealStatus} />
                                    )}
                                </TableCell>
                                <TableCell className="w-1/5">
                                    {editRowIndex === index ? (
                                        <button onClick={handleSave} className="text-green-500">
                                            Save
                                        </button>
                                    ) : (
                                        <Pencil size={16} className="m-auto cursor-pointer" onClick={() => handleEditClick(index)} />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Button to add new row */}
                <div className="flex justify-end mr-4 mt-4">
                    <button
                        onClick={handleAddRow}
                        className="bg-[#1f3463] text-white px-4 py-2 rounded-lg"
                    >
                        Add Student
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="tabs-wrapper w-full">
            <Tabs defaultValue="monday" className="w-full">
                <TabsList>
                    <TabsTrigger value="monday" onClick={() => setEditedData(studentData.monday)}>Monday</TabsTrigger>
                    <TabsTrigger value="tuesday" onClick={() => setEditedData(studentData.tuesday)}>Tuesday</TabsTrigger>
                    <TabsTrigger value="wednesday" onClick={() => setEditedData(studentData.wednesday)}>Wednesday</TabsTrigger>
                    <TabsTrigger value="thursday" onClick={() => setEditedData(studentData.thursday)}>Thursday</TabsTrigger>
                    <TabsTrigger value="friday" onClick={() => setEditedData(studentData.friday)}>Friday</TabsTrigger>
                    <TabsTrigger value="saturday" onClick={() => setEditedData(studentData.saturday)}>Saturday</TabsTrigger>
                </TabsList>
                <TabsContent value="monday"><StudentList /></TabsContent>
                <TabsContent value="tuesday"><StudentList /></TabsContent>
                <TabsContent value="wednesday"><StudentList /></TabsContent>
                <TabsContent value="thursday"><StudentList /></TabsContent>
                <TabsContent value="friday"><StudentList /></TabsContent>
                <TabsContent value="saturday"><StudentList /></TabsContent>
            </Tabs>
        </div>
    );
}
