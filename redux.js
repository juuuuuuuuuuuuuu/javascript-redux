export function createStore(reducer) {
  let state;

  // 상태값 밖에서 못바꾸게 closure 사용하여 은닉화
  const getState = () => ({ ...state });

  // 컴포넌트가 어떤 액션을 하라고 던지는 행위
  // dispatch: 액션을 받아서 리듀서를 호출해준다.
  // 리듀서의 반환받은 값을 업데이트
  const dispatch = (action) => {
    state = reducer(state, action);
  }

  return {
    getState,
    dispatch,
  };
}
