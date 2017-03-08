import React from 'react';
import {Link} from 'react-router';
let active = {
    background: 'rgba(45,80,255,.7)',
    color: '#fff'
};
let active1 = {
    color: '#fff'
};
export default class Index extends React.Component {

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/user">珠峰博客</Link>
                        </div>
                        <div>
                            <ul className="nav navbar-nav">
                                <li><Link activeStyle={active} to="/user">文章列表</Link></li>
                                <li><Link activeStyle={active} to="/add">发表文章</Link></li>
                                <li><Link activeStyle={active} to="/signup">注册</Link></li>
                                <li><Link activeStyle={active} to="/signin">登录</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a style={active1}>余太伟</a></li>
                                <li className="dropdown">
                                    <Link className="dropdown-toggle" data-toggle="dropdown" role="button">退出</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}