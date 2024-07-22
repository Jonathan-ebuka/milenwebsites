import { Dialog, DialogPanel } from "@headlessui/react"
import {
  Bars3Icon,
  // ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid"
import { useState } from "react"
import { Link } from "react-router-dom"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { FaPinterest, FaTiktok } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const MobileNav = ({ text = "text-white" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // const toggleNav = () => {
  //   if (mobileMenuOpen) {
  //     setMobileMenuOpen(false)
  //   } else {
  //     setMobileMenuOpen(true)
  //   }
  // }

  const handleClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className='flex lg:hidden'>
      <button
        className={`${text}`}
        type='button'
        onClick={() => setMobileMenuOpen(true)}
      >
        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
      </button>

      <Dialog
        as='div'
        className='lg:hidden '
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <DialogPanel className='fixed inset-y-0 left-0 w-[100%] overflow-y-auto bg-white px-6 py-6 z-50'>
          <div className='h-[85vh] flex flex-col justify-between'>
            <div className='flex items-center justify-between'>
              <Link to='/'>
                <h2 className='text-black font-bold text-3xl '>MILEN.</h2>
              </Link>

              <button
                type='button'
                className=' text-black'
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>

            <div className='flex flex-col gap-3 items-center'>
              <Link
                to='/stores'
                onClick={handleClick}
                className='text-black font-bold text-lg'
              >
                SHOP
              </Link>
              <Link
                to='/sizes'
                onClick={handleClick}
                className='text-black font-bold text-lg'
              >
                SIZE GUIDE
              </Link>
              <Link
                to='/ethical'
                onClick={handleClick}
                className='text-black font-bold text-lg'
              >
                ETHICAL
              </Link>
              <Link
                to='/shipping'
                onClick={handleClick}
                className='text-black font-bold text-lg'
              >
                SHIPPING PRICES
              </Link>
              <Link
                to='/terms'
                onClick={handleClick}
                className='text-black font-bold text-lg'
              >
                TERMS
              </Link>
            </div>

            <div className='flex justify-center gap-7'>
              <Link to='/'>
                <FaPinterest fontSize='1.5em' color='black' />
              </Link>

              <Link to='/'>
                <EnvelopeIcon
                  className='h-6 w-6 text-black'
                  aria-hidden='true'
                />
              </Link>

              <Link to='/'>
                <FiInstagram fontSize='1.5em' color='black' />
              </Link>

              <Link to='/'>
                <FaTiktok fontSize='1.5em' color='black' />
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}

export default MobileNav
