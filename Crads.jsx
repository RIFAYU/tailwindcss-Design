import {RiAccountCircleFill} from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdOutlineDashboard} from 'react-icons/md'
import {AiOutlineCreditCard} from 'react-icons/ai'
import {AiOutlineThunderbolt} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

const App = () => {
  return (
        <>  
           <div className="w-[319px] shadow-xl rounded-xl m-auto my-16 flex flex-col">
                {/* Violet card */}
                <div className="bg-violet-700 p-5 rounded-t-lg rounded-bl-[45px] flex">
                    {/* profile-logo */}
                    <div className="">
                        <RiAccountCircleFill  className="text-[85px] border-violet-400 border-4 rounded-full" />
                    </div>
                    {/* name text */}
                    <div className="p-5">
                        <p className="text-white text-lg tracking-wider">Dr. Jessica James</p>
                        <p className="text-violet-300 text-md mt">Dermathologist</p>
                    </div>
                </div>
                {/* button */}
                <div className="mt-10 flex justify-center">
                    <button className="bg-violet-700 p-2 pr-4 pl-4 text-white rounded-lg hover:bg-violet-500">
                        <div className="flex">
                            <AiOutlinePlus className="text-white mr-2 mt-1" />
                            <p className="">Add Branch</p>
                        </div>
                    </button>
                </div>
                {/* list of element */}
                <div className="mt-8 m-1">

                    <div className="flex p-5 hover:border-l-4 hover:border-violet-600 hover:text-violet-700 cursor-pointer">
                    <MdOutlineDashboard className="text-2xl ml-5 mr-5 "/>
                    <p className="text-md">DashBoard</p>
                    </div>

                    <div className="flex p-5 hover:border-l-4 hover:border-violet-600 hover:text-violet-700 cursor-pointer">
                    <AiOutlineCreditCard className="text-2xl ml-5 mr-5 "/>
                    <p className="text-md">Post sessions</p>
                    </div>

                    <div className="flex p-5 hover:border-l-4 hover:border-violet-600 hover:text-violet-700 cursor-pointer">
                    <AiOutlineThunderbolt className="text-2xl ml-5 mr-5 "/>
                    <p className="text-md">Live sessions</p>
                    </div>

                    <div className="flex p-5 hover:border-l-4 hover:border-violet-600 hover:text-violet-700 cursor-pointer">
                    <AiOutlineMessage className="text-2xl ml-5 mr-5 "/>
                    <p className="text-md">Messages</p>
                    </div>

                    <div className="flex p-5 hover:border-l-4 hover:border-violet-600 hover:text-violet-700 cursor-pointer">
                    <AiOutlineHeart className="text-2xl ml-5 mr-5 "/>
                    <p className="text-md">Libary</p>
                    </div>

                </div>
           </div>
        </>
  )
}

export default App