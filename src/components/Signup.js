import React from 'react';
export default class Signup extends React.Component {
    submit(){

    }
    render() {
        return (
            <form  className="form-horizontal" onSubmit={this.submit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label col-md-1">用户名</label>
                    <div className="col-md-11">
                        <input type="text" className="form-control"  ref="username"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="control-label col-md-1">密码</label>
                    <div className="col-md-11">
                        <input type="text" className="form-control"  ref="password"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-1 col-md-11">
                        <input className="btn btn-primary" type="submit" value="注册"/>
                    </div>
                </div>
            </form>
        )
    }
}