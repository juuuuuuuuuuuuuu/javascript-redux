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

dispatchEvent({ type: 'abc' });

console.log(store.getState());
