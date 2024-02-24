/* eslint-disable react/prop-types */
export const students = [
    {
      name: "Student1",
      email: "student1@vvit.net",
      identityNumber: "ID001",
      
      gender: "male",
      branch: "CSE",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/male.png",
    },
    {
      name: "Student2",
      email: "student2@vvit.net",
      identityNumber: "ID002",
      
      gender: "female",
      branch: "ECE",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/female.png",
    },
    {
      name: "Student3",
      email: "student3@vvit.net",
      identityNumber: "ID003",
     
      gender: "male",
      branch: "IT",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/male.png",
    },
    {
      name: "Student4",
      email: "student4@vvit.net",
      identityNumber: "ID004",
     
      gender: "female",
      branch: "EEE",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/female.png",
    },
    {
      name: "Student5",
      email: "student5@vvit.net",
      identityNumber: "ID005",
     
      gender: "male",
      branch: "CIVIL",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/male.png",
    },
    {
      name: "Student6",
      email: "student6@vvit.net",
      identityNumber: "ID006",
   
      gender: "female",
      branch: "MECH",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/female.png",
    },
    {
      name: "Student7",
      email: "student7@vvit.net",
      identityNumber: "ID007",
    
      gender: "male",
      branch: "CSM",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/male.png",
    },
    {
      name: "Student8",
      email: "student8@vvit.net",
      identityNumber: "ID008",
    
      gender: "female",
      branch: "AID",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/female.png",
    },
    {
      name: "Student9",
      email: "student9@vvit.net",
      identityNumber: "ID009",

      gender: "male",
      branch: "CSO",
      role: "student",
      isActive: true,
      avatar: "https://learnspace.s3.ap-south-1.amazonaws.com/male.png",
    },
  ]

export const studentColumns = [
    {
        Header: "Avatar",
        accessor: "avatar",
        Cell: ({ value }) => <img src={value} alt="avatar" />,
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Identity Number",
      accessor: "identityNumber",
    },
    {
        Header: "Gender",
        accessor: "gender",
    },
    {
        Header: "Branch",
        accessor: "branch",
    },
    {
        Header: "Role",
        accessor: "role",
    },
    {
        Header: "Active",
        accessor: "isActive",
        Cell: ({ value }) => (value ? "Yes" : "No"),
    },
]
  