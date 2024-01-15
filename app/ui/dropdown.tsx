'use client';

import { useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { fetchCurrencies } from '../lib/data';
import Image from 'next/image';

export default function Dropdown() {
	
	const [selectedCurrency, setSelectedCurrency] = useState(null);
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchCurrencies();
				setCurrencies(data);
				setSelectedCurrency(data[1]); // Default selected currency
			} catch (error) {
				console.error('Error fetching currencies:', error);
			}
		};
		fetchData();
	}, []);

	if (!selectedCurrency) {
		return <div>
					Loading...
			   </div>;
	}

	return (
		
		<div className="mt-2">

			<label htmlFor="price" className="flex text-sm font-semibold leading-6 text-[#002859] select-none">
				Seleccionar moneda
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(0, 0, 0, 0.5)" className="w-4 h-4 self-center ml-1">
					<path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
				</svg>
			</label>

			<Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
				{({ open }) => (
					<>
						<Listbox.Button className="block border mt-2 w-full h-2/4 p-3 text-sm font-light rounded-md border-gray-200 focus:border-white focus:ring-2 focus:ring-indigo-100 focus:ring-opacity-50">
							<div className="flex items-center">
								<Image src={selectedCurrency.image as string} alt={selectedCurrency.name} width={30} height={30} />
								<span className="ml-2">{selectedCurrency.name}</span>
							</div>
						</Listbox.Button>

						<Transition
							show={open}
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Listbox.Options
								static
								className="absolute z-10 mt-1 w-[30%] bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
							>
								{currencies.map((currency) => (
									<Listbox.Option
										key={currency.id}
										className={({ active }) => `${active ? 'text-white bg-[#002859]' : 'text-gray-900'} cursor-pointer select-none relative py-2 pl-10 pr-4`}
										value={currency}
									>
										{({ selected, active }) => (
											<>
												<div className="flex items-center">
													<Image src={currency.image as string} alt={currency.name} width={30} height={30} />
													<span className={`${selected ? 'font-semibold' : 'font-normal'} ml-2 block truncate`}>
														{currency.name}
													</span>
												</div>

												{selected ? (
													<span className={`${active ? 'text-white' : 'text-[#002859]'} absolute inset-y-0 left-0 flex items-center pl-3`}>
														{/* Checkmark */}
														<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
															<path fillRule="evenodd" d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
														</svg>
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</>
				)}
			</Listbox>
		</div>
	);
}
