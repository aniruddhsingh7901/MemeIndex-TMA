import { FaTasks, FaUsers } from "react-icons/fa";
import { PiRankingBold } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { JSX} from "react";

interface NavItemProps {
  icon: JSX.Element;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavBar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-[#000623] border-t border-gray-700">
      <div className="max-w-md mx-auto w-full flex items-center">
        <div className="flex-1">
          <NavItem
            icon={<HiOutlineHome />}
            label="Home"
            active={activeTab === "Home"}
            onClick={() => setActiveTab("Home")}
          />
        </div>
        <div className="flex-1">
          <NavItem
            icon={<PiRankingBold />}
            label="Rank"
            active={activeTab === "Rank"}
            onClick={() => setActiveTab("Rank")}
          />
        </div>
        <div className="flex-1">
          <NavItem
            icon={<FaTasks />}
            label="Tasks"
            active={activeTab === "Tasks"}
            onClick={() => setActiveTab("Tasks")}
          />
        </div>
        <div className="flex-1">
          <NavItem
            icon={<FaUsers />}
            label="Community"
            active={activeTab === "Community"}
            onClick={() => setActiveTab("Community")}
          />
        </div>
        <div className="flex-1">
          <NavItem
            icon={<FaRegUserCircle />}
            label="Profile"
            active={activeTab === "Profile"}
            onClick={() => setActiveTab("Profile")}
          />
        </div>
      </div>
    </div>
  );
};


const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer transition-all ${
        active
          ? "bg-gradient-to-b from-[#010835] to-[#001374] p-2 border-b-4 border-b-[#D6710D] text-white"
          : "text-white p-2"
      }`}
      onClick={onClick}
    >
      <div className="text-xl">{icon}</div>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default NavBar;
