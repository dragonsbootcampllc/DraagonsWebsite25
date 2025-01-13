
// import { useEffect } from "react";
"use client";
import { api } from "~/trpc/react";


export default function Test() {
    api.post?.addNewPerson.useQuery({email: "test@test.com"});
    
    return (
        <div className="pt-24">
            <h1 className="pt-24">{"loading.."}</h1>
        </div>
    );
}