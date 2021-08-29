const initialState = {
  fuga: 1
}

// action.typeに応じたアクションを元に状態遷移
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { fuga: state.fuga + 1 }
    default:
      return state
  }
}
