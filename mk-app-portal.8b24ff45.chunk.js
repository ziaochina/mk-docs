webpackJsonp([0],{

/***/ 1579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(60);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkMetaEngine = __webpack_require__(184);

var _index = __webpack_require__(619);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = (_dec = (0, _mkMetaEngine.wrapper)(_index2.default), _dec(_class = function (_Component) {
	(0, _inherits3.default)(C, _Component);

	function C() {
		(0, _classCallCheck3.default)(this, C);
		return (0, _possibleConstructorReturn3.default)(this, (C.__proto__ || (0, _getPrototypeOf2.default)(C)).apply(this, arguments));
	}

	(0, _createClass3.default)(C, [{
		key: 'render',
		value: function render() {
			return this.props.monkeyKing((0, _extends3.default)({}, this.props, { path: 'root' }));
		}
	}]);
	return C;
}(_react.Component)) || _class);
exports.default = C;
module.exports = exports['default'];

/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = __webpack_require__(280);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(281);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(282);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mkComponent = __webpack_require__(185);

var _mkMetaEngine = __webpack_require__(184);

var _config = __webpack_require__(611);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var action = function action(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, action);

    this.onInit = function (_ref) {
        var component = _ref.component,
            injections = _ref.injections;

        _this.component = component;
        _this.injections = injections;
        injections.reduce('init');

        _this.load();
    };

    this.load = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var menu;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!_this.webapi.getMenu) {
                            _context.next = 5;
                            break;
                        }

                        _context.next = 3;
                        return _this.webapi.getMenu();

                    case 3:
                        menu = _context.sent;

                        _this.injections.reduce('load', { menu: menu });

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    this.getLogo = function () {
        return _this.config.logo;
    };

    this.getPhoto = function () {
        return __webpack_require__(1582);
    };

    this.getMenuChildren = function () {
        var menu = _this.metaAction.gf('data.menu').toJS();
        var loop = function loop(children) {
            var ret = [];
            children.forEach(function (child) {

                if (!child.children) {
                    ret.push(_react2.default.createElement(
                        _mkComponent.Menu.Item,
                        { key: child.key },
                        child.name
                    ));
                } else {
                    ret.push(_react2.default.createElement(
                        _mkComponent.Menu.SubMenu,
                        { key: child.key, title: child.name },
                        loop(child.children)
                    ));
                }
            });
            return ret;
        };
        return loop(menu);
    };

    this.menuClick = function (e) {

        var menu = _this.metaAction.gf('data.menu').toJS();
        var find = function find(children) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    if (child.key == e.key) {
                        return child;
                    }

                    if (child.children) {
                        var o = find(child.children);
                        if (o) return o;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };

        var hit = find(menu);
        if (hit) {
            _this.injections.reduce('setContent', hit.appName, hit.appParams);
        }
    };

    this.myMenuClick = function (e) {
        if (e.key == 'logout') {
            if (_this.component.props.onRedirect && _this.config.goAfterLogout) {
                _this.metaAction.context.set('user', undefined);
                _this.component.props.onRedirect(_this.config.goAfterLogout);
            }
        }
    };

    this.metaAction = option.metaAction;
    this.config = _config2.default.current;
    this.webapi = this.config.webapi;
};

function creator(option) {
    var metaAction = new _mkMetaEngine.action(option),
        o = new action((0, _extends3.default)({}, option, { metaAction: metaAction })),
        ret = (0, _extends3.default)({}, metaAction, o);

    metaAction.config({ metaHandlers: ret });

    return ret;
}
module.exports = exports['default'];

/***/ }),

/***/ 1581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

exports.default = creator;

var _immutable = __webpack_require__(82);

var _mkMetaEngine = __webpack_require__(184);

var _config = __webpack_require__(611);

var _config2 = _interopRequireDefault(_config);

var _data = __webpack_require__(620);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer(option) {
    var _this = this;

    (0, _classCallCheck3.default)(this, reducer);

    this.init = function (state, option) {
        state = _this.metaReducer.init(state, (0, _data.getInitState)());

        if (_this.config.menu && !_this.config.webapi.getMenu) {
            return _this.load(state, { menu: _this.config.menu });
        }

        return state;
    };

    this.load = function (state, _ref) {
        var menu = _ref.menu;

        if (!menu || menu.lenght == 0) return state;

        var defaultMenuItem,
            firstMenuItem,
            defaultOpens = [];

        var loop = function loop(children) {
            var ret = [];
            children.forEach(function (child) {
                if (!child.children) {
                    if (!firstMenuItem) {
                        firstMenuItem = child;
                    }

                    if (child.isDefault) {
                        defaultMenuItem = child;
                    }
                } else {
                    if (child.isExpand) {
                        defaultOpens.push(child);
                    }
                    loop(child.children);
                }
            });
            return ret;
        };

        loop(menu);

        defaultMenuItem = defaultMenuItem || firstMenuItem;

        var menuDefaultSelectedKeys = (0, _immutable.fromJS)(defaultMenuItem ? [defaultMenuItem.key] : []);
        var menuDefaultOpenKeys = (0, _immutable.fromJS)(defaultOpens.map(function (o) {
            return o.key;
        }));
        var defaultContent = (0, _immutable.fromJS)(defaultMenuItem ? defaultMenuItem : {});

        state = _this.metaReducer.sf(state, 'data.menu', (0, _immutable.fromJS)(menu));
        state = _this.metaReducer.sf(state, 'data.menuDefaultSelectedKeys', menuDefaultSelectedKeys);
        state = _this.metaReducer.sf(state, 'data.menuDefaultOpenKeys', menuDefaultOpenKeys);
        state = _this.metaReducer.sf(state, 'data.content', defaultContent);

        return state;
    };

    this.setContent = function (state, appName, appProps) {
        state = _this.metaReducer.sf(state, 'data.content.appName', appName);
        state = _this.metaReducer.sf(state, 'data.content.appParams', appProps);
        return state;
    };

    this.metaReducer = option.metaReducer;
    this.config = _config2.default.current;
};

function creator(option) {
    var metaReducer = new _mkMetaEngine.reducer(option),
        o = new reducer((0, _extends3.default)({}, option, { metaReducer: metaReducer }));

    return (0, _extends3.default)({}, metaReducer, o);
}
module.exports = exports['default'];

/***/ }),

/***/ 1582:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "photo.ac003cd4.png";

/***/ })

});
//# sourceMappingURL=mk-app-portal.8b24ff45.chunk.js.map