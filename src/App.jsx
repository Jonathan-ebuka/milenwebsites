import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Homepage from "./pages/Homepage"
import Shipping from "./pages/Shipping"
import Terms from "./pages/Terms"
import Stores from "./pages/Stores"
import Ethical from "./pages/Ethical"
import Sizes from "./pages/Sizes"
import MinLay from "./layouts/MinLay"
import SinglePage from "./pages/SinglePage"
// import SecondLayout from "./layouts/SecondLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Homepage />} />
      </Route>
      ,
      <Route element={<MinLay />}>
        <Route path='/stores' element={<Stores />} />,
        <Route path='/shipping' element={<Shipping />} />,
        <Route path='/terms' element={<Terms />} />,
        <Route path='/ethical' element={<Ethical />} />,
        <Route path='/sizes' element={<Sizes />} />
        <Route path='/product' element={<SinglePage />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
