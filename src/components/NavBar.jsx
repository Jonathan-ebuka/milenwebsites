import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import { UserIcon } from "@heroicons/react/24/outline"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { LockClosedIcon } from "@heroicons/react/24/solid"

const NavBar = ({ color = "text-white" }) => {
  const cartItems = true

  return (
    <section className='w-full z-50'>
      <nav
        className={`${color} flex items-center justify-between sticky top-0 h-14 bg-transparent text-black z-50 px-5 lg:px-10 p-4`}
      >
        <MobileNav text />

        <div className='hidden lg:flex lg:items-center lg:justify-between lg:gap-5 font-semibold text-sm'>
          <Link to='/stores'>SHOP</Link>
          <Link to='/sizes'>SIZE GUIDES</Link>
          <Link to='/shipping'>SHIPPING</Link>
        </div>

        <div className=''>
          <Link to='/'>
            <h2 className=' font-bold text-3xl '>MILEN.</h2>
          </Link>
        </div>

        <div className='flex lg:items-center lg:gap-10'>
          <Link to='/terms' className='hidden lg:flex font-semibold text-sm'>
            TERMS
          </Link>

          <Link to='/ethical' className='hidden lg:flex font-semibold text-sm'>
            ETHICAL
          </Link>

          <button className='hidden lg:flex lg:items-center'>
            <UserIcon className='h-6 w-6 ' aria-hidden='true' />
          </button>

          <Sheet>
            <SheetTrigger>
              {/* <span className='rounded-[100%] bg-black p-1 text-white'>3</span> */}
              <ShoppingBagIcon className='h-6 w-6 ' aria-hidden='true' />
            </SheetTrigger>
            <SheetContent className='bg-white w-[80%]'>
              <SheetHeader>
                <SheetTitle className='text-md leading-[17px] font-normal uppercase w-[100%] pb-4 flex items-center justify-center border-b-2 border-black mb-6'>
                  <h2>YOUR CART</h2>
                </SheetTitle>
                <SheetDescription>
                  {!cartItems ? (
                    <>
                      <div className='h-full mt-20 flex flex-col items-center '>
                        <p className='font-normal text-md mb-4'>
                          Your cart is empty
                        </p>
                        <Link
                          to='/stores'
                          className='text-white font-bold text-sm bg-black px-4 py-2 border rounded-lg'
                        >
                          VIEW SHOP
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* ITEMS */}
                      <div className='h-[85vh] flex flex-col justify-between'>
                        <div className=' flex gap-4 mb-6 '>
                          <img
                            src=''
                            alt=''
                            className='w-[78px] h-[90px] object-cover rounded-sm'
                          />
                          <div className=' flex flex-col justify-between w-full'>
                            {/* top */}
                            <div className=''>
                              {/* title */}
                              <div className='flex justify-between'>
                                <h3>Name</h3>
                                <div className=''>$70,000</div>
                              </div>
                              {/* description */}
                              <div className='flex gap-3'>
                                <h3>XL</h3>
                                <p>Color</p>
                              </div>
                            </div>
                            {/* bottom */}
                            <div className='flex justify-between'>
                              <span className='font-bold'>Qnt.3</span>
                              <span className='cursor-pointer underline'>
                                Remove
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* CHECK OUT*/}
                        <div className='w-full h-24'>
                          <div className='flex items-center justify-between mb-2'>
                            <h3 className='font-bold '>SUBTOTAL:</h3>
                            <span className='font-bold '>$220,000</span>
                          </div>

                          <div className='flex items-center justify-center py-4 px-6 gap-1 bg-black text-white'>
                            <Link to='/checkout' className='font-bold text-sm'>
                              CHECKOUT SECURELY
                            </Link>
                            <LockClosedIcon
                              className='h-3 w-3 text-white'
                              aria-hidden='true'
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  )
}

export default NavBar
