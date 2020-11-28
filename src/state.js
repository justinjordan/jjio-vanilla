export default class State {
  constructor(initialState = {}) {
    Object.assign(this, initialState);
    return new Proxy(this, {
      subscribers: [],
      get(state, prop) {
        switch (prop) {
          case 'subscribe':
            return callback => {
              if (typeof callback !== 'function') {
                throw new Error('onChange callback must be a function');
              }
              this.subscribers.push(callback);
              callback(state, state);
            };
          default:
            return state[prop];
        }
      },
      set(state, prop, value) {
        const oldState = {...state};
        state[prop] = value;

        for (let subscriber of this.subscribers) {
          subscriber(state, oldState);
        }

        return true;
      },
    });
  }
}
