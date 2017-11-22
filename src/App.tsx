import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import StoreState, { UsersStoreState } from './store/storeState';
import { bindActionCreators, Dispatch } from 'redux';
import { getUsersAction } from './actions/usersActions';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
const logo = require('./logo.svg');

export interface AppProps {
    users: UsersStoreState;
    getUsers: () => (
        dispatch: Dispatch<StoreState>,
        getState: () => StoreState
    ) => Promise<void>;
}

class App extends React.Component<AppProps> {
  public componentDidMount() {
      this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>

          <div className="container">
              <div className="row">
                  <div className="col">
                      Id
                  </div>
                  <div className="col">
                      Name
                  </div>
                  <div className="col">
                      Age
                  </div>
              </div>
              {
                  this.props.users.items.map((user, index) => (
                  <div className="row" key={index}>
                      <div className="col">
                          {user.id}
                      </div>
                      <div className="col-5">
                          {user.name}
                      </div>
                      <div className="col">
                          {user.age}
                      </div>
                </div>))
              }
        </div>
      </div>
    );
  }
}

function mapStateToProps(store: StoreState) {
    return {
        users: store.users
    };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>) {
    return {
        getUsers: bindActionCreators(getUsersAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
