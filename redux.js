export function createStore(reducer) {
  let state;

  // 상태값 밖에서 못바꾸게 closure 사용하여 은닉화
  const getState = () => ({ ...state });

  // 상태가 바뀔때 reducer호출하면 현재 상태와 action을 넘긴다.
  // 값을 리턴해주면 state로 업데이트
  state = reducer(state, {
    type: 'abc',
  });

  return {
    getState,
  };
}
