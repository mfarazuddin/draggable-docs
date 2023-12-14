// import { useState } from "react"
import { useRef } from "react"
import Card from "./Card"

const Foreground = () => {

     const ref = useRef(null)

     const data = [
          {
               desc: "HTML is the foundation of any web page, providing the structure and layout of content. It uses tags to define elements such as headings, paragraphs, images, and links.",
               filesize: ".5mb",
               close: true,
               tag: {
                    isOpen: true,
                    tagTitle: "Download Now",
                    tagColor: "blue"
               }
          },
          {
               desc: "CSS is used for styling and presentation. It controls the appearance of HTML elements, defining aspects like color, font, spacing, and layout. CSS frameworks like Bootstrap and Tailwind CSS streamline styling.",
               filesize: ".5mb",
               close: true,
               tag: {
                    isOpen: false,
                    tagTitle: "Download Now",
                    tagColor: "blue"
               }
          },
          {
               desc: "JavaScript is a versatile scripting language that enables dynamic content and interactivity on the frontend. Popular libraries and frameworks like React, Angular, and Vue.js simplify the development of complex UIs.",
               filesize: ".5mb",
               close: true,
               tag: {
                    isOpen: true,
                    tagTitle: "Download Now",
                    tagColor: "green"
               }
          },
          {
               desc: "Frontend developers prioritize responsive design to ensure that websites adapt to different screen sizes and devices. Media queries and flexible grid layouts are common techniques.",
               filesize: ".5mb",
               close: true,
               tag: {
                    isOpen: true,
                    tagTitle: "Download Now",
                    tagColor: "green"
               }
          }
     ]
  return (
     <div ref={ref} className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-5">
       {
          data.map((item, index) => (
               <Card data={item} key={index} reference={ref}/>
          ))
       }
     </div>
  )
}

export default Foreground