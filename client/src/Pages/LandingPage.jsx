import MiscSection from "@/components/LandingPage/misc";
import NewListings from "@/components/LandingPage/newlistings";
import UpdatesDiv from "@/components/LandingPage/updates";

import CompanyLogo1 from "@/../public/companyLogo1.png"

export default function LandingPage() {

  return (
    <div className="flex ">
      <div className="w-[60vw] gap-4 flex flex-col">
        <NewListings />
        <UpdatesDiv jobs={appliedJobs} />
      </div>

      <div className="w-[20vw]">
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