import createStore from './redux';


function reducer(state, action) {
  if (action.type === 'abc') {
    // 객체 참조형이서 직접 바꾸면 안됨 (새로운 객체로 만들어서 리턴)
    return {
      ...state,
      abc: 1,
    }
  }
}

const store = createStore(reducer);

function update() {
  console.log(store.getState());
}

store.subsribe(update);

// 리덕스 바깥쪽에서 액션을 호출할 수 있다.
store.dispatch({ type: 'abc' });
