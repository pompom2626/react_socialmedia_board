import React, { Component } from "react";

class Users extends Component {
    constructor(props) {
        super(props);
        //userList attach to rankLis
        
    } 
    //arrow function is not working
    /* this.onclickUserListOrigin2 = this.onclickUserListOrigin2.bind(this); */

    /*  onclickUserListOrigin2 = () => {
        const { userList, userNames } = this.props.state; 
        if (userNames.length === 0) return alert('Please, input user name')
        const userNamesContent = {
            id: this.props.userId++,
            uname: userNames
        }
        const newuserList = userList.map((userList) => {
            return userList
        });
        newuserList.push(userNamesContent)
        this.setState({ userList: newuserList })
     }
   */


    render() {
        //userList object go inside rankList object
        /*     let newuserNames;
            newuserNames = this.props.userNames.replace('-', ''); */

        const CancelButton = item => (
            <button
                // className='btn btn-warning btn-sm'
                style={{ marginLeft: 10 }}
                onClick={() => this.onclickRemoveButton(item.rankid)}
            >
                Delete
            </button>
        )

        return (
            //Original Message Rendering
            this.props.rankList.filter(item => item.completedDecision).map(item =>
                /*   this.state.userList.map(item2 => */
                <React.Fragment>
                    <div className={`container${item.rankid}`} key={item.rankid}>
                        <div className='row' style={{ float: 'left' }}>
                            <img
                                src={`https://loremflickr.com/120/120?random=${item.uname}`}
                                alt="users" />
                        </div>
                        <div className='row border border-primary' key={item.rankid} style={{ marginLeft: 120, marginTop: 40 }} >
                            <div className='col-sm'>Ranking Scores: {item.rankid}{"\n"}</div>
                            <div className='col-sm' style={{ marginRight: 5, whiteSpace: "pre-wrap" }}>
                                {item.date.toLocaleDateString('en-US')} {item.date.toLocaleTimeString('en-US')} {"\n"}
                                {/* <MovieNames doitList={this.state.doitList} rankList={this.state.rankList} /> {"\n"} */}


                            </div>
                            <p className='w-100'>{item.rankMessage}</p>
                            {/* <Users rankList={this.state.rankList} userList={this.state.userList} userNames={this.state.userNames} /> */}
                            <div style={{ float: 'left' }}>
                                <img
                                    src={`https://loremflickr.com/40/40?random=${item.uname}`}
                                    alt="users" />
                            </div>

                            <div>
                                Usernames : {item.uname}
                            </div>

                            <div>{CancelButton(item)}</div>


                        </div>
                        {/* Comment Reply Messages Redndering */}
                        {/* <div className='border border-primary' key={item.rankid} style={{ marginLeft: 120, marginTop: 10 }}>
                            <b>abc</button><button>UserName</button>
                            <button>abc</button><button>Submit</button>
                        </div> */}
                        <div className='input-group'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Input comment user name'
                                /* value={this.state.userNames} */
                                /* onChange={this.onchangeUserNames} */
                                onKeyDown={e => e.keyCode === 13 ? this.props.action() : null}
                            />
                            <div className='input-group-append'>
                                <button
                                    className='btn btn-success'
                                    onClick={this.props.action}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className='input-group'>
                            <textarea
                                type='text'
                                className='form-control'
                                rows="2"
                                placeholder='Input your messages here and click rank score + or -'
                                /*   value={this.state.votingContents} */
                                /* onChange={this.onchangeVotingContents} */

                            />
                            <div className='input-group-append'>
                                <button
                                    className='btn btn-warning'
                                    onClick={this.props.action}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                        {/* to generate reply message */}


                    </div>
                </React.Fragment>
            )







        )


    };
}


export default Users;