/* eslint-disable react/prop-types */
import { CiFileOn } from "react-icons/ci";
import { BsDownload } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
     <motion.div
          drag 
          dragConstraints={reference} 
          whileDrag={{scale: 1.2}} 
          dragElastic={0.2} 
          dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
          className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900 text-white px-8 py-10 overflow-hidden">
          <CiFileOn/>
          <p className="text-sm mt-5 font-semibold leading-tight">
               {data.desc}
          </p>
          <div className="footer absolute bottom-0 bg-zinc-900 w-full left-0">
               <div className="flex items-center justify-between py-3 px-8 mb-3">
                    <h5>
                         {data.filesize}
                    </h5>
                    {
                         data.close ? <IoMdClose/> : <BsDownload/>
                    }
               </div>
               {
                    data.tag.isOpen &&
                    (
                         <div className={`tag w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                              <h3 className="text-sm">
                                   {data.tag.tagTitle}
                              </h3>
                         </div>
                    )
               }
              
          </div>
     </motion.div>
  )
}

export default Card