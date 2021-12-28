const initialState = {
  appName: "PWA",
  username: "pwaIsAwesome",
  password: "abcd1234",
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_APP_NAME":
      console.log("hello");
      return { ...state, appName: action.payload };
    default:
      return state;
  }
};
