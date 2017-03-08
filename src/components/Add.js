import React from 'react';
import {hashHistory} from 'react-router';
import local from './AIP';
export default class Add extends React.Component {
    submit(event) {
        event.preventDefault();
        var title = this.refs.title.value,
            content = this.refs.content.value;
        var user = {title: title, content: content};
        local.add(user,function (data) {
            this.setState({data:data})
        });
        hashHistory.push('/user');
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.submit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="title" className="control-label col-md-1">标题</label>
                    <div className="col-md-11">
                        <input type="text" className="form-control" ref="title"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="control-label col-md-1">内容</label>
                    <div className="col-md-11">
                        <input type="text" className="form-control" ref="content"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-1 col-md-11">
                        <input className="btn btn-primary" type="submit" value="发表"/>
                    </div>
                </div>
            </form>
        )
    }
}