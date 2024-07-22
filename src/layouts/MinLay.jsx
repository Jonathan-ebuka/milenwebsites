// import UniNav from "@/components/UniNav"
import NavBar from "@/components/NavBar"
import { Outlet } from "react-router-dom"

const MinLay = () => {
  return (
    <>
      <NavBar color={`text-black`} text={`text-black`} />
      <Outlet />
    </>
  )
}

export default MinLay
