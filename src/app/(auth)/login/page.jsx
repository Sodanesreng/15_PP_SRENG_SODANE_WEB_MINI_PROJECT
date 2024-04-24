
'use client'
import Image from "next/image";
import React from "react";
//import {useForm} from "react-hook-form";
//import {registerUser} from ".../.../service/registerService";
import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"

const Loginpage = () => {
  //defind handle login
  async function handleLogin(userInfo){
    //defind structure object
    const newUserInfo = {
      email : userInfo.get("email"),
      password : userInfo.get("password")
    }
    // calling next auth service and passing " newUserInfo "
   const res = signIn('credentials',{
    redirect: false,
    ...newUserInfo,
   });

  }
  return(
  <main>

<div className="grid grid-cols-5  grid-flow-row  w-full h-auto ">
         <div className="">
         <Image
          src={"/assets/icons/logo.svg"}
          width={200}
          height={20}
          alt={"logo"}
          className="mt-32 ml-32"
        /> 
     
        </div>

        <div className=" col-span-2">
         <form  className="max-w-sm mt-56" action={handleLogin} >

     <div className="mb-5"> 
       <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Login</label>
       <input  type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email@email.com" required=""/>
     </div>
     <div className="mb-1">
       <input type="password" id="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password" required=""/>
     </div>

     <div className="flex items-start mt-5">
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center block w-full">Login</button>
     </div>
     <div className="mt-2" >
     <label for="terms" className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Didn't have acount yet? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Resgister</a></label>

<div class="inline-flex items-center justify-center w-full">
    <hr className="w-32 h-px my-8 bg-red-900 border-0 dark:bg-gray-700 mr-3"/>
    <span >Continue With</span>
    <hr className="w- h-px my-8 bg-red-900 border-0 dark:bg-gray-700 ml-3"/>
</div>
     </div>
    <label className=" mt-16 shadow-sm text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">Google</label>
     
         </form>

        </div>


        <div className=" col-span-2">
        <Image
          src={"/assets/icons/login.svg"}
          width={400}
          height={1}
          alt={"logo"}
          className="mt-32 "
        /> 
        </div>

      </div>
      <p className="ml-32 mt-12 ">&#169;2024 MY office.All Rights Reserved.</p>

   {/* {/*</form> */}
  </main>
  )
}
export default Loginpage

// export default function Home() {
//   return(
//    <main>

//       <div className="grid grid-cols-5  grid-flow-row  w-full h-auto ">
//         <div className="">
//         <Image
//           src={"/assets/icons/logo.svg"}
//           width={200}
//           height={20}
//           alt={"logo"}
//           className="mt-32 ml-32"
//         /> 
     
//         </div>

//         <div className=" col-span-2">
//          <form  className="max-w-sm mt-56 ">

//      <div className="mb-5"> 
//        <label  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Login</label>
//        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email@email.com" required />
//      </div>
//      <div className="mb-1">
//        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password" required />
//      </div>

//      <div className="flex items-start mt-5">
//       <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center block w-full">Login</button>
//      </div>
//      <div className="mt-2" >
//      <label for="terms" className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Didn't have acount yet? <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Resgister</a></label>
//      {/* <text className="block  mt-16 text-center">Continue With</text> */}
//      {/* <hr class="w-32 h-px my-8 bg-red-300 border-0 dark:bg-gray-700" />
//     <span class=" dark:text-white dark:bg-gray-900">Continue With</span> */}

// <div class="inline-flex items-center justify-center w-full">
//     <hr className="w-32 h-px my-8 bg-red-900 border-0 dark:bg-gray-700 mr-3"/>
//     <span >Continue With</span>
//     <hr className="w- h-px my-8 bg-red-900 border-0 dark:bg-gray-700 ml-3"/>
// </div>
//      </div>
//     <label className=" mt-16 shadow-sm text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">Google</label>
     
//          </form>

//         </div>


//         <div className=" col-span-2">
//         <Image
//           src={"/assets/icons/login.svg"}
//           width={400}
//           height={1}
//           alt={"logo"}
//           className="mt-32 "
//         /> 
//         </div>

//       </div>
//       <p className="ml-32 mt-12 ">&#169;2024 MY office.All Rights Reserved.</p>

//  //</main> 
//  </form>
//  //
 
//  </main>
//   );
// }