import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect,IndexRoute} from 'react-router';
import {Todos} from './pages/todo/Todo'
let app = document.getElementById('app');
class App extends React.Component<any, any> {

    render() {
        return (
            <div style={{height:"100%"}}>
                {this.props.children}
            </div>
        )
    }
}

ReactDom.render(<Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/todo" component={Todos}/>
            <IndexRedirect to="/todo"/>
        </Route>
    </Router>, app);