class ChatRoom {
    logMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} [${sender}]: ${message}`);
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatroom.logMessage(this, message);
    }
}

const chatroom = new ChatRoom();
const user1 = new User('Romie', chatroom);
const user2 = new User('Jack', chatroom);
const user3 = new User('Brian', chatroom);

user1.send('Hey!! Romie this side');
user2.send('Hey Romie!!, Jack this side');
user3.send('Hii everyone');