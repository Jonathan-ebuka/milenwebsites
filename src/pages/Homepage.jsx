import MobileNav from "@/components/MobileNav"
import { ArrowRightIcon, UserIcon } from "@heroicons/react/24/outline"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { FiInstagram } from "react-icons/fi"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { FaPinterest, FaTiktok } from "react-icons/fa"
import { Link } from "react-router-dom"
import videoBg from "../assets/megan_sizzle.mp4"

const Homepage = () => {
  return (
    <main className='p-5 lg:px-20 h-[100vh] w-[100%] relative'>
      <nav className='flex items-center justify-between relative'>
        <MobileNav />

        <div className='hidden lg:flex lg:items-center lg:justify-between lg:gap-5'>
          <Link to='/terms' className='text-white font-bold text-sm'>
            TERMS
          </Link>
          <Link to='/shipping' className='text-white font-bold text-sm'>
            SHIPPING
          </Link>
        </div>

        <div className=''>
          <Link to='/'>
            <h2 className='text-white font-bold text-3xl lg:absolute lg:top-0 lg:left-[47%]'>
              MILEN.
            </h2>
          </Link>
        </div>

        <div className='flex lg:items-center lg:gap-10'>
          <button className='hidden lg:flex lg:items-center'>
            <UserIcon className='h-6 w-6 text-white' aria-hidden='true' />
          </button>
          <Sheet>
            <SheetTrigger>
              <ShoppingBagIcon
                className='h-6 w-6 text-white'
                aria-hidden='true'
              />
            </SheetTrigger>
            <SheetContent className='bg-white w-full'>
              <SheetHeader>
                <SheetTitle>
                  <h2></h2>
                </SheetTitle>
                <SheetDescription>
                  <p>Your Cart is empty</p>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className='container w-full h-[85vh] flex flex-col items-center justify-end -mb-1'>
        <div></div>
        <h2 className='text-2xl text-white font-bold  cursor-none '>
          COLLECTIONS
        </h2>

        <Link
          to='/stores'
          className='text-sm font-bold text-white flex items-center gap-2'
        >
          Shop now
          <ArrowRightIcon className='h-4 w-4 text-white' aria-hidden='true' />
        </Link>
      </div>

      <div className='hidden lg:flex lg:gap-5 lg:justify-end items-start'>
        <Link to='/'>
          <FaPinterest fontSize='1.5em' color='white' />
        </Link>

        <Link to='/'>
          <EnvelopeIcon className='h-6 w-6 text-white' aria-hidden='true' />
        </Link>

        <Link to='/'>
          <FiInstagram fontSize='1.5em' color='white' />
        </Link>

        <Link to='/'>
          <FaTiktok fontSize='1.5em' color='white' />
        </Link>
      </div>

      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 -z-10 w-[100%] h-[100vh] object-cover'
      />
    </main>
  )
}

export default Homepage
