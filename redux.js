export function createStore(reducer) {
  let state;
  let listener = [];

  // 상태값 밖에서 못바꾸게 closure 사용하여 은닉화
  const getState = () => ({ ...state });

  // 컴포넌트가 어떤 액션을 하라고 던지는 행위
  // dispatch: 액션을 받아서 리듀서를 호출해준다.
  // 리듀서의 반환받은 값을 업데이트
  const dispatch = (action) => {
    state = reducer(state, action);
    // 리스너 내에 있는 함수를 호출해준다. (값이 바뀌었다고 알려줌)
    listener.forEach((fn) => fn());
  };

  // 컴포넌트에서는 getState해야만 state 변화에 대해서 알 수 있으므로 통지해줘야함
  const subscribe = (fn) => {
    listener.push(fn);
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
}
