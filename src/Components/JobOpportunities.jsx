
import TableOfJobs from "./TableOfJobs"

const JobOpportunities = () => {
  return (
    <div>
   <div className='text-center'>
   <h1 className="text-[#a633db] text-[14px] font-bold lg:mt-20 mt-10">Ready to go? Select and apply for your preferred driver role below
      </h1>
      <h2 className="text-3xl sm:text-4xl lg:text-3xl font-bold mb-8 mt-6">Search for the latest opportunities
      </h2>
   </div>
      <div>
      <TableOfJobs ></TableOfJobs>
      </div>
    </div>
  )
}

export default JobOpportunities
