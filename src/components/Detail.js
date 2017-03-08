import React from 'react';
import {Link} from 'react-router';

export default class Detail extends React.Component {

    render() {
        return (
                <div className="panel panel-default panel-success" >
                    <div className="panel-heading">

                    </div>
                    <div className="panel-body">

                    </div>
                    <div className="panel-footer">
                        <a className="btn btn-warning">修改</a>
                        <a className="btn btn-danger">删除</a>
                    </div>
                </div>
        )
    }
}