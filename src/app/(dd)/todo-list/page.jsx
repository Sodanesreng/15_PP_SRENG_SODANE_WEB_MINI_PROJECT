import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

export default function ListPage() {
    return (
        <main>
            <>

                <div className="grid grid-cols-5  grid-flow-row  w-full h-screen gap-8  ">

                    <div className="">
                        <SidebarComponent />
                    </div>



                    <div className="col-span-4 ">


                        <div className="">
                            <NavbarComponent />
                            <div className="pt-8">
                                <ListBoardComponentHeader />
                            </div>

                        </div>

                        <div className="grid grid-cols-4 grid-flow-row w-full h-screen gap-4 ">


                            <div className="col-span-3 ">

                                <div className='bg-yellow-200 w-2/4 h-32 rounded-xl bottom-[520px] relative flex justify-evenly'>
                                    <div className='bg-white w-20  h-20 top-6 rounded-lg relative right-8'>
                                        <p className='text-red-500 font-bold relative left-5 top-3'>MON</p>
                                        <h1 className='text-2xl font-bold relative top-3 left-6'>18</h1>
                                    </div>

                                    <div className='top-7 relative right-12'>
                                        <h1 className='text-lg font-bold bottom-2 relative'>Stack Integration</h1>
                                        <p className='w-[280px] text-sm'>Add a field in the portal to let the user connect their Slack account. </p>
                                    </div>

                                    <div className='bg-white w-32 h-10 rounded-lg relative top-[78px] left-9'>
                                        <h1 className='text-md left-11 relative font-bold top-2'>Todo</h1>
                                    </div>

                                </div>

                               {/* <div className="text-red-600 b">ajsdfhasjf</div> */}


                            </div>


                            <div className="bg-red-400 ">
                                <MonthlyStatisticsComponent />
                            </div>

                        </div>

                    </div>
                    {/* <div className="bg-red-400 pt-28">
    <MonthlyStatisticsComponent/>
</div> */}

                </div>

            </>


        </main>

    );

}