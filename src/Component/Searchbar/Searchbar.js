import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Field, Label, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import loadbar from '../../asset/loading.gif';

export default function Searchbar() {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState()
    // console.log(selected)

    const { data, loading, error } = useFetch("https://dummyjson.com/users")

    const filteredPeople =
        query === '' || !Array.isArray(data.users) // Check if data.users is not an array
            ? []
            : data.users.filter((person) => {
                return person.firstName.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <>
            <div className='relative sm:max-w-[600px] lg:max-w-[1240px] mx-auto mt-20 mb-10 bg-gray-200 rounded-xl'>
                <p className='absolute top-6 left-16 text-lg font-medium'>Enter User Name</p>
                <div className='flex'>
                    <div className="sm:w-[360px] lg:w-[1000px] ml-auto mr-8 py-16">
                        <Combobox value={selected} onChange={(value) => setSelected(value)}>
                            <div className="relative">
                                <ComboboxInput
                                    className={clsx(
                                        'w-full rounded-lg border-none bg-white py-1.5 pr-8 pl-3 text-sm/6 text-black',
                                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/2'
                                    )}
                                    displayValue={(person) => person}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                                <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                                    <ChevronDownIcon className="size-4 fill-black/60 group-data-[hover]:fill-black" />
                                </ComboboxButton>
                            </div>
                            <Transition
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery('')}
                            >
                                <ComboboxOptions
                                    anchor="bottom"
                                    className="lg:w-[1000px] rounded-xl border border-black/3 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
                                >
                                    {data && filteredPeople.map((person) => (
                                        <ComboboxOption
                                            key={person.id}
                                            value={person.firstName}
                                            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
                                        >
                                            {/* <CheckIcon className="invisible size-5 group-data-[selected]:visible" /> */}
                                            <img className='max-w-[16px]' src={person.image} />
                                            <div className="text-sm/6 text-black">{person.firstName}</div>
                                        </ComboboxOption>
                                    ))}
                                </ComboboxOptions>
                            </Transition>
                        </Combobox>
                    </div>
                    <Link to={`/search/${selected}`} >
                        <div className='flex justify-center items-center bg-orange-500 my-16 mr-20 rounded-lg'>
                            <button className='p-2 text-base font-medium text-white'>Search</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}