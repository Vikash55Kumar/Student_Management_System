export const columns = [
  {name: "COURSE ID", uid: "id", sortable: true},
  {name: "COURSE NAME", uid: "name"},
  {name: "CREATED DATE", uid: "createdDate"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

export const studentsColumns = [
  {name: "STUDENT ID", uid: "studentId"},
  {name: "NAME", uid: "name"},
  {name: "PHONE NO.", uid: "phoneNumber"},
  {name: "COURSE TYPE", uid: "courseType"},
  {name: "REGISTRATION DATE", uid: "registrationDate"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

export const statusOptions = [
  {name: "Active", uid: "Active"},
  {name: "Inactive", uid: "Inactive"},
  {name: "Upcoming", uid: "Upcoming"},
];

export const statusColorMap = {
  Active: "success",
  Inactive: "danger",
  Upcoming: "warning",
};

export const users = [
    {
      sNo: 1,
      id: "CI001",
      name: "Hindi",
      type: "Individual",
      createdDate: "2024-12-20",
      status: "Active",
    },
    {
      sNo: 2,
      id: "CI002",
      name: "English",
      type: "Group",
      createdDate: "2024-12-21",
      status: "Inactive",
    },
    {
      sNo: 3,
      id: "CI003",
      name: "Urdu",
      type: "Special",
      createdDate: "2024-12-22",
      status: "Upcoming",
    },
    {
      sNo: 4,
      id: "CI004",
      name: "Maths",
      type: "Individual",
      createdDate: "2024-12-23",
      status: "Active",
    },
    {
      sNo: 5,
      id: "CI005",
      name: "Physics",
      type: "Group",
      createdDate: "2024-12-24",
      status: "Inactive",
    },
    {
      sNo: 6,
      id: "CI006",
      name: "Urdu",
      type: "Special",
      createdDate: "2024-12-25",
      status: "Active",
    },
    {
      sNo: 7,
      id: "CI007",
      name: "Hindi",
      type: "Individual",
      createdDate: "2024-12-26",
      status: "Upcoming",
    },
    {
      sNo: 8,
      id: "CI008",
      name: "Urdu",
      type: "Group",
      createdDate: "2024-12-27",
      status: "Inactive",
    },
    {
      sNo: 9,
      id: "CI009",
      name: "Maths",
      type: "Special",
      createdDate: "2024-12-28",
      status: "Active",
    },
    {
      sNo: 10,
      id: "CI0010",
      name: "Hindi",
      type: "Individual",
      createdDate: "2024-12-29",
      status: "Upcoming",
    },
    {
      sNo: 11,
      id: "CI0011",
      name:"English",
      type: "Group",
      createdDate: "2024-12-30",
      status: "Inactive",
    },
    {
      sNo: 12,
      id: "CI0012",
      name: "Hindi",
      type: "Special",
      createdDate: "2024-12-31",
      status: "Active",
    },
    {
      sNo: 13,
      id: "CI0013",
      name: "Physics",
      type: "Individual",
      createdDate: "2025-01-01",
      status: "Upcoming",
    },
    {
      sNo: 14,
      id: "CI0014",
      name: "Maths",
      type: "Group",
      createdDate: "2025-01-02",
      status: "Active",
    },
    {
      sNo: 15,
      id: "CI0015",
      name: "Physics",
      type: "Special",
      createdDate: "2025-01-03",
      status: "Inactive",
    },
    {
      sNo: 16,
      id: "CI0016",
      name: "English",
      type: "Individual",
      createdDate: "2025-01-04",
      status: "Active",
    },
    {
      sNo: 17,
      id: "CI0017",
      name: "Maths",
      type: "Group",
      createdDate: "2025-01-05",
      status: "Upcoming",
    },
    {
      sNo: 18,
      id: "CI0018",
      name: "Hindi",
      type: "Special",
      createdDate: "2025-01-06",
      status: "Inactive",
    },
    {
      sNo: 19,
      id: "CI0019",
      name: "English",
      type: "Individual",
      createdDate: "2025-01-07",
      status: "Active",
    },
    {
      sNo: 20,
      id: "CI0020",
      name: "Maths",
      type: "Group",
      createdDate: "2025-01-08",
      status: "Upcoming",
    },
  ];

export const students = [
  {
    studentId: "CI001",
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    phoneNumber: "9876543210",
    courseType: "Group",
    registrationDate: "2024-12-01",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026025a",
  },
  {
    studentId: "CI002",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phoneNumber: "9876543211",
    courseType: "Individual",
    registrationDate: "2024-12-02",
    status: "pending",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026026b",
  },
  {
    studentId: "CI003",
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    phoneNumber: "9876543212",
    courseType: "Special",
    registrationDate: "2024-12-03",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026027c",
  },
  {
    studentId: "CI004",
    name: "Anita Das",
    email: "anita.das@example.com",
    phoneNumber: "9876543213",
    courseType: "Group",
    registrationDate: "2024-12-04",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026028d",
  },
  {
    studentId: "CI005",
    name: "Mohammed Khan",
    email: "mohammed.khan@example.com",
    phoneNumber: "9876543214",
    courseType: "Individual",
    registrationDate: "2024-12-05",
    status: "cancelled",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026029e",
  },
  {
    studentId: "CI006",
    name: "Riya Gupta",
    email: "riya.gupta@example.com",
    phoneNumber: "9876543215",
    courseType: "Special",
    registrationDate: "2024-12-06",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026030f",
  },
  {
    studentId: "CI007",
    name: "Vikram Mehta",
    email: "vikram.mehta@example.com",
    phoneNumber: "9876543216",
    courseType: "Group",
    registrationDate: "2024-12-07",
    status: "cancelled",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026031g",
  },
  {
    studentId: "CI008",
    name: "Sneha Roy",
    email: "sneha.roy@example.com",
    phoneNumber: "9876543217",
    courseType: "Individual",
    registrationDate: "2024-12-08",
    status: "pending",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026032h",
  },
  {
    studentId: "CI009",
    name: "Aditya Verma",
    email: "aditya.verma@example.com",
    phoneNumber: "9876543218",
    courseType: "Special",
    registrationDate: "2024-12-09",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026033i",
  },
  {
    studentId: "CI0010",
    name: "Meera Nair",
    email: "meera.nair@example.com",
    phoneNumber: "9876543219",
    courseType: "Group",
    registrationDate: "2024-12-10",
    status: "cancelled",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026034j",
  },
];

export const DeleteIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
  
export const EditIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};
  