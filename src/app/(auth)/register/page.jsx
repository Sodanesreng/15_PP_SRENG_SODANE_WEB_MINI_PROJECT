
'use client'
import Image from "next/image";
import React from "react";
//import {useForm} from "react-hook-form";
//import {registerUser} from ".../.../service/registerService";
import { useRouter } from "next/navigation";
//import {useForm} from "react-hook-form";
//import {signIn} from "next-auth/react"

export default function page(){


const userRegiste = async (data) => {
    await registerUser(data);
    router.push("/login");
};
  return(
    
   <main>
      <div className="grid grid-cols-5  grid-flow-row  w-full h-screen  ">
       
        <div className="col-span-3  ">
         <Image
          src={"/assets/icons/logo.svg"}
          width={250}
          height={50}
          alt={"logo"}
          className="mt-32 ml-36"
        /> 


    <div className="p-6 space-y-6 ml-32 mt-8">
        <form action="#">
            <div className="grid grid-cols-4 gap-5">
            
                <div className="col-span-4 sm:col-span-2">
                    <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">First Name:</label>
                    <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50  bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter your name" required=""/>
                </div>
                <div className="col-span-4 sm:col-span-2">
                    <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
                    <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50 bg-slate-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter your name" required=""/>

                </div>
                <div className="col-span-4 sm:col-span-2">
                    <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email@email.com" required />
                </div>
                <div className="col-span-4 sm:col-span-2">
                    <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Mobile No :</label>
                    <input type="text" id="text" className="shadow-sm bg-gray-50 bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+91-83442 58000" required />
                </div>
                <div className="col-span-4 sm:col-span-2">
                    <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="xxxxxxx" required />
                </div>
                <div className="col-span-4 sm:col-span-2">
                    <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Confirm Password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="xxxxxxx" required />
                </div>
            
            </div>
        </form>
    </div>

    <div className="">
        <button className="w-36 text-white bg-blue-600 hover:bg-cyan-700  focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-36" type="submit">Sign Up</button>
    </div>




        </div>

          <div className="col-span-2 "> 
         <Image
          src={"/assets/icons/sign-up.svg"}
          width={400}
          height={50}
          alt={"image"}
         className="mt-56 ml-12"
         />
        </div>


        

    </div>
    

  </main>
  );
   }
