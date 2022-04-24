import Users from "./Users";

function UserCard(props) {
  return (
    <div>
      <section>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <p>{props.email}</p>
        <img src={props.avatar} alt="user photo" />
      </section>
    </div>
  );
}
export default UserCard;
