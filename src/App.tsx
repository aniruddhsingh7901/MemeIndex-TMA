import { useState } from "react"
import Community from "./pages/Community"
import Header from "./Components/Header"
import NavBar from "./Components/Navbar"
import Rank from "./pages/Rank"
import Tasks from "./pages/Tasks"
import Profile from "./pages/Profile"
import "./index.css"
import Home from "./pages/Home"
function App() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  return (
    <>
    <div className="bg-blue-500 w-[100vw]">
      {/* <Community/> */}
      <Header/>
      {activeTab === "Home" && <Home />}
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
