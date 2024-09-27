import { MdHome } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
// import { BsExclamationSquareFill } from "react-icons/bs";
import { AiFillExclamationCircle } from "react-icons/ai";

{/* <MdHome /> */}
{/* <MdFactCheck /> */}
{/* <MdWatchLater /> */}
{/* <BsExclamationSquareFill /> */}


export const navMenus = [
  {label: "Home", to: '/', icon: <MdHome className="w-5 h-5"/> },
  {
    label: "Completed", 
    to: '/completed', 
    icon: <MdFactCheck className="w-5 h-5" />,
    idx: 1
  },
  {
    label: "Proceeding", 
    to: '/proceeding', 
    icon: <MdWatchLater className="w-5 h-5" />,
    idx: 2,
  },
  {
    label: "Important", 
    to: '/important', 
    icon: <AiFillExclamationCircle className="w-5 h-5"/>,
    idx: 3,
  },
];


