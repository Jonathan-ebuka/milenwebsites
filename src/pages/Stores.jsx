import ClothingList from "@/components/ClothingList"
import CountDown from "@/components/CountDown"

const stores = () => {
  return (
    <div className='bg-white max-w-7xl mx-auto'>
      <div>
        <div className='flex items-center justify-center p-10 m-6'>
          <span className='flex gap-2'>
            <h3 className=''>Pre Order Now;</h3>
            <CountDown />
          </span>
        </div>

        <div className=''>
          <ClothingList />
        </div>
      </div>
    </div>
  )
}

export default stores
