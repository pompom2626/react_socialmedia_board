import React, { Component } from 'react';
/* import Image from 'react-image-resizer'; //resize img is not working  */
import Users from './Users';
import MovieNames from './MovieNames';
import dataJson from './Data.js'
import { Header } from './components';
/* import {Reply} from './Reply'; */

//increas do list items for sorting time series
let userId = 4;
let timeindexId = 5;


//img id and reference addr
/* https://loremflickr.com/320/240?random=1 */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = JSON.parse(JSON.stringify(dataJson));
    this.setState()
  }


  /* FOR ADDITIONAL WORK - TO DO LIST */
  //reuse for final project

  onclickUserListOrigin = () => {
    const { userList, userNames } = this.state
    if (userNames.length === 0) return alert('Please, input user name')
    const userNamesContent = {
      uid: userId++,
      uname: userNames,
      uImage: `http://placekitten.com/50/5${userId - 1}`
    }
    const newuserList = userList.map((userList) => {
      return userList
    });
    newuserList.push(userNamesContent)
    this.setState({ userList: newuserList })
  }

  onclickRankList = (index) => {
    const { rankList, rankContents, userNames, userList, replycommentContents, selectedUser, selectedImage } = this.state;
    if (rankContents.length === 0) return alert('Please, input rank scores from 1 to 100');

    let votingContents = {
      date: new Date(),
      uname: selectedUser,
      uImage: selectedImage,
      rankMessage: rankContents,
      completedDecision: true,
      rankid: this.state.likeId,  //change message
      id: timeindexId++,
      uid: 5,
      peopleLike: 0,
      peopleDislike: 0,
      feelSmile: 0,
      feelCry: 0,
      feelPleading: 0,
      replyList: []
    }

    this.setState({
      rankList: [votingContents, ...rankList],
      recoveryOriginalState: [votingContents, ...rankList]
    });
  }

 


  onclickreplyList = (index) => {
    const { replyList, replycommentContents, userNames, userList, selectedImage, selectedUser } = this.state;
    if (replycommentContents === '') return alert('Please, input your reply')
    const replyContents = {
      date: new Date(),
      replyMessage: replycommentContents,
      uname: selectedUser,
      uImage: selectedImage,
      completedDecision: true,
      rankid: this.state.likeId,  //change message
      id: timeindexId++,
      uid: 5,
      peopleLike: 0,
      peopleDislike: 0,
      feelSmile: 0,
      feelCry: 0,
      feelPleading: 0,
    }
    let changerankList = [...this.state.rankList];
    changerankList[index].replyList = [replyContents, ...changerankList[index].replyList];
    this.setState({
      rankList: [...changerankList]
      , recoveryOriginalState: [...changerankList]
    });
  }



  onclickAddList = () => {
    let likeCount = this.state.likeId + 1;
    this.setState({ likeId: likeCount })
  }

  onclickMinusList = () => {
    let likeCount = this.state.likeId - 1;
    this.setState({ likeId: likeCount })
  }

  onclickLikeList = (index) => {
    let clickrankList = [...this.state.rankList];
    clickrankList[index].peopleLike += 1;
    this.setState({
      rankList: [...clickrankList]
      , recoveryOriginalState: [...clickrankList]
    })
  }

  onclickDislikeList = (index) => {
    let clickrankList = [...this.state.rankList];
    clickrankList[index].peopleDislike += 1;
    this.setState({
      rankList: [...clickrankList]
      , recoveryOriginalState: [...clickrankList]
    })
  }

  onclickSmileList = (index) => {
    let clickrankList = [...this.state.rankList];
    clickrankList[index].feelSmile += 1;
    this.setState({
      rankList: [...clickrankList]
      , recoveryOriginalState: [...clickrankList]
    })
  }

  onclickCryList = (index) => {
    let clickrankList = [...this.state.rankList];
    clickrankList[index].feelCry += 1;
    this.setState({
      rankList: [...clickrankList]
      , recoveryOriginalState: [...clickrankList]
    })
  }

  onclickPleadingList = (index) => {
    let clickrankList = [...this.state.rankList];
    clickrankList[index].feelPleading += 1;
    this.setState({
      rankList: [...clickrankList]
      , recoveryOriginalState: [...clickrankList]
    })
  }

  onchangeUserNames = (e) => {
    this.setState({ userNames: e.target.value })
  }

  onchangeVotingContents = (e) => {
    this.setState({ rankContents: e.target.value })
  }

  onchangeReplyContents = (e) => {
    this.setState({ replycommentContents: e.target.value })
  }

  onchangeDoContents = (e) => {
    this.setState({ docontents: e.target.value })
  }

  onclickStateChange = (index) => {
    const { doitList } = this.state;
    const newdoitList = doitList.map((doitList) => {
      return doitList
    });
    if (doitList[index].completedDecision === false) {
      newdoitList[index].completedDecision = true
    } else {
      newdoitList[index].completedDecision = false
    }
    this.setState({ doitList: newdoitList })
  }

  onclickRemoveButton = (id) => {
    const { rankList } = this.state
    const newrankList = rankList.filter(item => item.id !== id)
    this.setState({ rankList: newrankList, recoveryOriginalState: [...newrankList] })
  }

  onChangeSelectUser = (e) => {
    let changeuserList = [...this.state.userList];
    let icon = 'http://placekitten.com/50/50'

    for (let i = 0; i < changeuserList.length; i++) {
      if (changeuserList[i].uname === e.target.value) {
        icon = changeuserList[i].uImage;
      }
    }
    //Initialize User selection
    this.setState({
      selectedUser: e.target.value,
      selectedImage: icon
    })
  }

  onchangeAllSorting = ({ target: { value } }) => {
    let { rankList, userList } = this.state;
    switch (value) {
      case '0':
        rankList = rankList.sort((a, b) => {
          return b.id - a.id;
        })
        this.setState({ rankList: [...rankList] })
        break;

      case '1':
        rankList = rankList.sort((a, b) => {
          return a.id - b.id;
        })
        this.setState({ rankList: [...rankList] })
        break;

      case '2':
        rankList.sort(function (a, b) {
          return b.rankid - a.rankid;
        });
        this.setState({ rankList: rankList })
        break;

      case '3':
        rankList = rankList.sort((a, b) => a.rankMessage.length - b.rankMessage.length);
        this.setState({ rankList: rankList })
        break;

      case '4':
        rankList = rankList.sort((a, b) => b.rankMessage.length - a.rankMessage.length);
        this.setState({ rankList: rankList })
        break;

      case '5':
        rankList = rankList.sort((a, b) => b.peopleLike - a.peopleLike);
        this.setState({ rankList: rankList })
        break;

      case '6':
        rankList = rankList.sort((a, b) => b.peopleDislike - a.peopleDislike);
        this.setState({ rankList: rankList })
        break;

      default:
        break;
    }
  }

  onchangeUserSorting = ({ target: { value } }) => {
    /* alert(value);  Data should be brought by another storage instead of rankList*/
    let { rankList, userList } = this.state;
    /* Data should be brought by another storage instead of rankList */
    let filterUserGroups = [...this.state.recoveryOriginalState];
    /*   alert(filterUserGroups); */
    /* Ready for sorting all users data */
    this.setState({ rankList: [...this.state.recoveryOriginalState] })

    if (value !== 'Recovery to All Users') {
      /* alert(filterUserGroups); */
      filterUserGroups = filterUserGroups.filter((user, index) => {
        /*  alert(value);
         alert(user.uname); */
        return user.uname == value
      })
      /*  alert(rankList); */
      this.setState({ rankList: [...filterUserGroups] });
    }
    else {
      this.setState({ rankList: this.state.recoveryOriginalState })
    }
  }

  hideMessage = index => {
    let { rankList } = this.state;
    rankList[index].completedDecision = !rankList[index].completedDecision;
    this.setState({
      rankList,
    });
  };

  openAllHiding = (e) => {
    let openrankList = [...this.state.recoveryOriginalState];
    for (let i = 0; i < openrankList.length; i++) {
      openrankList[i].completedDecision = true;
    }
    this.setState({
      rankList: [...openrankList],
      recoveryOriginalState: [...openrankList],
    })
  }


 


  render() {


    const CancelButton = item => (
      <button
        // className='btn btn-warning btn-sm'
        style={{ marginLeft: 10 }}
        onClick={() => this.onclickRemoveButton(item.id)}
      >
        Delete
      </button>
    )


    return (



      <div className='container' style={{ maxWidth: 600, padding: '20px 0' }}>
        <div className='row'>
          <div className='col text-center'>
            <div>
              <Header />
            </div>




            {/*   User HANDLING Part */}
            <div className='input-group'>
              <h5>Input New User :</h5>
              <input
                type='text'
                className='form-control'
                placeholder='Input user name'
                value={this.state.userNames}
                onChange={this.onchangeUserNames}
                onKeyDown={e => e.keyCode === 13 ? this.onclickUserListOrigin() : null}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-secondary'
                  onClick={this.onclickUserListOrigin}
                >
                  Log-in
                </button>
                onChangeSelectUser     </div>
            </div>
            {/* User selection */}
            <div className='input-group'>
              <h5>Select User : </h5>
              <select
                onChange={this.onChangeSelectUser}
                style={{ width: "20%", height: "20px", float: "right" }}>
                {
                  this.state.userList.map((user, index) =>
                    <option
                      key={index}
                      value={user.uname}>
                      {user.uname}
                    </option>
                  )
                }
              </select>
              <img className="rounded-circle"
                src={this.state.selectedImage}
                alt="users"
              />
            </div>
            <h5 className='input-group'>Main Message</h5>
            <div className='input-group'>
              <textarea
                type='text'
                className='form-control'
                rows="3"
                placeholder='Input your reply comments here and click rank score + or -'
                value={this.state.votingContents}
                onChange={this.onchangeVotingContents}
                onKeyDown={e => e.keyCode === 13 ? this.onclickRankList() : null}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-secondary'
                  onClick={this.onclickRankList}
                >
                  Post
              </button>
              </div>
            </div>




            {/* RANKING & LIKE DISLIKE & FEELING PART*/}
            <div className='input-group'>
              <h5 style={{ marginTop: 20 }}>Post Level : {this.state.likeId} </h5>
              <div className=' input-group-append'>
                <button className='btn btn-default'>
                  <img
                    style={{ width: 30, height: 30, marginRight: 10, marginBottom: 12, marginTop: 12 }}
                    src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/growing-heart_1f497.png'}
                    alt="users"
                    onClick={this.onclickAddList} />
                  Level Up
                </button>
                <button className='btn btn-default'>
                  <img
                    style={{ width: 30, height: 30, marginRight: 10, marginBottom: 12, marginTop: 12 }}
                    src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/broken-heart_1f494.png"}
                    alt="users"
                    onClick={this.onclickMinusList} />
                  Level Down
                </button>
              </div>
            </div>
            {/* ranking end*/}
          </div>
        </div>



        {/* COMMENT INPUT PART */}
        <div >
          <h5 className="input-group">Reply Comments  </h5>
          <textarea
            type='text'
            className='form-control'
            rows="2"
            placeholder='Input your comments here,    Click the comment button where you want to send it'
            value={this.state.replycommentContents}
            onChange={this.onchangeReplyContents} />
        </div>



        {/* DISPLAY BY DATE, LIKE SCORES, WORD LENGTH, USERS */}
        <div className='input-group' style={{ marginTop: 20 }}>
          <div /* className='input-group-append' */ >
            <h5 >Displaying by Sorting</h5>
            <select onChange={this.onchangeAllSorting}>
              <option>Choose</option>
              <option value="0">Recent</option>
              <option value="1">Oldest</option>
              <option value="2">Post Level</option>
              <option value="3">Asc Length</option>
              <option value="4">Desc Length</option>
              <option value="5">Like Scores</option>
              <option value="6">Dislike Scores</option>
            </select>
          </div>

  
          {/* SORTING USERS UI */}
          <div style={{ marginLeft: 20 }}  /* className='input-group-append' */ >
            <h5 >Sorting by users</h5>
            <select onChange={this.onchangeUserSorting}>
              <option>Recovery to All Users</option>
              {
                this.state.userList.map((sort, index) =>
                  <option key={index} value={sort.uname} style={{ margin: 10, marginRight: 5 }}>
                    {sort.uname} </option>
                )
              }
            </select>
            <button className='btn btn-danger'
              onClick={this.openAllHiding}>
              Remove All Hidings
            </button>
          </div>
        </div>



        {/* Posting Part Start */}
        <div className='row' style={{ marginTop: 20 }}>
          <h3> My Social Communication  </h3>
          {/* main posting articles mapping start */}

          {
            this.state.rankList.map((item, index) =>
              item.completedDecision ?
                <div key={index} className={`container${item.rankid}`}  >
                  <div className='row "' style={{ float: 'left', marginBottom: 12, marginTop: 40 }}>
                    <img className='rounded-circle' style={{ width: 120, height: 120, marginRight: 10, marginBottom: 12, marginTop: 12 }}
                      src={item.uImage}
                      alt="users" />
                  </div>
                  <div className='row border border-primary' key={item.rankid} style={{ marginLeft: 120, marginTop: 40 }} >
                    <div className='input-group'>
                      <div className=' input-group-append'>
                        <button className='btn btn-default' style={{ color: 'blue' }}>
                          <img
                            style={{ width: 30, height: 30, marginRight: 10, marginBottom: 12, marginTop: 12 }}
                            src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/thumbs-up-sign_1f44d.png'}
                            alt="users"
                            onClick={() => { this.onclickLikeList(index) }} />
                          Like  {this.state.rankList[index].peopleLike}
                        </button>
                        <button className='btn btn-default' style={{ color: 'orange' }}>
                          <img
                            style={{ width: 30, height: 30, marginRight: 10, marginBottom: 12, marginTop: 12 }}
                            src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/thumbs-down-sign_1f44e.png"}
                            alt="users"
                            onClick={() => { this.onclickDislikeList(index) }} />
                          Dislike  {this.state.rankList[index].peopleDislike}
                        </button>
                        <button className='btn btn-default' style={{ color: 'red' }}>
                          <img
                            style={{ width: 30, height: 30, marginRight: 10, marginBottom: 12, marginTop: 12 }}
                            src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/smiling-face-with-heart-shaped-eyes_1f60d.png"}
                            alt="users"
                            onClick={() => { this.onclickSmileList(index) }} />
                          Smile  {this.state.rankList[index].feelSmile}
                        </button>
                        <button className='btn btn-default' style={{ color: 'green' }}>
                          <img
                            style={{ width: 30, height: 30, marginRight: 10, marginBottom: 12, marginTop: 12 }}
                            src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/crying-face_1f622.png"}
                            alt="users"
                            onClick={() => { this.onclickCryList(index) }} />
                          Crying  {this.state.rankList[index].feelCry}
                        </button>
                        <button className='btn btn-default' style={{ color: 'purple', fontWeight: 20 }}>
                          <img
                            style={{ width: 30, height: 30, marginRight: 10, marginBottom: 12, marginTop: 12 }}
                            src={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/face-with-pleading-eyes_1f97a.png"}
                            alt="users"
                            onClick={() => { this.onclickPleadingList(index) }} />
                          Pleading  {this.state.rankList[index].feelPleading}
                        </button>
                      </div>
                    </div>
                    <h6 className='input-group'>
                      Post Level : {this.state.rankList[index].rankid}
                    </h6>
                    <div className='col-sm' style={{ marginRight: 5, whiteSpace: "pre-wrap" }}>
                    </div>
                    <p className='w-100'>{item.rankMessage}</p>
                    {/* user image */}
                    <div style={{ float: 'left' }}>
                      <img className='rounded-circle' style={{ width: 50, height: 50, marginRight: 10, marginBottom: 12 }}
                        src={item.uImage} alt="users" />
                    </div>
                    <div style={{ marginLeft: 10, marginTop: 20 }}>
                      Usernames : {item.uname}
                    </div>
                    <div style={{ marginLeft: 10, marginTop: 20 }}>
                      {item.date.toLocaleString('en-US')}
                    </div>
                    <div style={{ marginLeft: 10, marginTop: 20 }}
                    >{CancelButton(item)}</div>
                    <div className='btn btn-success' style={{ marginTop: 20 }} onClick={(e) => { this.hideMessage(index) }}>
                      Hide Post
                  </div>



                    {/* COMMENT BUTTON */}
                    <div className='input-group'>
                      <div className='input-group-append'>
                        <button
                          className='btn btn-warning'
                          onClick={() => { this.onclickreplyList(index) }}
                        >
                          Comment
                      </button>
                      </div>
                    </div >
                  </div>



                  {/*COMMENT REPLY PART Messages Redndering */}
                  {this.state.rankList[index].replyList.map((reply, index) => (
                    <div className='input-group' key={index}>
                      {/* to generate reply message */}
                      <div >
                        <p className='form-control border border-white' /* defaultValue='Display Comments Here' */>
                          {reply.replyMessage}
                        </p>
                        {/* user image */}
                        <div className='input-group-append' style={{ float: 'left' }}>
                          <div>
                            <img className='rounded-circle' style={{ width: 50, height: 50, marginRight: 10, marginBottom: 12, marginTop: 10 }}
                              src={reply.uImage} alt="users" />
                          </div>
                          <div style={{ marginLeft: 10, marginTop: 20 }}>
                            Usernames : {reply.uname}
                          </div>
                          <div style={{ marginLeft: 10, marginTop: 20 }}>
                            {reply.date.toLocaleString('en-US')}
                          </div>
                          {/* <div style={{ marginLeft: 10, marginTop: 20 }}
                        >{CancelButton(item)}</div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                : null
            )
          }
        </div>


        {/* <FINISH USER INTERFACE> */}
      </div>
    );
  }
}
export default App;