import createStore from './redux';


// state의 어떤 값을 바꿀껀지 넘겨줌
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



