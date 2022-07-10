import { ChangeEvent } from "react";

interface ISearchBoxProps {
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	className: string;
	placeholder?: string;
}

const Search = ({
	onChangeHandler,
	className,
	placeholder,
}: ISearchBoxProps) => {
	// console.log("Propsyy", this.props);
	return (
		<input
			className={`search-box ${className}`}
			type='search'
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};
export default Search;
