const PersonList = ({ firstName, lastName, email, uuid}) => {
    if (!firstName, !lastName, !email, !uuid) {
        return null;
    }   

    return (
        <ul>{
            <li key={uuid}>
                <div>First name: {firstName}</div>
                <div>Last name: {lastName}</div>
                <div>Email: {email}</div>
                </li>     
            }
        </ul>
    )
    
}

export default PersonList