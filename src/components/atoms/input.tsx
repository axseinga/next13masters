import React, { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	type: "text" | "number" | "email" | "date";
	placeholder: string;
	variant?: "input" | "textarea";
}

export const Input = ({ name, label, type, placeholder, variant }: InputProps) => {
	return (
		<div className="mb-6 w-full px-3 md:mb-0">
			<label
				htmlFor={name}
				className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400"
			>
				{label}
			</label>
			{variant === "textarea" ? (
				<textarea
					id={name}
					name={name}
					placeholder={placeholder}
					className={`mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
					rows={4}
					cols={50}
				/>
			) : (
				<input
					type={type}
					id={name}
					placeholder={placeholder}
					name={name}
					className={`mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
				/>
			)}
		</div>
	);
};
