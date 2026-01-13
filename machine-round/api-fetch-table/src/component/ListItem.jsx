import React from 'react';

const ListItem   = ({user}) => {
    const {id,name, email,website='N/A',address : {street,city,zipcode}, phone} = user
    return (
          <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{website}</td>
              <td>{phone}</td>
              <td>{`${street}, ${city}, -  ${zipcode}`}</td>
          </tr>
     
    );
}

export default ListItem ;
