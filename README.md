# Logd.

A simple nutrition tracking application with a joyful UI design. It allows the user to pick products for a snack/meal/day, review them before submission and then see the log on their home screen with useful data visualization.

# Getting Started

As general setup, fork this repository and clone it to your local machine through `git clone <link of the repository goes here>`
To start using this application, you will need to make sure that you have:

1. [Expo CLI](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZx5ujyYTrAhUQAxAIHXUBCHwQFjAAegQIARAB&url=https%3A%2F%2Fdocs.expo.io%2Fworkflow%2Fexpo-cli%2F&usg=AOvVaw3tUXMcupxXA_6qZNa5eelg) installed. Follow [this](https://reactnative.dev/docs/environment-setup) documentation on how to setup Expo CLI for react native.
2. MongoDB installed and running as a background or **brew** process. Follow [this](https://docs.mongodb.com/manual/administration/install-community/) documentation to set up MongoDB on your platform
   After completing the steps above, follow the step below in order:

### 1. Root

In the root folder (this), run `npm install`.

### 2. Client

From the root folder, run:

```sh
$ cd client
$ npm install
$ npm start
```

### 3. Server

Come back to the root folder by running `cd ..`, and then run:

```sh
$ cd server
$ npm install
$ nodemon index.js
```

### 4. Final

At this point, the project client and server sides should be up an running. Once again, make sure that MongoDB is running in the background, as the server needs it to send data to the client.

# Tech Stack

| _Front-End_      | Back-End                      |
| ---------------- | ----------------------------- |
| **React**        | **MongoDB** with **Mongoose** |
| **React-Native** | **Node.js**                   |
| **Expo**         | **Express**                   |
