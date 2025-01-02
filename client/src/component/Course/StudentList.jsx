import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Input,
    Checkbox,
    ModalFooter,
    Button,
    useDisclosure,
    Link,
  } from "@nextui-org/react";
import { DeleteIcon, EditIcon, students, studentsColumns, statusOptions } from "./CourseHelperData";
import React, { useState } from "react";
import HomePage from "../Home/HomePage";
  
  const statusColorMap = {
    active: "success",
    cancelled: "danger",
    pending: "warning",
  };
  const headings = ["Student List"]
  export default function StudentList() {

    // const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(1);
      const [filterValue, setFilterValue] = React.useState("");
      const [statusFilter, setStatusFilter] = React.useState("all");
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
      const [sortDescriptor, setSortDescriptor] = React.useState({column: "age", direction: "ascending"});
      const [status, setStatus] = useState("");
      const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const onRowsPerPageChange = React.useCallback((e) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    }, []);

      const filteredItems = React.useMemo(() => {
        let filteredStudents = [...students];
    
        if (filterValue) {
          filteredStudents = filteredStudents.filter((student) =>
            student.name.toLowerCase().includes(filterValue.toLowerCase()),
          );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
          filteredStudents = filteredStudents.filter((student) =>
            Array.from(statusFilter).includes(student.status),
          );
        }
    
        return filteredStudents;
      }, [students, filterValue, statusFilter]);
     
      const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
    
        return filteredItems.slice(start, end);
      }, [page, filteredItems, rowsPerPage]);

        const sortedItems = React.useMemo(() => {
          return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;
      
            return sortDescriptor.direction === "descending" ? -cmp : cmp;
          });
        }, [sortDescriptor, items]);

        const handleCheckboxChange = (value) => {
          setStatus(value);
        };

    const renderCell = React.useCallback((student, columnKey) => {
      const cellValue = student[columnKey];
  
      switch (columnKey) {
        case "name":
          return (
            <User
              description={student.email}
              name={cellValue}
            >
              {student.email}
            </User>
          );
        case "role":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-sm capitalize text-default-400">{student.team}</p>
            </div>
          );
        case "status":
          return (
            <Chip className="capitalize" color={statusColorMap[student.status]} size="sm" variant="flat">
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
                <div className="relative flex items-center justify-center gap-8">
                    <Link content="Edit user" onPress={onOpen}>
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50" >
                        <EditIcon />
                    </span>
                    </Link>
    
                    <Tooltip color="danger" content="Delete user">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">
                        <DeleteIcon />
                    </span>
                    </Tooltip>
                </div>
          );
        default:
          return cellValue;
      }
    }, []);
  
    return (
      <>
      <HomePage headings={headings} />
      <div className="p-4 rounded-large shadow-small m-4 md:mr-14 md:ml-14 md:mt-14">
        <h2 className="text-center font-bold text-4xl text-slate-600">Student List Dashboard</h2>
        <div className="rounded-s-lg border-sky-700 outline-4">

        {/* Table Header */}
          <div className="flex flex-col gap-4 pt-4 pl-4 pr-4">
            <div className="flex justify-between items-center">
              <span className="text-default-400 text-small">Total {students.length} students</span>
              <label className="flex items-center text-default-400 text-small">
                Rows per page:
                <select
                  className="bg-transparent outline-none text-default-400 text-small"
                  onChange={onRowsPerPageChange}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </label>
            </div>
          </div>
        {/* Table */}
          <Table aria-label="Example table with custom cells">
            <TableHeader columns={studentsColumns}>
              {(column) => (
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={sortedItems}>
              {(item) => (
                <TableRow key={item.studentId}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Edit and delete student */}
            {/* Add/ Update/ Delete Course */}
      <div>
        {/* Add new Course */}
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Edit Student</ModalHeader>
                <ModalBody>
                  <Input isRequired errorMessage="Please enter valid name" label="Name" labelPlacement="outside" name="name" placeholder="Enter name" />
                  <Input isRequired errorMessage="Please enter valid email" label="Email" labelPlacement="outside" name="name" type="email" placeholder="Enter email" />
                  <Input isRequired errorMessage="Please enter valid phone number" label="Phone Number" labelPlacement="outside" name="number"  placeholder="Enter Phone number" />
                  <label className="text-sm">Status</label>
                  <div className="flex px-1 justify-between ml-2 mr-3">
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "Active"}  onChange={() => handleCheckboxChange("Active")} > Active </Checkbox>
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "pending"}  onChange={() => handleCheckboxChange("pending")}> Upcomming </Checkbox>
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "cancelled"}  onChange={() => handleCheckboxChange("cancelled")}> Inactive </Checkbox>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="submit" onPress={onClose}> Submit </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal> 
      </div>

      {/* Edit Course */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className=" fs-5" id="exampleModalLabel">Are you sure to delete student ?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger"  data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>

      </div>
      </>

    );
  }
  