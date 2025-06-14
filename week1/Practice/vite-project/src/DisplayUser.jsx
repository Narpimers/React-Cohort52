
function DisplayUser(props) {

    return(
        <div className="user-data">
            <img src= {props.avatar} className="user-avatar user" alt="User IMG"/>
            <h1 className="user">{props.name}</h1>
            <p  className="location">location</p>
            <h2  className="user">{props.location}</h2>
            <p  className="age">age</p>
            <h2  className="user">{props.age}</h2>
            <p  className="likes">Likes</p>
            <h2  className="user">{props.likes}</h2>
        </div>
    )
}


function DisplayUsers({users}) {
    return (
        <div className="user-list">
            {users.map(({name, location, car}, index) => (
                <div className="user users" key={index}>
                    <h3>name: {name}</h3>
                    <h3>location: {location}</h3>
                    <h3>car: {car}</h3>
            </div>
        ))}
        </div>    
    )
}

export { DisplayUser, DisplayUsers };
