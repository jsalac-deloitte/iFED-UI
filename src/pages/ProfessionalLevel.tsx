import Navbar from '../components/Navbar'
import { MdAddCircleOutline, MdEdit, MdDeleteForever } from 'react-icons/md'

const ProfessionalLevel: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1 className="bg-[#393939] text-white w-[250px] text-[24px] font-bold text-center rounded-[10px] mt-[20px] mx-auto py-[11px]">
                    Professional Levels
                </h1>
                <p className="max-w-[325px] mt-[20px] mx-auto text-[12px] italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus lectus libero, sit amet rhoncus urna suscipit vitae.
                </p>
                <div className="bg-[#BBBCBC] mt-[20px]">
                    <p className="pt-[20px] pl-[50px] text-[16px]">Add new level</p>
                    <div className="flex justify-between px-[50px] py-[20px]">
                        <input type="text" placeholder="Enter level name..." className="w-[175px] py-[8px] pl-[15px] text-[12px] rounded-[25px]" />
                        <button className="bg-[#198754] flex items-center text-white text-[12px] rounded-[25px] cursor-pointer">
                            <span className="ml-[15px] mr-[3px]">Add</span><MdAddCircleOutline className="w-[20px] h-[20px] my-[5px] mr-[15px]" />
                        </button>
                    </div>
                </div>
                <div className="mt-[20px] mx-auto px-[15px] py-[20px] w-[280px] bg-white rounded-[10px]">
                    <p className="pl-[10px] pb-[25px] bold text-[16px]">List</p>
                    <div className="py-[10px] border-solid border-b border-gray-500 flex justify-between">
                        <span className="pl-[10px] text-[12px] text-[#53565A]">Analyst</span>
                        <div className="mr-[10px] w-[75px] flex justify-between">
                            <button className="bg-[#0D6EFD] flex items-center text-white text-[6px] rounded-[25px] cursor-pointer">
                                <span className="ml-[7px] mr-[3px]">Edit</span><MdEdit className="w-[10px] h-[10px] my-[3px] mr-[5px]" />
                            </button>
                            <button className="bg-[#DC3545] flex items-center text-white text-[6px] rounded-[25px] cursor-pointer">
                                <span className="ml-[5px]">Delete</span><MdDeleteForever className="w-[10px] h-[10px] my-[3px] mr-[3px]" />
                            </button>
                        </div>
                    </div>
                    <div className="py-[10px] border-solid border-b border-gray-500 flex justify-between">
                        <span className="pl-[10px] text-[12px] text-[#53565A]">Consultant</span>
                        <div className="mr-[10px] w-[75px] flex justify-between">
                            <button className="bg-[#0D6EFD] flex items-center text-white text-[6px] rounded-[25px] cursor-pointer">
                                <span className="ml-[7px] mr-[3px]">Edit</span><MdEdit className="w-[10px] h-[10px] my-[3px] mr-[5px]" />
                            </button>
                            <button className="bg-[#DC3545] flex items-center text-white text-[6px] rounded-[25px] cursor-pointer">
                                <span className="ml-[5px]">Delete</span><MdDeleteForever className="w-[10px] h-[10px] my-[3px] mr-[3px]" />
                            </button>
                        </div>
                    </div>
                    <div className="py-[10px] border-solid border-b border-gray-500 flex justify-between">
                        <span className="pl-[10px] text-[12px] text-[#53565A]">Senior Consultant</span>
                        <div className="mr-[10px] w-[75px] flex justify-between">
                            <button className="bg-[#0D6EFD] flex items-center text-white text-[6px] rounded-[25px] cursor-pointer">
                                <span className="ml-[7px] mr-[3px]">Edit</span><MdEdit className="w-[10px] h-[10px] my-[3px] mr-[5px]" />
                            </button>
                            <button className="bg-[#DC3545] flex items-center text-white text-[6px] rounded-[25px] cursor-pointer">
                                <span className="ml-[5px]">Delete</span><MdDeleteForever className="w-[10px] h-[10px] my-[3px] mr-[3px]" />
                            </button>
                        </div>
                    </div>
                    <div className="py-[10px] border-solid border-b border-gray-500 flex justify-between">
                        <span className="pl-[10px] text-[12px] text-[#53565A]">Manager</span>
                        <div className="mr-[10px] w-[75px] flex justify-between">
                            <button className="bg-[#0D6EFD] flex items-center text-white text-[6px] rounded-[25px] cursor-pointer">
                                <span className="ml-[7px] mr-[3px]">Edit</span><MdEdit className="w-[10px] h-[10px] my-[3px] mr-[5px]" />
                            </button>
                            <button className="bg-[#DC3545] flex items-center text-white text-[6px] rounded-[25px] cursor-pointer">
                                <span className="ml-[5px]">Delete</span><MdDeleteForever className="w-[10px] h-[10px] my-[3px] mr-[3px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProfessionalLevel