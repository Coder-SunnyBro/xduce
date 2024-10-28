// eslint-disable-next-line no-unused-vars
import React from "react"
import { useState } from "react"
import { Card, CardContent, Button } from "@mui/material"
import {
  Home,
  Clipboard,
  Globe,
  Shield,
  Clock,
  Briefcase,
} from "react-feather"

export default function ResourceCenter() {

  const [useFulLinksShowMore,setuseFullLinksShowMore] = useState(false)
  const [hrPoliciesShowMore,setHrPoliciesShowMore] = useState(false)
  const [itPolicieisShowMore,setItPoliciesShowMore] = useState(false)


  const useFulLinks = [
    {
      title: "Useful Links",
      items: [
        { icon: <Home size={20} />, text: "XDuce Home" },
        { icon: <Clipboard size={20} />, text: "Saral ESS" },
        { icon: <Globe size={20} />, text: "JobDiva Login" },
        { icon: <Home size={20} />, text: "XDuce Home" },
        { icon: <Clipboard size={20} />, text: "Saral ESS" },
        { icon: <Globe size={20} />, text: "JobDiva Login" },
        { icon: <Home size={20} />, text: "XDuce Home" },
        { icon: <Clipboard size={20} />, text: "Saral ESS" },
        { icon: <Globe size={20} />, text: "JobDiva Login" },
      ],
    },
  ]
  const itPolicieis = [
    {
      title: "IT and Infra Policies",
      items: [
        {
          icon: <Shield size={20} />,
          text: "XDuce Data Access control policy",
        },
        { icon: <Shield size={20} />, text: "Physical Access Control Policy" },
        { icon: <Shield size={20} />, text: "IT Password Policy" },
        {
          icon: <Shield size={20} />,
          text: "XDuce Data Access control policy",
        },
        { icon: <Shield size={20} />, text: "Physical Access Control Policy" },
        { icon: <Shield size={20} />, text: "IT Password Policy" },
        {
          icon: <Shield size={20} />,
          text: "XDuce Data Access control policy",
        },
        { icon: <Shield size={20} />, text: "Physical Access Control Policy" },
        { icon: <Shield size={20} />, text: "IT Password Policy" },
      ],
    },
  ]

  const hrPolicies = [
    {
      title: "HR Policies",
      items: [
        {
          icon: <Clipboard size={20} />,
          text: "Progressive Discipline Policy",
        },
        { icon: <Clock size={20} />, text: "Time & Attendance Policy" },
        { icon: <Briefcase size={20} />, text: "WFH Guidelines" },
        {
          icon: <Clipboard size={20} />,
          text: "XDuce Sexual Harassment Policy",
        },
        {
          icon: <Clipboard size={20} />,
          text: "Progressive Discipline Policy",
        },
        { icon: <Clock size={20} />, text: "Time & Attendance Policy" },
        { icon: <Briefcase size={20} />, text: "WFH Guidelines" },
        {
          icon: <Clipboard size={20} />,
          text: "XDuce Sexual Harassment Policy",
        },
        {
          icon: <Clipboard size={20} />,
          text: "Progressive Discipline Policy",
        },
        { icon: <Clock size={20} />, text: "Time & Attendance Policy" },
        { icon: <Briefcase size={20} />, text: "WFH Guidelines" },
        {
          icon: <Clipboard size={20} />,
          text: "XDuce Sexual Harassment Policy",
        },
      ],
    },
  ]
  

  const displayeduseFull = useFulLinksShowMore ? useFulLinks[0].items : useFulLinks[0].items.slice(0, 6);
  const displayedItPolicies = hrPoliciesShowMore ? hrPolicies[0].items : hrPolicies[0].items.slice(0,6);
  const displayedHrPolicies = itPolicieisShowMore ? itPolicieis[0].items : itPolicieis[0].items.slice(0,6);

  return (
    // <div className="container mx-auto px-4 py-8">
    //   <div className="grid sm:grid-cols-12 md:grid-cols-12">
    //     {useFulLinks.map((column, index) => (
    //       <div key={index} className="col-span-12">
    //         <h1 className="text-2xl font-semibold mb-4">
    //           {column.title}
    //         </h1>
    //         <div className="grid grid-cols-12 gap-4">
    //           {displayItem.items.map((item, itemIndex) => (
    //             <div key={itemIndex} className="col-span-4">
    //               <Card
    //                 className="url-background flex-col cursor-pointer transition-colors duration-200"
    //                 style={{ backgroundColor: "#112f5c" }}
    //               >
    //                 <CardContent className="p-4 flex items-center space-x-4">
    //                   <span className="text-white">{item.icon}</span>
    //                   <span className="text-white">{item.text}</span>
    //                 </CardContent>
    //               </Card>
    //             </div>
    //           ))}
    //         </div>
    //         {useFulLinks[0].items.length > 6 && (
    //           <div className="flex justify-end mt-4">
    //             <Button
    //               variant="outlined"
    //               onClick={() => setShowMore(!showMore)}
    //               style={{ color: "#112f5c", borderColor: "#112f5c" }}
    //             >
    //               {showMore ? "Show Less" : "See More"}
    //             </Button>
    //           </div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>


    <div className="bg-[#edf2f4] px-48 py-8">
      <div className="grid sm:grid-cols-12 md:grid-cols-12">
        {useFulLinks.map((column, index) => (
          <div key={index} className="col-span-12">
            <h2 className="text-2xl font-semibold mb-4">
              {column.title}
            </h2>
            <div className="grid grid-cols-12 gap-4">
              {displayeduseFull.map((item, itemIndex) => (
                <div key={itemIndex} className={`transition-all duration-1000 col-span-4 ease-in-out ${
                    itemIndex >= 6 && !useFulLinksShowMore
                      ? 'h-0 opacity-0 overflow-hidden'
                      : 'h-auto opacity-100'
                  } ${itemIndex >= 6 ? 'animate-slide-down' : ''}`}>
                  <Card
                    className="url-background flex-col cursor-pointer transition-colors duration-200"
                    style={{ backgroundColor: "#112f5c" }}
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <span className="text-white">{item.icon}</span>
                      <span className="text-white">{item.text}</span>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {useFulLinks[0].items.length > 6 && (
              <div className="flex justify-end mt-4">
                <h4 className="text-xl font-semibold text-neutral-700 cursor-pointer"
                  onClick={() => setuseFullLinksShowMore(!useFulLinksShowMore)}>
                  {useFulLinksShowMore ? "Show Less..." : "See More..."}
                </h4>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-12 md:grid-cols-12">
        {itPolicieis.map((column, index) => (
          <div key={index} className="col-span-12">
            <h2 className="text-2xl font-semibold mb-4">
              {column.title}
            </h2>
            <div className="grid grid-cols-12 gap-4">
              {displayedItPolicies.map((item, itemIndex) => (
                <div key={itemIndex} className="col-span-4">
                  <Card
                    className="url-background flex-col cursor-pointer transition-colors duration-200"
                    style={{ backgroundColor: "#112f5c" }}
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <span className="text-white">{item.icon}</span>
                      <span className="text-white">{item.text}</span>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {itPolicieis[0].items.length > 6 && (
              <div className="flex justify-end mt-4">
                <h4 className="text-xl font-semibold text-neutral-700 cursor-pointer"
                  onClick={() => setHrPoliciesShowMore(!hrPoliciesShowMore)}>
                  {hrPoliciesShowMore ? "Show Less..." : "See More..."}
                </h4>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-12 md:grid-cols-12">
        {hrPolicies.map((column, index) => (
          <div key={index} className="col-span-12">
            <h2 className="text-2xl font-semibold mb-4">
              {column.title}
            </h2>
            <div className="grid grid-cols-12 gap-4">
              {displayedHrPolicies.map((item, itemIndex) => (
                <div key={itemIndex} className="col-span-4">
                  <Card
                    className="url-background flex-col cursor-pointer transition-colors duration-200"
                    style={{ backgroundColor: "#112f5c" }}
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <span className="text-white">{item.icon}</span>
                      <span className="text-white">{item.text}</span>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {hrPolicies[0].items.length > 6 && (
              <div className="flex justify-end mt-4">
                <h4 className="text-xl font-semibold text-neutral-700 cursor-pointer"
                  onClick={() => setItPoliciesShowMore(!itPolicieisShowMore)}>
                  {itPolicieisShowMore ? "Show Less..." : "See More..."}
                </h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
        )
    }