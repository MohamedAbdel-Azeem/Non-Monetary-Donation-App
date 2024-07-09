import { StyledInput } from "../../components/styled-inputs/StyledInput.jsx";
import RefugeeShip from "../../assets/images/refugee-ship.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  const indUsers = useSelector((state) => state.IndividualUser.IndividualUsers);
  const orgUsers = useSelector(
    (state) => state.OrganizationUser.OrganizationUsers
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email === "admin" && password === "2004") {
      navigate("/dashboard/admin/0");
      return;
    }
    const individual = indUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (individual) {
      navigate(`/dashboard/donor/${individual.userId}`);
      return;
    }

    const organization = orgUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (organization) {
      navigate(`/dashboard/organization/${organization.userId}`);
      return;
    }

    alert("Invalid email or password");
  }

  return (
    <div className="w-screen h-screen bg-Midnight-Pine flex flex-row justify-between items-center">
      <div className="w-1/2 h-full">
        <img
          src={RefugeeShip}
          alt="Refugee Ship"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <form
          className="w-1/3 flex flex-col items-center gap-6 py-6 px-4"
          onSubmit={handleLogin}
        >
          <h1 className="w-full text-5xl text-slate-200 font-logo">EغATHA</h1>
          <div>
            <StyledInput
              type="text"
              text="Email"
              id="email"
              value={email}
              onChange={setEmail}
            />
            <StyledInput
              type="password"
              text="Password"
              id="password"
              value={password}
              onChange={setPassword}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-Tropical-Lagoon text-Midnight-Pine font-bold rounded-md px-4 py-2 hover:shadow-lg  hover:bg-Vibrant-Turquoise hover:text-Midnight-Pine transition-colors duration-300 ease-linear"
          >
            Login
          </button>
        </form>
        <p className="text-slate-200">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-Tropical-Lagoon hover:underline">
            Register
          </Link>
        </p>
        <p className="text-slate-200">
          Return to{" "}
          <Link to="/" className="text-Tropical-Lagoon hover:underline">
            Homepage
          </Link>
        </p>
        <div className="mt-5 flex flex-col gap-1 items-center justify-center">
        <p className="text-slate-200">
          Log in as a{" "}
          <button className="text-Tropical-Lagoon hover:underline" onClick={()=>navigate(`/dashboard/donor/${indUsers[0].userId}`)}>
            User (demo)
          </button>
        </p>
        <p className="text-slate-200">
          Log in as an {" "}
          <button className="text-Tropical-Lagoon hover:underline" onClick={()=>navigate(`/dashboard/organization/${orgUsers[0].userId}`)}>
            organization (demo)
          </button>
        </p>
        <p className="text-slate-200">
          Log in as an{" "}
          <button className="text-Tropical-Lagoon hover:underline" onClick={()=>navigate('/dashboard/admin/0')}>
            admin (demo)
          </button>
        </p>
        </div>
        
      </div>
    </div>
  );
}
