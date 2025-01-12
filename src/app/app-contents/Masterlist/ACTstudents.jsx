import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableRow } from "@/components/ui/table";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Pencil, Trash } from 'lucide-react';

export default function MasterlistV3() {
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
        ]
    });

    const StudentList = ({ yearData, year }) => {


        const [editRowIndex, setEditRowIndex] = useState(null);
        const [tempStudentData, setTempStudentData] = useState({ ...studentData });

        const handleEditClick = (year, index) => {
            setEditRowIndex({ year, index });
            setTempStudentData({
                ...tempStudentData,
                [year]: [...studentData[year]] 
            });
        };

        const handleChange = (e, year, index, field) => {
            const updatedData = { ...tempStudentData };
            updatedData[year][index][field] = e.target.value;
            setTempStudentData(updatedData);
        };

        const handleSave = () => {
            setStudentData(tempStudentData); 
            setEditRowIndex(null); 
        };

        const handleDelete = (year, index) => {
            const updatedData = { ...studentData };
            updatedData[year].splice(index, 1);
            setStudentData(updatedData);
        };

        const handleAddRow = (year) => {
            const newRow = { name: "New Student", studentID: "0000000000000" };
            const updatedData = { ...studentData };
            updatedData[year].push(newRow);
            setStudentData(updatedData);
        };
        return (<>
            <div className="overflow-y-auto max-h-[60vh]">
                {/* Custom sticky header outside of the Table */}
                <div className="sticky top-0 z-10 bg-[#1f3463] text-white flex items-center h-12 text-center align-middle font-medium ">
                    <div className="flex-1   p-4 text-center align-middle">Name</div>
                    <div className="flex-1   p-4 text-center align-middle">ID Number</div>
                    <div className="flex-none w-[8em]   p-4 text-center align-middle">Actions</div>
                </div>
                <Table>
                    <TableCaption>Masterlist of Students</TableCaption>
                    <TableBody className="flex flex-col justify-around items-center">
                        {yearData.map((row, index) => (
                            <TableRow key={index} className="w-full flex flex-1">
                                <TableCell className="flex-1  ">
                                    {editRowIndex?.year === year && editRowIndex?.index === index ? (
                                        <input
                                            type="text"
                                            value={tempStudentData[year][index].name}
                                            onChange={(e) => handleChange(e, year, index, 'name')}
                                            className="border px-2 py-1 rounded"
                                        />
                                    ) : (
                                        row.name
                                    )}
                                </TableCell>
                                <TableCell className="flex-1  ">
                                    {editRowIndex?.year === year && editRowIndex?.index === index ? (
                                        <input
                                            type="text"
                                            value={tempStudentData[year][index].studentID}
                                            onChange={(e) => handleChange(e, year, index, 'studentID')}
                                            className="border px-2 py-1 rounded"
                                        />
                                    ) : (
                                        row.studentID
                                    )}
                                </TableCell>

                                <TableCell className=" w-[8em] flex justify-center items-center flex-none ">
                                    {editRowIndex?.year === year && editRowIndex?.index === index ? (
                                        <button onClick={handleSave} className="text-green-500">
                                            Save
                                        </button>
                                    ) : (
                                        <div className="flex justify-center gap-5">
                                            <Pencil size={18} onClick={() => handleEditClick(year, index)} className="cursor-pointer" />
                                            <Trash size={18} onClick={() => handleDelete(year, index)} className="text-red-500 cursor-pointer" />
                                        </div>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div key={year} className="flex justify-end mr-4 mt-4">
                    <button onClick={() => handleAddRow(year)} className="bg-[#1f3463] text-white px-4 py-2 rounded-lg">
                        Add Student
                    </button>
                </div>
            </div >
        </>);
    };

    return (
        < div className="tabs-wrapper w-full" >
            <Tabs className="w-full" defaultValue="firstYear">
                <TabsList >
                    <TabsTrigger value="firstYear">1st Year</TabsTrigger>
                    <TabsTrigger value="secondYear">2nd Year</TabsTrigger>

                </TabsList>
                <TabsContent value="firstYear">
                    <StudentList yearData={studentData['firstYear']} year={'firstYear'} />
                </TabsContent>
                <TabsContent value="secondYear">
                    <StudentList yearData={studentData['secondYear']} year={'secondYear'} />
                </TabsContent>

            </Tabs>
        </ div>
    );
}
