import UserCard from "./card/UsersCard.component";
import "./users-card.styles.css";

import { Monster } from "../../App";

type CardListProps = {
	users: Monster[];
};

const Users = ({ users }: CardListProps) => {
	// console.log(users);
	return (
		<div className='card-list'>
			{users.map((Monster) => {
				return <UserCard key={Monster.id} user={Monster} />;
			})}
		</div>
	);
};

export default Users;
