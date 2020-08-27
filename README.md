# CHECKLIST

#### FRONTEND

- [x] Create a React App.
- [x] Make 3 routes, (using react-router-dom) '/', '/login' & '/signup'.

#### BACKEND

- [x] Create an express server.
- [x] Add POST routes for login, signup.

#### FRONTEND

- [x] Create auth form(s).
- [x] Fetch POST reqs to the server with the FormData(s).

#### BACKEND

- [x] Add Signup auth logic.

  - [x] Add a user doc the DB.
  - [x] Error handling.
  - [x] Password hashing using bcrypt & mongoose hooks.
  - [x] Send a JWT after the user successfully signs-up.

- [x] Add Login auth logic.

  - [x] Error handling.
  - [x] Redirect to Main app route.
  - [x] Send a JWT after the user successfully logs in.

#### FRONTEND

- [x] Make a PrivateRoute component which will be used for components that only authed users can access.
  - [x] Make an isLoggedIn func that returns a hardcoded true/false value (just for now) & complete the PrivateRoute component.
  - [ ] If an authed user goes to the login/signup route, redirect them to the Main app route.
  - [ ] Add JWT logic to the isLoggedIn func.

#### MOSTLY BACKEND

- [ ] For every user added to the 'users' collection, add a userData doc to the 'userDatas' collection, in the DB.

  - [ ] The userData doc should look something like this in the DB, so, create a similar DB model/schema :
    - userData1
    - userData2
      - id : exactly the same as the user's id.
      - profile : an object containing the user's profile info like bio, etc.
      - followers : an array of id(s) of the accounts that the user is followed by.
      - following : an array of id(s) of accounts that the user follows.
      - posts : an object containing the user's posts.
        - post1
        - post2
        - post3
          - id
          - createdAt
          - caption
          - photo/video
          - likes
          - dislikes
          - comments
            - comment1
            - comment2
              - author
              - commentText
              - createdAt
  - [ ] Give the user read/write access to their own userData & read access to other's userData.

  - [ ] Add upload post functionality.

    - [ ] Add POST route in the server to get the post details on the server.
    - [ ] Get the user's userData doc & add the post to it.

- [ ] Add the Feed functionality.

  - [ ] Show the latest posts of the user's following on the frontend.

- [ ] Add like, dislike & comment functionality on the posts.
- [ ] Show the post's comment in the comment section of the post. (frontend)

- [ ] After sign-up, give the user a list of random accounts to follow & have a feed.

  - [ ] Add search functionality in there too.

- [ ] Clean the code.

#### FRONTEND

- [ ] Add the final UI.
