"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import {
	Description,
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
} from "@headlessui/react";

const Modal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button type="button" className="btn" onClick={openModal}>
				Track
			</button>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" onClose={closeModal} className="dialog-container">
					<div className="min-h-sccreen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0"></div>
						</Transition.Child>
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						/>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="dialog-content">
								<div className="flex flex-col">
									<div className="flex justify-between">
										<div className="p-3 border border-gray-200 rounded-10">
											<Image
												src="/assets/icons/logo.svg"
												alt="logo"
												width={28}
												height={28}
											/>
										</div>
										<Image
											src="/assets/icons/x-close.svg"
											alt="close"
											width={24}
											height={24}
											className="cursor-pointer"
											onClick={closeModal}
										/>
									</div>
									<h4>
										Stay updated with product pricing alerts right in your
										inbox!
									</h4>
									<p>Never miss a bargin again with out imely alerts!</p>
								</div>
								<form className="flex flex-col mt-5">
									<label
										htmlFor="email"
										className="text-sm font-bold text-gray-700"
									>
										Email Address
									</label>
									<div className="dialog-input_container">
										<Image
											src="/assets/icons/mail.svg"
											alt="mail"
											width={18}
											height={18}
										/>
										<input
											required
											type="email"
											id="email"
											placeholder="Enter your email address"
											className="dialog-input"
										/>
									</div>
								</form>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Modal;
