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
            <SheetContent className='bg-white w-[80%] h-lvh flex flex-col p-0 gap-0'>
              <SheetHeader className='shrink-0 px-6 pt-6'>
                <SheetTitle className='text-md leading-[17px] font-normal uppercase w-[100%] pb-4 flex items-center justify-center border-b-2 border-black'>
                  YOUR CART
                </SheetTitle>
                <SheetDescription className='sr-only'>
                  Items in your shopping cart
                </SheetDescription>
              </SheetHeader>

              {!cartItems ? (
                <div className='flex-1 mt-20 flex flex-col items-center px-6'>
                  <p className='font-normal text-md mb-4'>Your cart is empty</p>
                  <Link
                    to='/stores'
                    className='text-white font-bold text-sm bg-black px-4 py-2 border rounded-lg'
                  >
                    VIEW SHOP
                  </Link>
                </div>
              ) : (
                <>
                  {/* ITEMS - only this part scrolls */}
                  <div className='flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 pt-6 text-sm'>
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
                  </div>

                  {/* CHECK OUT - always pinned to the bottom */}
                  <div className='shrink-0 w-full border-t px-6 pt-4 pb-[max(6.5rem,calc(100lvh-100dvh+1.5rem+env(safe-area-inset-bottom)))] lg:pb-6 text-sm'>
                    <div className='flex items-center justify-between mb-2'>
                      <h3 className='font-bold '>SUBTOTAL:</h3>
                      <span className='font-bold '>$220,000</span>
                    </div>

                    <Link
                      to='/checkout'
                      className='flex items-center justify-center py-4 px-6 gap-1 bg-black text-white font-bold text-sm'
                    >
                      CHECKOUT SECURELY
                      <LockClosedIcon
                        className='h-3 w-3 text-white'
                        aria-hidden='true'
                      />
                    </Link>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  )
}

export default NavBar
