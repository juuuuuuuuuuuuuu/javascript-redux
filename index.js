import createStore from './redux';

// 액션타입: 공통되는 것들 상수로 선언
const INCREMENT = 'increment';
const RESET = 'reset';

function reducer(state = {}, action) {
  if (action.type === INCREMENT) {
    // 객체 참조형이서 직접 바꾸면 안됨 (새로운 객체로 만들어서 리턴)
    return {
      ...state,
      count: state.count ? state.count + 1 : 0,
    };
  } else if (action.type === RESET) {
    return {
      ...state,
      count: action.resetCount,
    }
  }
}

const store = createStore(reducer);

function update() {
  console.log(store.getState());
}

store.subsribe(update);

// 공통되는 것들 함수로 감싼다.
function actionCreator(type, data) {
  return {
    ...data,
    type: type
   };
}

// 함수로 감싼다.
function increment() {
  // 리덕스 바깥쪽에서 액션을 호출할 수 있다.
  store.dispatch(actionCreator(INCREMENT));
}

function reset() {
  store.dispatch(actionCreator(RESET, 10))
}

increment();
increment();
increment();

reset();
