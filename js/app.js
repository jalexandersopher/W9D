

var tweets = [
    {
        tweet: "tweet 1",
        username: "Jake",
        age: 26,
        created_at: "05-15-2020"
    },

    {
        tweet: "tweet 2",
        username: "Ben",
        age: 21,
        created_at: "05-16-2020"
    },

    {
        tweet: "tweet 3",
        username: "Mike",
        age: 28,
        created_at: "05-17-2020"
    },
];



for(var index = 0; index < tweets.length; index++) {
    console.log(tweets[index].tweet);
    console.log(tweets[index].username);
    console.log(tweets[index].created_at);
    console.log("-----------------------");
};