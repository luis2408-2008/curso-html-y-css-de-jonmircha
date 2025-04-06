const users = [
    {
        id: 1,
        name: 'luis'
    },

    {
        id: 2,
        name: 'luisa'
    }
];

 const getUserById =  ( id, callback ) => {

   const user =  users.find((user) => user.id === id);
             
    
  
    if (!user) {

        return callback(`user not found with id ${id}`);

    }

    return callback(null, user)
  
}

module.exports = {
    getUserById,
}

