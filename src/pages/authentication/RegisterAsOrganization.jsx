import { StyledInput } from "../../components/styled-inputs/StyledInput.jsx";
import {useEffect, useState} from "react";
import StyledSelectInput from "../../components/styled-inputs/StyledSelectInput.jsx";
import {StyledFileInput} from "../../components/styled-inputs/StyledFileInput.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addOrgUser} from "../../redux/OrganizationSlice.js";
import CustomSnackBar from "../../components/CustomSnackBar.jsx";

export default function RegisterAsOrganization(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [RegistrationDone,setRegistrationDone] = useState(false);
    const [SnackbarFinished,setSnackBarFinished] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [organizationType, setOrganizationType] = useState("");
    const [organizationAddress, setOrganizationAddress] = useState("");
    const [area, setArea] = useState("");
    const [governorate, setGovernorate] = useState("");

    function handleGender(e){
        setGender(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const OrganizationUser = {
            firstName: firstName,
            lastName: lastName,
            gender : gender,
            email : email,
            password : password,
            contactNumber : contactNumber,
            organizationName : organizationName,
            organizationType : organizationType,
            organizationAddress : organizationAddress,
            area : area,
            governorate : governorate
        }
        dispatch(addOrgUser({user: OrganizationUser}));
        setRegistrationDone(true);
    }

    useEffect(() => {
        if (SnackbarFinished === true){
            navigate('/login');
        }
    }, [SnackbarFinished, navigate]);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center overflow-x-hidden pt-6 pb-2">
            <form className="w-full flex flex-col items-center justify-center gap-4 py-6 px-4" onSubmit={handleSubmit}>
                <div className="w-full px-6">
                    <div className={"flex flex-row gap-6"}>
                        <StyledInput type="text" text="First Name" id="firstName" value={firstName}
                                     onChange={setFirstName}/>
                        <StyledInput type="text" text="Last Name" id="lastName" value={lastName}
                                     onChange={setLastName}/>
                    </div>
                    <StyledInput type="text" text="Email" id="email" value={email} onChange={setEmail}/>
                    <StyledInput type="password" text="Password" id="password" value={password} onChange={setPassword}/>
                    <StyledInput type="text" text="Contact Number" id="contactNumber" value={contactNumber}
                                 onChange={setContactNumber}/>
                    <div className={"flex flex-row gap-6"}>
                        <StyledInput type="text" text="Organization Name" id="organizationName" value={organizationName}
                                     onChange={setOrganizationName}/>
                        <StyledInput type="text" text="Organization Type" id="organizationType" value={organizationType}
                                     onChange={setOrganizationType}/>
                    </div>
                    <StyledInput type="text" text="Organization Address" id="organizationAddress"
                                 value={organizationAddress} onChange={setOrganizationAddress}/>
                    <div className={"flex flex-row gap-6"}>
                        <StyledInput type="text" text="Area" id="area" value={area} onChange={setArea}/>
                        <StyledInput type="text" text="Governorate" id="governorate" value={governorate}
                                     onChange={setGovernorate}/>
                    </div>
                    <div className={"mt-4 flex items-center justify-center"}>
                        <StyledSelectInput title={"Gender"} options={["Male", "Female"]} onChange={handleGender}/>
                    </div>
                    <div className={"w-full mt-3 flex flex-col items-center justify-center"}>
                        <h4>Enter Legal Documents</h4>
                        <StyledFileInput />
                    </div>
                </div>
                <button type="submit"
                        className="w-full bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear">Register
                </button>
            </form>
            {RegistrationDone && <CustomSnackBar message={"Registration Successful"} setIsFinished={setSnackBarFinished}  />}
        </div>
    );
}
