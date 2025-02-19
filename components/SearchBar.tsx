"use client";

const SearchBar = () => {
	const handleSubmit = () => {};

	return (
		<form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
			<input
				className="searchbar-input"
				type="text"
				placeholder="Enter product link"
			/>
			<button className="searchbar-btn" type="submit">
				Search
			</button>
		</form>
	);
};

export default SearchBar;
