import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { SaveIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";


export default function ListingPage() {

  const location = useLocation();
  const data = location.state;

  const { toast } = useToast();

  const [file, setFile] = useState();

  function handleFileUpload(event) {
    const eventFile = event.target.files[0];
    console.log(eventFile)
    setFile(eventFile);
    toast({
      title: "Uploaded Resume : " + eventFile.name
    })
  }


  function handleDelete() {
    if (file == null) {
      toast({
        title: "No File Exists"
      })
    } else {
      setFile(null);
      toast({
        title: "Resume Deleted!"
      })
    }
  }


  return (
    <div>
      <div className="text-red-500 font-semibold mb-4 text-xl">
        New Listing for you
      </div>

      <div className="bg-white dark:bg-neutral-800 px-8 py-4 w-[70vw] mb-4 max-md:w-full">
        <div className="flex gap-2">
          <img src={data.logo} className="h-20" />
          <p className="flex justify-center items-center text-4xl font-semibold text-slate-600 dark:text-white max-md:text-2xl">
            {data.title}
          </p>
        </div>

        <div className="flex gap-16 mt-10">
          <div className="text-slate-400 flex flex-col gap-2">
            <p className="max-md:h-12 overflow-hidden">Role</p>
            <p className="max-md:h-12 overflow-hidden">CTC</p>
            <p className="max-md:h-12 overflow-hidden">Location</p>
            <p className="max-md:h-12 overflow-hidden">Info Field</p>
            <p className="max-md:h-12 overflow-hidden">Info Field</p>
            <p className="max-md:h-12 overflow-hidden">Info Field</p>
            <p className="max-md:h-12 overflow-hidden">Info Field</p>
            <p className="max-md:h-12 overflow-hidden">Apply Before</p>

          </div>
          <div className="font-semibold flex flex-col gap-2">
            <p className="max-md:h-12 overflow-hidden">{data.details.role}</p>
            <p className="max-md:h-12 overflow-hidden">{data.details.salary}</p>
            <p className="max-md:h-12 overflow-hidden">{data.details.location}</p>
            <p className="max-md:h-12 overflow-hidden">{data.details.infoField}</p>
            <p className="max-md:h-12 overflow-hidden">{data.details.infoField}</p>
            <p className="max-md:h-12 overflow-hidden">{data.details.infoField}</p>
            <p className="max-md:h-12 overflow-hidden">{data.details.infoField}</p>
            <p className="max-md:h-12 overflow-hidden">{data.submissionDate}</p>

          </div>
        </div>

      </div>


      <div className="flex gap-4 mt-4 max-md:flex-col ">
        <Dialog>

          <DialogTrigger>
            <Button className="max-md:w-full">
              {file ? (
                file.name
              ) : (
                <>
                  Upload Resume <FaRegFileAlt className="ml-2 h-4" />
                </>
              )}
            </Button>
          </DialogTrigger>

          <DialogContent className="max-md:w-[80vw]">
            <div className="text-lg "> 
              Upload Your Resume Here
            </div>

            {file && (
              <div>
                Present Resume : {" "} 
                <Link to={URL.createObjectURL(file)} target="_blank" className="text-black font-semibold underline underline-offset-2">
                  {file.name}
                </Link>
              </div>
            )}
            
            <input type="file" id="file" className="hidden" onChange={handleFileUpload} />
            <label htmlFor="file" className="flex justify-center cursor-pointer " >
              <FaCloudUploadAlt className="h-32 w-32" />
            </label>

          </DialogContent>
        </Dialog>

        <Button variant="destructive" onClick={handleDelete}>
          Delete Resume
        </Button>
      </div>

    </div>
  )
}