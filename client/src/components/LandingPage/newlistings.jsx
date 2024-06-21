import Listing from "./listing"
import CompanyLogo1 from "@/../public/companyLogo1.png"

export default function NewListings() {
  return (
    <div>
      <div className="text-red-500 font-semibold mb-4 text-xl">
        New Listings for you
      </div>

      <div className="flex gap-3 w-[58vw] overflow-x-scroll max-md:w-[90vw]">
        {listings.map((item, index) => (
          <Listing data={item} key={index} />
        ))}
      </div>

    </div>
  )
}


const listings = [
  {
    title: "ABC Company",
    logo: CompanyLogo1,
    role: "SDE",
    salary: "12 LPA",
    submissionDate: "12 Feb 2024",
    details: {
      role: "Software Developer Engineer",
      salary: "10 LPA + 2L joining bonus + Miscellanoues",
      location: "Banglore",
      infoField: "Details",
    }
  },
  {
    title: "ABC Company",
    logo: CompanyLogo1,
    role: "SDE",
    salary: "12 LPA",
    submissionDate: "12 Feb 2024",
    details: {
      role: "Software Developer Engineer",
      salary: "10 LPA + 2L joining bonus + Miscellanoues",
      location: "Banglore",
      infoField: "Details",
    }
  },
  {
    title: "ABC Company",
    logo: CompanyLogo1,
    role: "SDE",
    salary: "12 LPA",
    submissionDate: "12 Feb 2024",
    details: {
      role: "Software Developer Engineer",
      salary: "10 LPA + 2L joining bonus + Miscellanoues",
      location: "Banglore",
      infoField: "Details",
    }
  },
  {
    title: "ABC Company",
    logo: CompanyLogo1,
    role: "SDE",
    salary: "12 LPA",
    submissionDate: "12 Feb 2024",
    details: {
      role: "Software Developer Engineer",
      salary: "10 LPA + 2L joining bonus + Miscellanoues",
      location: "Banglore",
      infoField: "Details",
    }
  },
  {
    title: "ABC Company",
    logo: CompanyLogo1,
    role: "SDE",
    salary: "12 LPA",
    submissionDate: "12 Feb 2024",
    details: {
      role: "Software Developer Engineer",
      salary: "10 LPA + 2L joining bonus + Miscellanoues",
      location: "Banglore",
      infoField: "Details",
    }
  },
]