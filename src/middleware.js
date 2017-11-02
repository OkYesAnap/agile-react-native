import Api from "./api";

const loadMiddleware = store => next => action => {
  if (action.type === "STACK_OVERFLOW_DATA") {
    console.log(action);
    store.dispatch({
      type: "LOADING",
      stackOverflowData: ["Wait please, loading"]
    });
    Api.loading()
      .then(data => {
        store.dispatch({
          type: "LOADED",
          stackOverflowData: data.items
        });
      })
      .catch(err => {
        store.dispatch({
          type: "FAIL",
          stackOverflowData: ["ERROR"]
        });
      });
  }
  next(action);
};

export default loadMiddleware;
