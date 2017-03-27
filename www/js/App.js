/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 453);
/******/ })
/************************************************************************/
/******/ ({

/***/ 179:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\gitResources\\my-cordova\\react-src\\node_modules\\mobx\\lib\\mobx.js'");

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\gitResources\\my-cordova\\react-src\\node_modules\\babel-polyfill\\lib\\index.js'");

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var ReactDom = __webpack_require__(7);
var react_router_1 = __webpack_require__(442);
var Todo_1 = __webpack_require__(450);
var app = document.getElementById('app');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { style: { height: "100%" } }, this.props.children));
    };
    return App;
}(React.Component));
ReactDom.render(React.createElement(react_router_1.Router, { history: react_router_1.hashHistory },
    React.createElement(react_router_1.Route, { path: "/", component: App },
        React.createElement(react_router_1.Route, { path: "/todo", component: Todo_1.Todos }),
        React.createElement(react_router_1.IndexRedirect, { to: "/todo" }))), app);


/***/ }),

/***/ 420:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\gitResources\\my-cordova\\react-src\\node_modules\\mobx-react\\index.js'");

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\gitResources\\my-cordova\\react-src\\node_modules\\rc-queue-anim\\lib\\index.js'");

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\gitResources\\my-cordova\\react-src\\node_modules\\react-router\\es\\index.js'");

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var mobx_react_1 = __webpack_require__(420);
var rc_queue_anim_1 = __webpack_require__(428);
var Store = __webpack_require__(451);
var todoStore = new Store.TodoStore();
var initTodo = function (title) {
    return {
        completed: false,
        title: title
    };
};
var TodoItem = (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(props) {
        return _super.call(this, props) || this;
    }
    TodoItem.prototype.removeTodo = function (keyId) {
        todoStore.removeTodo(keyId);
    };
    TodoItem.prototype.changeCompletedStatus = function (keyId) {
        todoStore.changeCompletedStatus(keyId);
    };
    TodoItem.prototype.render = function () {
        var _this = this;
        return React.createElement("li", { className: this.props.todoBean.completed ? 'completed' : null, "data-keyId": this.props.keyId },
            React.createElement("div", { className: "view" },
                React.createElement("input", { onClick: function () { _this.changeCompletedStatus(_this.props.keyId); }, className: "toggle", type: "checkbox", checked: this.props.todoBean.completed }),
                React.createElement("label", null,
                    " ",
                    this.props.todoBean.title,
                    " "),
                React.createElement("button", { onClick: function () { _this.removeTodo(_this.props.keyId); }, className: "destroy" }, " ")),
            React.createElement("input", { type: "text", className: "edit", value: this.props.todoBean.title }));
    };
    return TodoItem;
}(React.Component));
TodoItem = __decorate([
    mobx_react_1.observer,
    __metadata("design:paramtypes", [Object])
], TodoItem);
var Todos = (function (_super) {
    __extends(Todos, _super);
    function Todos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Todos.prototype.componentWillMount = function () {
        todoStore.addTodo(initTodo('finish exercise'));
        todoStore.addTodo(initTodo('finishdddddd exercise'));
    };
    Todos.prototype.addTodo = function (e) {
        if (e.target.value.trim()) {
            todoStore.addTodo(initTodo(e.target.value));
        }
    };
    Todos.prototype.render = function () {
        var _this = this;
        var list = [];
        console.log(todoStore.getShowTodos);
        todoStore.getShowTodos.forEach(function (todo, i) {
            list.push(React.createElement(TodoItem, { todoBean: todo, keyId: i }));
        });
        return React.createElement("div", { className: "todoapp" },
            React.createElement("header", { className: "header" },
                React.createElement("h1", null, "Todos"),
                React.createElement("input", { className: "new-todo", placeholder: "What needs to be done?", value: "", onKeyUp: function (e) { if (e.keyCode === 13) {
                        _this.addTodo(e);
                    } } })),
            React.createElement("section", { className: "main" },
                React.createElement("input", { className: "toggle-all", type: "checkbox" }),
                React.createElement("ul", { className: "todo-list" },
                    React.createElement(rc_queue_anim_1.default, { component: "ul", type: ['right', 'left'], leaveReverse: true }, list))),
            React.createElement("footer", { className: "footer" },
                React.createElement("span", { className: "todo-count" },
                    React.createElement("strong", null,
                        " ",
                        todoStore.getUnfinishedTodoCount,
                        " "),
                    " ",
                    React.createElement("span", null, " "),
                    " ",
                    React.createElement("span", null, " items "),
                    " ",
                    React.createElement("span", null, " left ")),
                React.createElement("ul", { className: "filters" },
                    React.createElement("li", null,
                        " ",
                        React.createElement("a", { href: "javascript:void(0)", className: todoStore.showType === Store.ShowType.all ? "selected" : null, onClick: todoStore.showType !== Store.ShowType.all ? function () { todoStore.changeShowType(Store.ShowType.all); } : null }, " All "),
                        " "),
                    React.createElement("li", null,
                        " ",
                        React.createElement("a", { href: "javascript:void(0)", className: todoStore.showType === Store.ShowType.unfinished ? "selected" : null, onClick: todoStore.showType !== Store.ShowType.unfinished ? function () { todoStore.changeShowType(Store.ShowType.unfinished); } : null }, " Active "),
                        " "),
                    React.createElement("li", null,
                        " ",
                        React.createElement("a", { href: "javascript:void(0)", className: todoStore.showType === Store.ShowType.finished ? "selected" : null, onClick: todoStore.showType !== Store.ShowType.finished ? function () { todoStore.changeShowType(Store.ShowType.finished); } : null }, " Completed "),
                        " ")),
                React.createElement("button", { className: "clear-completed", onClick: function () { todoStore.cleanFinished; } }, "Clear completed")));
    };
    return Todos;
}(React.Component));
Todos = __decorate([
    mobx_react_1.observer
], Todos);
exports.Todos = Todos;


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = __webpack_require__(179);
var ShowType;
(function (ShowType) {
    ShowType[ShowType["all"] = 0] = "all";
    ShowType[ShowType["finished"] = 1] = "finished";
    ShowType[ShowType["unfinished"] = 2] = "unfinished";
})(ShowType = exports.ShowType || (exports.ShowType = {}));
var TodoStore = (function () {
    function TodoStore() {
        var _this = this;
        this.todoBeanList = new Map();
        this.showType = ShowType.all;
        this.changeShowType = function (type) {
            _this.showType = type;
        };
        this.addTodo = function (todoBean) {
            var keyId = new Date().getTime() + '';
            _this.todoBeanList.set(keyId, todoBean);
        };
        this.removeTodo = function (keyId) {
            try {
                _this.todoBeanList.delete(keyId);
            }
            catch (error) {
                throw error;
            }
        };
        this.changeCompletedStatus = function (keyId) {
            try {
                var todo = _this.todoBeanList.get(keyId);
                todo.completed = !todo.completed;
                _this.todoBeanList.set(keyId, todo);
            }
            catch (error) {
                throw error;
            }
        };
        this.cleanFinished = function (keyId) {
            _this.todoBeanList.forEach(function (todo, index) {
                if (todo.completed) {
                    _this.todoBeanList.delete(index);
                }
            });
        };
    }
    Object.defineProperty(TodoStore.prototype, "getUnfinishedTodoCount", {
        get: function () {
            var unfinishedCount = 0;
            this.todoBeanList.forEach(function (todo, i) {
                !todo.completed ? unfinishedCount++ : null;
            });
            return unfinishedCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoStore.prototype, "getShowTodos", {
        get: function () {
            var me = this;
            if (me.showType === ShowType.all) {
                return me.todoBeanList;
            }
            var returnList = new Map();
            me.todoBeanList.forEach(function (todo, index) {
                if ((me.showType === ShowType.finished && todo.completed) || (me.showType === ShowType.unfinished && !todo.completed)) {
                    returnList.set(index, todo);
                }
            });
            return returnList;
        },
        enumerable: true,
        configurable: true
    });
    return TodoStore;
}());
__decorate([
    mobx_1.observable,
    __metadata("design:type", Map)
], TodoStore.prototype, "todoBeanList", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Number)
], TodoStore.prototype, "showType", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], TodoStore.prototype, "changeShowType", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], TodoStore.prototype, "addTodo", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], TodoStore.prototype, "removeTodo", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], TodoStore.prototype, "changeCompletedStatus", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], TodoStore.prototype, "cleanFinished", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TodoStore.prototype, "getUnfinishedTodoCount", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TodoStore.prototype, "getShowTodos", null);
exports.TodoStore = TodoStore;


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(188);
module.exports = __webpack_require__(189);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\gitResources\\my-cordova\\react-src\\node_modules\\preact-compat\\dist\\preact-compat.es.js'");

/***/ })

/******/ });
//# sourceMappingURL=App.js.map