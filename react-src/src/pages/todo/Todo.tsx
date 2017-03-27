import * as React from 'react';
import {toJS} from 'mobx'
import {observer} from 'mobx-react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import {keyframes,style,media} from "typestyle";
import * as Store from './TodoStore';
const todoStore = new Store.TodoStore()

let initTodo = (title) =>{
    return {
        completed: false,
        title: title
    }
}

@observer
class TodoItem extends React.Component<any, any> {
    constructor(props){
        super(props);
    }
    removeTodo(keyId){
        todoStore.removeTodo(keyId);     
    }
    changeCompletedStatus(keyId){
        todoStore.changeCompletedStatus(keyId);     
    }
    render(){
        return <li className={this.props.todoBean.completed?'completed':null} data-keyId={this.props.keyId}>
                    <div className="view">
                        <input onClick={()=>{this.changeCompletedStatus(this.props.keyId)}} className="toggle" type="checkbox" checked={this.props.todoBean.completed}/>
                        <label> {this.props.todoBean.title} </label>
                        <button onClick={()=>{this.removeTodo(this.props.keyId)}} className="destroy"> </button>
                    </div>
                    <input type="text" className="edit" value={this.props.todoBean.title} />
                </li>
    }
}
@observer
export class Todos extends React.Component<any, any> {
    componentWillMount(){
        todoStore.addTodo(initTodo('finish exercise'));
        todoStore.addTodo(initTodo('finishdddddd exercise'));
    }
    addTodo(e){
        if(e.target.value.trim()){
            todoStore.addTodo(initTodo(e.target.value));
        }
    }
    changeAllCompletedStatus(e){
        todoStore.changeAllCompletedStatus(!e.target.checked);     
    }
    render(){
        let list = [];
        todoStore.getShowTodos.forEach(function (todo, i) {
            list.push(<TodoItem todoBean={todo} keyId={i} />)
        })
        return  <div className="todoapp">
                    <header className="header">
                        <h1>Todos</h1>
                        <input className="new-todo" placeholder="What needs to be done?" value="" onKeyUp={(e)=>{if(e.keyCode === 13){this.addTodo(e)}}}/>
                    </header>
                    <section className="main">
                        {todoStore.todoBeanList.size > 0?<input className="toggle-all" type="checkbox" onClick={(e)=>{this.changeAllCompletedStatus(e)}} checked={todoStore.getIsAllComplete}/>:null}
                        <ul className="todo-list">
                            <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
                                {list}
                            </QueueAnim>
                        </ul>
                    </section>
                    {todoStore.todoBeanList.size > 0?
                    <footer className="footer">
                        <span className="todo-count">
                            <strong> {todoStore.getUnfinishedTodoCount} </strong> <span> </span> <span> items </span> <span> left </span>
                        </span>
                        <ul className="filters">
                            <li> <a href="javascript:void(0)" 
                                    className={todoStore.showType === Store.ShowType.all?"selected":null} 
                                    onClick={todoStore.showType !== Store.ShowType.all?()=>{todoStore.changeShowType(Store.ShowType.all)}:null}> All </a> </li>
                            <li> <a href="javascript:void(0)" 
                                    className={todoStore.showType === Store.ShowType.unfinished?"selected":null} 
                                    onClick={todoStore.showType !== Store.ShowType.unfinished?()=>{todoStore.changeShowType(Store.ShowType.unfinished)}:null}> Active </a> </li> 
                            <li> <a href="javascript:void(0)" 
                                    className={todoStore.showType === Store.ShowType.finished?"selected":null} 
                                    onClick={todoStore.showType !== Store.ShowType.finished?()=>{todoStore.changeShowType(Store.ShowType.finished)}:null}> Completed </a> </li>
                        </ul>
                        <button className="clear-completed" onClick={()=>{todoStore.cleanFinished()}}>
                            Clear completed
                        </button>
                    </footer>:null
                    }
            </div>;
    }
}

