import { Userdatas } from "../data";
const initState = {
  entities: Userdatas,
  admin: null,
};

export default function sign_auth(state = initState, action) {
  switch (action.type) {
    case "sign":
      const user = action.payload;
      return {
        ...state,
        entities: [...state.entities, user],
        admin: user,
      };
    case "log":
      const login = action.payload;
      return {
        ...state,
        admin: login,
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
      return {
        ...state,
        entities: state.entities.filter((user) => user.id !== deleteduserId),
      };
    default:
      return state;
  }
}


export const selectusers = (state) => state.users.entities;
