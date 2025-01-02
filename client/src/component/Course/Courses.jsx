import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Chip,
  Tooltip,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Checkbox,
  ModalFooter,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {ChevronDownIcon, PlusIcon, SearchIcon } from "lucide-react";
import {users, EditIcon, DeleteIcon, columns, statusOptions, statusColorMap} from "./CourseHelperData"
import HomePage from "../Home/HomePage";

const INITIAL_VISIBLE_COLUMNS = ["id", "name", "type", "createdDate", "status", "actions"];

export default function Courses() {
  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({column: "age", direction: "ascending"});
  const [page, setPage] = React.useState(1);
  const [status, setStatus] = useState("");
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (filterValue) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);
 
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

  // set no of page in row
  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  // search by Course name
  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  // add new course checkbox 
  const handleCheckboxChange = (value) => {
    setStatus(value);
  };

  // Footer of Course List
  const renderCell = React.useCallback((user, columnKey) => {
    switch (columnKey) {

      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {user[columnKey]}
          </Chip>
        );
        case "actions":
          return (
            <div className="relative flex items-center justify-center gap-8">
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">
                  <EditIcon />
                </span>
              </Tooltip>

              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return user[columnKey];
      }
    }, []);

  const headings=["Course List Details"]

// Course list return
  return (
    <>
      <HomePage headings={headings} />

      <div className="p-4 rounded-large shadow-small m-4 md:mr-14 md:ml-14 md:mt-14">
      <h2 className="text-center font-bold text-4xl text-slate-600">Course List Dashboard</h2>
      <div className="rounded-s-lg border-sky-700 outline-4 ">

        {/* Table Header */}
        <div className="flex flex-col gap-4 pt-4 pl-4 pr-4">
          <div className="flex justify-between gap-3 items-end">
            <Input
              isClearable
              className="w-full sm:max-w-[44%]"
              placeholder="Search by course name..."
              startContent={<SearchIcon />}
              value={filterValue}
              onValueChange={onSearchChange}
            />

            <div className="flex gap-3">
              <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                    Status
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={statusFilter}
                  selectionMode="multiple"
                  onSelectionChange={setStatusFilter}
                >
                  {statusOptions.map((status) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {(status.name)}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              <Button color="primary" className="text-sm p-1 md:text-base md:p-2 " onPress={onOpen} endContent={<PlusIcon />}>
                Add New Course
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-default-400 text-small">Total {users.length} users</span>
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

        {/* Table List */}
        <Table topContentPlacement="outside">
          <TableHeader columns={headerColumns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                allowsSorting={column.sortable}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No users found"} items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

    {/* Add/ Update/ Delete Course */}
      <div>
        {/* Add new Course */}
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Add New Course</ModalHeader>
                <ModalBody>
                  <Input isRequired errorMessage="Please enter course name" label="Course Name" labelPlacement="outside" name="name" placeholder="Enter course name" />
                  <Input isRequired errorMessage="Please enter valid course type" label="Course Type" labelPlacement="outside" name="name" placeholder="Enter course type" />
                  <Input isRequired errorMessage="Please enter valid course details" label="Course details" labelPlacement="outside" name="name" placeholder="Enter course description" />
                  <label className="text-sm">Status*</label>
                  <div className="flex px-1 justify-between ml-2 mr-3">
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "Active"}  onChange={() => handleCheckboxChange("Active")} > Active </Checkbox>
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "Upcoming"}  onChange={() => handleCheckboxChange("Upcoming")}> Upcomming </Checkbox>
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "Inactive"}  onChange={() => handleCheckboxChange("Inactive")}> Inactive </Checkbox>
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
              <h1 className="font-bold fs-5" id="exampleModalLabel">Edit Course</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                <Input isRequired errorMessage="Please enter course name" label="Course Name" labelPlacement="outside" name="name" placeholder="Enter course name" />
                  {/* <textarea className="form-control" id="message-text"></textarea> */}
                </div>
             
                <label className="text-sm">Status*</label>
                <div className="flex px-1 justify-between ml-2 mr-3">
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "Active"}  onChange={() => handleCheckboxChange("Active")} > Active </Checkbox>
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "Upcoming"}  onChange={() => handleCheckboxChange("Upcoming")}> Upcomming </Checkbox>
                    <Checkbox classNames={{label: "text-small" }}  isSelected={status === "Inactive"}  onChange={() => handleCheckboxChange("Inactive")}> Inactive </Checkbox>
                  </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>

  );
}
