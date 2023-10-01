import { AfourImage, gizImage, techMahindraImg } from "../Constatnt/constant";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
export const experienceData = [
  {
    id: 1,
    companyName: "Afour Technologies",
    imgUrl: AfourImage,
    present: true,
    position: [
      {
        city: "Pune,Maharashtra",
        type: "Full Time",
        designation: "Software Developer Engineer",
        duration: "2 years",
        active: true,
      },
      {
        city: "Pune,Maharashtra",
        type: "Full Time",
        designation: "Trainee Software  Engineer",
        duration: "6 month",
        active: false,
      },
      {
        city: "Pune,Maharashtra",
        type: "Internship",
        designation: "Software Developer Intern",
        duration: "6 month",
        active: false,
      },
    ],
  },
  {
    id: 2,
    companyName: "GIZ India",
    imgUrl: gizImage,
    present: false,
    position: [
      {
        city: "Aurangabad,Maharashtra",
        type: "Internship",
        designation: "Software Developer Engineer",
        duration: "6 month",
        active: false,
      },
    ],
  },
  {
    id: 3,
    companyName: "Tech Mahindra",
    imgUrl: techMahindraImg,
    present: false,
    position: [
      {
        city: "Remote",
        type: "Internship",
        designation: "Software Developer Engineer",
        duration: "6 month",
        active: false,
      },
    ],
  },
];

export const educationData = [
  {
    id: 1,
    companyName: "MGM`s Jawahrlal Nehru Engineering Collage",
    icon: <AccountBalanceIcon />,
    present: false,
    position: [
      {
        city: "Aurangabad,Maharashtra",
        type: "Btech",
        designation: "Computer Science and Engineering",
        duration: "[2018-2022] - 8.91 CGPA",
        active: false,
      },
    ],
  },
  {
    id: 2,
    companyName: "Deulgaon Raja Junior Science and Collage",
    icon: <AccountBalanceIcon />,
    present: false,
    position: [
      {
        city: "DeulgaonRaja,Maharashtra",
        type: "HSC",
        designation: "Science",
        duration: "[2016-2018] - 72.20%",
        active: false,
      },
    ],
  },
  {
    id: 3,
    companyName: "Shri Jagdamba High School",
    icon: <AccountBalanceIcon />,
    present: false,
    position: [
      {
        city: "Mahur,Maharashtra",
        type: "SSC",
        designation: "Science",
        duration: "[2015-2016] - 88.20%",
        active: false,
      },
    ],
  },
];
