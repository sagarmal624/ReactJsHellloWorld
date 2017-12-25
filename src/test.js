var _items = {};


var AppStore = new EventEmitter();
AppStore.getAll = function () {
    return _items;
};
AppStore.create = function (item) {
    var id = Date.now();
    _items[id] = item;
};
AppStore.destroy = function (item) {
    delete _items[item];
}

AppStore.emitChange = function () {
    this.emit('change');
};

AppStore.addChangeListener = function (callback) {
    this.on('change', callback);
};

AppStore.removeChangeListener = function (callback) {
    this.removeListener('change', callback);
};

AppDispatcher.register(function (payload) {
    var item = payload.item, actionType = payload.actionType;
    switch (actionType) {
        case AppConstants.ADD_ITEM:
            AppStore.create(item);
            break;
        case AppConstants.REMOVE_ITEM:
            AppStore.destroy(item);
            break;
        default:
            return true;
    }
    AppStore.emitChange();
    return true;
});


var AppActions = {
    addItem: function (item) {
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_ITEM,
            item: item
        });
    },
    removeItem: function (item) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REMOVE_ITEM,
            item: item
        })
    }
};


var Item = React.createClass({
    removeItem: function () {
        AppActions.removeItem(this.props.item);
    },
    render: function () {
        return (
            <h4 key={this.props.item} onClick={this.removeItem}>
                {this.props.items[this.props.item]} (click to remove)
            </h4>
        )
    }
});


var App = React.createClass({
    getAppState: function () {
        return {items: AppStore.getAll()};
    },
    _onChange: function () {
        this.setState(this.getAppState());
    },
    getInitialState: function () {
        return this.getAppState();
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },
    addItem: function () {
        AppActions.addItem('item added on ' + Date.now());
    },
    render: function () {
        var itemNodes = [];
        for (var item in this.state.items) {
            itemNodes.push(
                <Item items={this.state.items} item={item}/>
            );
        }
        ;
        return (
            <div className="wrapper">
                <h2 onClick={this.addItem}>Click to add an Item</h2>
                {itemNodes}
            </div>
        )
    }
});


ReactDOM.render(
    <App/>,
    document.getElementById('main')
);