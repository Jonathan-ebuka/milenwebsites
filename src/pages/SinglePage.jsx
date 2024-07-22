import { EmblaCarousel } from "@/components/carousel"

const SinglePage = () => {
  return (
    <div className='px-10 grid grid-flow-row lg:grid-col-2'>
      {/* img */}
      <div className=''>
        <EmblaCarousel />
      </div>

      {/* text */}
      <div>
        <div className='flex justify-between p-2 '>
          <h3>houser</h3>
          <span>$100</span>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default SinglePage
