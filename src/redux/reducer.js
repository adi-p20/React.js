export default function reducer(state = { users: [] }, action) {
  let newState = { ...state };
  switch (action.type) {
    case "FETCH_USERS":
      newState.users = action.payload;
      return newState;

    case "CREATE_USERS":
      newState.users.push({
        id: parseInt(action.payload.id),
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        dob: action.payload.dob,
        contact_no: [action.payload.contact1, action.payload.contact2],
        city: action.payload.city,
        state: action.payload.state,
      });

      return newState;
    case "UPDATE_USERS":
      console.log(newState.users);
      console.log(action.payload);
      newState.users.forEach((user) => {
        if (user.id === parseInt(action.payload.id)) {
          if (action.payload.first_name) {
            user.name.first_name = action.payload.first_name;
          }
          if (action.payload.last_name) {
            user.name.last_name = action.payload.last_name;
          }
          if (action.payload.dob) {
            user.dob = action.payload.dob;
          }
          if (action.payload.contact1 && action.payload.contact2) {
            user.contact_no[0] = action.payload.contact1;
            user.contact_no[1] = action.payload.contact2;
          }
          if (action.payload.city) {
            user.city = action.payload.city;
          }
          if (action.payload.state) {
            user.sstate = action.payload.state;
          }
        }
      });

      return newState;
    case "DELETE_USERS":
      for (var i = 0; i < newState.users.length; i++) {
        if (newState.users[i].id === parseInt(action.payload.id)) {
          newState.users.splice(i, 1);
        }
      }
      return newState;
    default:
      return state;
  }
}
