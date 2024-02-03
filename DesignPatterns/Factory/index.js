const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
})

const user1 = createUser({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com'
})

const user2 = createUser({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@doe.com'
})

console.log(user1);
console.log(user2);

const createObjectFromArray = ([key, value]) => ({
    [key]: value
})

const user3 = createObjectFromArray(['name', 'John']);

console.log(user3);