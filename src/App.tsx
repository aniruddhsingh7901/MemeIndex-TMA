import { useState } from "react"
import Community from "./pages/Community"
import Header from "./Components/Header"
import NavBar from "./Components/Navbar"
import Rank from "./pages/Rank"
import Tasks from "./pages/Tasks"
import Profile from "./pages/Profile"
import "./index.css"
import Home from "./pages/Home"
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react"

function App() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  return (
    <>
    <TonConnectUIProvider 
    manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
    uiPreferences={{
      theme: THEME.DARK,
      borderRadius: "s",
      colorsSet: {
        [THEME.DARK]: {
          connectButton: {
            background: "#D97410", 
            foreground: "#ffffff", 
          },
         
          text: {
            primary: "#ffffff", // white text
            secondary: "#94a3b8", // slate-400 for secondary text
          },
          icon: {
            primary: "#ffffff", // white icons
            secondary: "#94a3b8", // slate-400 for secondary icons
          }
        }
      }
    }}
    >

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
    </TonConnectUIProvider>
    </>
  )
}

export default App
