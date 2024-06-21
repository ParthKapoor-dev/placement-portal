import MiscSection from "@/components/LandingPage/misc";
import NewListings from "@/components/LandingPage/newlistings";
import UpdatesDiv from "@/components/LandingPage/updates";

import CompanyLogo1 from "@/../public/companyLogo1.png"

export default function LandingPage() {

  return (
    <div className="flex max-md:flex-col max-md:gap-8">
      <div className="w-[60vw] gap-4 flex flex-col max-md:w-full">
        <NewListings />
        <UpdatesDiv jobs={appliedJobs} />
      </div>

      <div className="w-[20vw] max-md:w-full">
        <MiscSection />
      </div>
    </div>
  )
}


const appliedJobs = {
  icon: CompanyLogo1,
  title: "Header info containing the update info ",
  description: "name of company"
}