import UserCard from "./UserCard";

function Users(props) {
  console.log(props.data);
  return (
    <div>
      <div className="card">
        {props.data.map((user) => (
          <UserCard
            key={user.id}
            email={user.email}
            firstName={user.first_name}
            lastName={user.last_name}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
}
export default Users;
