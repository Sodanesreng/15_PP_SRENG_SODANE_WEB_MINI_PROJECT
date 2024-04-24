import nextAuth from "next-auth"
import CredentialProider from "next-auth/providers/credentials";
import { useCallback } from "react";
export const authoption = {
providers:[
    CredentialProider({
        //login by  email and password
        async authorize(userInfo){
           console.log("user info in next auth", userInfo);
          //defind object structure
          const  newUserInfo = {
            email : userInfo.email,
            password : userInfo.password
          };
          //call login service
          const login = await loginService(newUserInfo);
          return login;
        },
    }),
],
//use to set token into cookies
useCallback: {
    async jwt({token, user}){
        return {...token,...user};
    },
    async session ({session, token}){
        session.user = token;
        return session;
    },
},
};
const handler = nextAuth(authoption);
export {handler as GET, handler as POST};