import "./App.css";
import "./Component/search-box/searchList.styles.css";
import { ChangeEvent, useEffect, useState } from "react";
import Users from "./Component/monsters-list/Users.component";
import Search from "./Component/search-box/SearchList.component";
import { getUsers } from "./utils/data.utils";

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [users, setUsers] = useState<Monster[]>([]);
	const [title, setTitle] = useState("Kitties Rolodex");

	const [usersBufor, setUsersBufor] = useState(users);
	const [searchField, setSearchField] = useState("");

	// Monsters downloading start
	useEffect(() => {
		(async () => {
			// console.log("Users");
			const users = await getUsers<Monster[]>("users/");
			setUsers(users);
		})();
	}, []);

	useEffect(() => {
		// console.log("Filter");
		const temp = users.filter((user) => {
			// console.log(searchField, user);
			return user.name.toLowerCase().includes(searchField.toLowerCase());
		});
		setUsersBufor(temp);
	}, [searchField, users]);

	const onSearchChangeHandler = (
		event: ChangeEvent<HTMLInputElement>
	): void => {
		setSearchField(event.target.value);
	};

	const onTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setTitle(event.target.value);
	};

	return (
		<div className='App'>
			<header>
				<h1 className='app-title'>{title}</h1>
			</header>
			<Search
				onChangeHandler={onSearchChangeHandler}
				className='search-box'
				placeholder='Find your monster'></Search>
			<br />
			<Search
				onChangeHandler={onTitleChangeHandler}
				className='Title search-box'
				placeholder='Your Title!'></Search>

			<Users users={usersBufor}></Users>
		</div>
	);
};
export default App;
