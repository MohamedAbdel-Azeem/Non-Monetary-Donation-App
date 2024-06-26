import PropTypes from "prop-types";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiDownload, mdiMenuUpOutline} from "@mdi/js";
import MapStatic from "./Mapstatic.jsx";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";


export default function OrganizationInfo(props) {
   // const organizationId=organizations[props.organization.organizationId-1];
    const [isExpanded,setExpanded] = useState(false);
    const handleExpand = () => {
        setExpanded((prevState) => !prevState);
    }
    const handleDelete = () => {
        handleExpand();
        withReactContent(Swal).fire({
            title: "Success",
            text: "Organization Deleted Successfully ",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}
    const handleDownload = () => {
        withReactContent(Swal).fire({
            title: "Success",
            text: "Organization Files downloaded successfully",
            icon: "success",
            confirmButtonColor: "#00B9AE"

        });}
   return (
       <div
           className={` bg-white flex flex-col justify-around items-start shadow-sm px-4 py-2 w-full rounded-md border-2 border-grey`}>
           <div className={"flex flex-row justify-between w-full text-black"}>
               <div className="flex w-full flex-row gap-4 ">
                   <img src={props.organization.imageUrl} alt={props.organization.name}
                        className="w-1/6 h-full object-cover"/>
                   <div className="flex flex-col w-1/2 font-medium items-start text-1xl">
                       <div><span className="font-bold">Organization Name: </span>{props.organization.name}</div>
                       <div><span className="font-bold"> Organization type: </span>{props.organization.category}</div>
                       <div><span className="font-bold"> Organization Location: </span>{props.organization.address}</div>
                       <div> <span  className="font-bold">Organization Email: </span>{props.organization.contactInfo.email}</div>
                       <div> <span  className="font-bold">Organization Contact Number: </span>{props.organization.contactInfo.phone}</div>
                       <div className="text-wrap"><span
                           className="font-bold">Description: </span> {props.organization.description}
                       </div>
                   </div>
                   <div className="font-medium text-1xl">
                       <div><span
                           className="font-bold">Representative Name: </span> {props.organization.firstName} {props.organization.lastName}
                       </div>
                       <div><span className="font-bold">Representative Email: </span> {props.organization.email}</div>
                       <div><span
                           className="font-bold">Representative phone number: </span> {props.organization.contactNumber}
                       </div>
                       <div><span
                           className="font-bold">Representative Location: </span> {props.organization.address} {props.organization.representativeArea} {props.organization.representativeGovernorate}
                       </div>

                   </div>
               </div>

               {<button className=" flex flex-col justify-start" onClick={handleExpand}>
                   <Icon path={mdiMenuUpOutline} size={1} rotate={isExpanded ? 0 : 180}
                         className={"transition-transform duration-300 text-black"}/>
               </button>}
           </div>
           {isExpanded && <div className="flex flex-col ml-72 gap-4 justify-center items-center">
               <div className="font-bold">Organization Location</div>
               <MapStatic location={props.organization.location}/>
               <button
                   className=" flex flex-row  mb-4 bg-Mystic-Teal text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
               onClick={handleDownload}
               > Download Organization legal Files<Icon path={mdiDownload} size={1}
                                                        className={"transition-transform duration-300 text-black"}/>
               </button>
               <div className="flex flex-row w-full justify-center items-center mt-4 gap-4 ">
                   <button
                       className="bg-red-500 text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-red-700 hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
                   onClick={handleDelete}
                   >
                       Delete Organization
                   </button>
               </div>
           </div>}


       </div>
   );


}
OrganizationInfo.propTypes = {
    organization: PropTypes.object,
}