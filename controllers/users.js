import { v4 as uuidv4 } from "uuid";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export const retrieveUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = (req.body)

    let uniqueKey = uuidv4()
    users.push({...user, id: uniqueKey});

    res.send(`User with ID: ${uniqueKey} has been inserted into database`);

}

export const retrieveUser = (req, res) => {
    const userID = req.params.id

    const user = users.find((user) => {
        return user.id == userID
    })
    
    console.log(user)
    res.send(user)
}

export const deleteUser = (req, res) => {
    users = users.filter((user) => {
        return user.id != req.params.id
    })

    res.send(`User with ID: ${user.id} has been deleted`)
}

export const updateUser = (req, res) => {
    const {firstName, lastName, age} = req.body
    const {id} = req.params
    
    const user = users.find((user) => {
        return user.id == id
    })

    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age

    console.log(age)

    res.send(`User with ID: ${user.id} has been updated`)
}