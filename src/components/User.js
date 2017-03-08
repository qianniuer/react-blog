import React from 'react';
import {Link} from 'react-router';
import local from './AIP';
export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
      local.list(function (data) {
          this.setState({data: data});
      });
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map(function (item, index) {
                        return <div className="col-md-12" key={index}>
                            <div className="media">
                                <div className="media-body">
                                    <Link to={"/detail/" + item.id}>
                                        <h4 className="media-heading">{item.title}</h4>
                                    </Link>
                                    <p>{item.content}</p>
                                    <p>作者:www 发表时间:{item.createAt.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        )
    }
}