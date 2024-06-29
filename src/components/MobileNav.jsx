import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

const MobileNav = () => {
  return (
    <div className='flex lg:hidden '>
      <Sheet>
        <SheetTrigger>
          <Bars3Icon className='h-6 w-6 text-white' aria-hidden='true' />
        </SheetTrigger>
        <SheetContent side={"left"} className='w-full bg-white'>
          <SheetHeader>
            <SheetTitle className='font-bold py-10'>
              <Link to='/'>
                <h2 className='text-black font-bold text-3xl mb-20'>MILEN.</h2>
              </Link>
            </SheetTitle>
            <SheetDescription className='flex flex-col gap-6  text-center'>
              <Link to='/stores' className='text-black font-bold text-lg'>
                SHOP
              </Link>
              <Link to='/sizes' className='text-black font-bold text-lg'>
                SIZE GUIDE
              </Link>
              <Link to='/ethical' className='text-black font-bold text-lg'>
                ETHICAL
              </Link>
              <Link to='/shipping' className='text-black font-bold text-lg'>
                SHIPPING PRICES
              </Link>
              <Link to='/terms' className='text-black font-bold text-lg'>
                TERMS
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
