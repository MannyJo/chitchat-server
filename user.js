const users = [];

const getUser = id => users.find(user => user.id === id);

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find(user => user.name === name && user.room === room);

    if(existingUser) return { error: 'Name is already taken!' };
    if(!name || !room) return { error: 'Name and Room are required!' };

    const user = { id, name, room };
    users.push(user);

    return { user };
}

const removeUser = id => {
    const index = users.findIndex(user => user.id === id);

    if(index > -1) {
        return users.splice(index, 1)[0];
    }
}

module.exports = {
    getUser,
    addUser,
    removeUser
};