import { connect } from 'react-redux'

import App from '../component/app'
import { increment } from '../action/app'

// containerはReduxのStoreが管理する状態遷移をReactのプロパティとして流し込む役割とdispatch
function mapStateToProps(state) {
  return state
}

// dispatch関数はstoreにアクションを流し込む為のもの
function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(increment())
    }
  }
}

export default connect(mapStateToProps)(App)
