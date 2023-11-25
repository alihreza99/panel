const initState = {
  entities: [
    {
      username: "ali",
      id: 1,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "124.32$",
      email: "ali@gmail.com",
      pass: "1234",
    },
    {
      username: "arshia",
      id: 2,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "44.51$",
      email: "arshia@gmail.com",
      pass: "1235",
    },
    {
      username: "sogand",
      id: 3,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "255.11$",
      email: "sogand@gmail.com",
      pass: "1236",
    },
    {
      username: "mahan",
      id: 4,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "22.65$",
      email: "mahan@gmail.com",
      pass: "1237",
    },
    {
      username: "reza",
      id: 5,
      img: "./App/Pics/profilepic.jpg",
      status: "deactive",
      transaction: "522.65$",
      email: "reza@gmail.com",
      pass: "1238",
    },
  ],
  admin: null,
};

export default function sign_log_control(state = initState, action) {
  switch (action.type) {
    case "sign":
      const user = action.payload;
      return {
        ...state,
        entities: [...state.entities, user],
        admin: user,
      };
    case "log":
      const log = action.payload;
      
      return {
        ...state,
        admin: log,
      };
    case "logout":
      return {
        ...state,
        admin: null,
      };
    case "edit":
      const edit = action.payload;
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
              id: edit.id,
            };
          }

          return user;
        }),
      };
    case "delete":
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
