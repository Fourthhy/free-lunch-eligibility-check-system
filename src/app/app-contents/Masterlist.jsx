import { Pencil } from 'lucide-react';
import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableRow,
} from "@/components/ui/table";

export default function Masterlist() {
    const Badge = ({ status }) => {
        return (
            <span className={`w-full h-4 flex items-center justify-center px-2 py-1 rounded-[10px] text-white 
                            ${status ? 'bg-[#60A577]' : 'bg-[#E3212E90]'}`} />
        );
    };

    const mockData = [
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
    ];

    const [editRowIndex, setEditRowIndex] = useState(null);
    const [editedData, setEditedData] = useState(mockData);

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

    return (
        <div className="overflow-y-auto max-h-[400px]">
            {/* Custom sticky header outside of the Table */}
            <div className="sticky top-0 z-10 bg-[#1f3463] text-white flex">
                <div className="flex-1 w-1/5 p-2 text-center">Name</div>
                <div className="flex-1 w-1/5 p-2 text-center">ID Number</div>
                <div className="flex-1 w-1/5 p-2 text-center">Course & Year</div>
                <div className="flex-1 w-1/5 p-2 text-center">Meal Status</div>
                <div className="flex-1 w-1/5 p-2 text-center">Edit</div>
            </div>

            {/* Table body with TableRow and TableCell */}
            <Table className="relative">
                <TableCaption>Students Masterlist</TableCaption>
                <TableBody>
                    {editedData.map((data, index) => (
                        <TableRow key={index}>
                            <TableCell className="w-1/5">
                                {editRowIndex === index ? (
                                    <input
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
                                    <input
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
                                    <input
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
            <div className="flex justify-center mt-4">
                <button
                    onClick={handleAddRow}
                    className="bg-[#1f3463] text-white px-4 py-2 rounded-lg"
                >
                    Add Student
                </button>
            </div>
        </div>
    );
}
