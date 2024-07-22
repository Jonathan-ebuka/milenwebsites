// import UniNav from "@/components/UniNav"
import NavBar from "@/components/NavBar"
import { Outlet } from "react-router-dom"
import {} from "../index.css"

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainLayout
