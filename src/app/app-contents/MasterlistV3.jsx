import { Pencil, Trash} from 'lucide-react';
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

export default function MasterlistV3() {
    const Badge = ({ status }) => {
        return (
            <span className={`w-full h-4 flex items-center justify-center px-2 py-1 rounded-[10px] text-white 
                            ${status ? 'bg-[#60A577]' : 'bg-[#E3212E90]'}`} />
        );
    };


    const [studentData, setStudentData] = useState({
        firstYear: [
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
        secondYear: [
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
        thirdYear: [
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
        fourthYear: [
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
        ]
    });

    const [editRowIndex, setEditRowIndex] = useState(null);
    const [editedData, setEditedData] = useState(studentData.firstYear); // Default to Monday

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
                    <div className="flex-1 w-1/5 p-2 text-center align-middle">Actions</div>
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
                                        <button onClick={handleSave} className="text-green-500">
                                            Save
                                        </button>
                                    ) : (
                                        <div className='flex justify-center items-center gap-[0px]'>
                                            <Pencil size={18} onClick={() => handleEditClick(index)} className="w-full  cursor-pointer m-auto cursor-pointer" />
                                            <Trash size={18} onClick={() => handleDelete(index)} className="w-full  cursor-pointer text-red-500 ml-2" />
                                        </div>
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
            Content
            <Tabs defaultValue="firstYear" className="w-full">
                <TabsList>
                    <TabsTrigger value="firstYear" onClick={() => setEditedData(studentData.firstYear)}>1st Year</TabsTrigger>
                    <TabsTrigger value="secondYear" onClick={() => setEditedData(studentData.secondYear)}>2nd Year</TabsTrigger>
                    <TabsTrigger value="thirdYear" onClick={() => setEditedData(studentData.thirdYear)}>3rd Year</TabsTrigger>
                    <TabsTrigger value="fourthYear" onClick={() => setEditedData(studentData.fourthYear)}>4th Year</TabsTrigger>
                </TabsList>
                <TabsContent value="firstYear"><StudentList /></TabsContent>
                <TabsContent value="secondYear"><StudentList /></TabsContent>
                <TabsContent value="thirdYear"><StudentList /></TabsContent>
                <TabsContent value="fourthYear"><StudentList /></TabsContent>
            </Tabs>
        </div>
    );
}
