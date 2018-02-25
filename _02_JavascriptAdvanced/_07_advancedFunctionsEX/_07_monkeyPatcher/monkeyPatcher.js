let result = {
    call: (function () {
        let post;
        return function (obj, command) {
            post = obj;
            function upvote() {
                post.upvotes++;
            }
            function downvote() {
                post.downvotes++;
            }
            function score() {
                let reportedUpvotes;
                let reportedDownvotes;
                let addionalSum;
                if (post.upvotes + post.downvotes > 50) {
                    if (post.upvotes >= post.downvotes) {
                        addionalSum = post.upvotes * 0.25;
                        reportedUpvotes = Math.ceil(post.upvotes + addionalSum);
                        reportedDownvotes = Math.ceil(post.downvotes + addionalSum);
                    } else {
                        addionalSum = post.downvotes * 0.25;
                        reportedUpvotes = Math.ceil(post.upvotes + addionalSum);
                        reportedDownvotes = Math.ceil(post.downvotes + addionalSum);
                    }
                } else {
                    reportedUpvotes = post.upvotes;
                    reportedDownvotes = post.downvotes;
                }
                let score = post.upvotes - post.downvotes;
                let rating;
                let allVotes = post.upvotes + post.downvotes;
                let someOfTheVotesAreOver100 = post.upvotes > 100 || post.downvotes > 100;
                let positivePercentage = post.upvotes / (allVotes / 100);
                if (post.upvotes + post.downvotes < 10) {
                    if (score < 0 || positivePercentage > 66) {
                        rating = 'new';
                    } else {
                        rating = null;
                    }
                } else {
                    if (positivePercentage > 66 && score >= 90) {
                        rating = 'hot';
                    } else if (score >= 0 && positivePercentage <= 66 && someOfTheVotesAreOver100) {
                        rating = 'controversial';
                    } else if (score < 0) {
                        rating = 'unpopular';
                    } else if (score >= 0 && score < 90) {
                        rating = null;
                    }
                }
                let output3 = [reportedUpvotes, reportedDownvotes, score];
                let output4 = [reportedUpvotes, reportedDownvotes, score, rating];
                return rating === null ? output3 : output4;
            }
            switch (command) {
                case 'upvote':
                    return upvote();
                case 'downvote':
                    return downvote();
                case 'score':
                    return score();
            }
        }
    })()
};

//Test 8
//var expected = [4, 5, -1, 'new'];
// var forumPost = {
//     id: '1234',
//     author: 'author name',
//     content: 'these fields are irrelevant',
//     upvotes: 4,
//     downvotes: 5
// };
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Test 7
//var expected = [250, 250, 0, 'controversial'];
// var forumPost = {
//     id: '1234',
//     author: 'author name',
//     content: 'these fields are irrelevant',
//     upvotes: 200,
//     downvotes: 200
// };
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Test 6
//var expected = [125, 25, 100, 'hot'];
// var forumPost = {
//     id: '1234',
//     author: 'author name',
//     content: 'these fields are irrelevant',
//     upvotes: 100,
//     downvotes: 0
// };
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Test 5
//var expected = [0, 10, -10, 'unpopular'];
// var forumPost = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 0,
//     downvotes: 10
// };
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Test 4
//var expected = [1, 0, 1, 'new'];
// var forumPost = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 1,
//     downvotes: 0
// };
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Test 3
//var expected = [50, 0, 50];
//var expected = [64, 13, 51];
// var forumPost = {
//     id: '1234',
//     author: 'author name',
//     content: 'these fields are irrelevant',
//     upvotes: 50,
//     downvotes: 0
// };
// var answer = result.call(forumPost, 'score');
// console.log(answer);
// result.call(forumPost, 'upvote');
// answer = result.call(forumPost, 'score');
// console.log(answer);

//Test 2
//var expected = [1, 1, 0];
// var forumPost = {
//     id: '1234',
//     author: 'author name',
//     content: 'these fields are irrelevant',
//     upvotes: 0,
//     downvotes: 0
// };
// result.call(forumPost, 'upvote');
// result.call(forumPost, 'downvote');
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Test 1
//var expected = [1, 1, 0];
// var forumPost = {
//     id: '1234',
//     author: 'author name',
//     content: 'these fields are irrelevant',
//     upvotes: 1,
//     downvotes: 1
// };
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Zero 3
//var expected = [127, 127, 0, 'controversial'];
// var forumPost = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };
// result.call(forumPost, 'upvote');
// result.call(forumPost, 'downvote');
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Zero 2
//var expected = [150, 60, 90, 'hot'];
// var forumPost = {
//     id: '2',
//     author: 'gosho',
//     content: 'whats up?',
//     upvotes: 120,
//     downvotes: 30
// };
// var answer = result.call(forumPost, 'score');
// console.log(answer);

//Zero 1
//var expected = [1, 0, 1, 'new'];
// var forumPost = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 0,
//     downvotes: 0
// };
// result.call(forumPost, 'upvote');
// var answer = result.call(forumPost, 'score');
// console.log(answer);


