function result() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        get title() {
            return this._title;
        }

        set title(value) {
            this._title = value;
        }

        get content() {
            return this._content;
        }

        set content(value) {
            this._content = value;
        }

        toString() {
            let output = `Post: ${this.title}`;
            output += `\nContent: ${this.content}`;
            return output;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.postLikes = Number(likes);
            this.postDislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let newToString = super.toString();
            newToString += `\nRating: ${this.postLikes - this.postDislikes}`;
            if (this.comments.length > 0) {
                newToString += `\nComments:`;
                for (let comment of this.comments) {
                    newToString += `\n * ${comment}`;
                }
            }
            return newToString;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `${super.toString()}\nViews: ${this.views}`;
        }
    }

    return {
        Post: Post,
        SocialMediaPost: SocialMediaPost,
        BlogPost: BlogPost
    }
}

let classes = result();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();
console.log(test.toString());

