import Dropdown from '@/app/ui/dropdown';
import Btvfooter from '@/app/ui/btvfooter';
import SubmitBtn from '@/app/ui/submit-button';

export default async function Home() {
	return (
		<main className="flex-col min-h-screen bg-white p-20 w-full flex justify-center items-center">

			<div className="flex-col bg-white w-2/4 h-2/4 rounded-[20px] justify-center items-center p-8 shadow-[1px_1px_3px_1px_rgba(0,0,0,0.1)]">

				{/* Title */}
				<h1 className="font-semibold text-center text-[#002859] text-3xl select-none">
					Crear pago
				</h1>

				{/* Amount input */}
				<div className="mt-8">
					<label htmlFor="price" className="block text-sm font-semibold leading-6 text-[#002859] select-none">
						Importe a pagar
					</label>
					<div className="relative mt-2 rounded-md shadow-sm">
						<input
							type="text"
							name="price"
							id="price"
							className="block w-full h-2/4 min-h-[3.5rem] text-sm font-light placeholder:text-gray-400 rounded-md border-gray-200 focus:border-white focus:ring-2 focus:ring-indigo-100 focus:ring-opacity-50"
							placeholder="Añade importe a pagar"
						/>
					</div>
				</div>

				{/* Currency input */}
				<div className="mt-8">
					<Dropdown />
				</div>

				{/* Concept input */}
				<div className="mt-8">
					<label htmlFor="price" className="flex text-sm font-semibold leading-6 text-[#002859] select-none z-0">
						Concepto
					</label>
					<div className="relative mt-2 rounded-md shadow-sm">
						<input
							type="text"
							name="price"
							id="price"
							className="block w-full h-2/4 min-h-[3.5rem] text-sm font-light placeholder:text-gray-400 rounded-md border-gray-200 focus:border-white focus:ring-2 focus:ring-indigo-100 focus:ring-opacity-50"
							placeholder="Añade descripción del pago"
						/>
					</div>
				</div>

				{/* Submit button */}
				<div className="mt-8">
					<SubmitBtn />
				</div>

			</div> {/* End of flex-col */}

			{ /* Footer */ }
			<div className="mt-4 select-none">
				<Btvfooter/>
			</div>

		</main>
	);
}
