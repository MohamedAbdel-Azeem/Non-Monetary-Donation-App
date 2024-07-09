import {Link} from "react-router-dom";
import {Tab, Tabs} from "@nextui-org/react";
import {useState} from "react";
import IndividualRegistration from "./IndividualRegistration";
import RegisterAsOrganization from "./RegisterAsOrganization";



export function RegisterPage(){

    const [registerType, setRegisterType] = useState("");

    const handleRegisterTypeChange = (event) => {
        setRegisterType(event.target.textContent);
    };



    return (
        <div className="w-full min-h-screen bg-Midnight-Pine flex flex-row justify-center items-center">
            <div className="text-slate-200 w-3/4 h-full flex flex-col justify-center items-center py-4">
                <Tabs aria-label="Dynamic tabs" items={tabs} variant={"bordered"}
                      classNames={{
                          tabList: "gap-6 w-full p-0 bg-slate-200",
                          cursor: "w-full bg-Deep-Sea-Emerald",
                          tab: "max-w-fit px-3 h-12",
                          tabContent: "text-slate-950 group-data-[selected=true]:text-slate-50"
                      }}
                >
                    {(item) => (
                        <Tab key={item.id} title={item.title} className={"w-3/4 flex flex-col items-center justify-center"}>
                            <div className={"flex flex-col justify-center items-center w-2/3"}>
                                <h1 className="w-full text-5xl text-slate-200 font-logo text-center ">EغATHA</h1>
                                {
                                    item.id === 'individual-donor' ? <IndividualRegistration/> :
                                        <RegisterAsOrganization/>
                                }
                                <p className="text-slate-200">
                                    Already have an Account?
                                    <Link to="/login" className="ml-1 text-Tropical-Lagoon hover:underline">
                                        Login
                                    </Link>
                                </p>
                                <p className="text-slate-200">Return to <Link to="/"
                                                                              className="text-Tropical-Lagoon hover:underline">Homepage</Link>
                                </p>
                            </div>

                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
}


const tabs = [
    {
        id: 'individual-donor',
        title: 'Individual Donor',
    },
    {
        id : 'organization',
        title: 'Organization',
    }
]