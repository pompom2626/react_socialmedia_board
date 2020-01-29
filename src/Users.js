import React, { Component } from "react";

class Users extends Component {
    constructor(props) {
        super(props);

         //userList attach to rankList
     /*    const filteredUserList = () => {
        
        try{
            this.props.userList.filter( uitem =>
                uitem.id ==this.props.rankList.id
                ).map(uitem =>                  
                    this.setState({
                        rankList: {
                            ...this.state.rankList,
                            unameO: this.state.userList.uname
                        }
                    })
                    )
        }
        catch(e){
            console.log(e);
        }
    }
 */
      
        }
    

    render() {
        //userList object go inside rankList object
    
        let newuserNames;
        newuserNames = this.props.userNames.replace('-', '');

        return (

            this.props.userList.filter(item2 => item2.uname == newuserNames).map(item2 =>
                <React.Fragment>
                    <div style={{ float: 'left' }}>
                        <img
                            src={`https://loremflickr.com/30/30?random=${item2.id}`}
                            alt="users" />
                    </div>
                    <div>
                        Usernames : {item2.uname}
                    </div>
                </React.Fragment>
            )

        )
    };
}


export default Users;