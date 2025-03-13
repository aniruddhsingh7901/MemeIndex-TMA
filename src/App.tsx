import { useState } from "react"
import Community from "./Components/Community"
import Header from "./Components/Header"
import NavBar from "./Components/Navbar"
import Rank from "./Components/Rank"
import Tasks from "./Components/Tasks"
import Profile from "./Components/Profile"
import "./index.css"
function App() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  return (
    <>
    <div className="bg-blue-500">
      {/* <Community/> */}
      <Header/>
      {activeTab === "Rank" && <Rank />}
      {activeTab === "Community" && <Community />}
      {activeTab === "Tasks" && <Tasks />}
      {activeTab === "Profile" && <Profile />}
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
    </>
  )
}

export default App
