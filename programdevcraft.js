// simple_social_network.js

class User {
    constructor(name) {
        this.name = name;
        this.friends = [];
        this.posts = [];
    }

    addFriend(user) {
        this.friends.push(user);
        user.friends.push(this);
    }

    addPost(content) {
        const post = { content, author: this };
        this.posts.push(post);
    }

    viewTimeline() {
        console.log(`Timeline for ${this.name}:`);
        this.posts.forEach(post => console.log(`${post.author.name}: ${post.content}`));
    }
}

// Example usage
const user1 = new User('Alice');
const user2 = new User('Bob');
user1.addFriend(user2);
user1.addPost('Hello, everyone!');
user2.addPost('Hi, there!');
user1.viewTimeline();
user2.viewTimeline();
