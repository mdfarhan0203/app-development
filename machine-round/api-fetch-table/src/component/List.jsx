import ListItem from './ListItem.jsx'

const List = ({users}) => {
    return (

        <div>
            {users && users?.length > 0 ?
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                         <th>Phone No</th>
                        <th>Address</th>
                    </tr>
                </thead>
            <tbody>
            {users?.map((user) => {
                return <ListItem user={user} />
            })}
             </tbody>
            </table>
            :
            <p>No user found</p>
            }
        </div>
    )
}

export default List