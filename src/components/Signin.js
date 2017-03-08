import React from 'react';
export default class Signin extends React.Component {
    render(){
        return(
            <form method="post" role="form" className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="username" className="control-label col-md-1">用户名</label>
                    <div className="col-md-11">
                        <input type="text" className="form-control" name="username"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="control-label col-md-1">密码</label>
                    <div className="col-md-11">
                        <input type="text" className="form-control"  name="password"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-1 col-md-11">
                        <input className="btn btn-primary" type="submit" value="登录"/>
                    </div>
                </div>
            </form>
        )
    }
}