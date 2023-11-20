const initState = {
  entities: [
    {
      username: "ali",
      id: 1,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "124.32$",
      email: "ali@gmail.com",
    },
    {
      username: "arshia",
      id: 2,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "44.51$",
      email: "arshia@gmail.com",
    },
    {
      username: "sogand",
      id: 3,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "255.11$",
      email: "sogand@gmail.com",
    },
    {
      username: "mahan",
      id: 4,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "22.65$",
      email: "mahan@gmail.com",
    },
    {
      username: "reza",
      id: 5,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "522.65$",
      email: "reza@gmail.com",
    },
  ],
};

export default function sign_log_control(state = initState, action) {
  switch (action.type) {
    case "sign":
      const user = action.payload;
      return {
        ...state,
        entities: [...state.entities, user],
      };
    case "log":
      const log = action.payload;
      return {
        ...state,
        entities: state.entities.map((user) => {
          if (user.username == log.username) {
            console.log("این یوزر وجود دارد");
          } else {
            console.log("این یوزر وجود ندارد");
          }
          return user;
        }),
      };
    case "edit":
      const edit = action.payload;
      console.log(edit.id);
      return {
        ...state,
        entities: state.entities.map((user) => {
          if (user.id == edit.id) {
            return {
              ...state,
              username: edit.username,
              status: edit.status,
              email: edit.email,
              transaction: edit.transaction,
              id: edit.id
            };
          }

          return user;
        }),
      };
    case "log_out":
      const deleteduserId = action.payload;
      console.log(deleteduserId);
      return {
        ...state,
        entities: state.entities.filter((user) => user.id !== deleteduserId),
      };
    default:
      return state;
  }
}

// export const addtousers = (text) => ({
//   type: "sign",
//   payload: text,
// });

export const selectusers = (state) => state.users.entities;
