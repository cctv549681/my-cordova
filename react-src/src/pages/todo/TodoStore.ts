import {observable, action,computed,toJS} from 'mobx';
import * as _ from 'lodash'
export interface TodoBean {
    completed:boolean;
    title:string;
    keyId?:string;
}
export enum ShowType {
    all,
    finished,
    unfinished
}
export class TodoStore {
    @observable todoBeanList:Map<string,TodoBean> = new Map();
    @observable showType:ShowType = ShowType.all;

    @action changeShowType = (type:ShowType) =>{
        this.showType = type;
    }
    @action addTodo =(todoBean:TodoBean)=>{
        let keyId = new Date().getTime()+'';
        this.todoBeanList.set(keyId,todoBean);
    }
    @action removeTodo = (keyId:string) => {
        try {
            this.todoBeanList.delete(keyId);
        } catch (error) {
            throw error;
        }  
    }
    @action changeCompletedStatus = (keyId:string) =>{
        try {
            let todo:TodoBean = this.todoBeanList.get(keyId);
            todo.completed = !todo.completed;
            this.todoBeanList.set(keyId,todo);
        } catch (error) {
            throw error;
        }  
    }
    @action cleanFinished = (keyId:string) =>{
        this.todoBeanList.forEach((todo,index) => {
            if(todo.completed){
                this.todoBeanList.delete(index);
            }
        });
    }
    
    @computed get getUnfinishedTodoCount(){
        let unfinishedCount = 0;
        this.todoBeanList.forEach((todo,i) => {
            !todo.completed?unfinishedCount++ :null;
        });
        return unfinishedCount;
    }
    @computed get getShowTodos(){
        let me = this;
        if(me.showType === ShowType.all){
            return me.todoBeanList;
        }
        let returnList:Map<string,TodoBean>  = new Map();
        me.todoBeanList.forEach((todo,index) => {
           if((me.showType === ShowType.finished && todo.completed) || (me.showType === ShowType.unfinished && !todo.completed)){
                returnList.set(index, todo)
           }
        });
        return returnList;
    }

}