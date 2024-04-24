import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

export default function BoardPage() {
    return (
        <main className="bg-pink-100">
            <>
                <div className="grid grid-cols-5  grid-flow-row  w-full h-screen gap-8 ">

                    <div className="">
                        <SidebarComponent />
                    </div>



                    <div className="col-span-4  ">


                        <div className="bg-yellow-100 ">
                            <NavbarComponent />
                            <div className="pt-8">
                                <ListBoardComponentHeader />
                            </div>

                        </div>

                        <div className="grid grid-cols-4 grid-flow-row w-full h-screen gap-4">

                            < div className="">
                                <div className="mt-8 ">
                                    <h1 className="text-lg font-bold">TODO</h1>
                                    <hr className="h-1 border-0 mt-4 bg-amber-400" />
                                    <TodoCardComponent />
                                </div>

                               
                                {/* <div className="w-full flex justify-around gap-4 h-auto mt-8">
            
        
        </div> */}
                            </div>

                            <div className="">
                                <div className="mt-8 ">
                                    <h1 className="text-lg font-bold">WORKING ON</h1>
                                    <hr className="h-1 border-0 mt-4 bg-blue-800" />
                                </div>

                                <div className="w-full flex justify-around gap-4 h-auto mt-8">
                                    <TodoCardComponent />

                                </div>
                            </div>

                            <div className="">
                                <div className="mt-8 ">
                                    <h1 className="text-lg font-bold">CHECKING</h1>
                                    <hr className="h-1 border-0 mt-4 bg-amber-600" />
                                </div>

                                <div className="w-full flex justify-around gap-4 h-auto mt-8">
                                    <TodoCardComponent />
                                </div>
                            </div>

                            <div className="">
                                <div className="mt-8 ">
                                    <h1 className="text-lg font-bold">COMPLETED</h1>
                                    <hr className="h-1 border-0 mt-4 bg-red-600" />
                                </div>

                                <div className="w-full flex justify-around gap-4 h-auto mt-8">
                                    <TodoCardComponent />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </>


        </main>

    );

}