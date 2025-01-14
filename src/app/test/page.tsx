"use client"

import { useEffect } from "react";
import JsonToReact from "~/lib/convertJsonToHtml";
import { FaRegSquareCheck } from "react-icons/fa6";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

export default function Test() {
    const blogMutation = api.blog.getBySlug.useMutation();
    useEffect(() => {
        blogMutation.mutate({ slug:"neferdatas-journey-with-dragons" });
    },[]);

    useEffect(() => {
        console.log(blogMutation.data);
        
    }, [blogMutation.data]);

    const dom = new DOMParser();

    if (!blogMutation.data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-row gap-2 w-full pt-10 relative">
            {/* Company Section */}
            <div className="flex flex-col flex-[3] sticky top-0 bottom-0 h-fit">
                <CompanyDetails company={blogMutation.data?.blog.company} />
            </div>
            {/* Story Telling Section */}
            <div className="flex flex-col flex-[6] gap-2">
                <div className="flex flex-row gap-2">
                    <BlogCard header={"Challenge"} data={blogMutation.data?.blog.challenge} />
                    <BlogCard header={"Solution"} data={blogMutation.data?.blog.solution} />
                </div>
                <div className="border-t w-[90%] mx-auto my-2" />
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl">Results</h1>
                    <div className="grid grid-cols-2 gap-2 gap-y-4">
                        {blogMutation.data?.blog.results.map((result,index)=>{
                            return <BlogCard key={index} className="flex flex-row gap-1 items-start" header={<FaRegSquareCheck size={20} />} data={result} />
                        })}
                    </div>
                </div>
                <div className="border-t w-[90%] mx-auto my-2" />

                <Content content={blogMutation.data?.blog.content} />
            </div>
            {/* Timeline Section */}
            <div className="flex flex-col flex-[3]">

            </div>
        
        </div>
    )
}

function Content({content}) {
    return <div className="">
            <JsonToReact data={content} />
    </div>
}

function CompanyDetails({company}){
    return <div className="flex flex-col gap-2">
        {Object.entries(company).map(([key,value]) => {
                if(key == "id") return null; 
              return <CompanySection key={key} header={key} data={value} />
            })}
    </div>
}

function CompanySection({header,data}){
    if(header == null || data == null || header == "null" || data == "null") return null;
    return <div>
        <h1 className="text-2xl">{header}</h1>
        <div>
            {data}
        </div>
    </div>
}

function BlogCard ({ header , data , className = ""}) {
    return <div className={cn("", className)}>
        <h1 className="text-2xl">{header}</h1>
        <div>
            {data}
        </div>
    </div>
}