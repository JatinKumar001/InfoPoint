import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import useFetch from '../../Hooks/useFetch';
import Userlogo from '../../asset/user.png'
import loadbar from '../../asset/loading.gif';
import Call from '../../asset/call.svg'
import Send from '../../asset/send.svg'
import Company from '../../asset/company.svg'
import Address from '../../asset/address.svg'
import City from '../../asset/city.svg'
import PostalCode from '../../asset/code.svg'

export default function ItemCard() {

    const { data, loading, error } = useFetch("https://dummyjson.com/users")
    console.log(data.users)

    if (!data || !Array.isArray(data.users)) {
        return (
            <div className='max-w-[1240px] m-auto px-4 py-12'>
                <h1 className='text-orange-600 font-bold text-4xl text-center'>
                    Users Detail
                </h1>
                <div className='flex justify-center py-12'>
                    <img src={loadbar} alt="loading" />
                </div>
            </div>
        );
    }

    return (
        <div className='max-w-[1240px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center pb-10'>
                Users Detail
            </h1>

            {/* diplay detail */}
            <AnimatePresence>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
                    {data.users.map((item, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            key={item.id}
                            className="border shadow-lg rounded-3xl hover:scale-105 duration-500 cursor-pointer overflow-hidden"
                        >
                            <div className='flex px-4'>
                                <div className='flex flex-col m-auto py-4'>
                                    <div className='min-w-[100px] flex justify-center items-center'>
                                        <img className='h-[80px] md:h-[100px] object-cover rounded-full border shadow-lg' src={item.image || Userlogo} alt={item.firstName} />
                                    </div>
                                    <div className='px-2 py-4'>
                                        <div className='flex flex-col items-center justify-between pb-5'>
                                            <p className='text-orange-500 font-bold text-xl'>{item.firstName} {item.lastName}</p>
                                            <p className='text-black-500 text-base pt-2'>{item.company.title}</p>
                                        </div>
                                        <div className='grid grid-cols-3 gap-3 px-4 py-5 bg-gray-100 rounded-lg'>
                                            <div className='text-center'>
                                                <p className='text-cyan-500 text-lg font-semibold'>{item.age}</p>
                                                <p className='text-gray-500 text-base'>Age</p>
                                            </div>
                                            <div className='text-center' >
                                                <p className='text-cyan-500 text-lg font-semibold capitalize'>{item.gender}</p>
                                                <p className='text-gray-500 text-base'>Gender</p>
                                            </div>
                                            <div className='text-center' >
                                                <p className='text-cyan-500 text-lg font-semibold'>{item.address.city}</p>
                                                <p className='text-gray-500 text-base'>City</p>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2 sm:gap-28 md:grid-cols-1 md:gap-0 lg:grid-cols-1'>
                                            <div className='flex flex-col pt-10'>
                                                <p className='pb-2 font-medium'>Contact Details</p>
                                                <p className='flex text-gray-500 pb-1'><img className='pr-2' src={Call} />{item.phone}</p>
                                                <p className='flex text-gray-500'><img className='pr-2' src={Send} />{item.email}</p>
                                            </div>
                                            <div className='flex flex-col pt-10 sm:w-[200px] md:w-full'>
                                                <p className='pb-2 font-medium'>Working History</p>
                                                <p className='flex text-gray-500 pb-1'><img className='pr-2' src={Company} />{item.company.name}</p>
                                                <p className='flex text-gray-500 pb-1'><img className='pr-2' src={Address} />{item.company.address.address}</p>
                                                <p className='flex text-gray-500 pb-1'><img className='pr-2' src={City} />{item.company.address.city}</p>
                                                <p className='flex text-gray-500'><img className='pr-2' src={PostalCode} />{item.company.address.postalCode}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    )
}
