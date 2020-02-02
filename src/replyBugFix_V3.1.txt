import React, { Component } from 'react';
/* import Image from 'react-image-resizer'; //resize img is not working  */
import Users from './Users';
import MovieNames from './MovieNames';
import dataJson from './Data.js'
import { Header } from './components';
/* import {Reply} from './Reply'; */

//increas do list items
let userId = 0;
let rankindexId = 0;
let replyId = 0;
//img id and reference addr
/* https://loremflickr.com/320/240?random=1 */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = JSON.parse(JSON.stringify(dataJson));
  }


  /*  this.todo=this.todo.bind(this);
   console.todo = function (msg) {
   console.log(‘ % c % s % s % s‘, ‘color: yellow; background - color: black; ’, ‘–‘, msg, ‘–‘);
   }
 
   console.important = function (msg) {
     console.log(‘ % c % s % s % s’, ‘color: brown; font - weight: bold; text - decoration: underline; ’, ‘–‘, msg, ‘–‘);
   } */
  /* TestClick = () => {
    const {testData}= this.state;
    const test1= {
      id:1,
      name: 'kk'
    }
    this.setState({testData:[test1, ...testData]});
  } */

  //reuse for final project
  onclickUserListOrigin = () => {
    const { userList, userNames } = this.state
    if (userNames.length === 0) return alert('Please, input user name')
    const userNamesContent = {

      uname: userNames
    }
    const newuserList = userList.map((userList) => {
      return userList
    });
    newuserList.push(userNamesContent)
    this.setState({ userList: newuserList })
  }

  onclickRankList = (index) => {
    const { rankList, rankContents, userNames, userList } = this.state;
    if (rankContents.length === 0) return alert('Please, input rank scores from 1 to 100');

    const votingContents = {
      date: new Date(),
      uname: userNames,
      rankMessage: rankContents,
      completedDecision: true,
      rankid: 0,
      id: rankindexId++,
      uid: 5,
      voteLike: 0,
      voteDislike: 0,
      replyList: [{
        date: "2020-02-30T22:28:34.166Z",
        uname: "Cplus",
        rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
      }]
    }

    this.setState({ rankList: [votingContents, ...rankList] });
    // console.log(`i need this value : ${index}`);
  }

  /*   onclickReplyUserList = () => {
     const{rankList ,userNames} = this.state;
     if (userNames.length === 0) return alert('Please, input user name')
     const replyUserContent = {
       id: userId++,
       uname: userNames
     }
     const newuserList = userList.map((userList) => {
       return userList
     });
     newuserList.push(userNamesContent)
     this.setState({ userList: newuserList })
   }  */


  onclickreplyList = (index) => {
    const { replyList, replycommentContents, userNames, userList } = this.state;
    if (replycommentContents === '') return alert('Please, input your reply')
    const replyContents = {
      date: new Date(),
      replyMessage: replycommentContents,
      uname: userNames
    }
    let changerankList = [...this.state.rankList];
    changerankList[index].replyList = [replyContents, ...changerankList[index].replyList];
    this.setState({ rankList: [...changerankList] });
  }
  /* 
    let newCommentList=[...this.state.commentList];
    let markTime=new Date().getTime();
    let person={markTime:markTime,defaultPerson:this.state.defaultPerson,headImg:this.state.defaultHeadImg,commentText:this.state.netCommentText,voteLove:0,voteThumb:0,voteSmile:0,voteAngry:0,voteSad:0}
    newCommentList[index].anotherPersonComment=[person,...newCommentList[index].anotherPersonComment];
    this.setState({
      commentList:[...newCommentList],
      backupCommentList:[...newCommentList],
      insideComment:"",
      netCommentText:"",
    })
   */


  onclickAddList = () => {
    let likeCount = this.state.likeId + 1;
    this.setState({ likeId: likeCount })
  }

  onclickMinusList = () => {
    let likeCount = this.state.likeId - 1;
    this.setState({ likeId: likeCount })
  }

  onchangeUserNames = (e) => {
    this.setState({ userNames: e.target.value })
  }

  onchangeVotingContents = (e) => {
    this.setState({ rankContents: e.target.value })
  }

  onchangeReplyContents = (e) => {
     this.setState({ replycommentContents: e.target.value } )
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
    this.setState({ rankList: newrankList })
  }



  render() {
    const { selectedOptionKey } = this.state;

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



      /*      User Selection Part */
      <div className='container' style={{ maxWidth: 600, padding: '20px 0' }}>
        <div className='row'>
          <div className='col text-center'>
            <div>
              <Header />
            </div>
            <div className='input-group'>
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
                  Submit
                </button>
              </div>
            </div>
            <div className='input-group'>
              <textarea
                type='text'
                className='form-control'
                rows="3"
                placeholder='Input your messages here and click rank score + or -'
                value={this.state.votingContents}
                onChange={this.onchangeVotingContents}
                onKeyDown={e => e.keyCode === 13 ? this.onclickRankList() : null}
              />
              <div className='input-group-append'>
                <button
                  className='btn btn-primary'
                  onClick={this.onclickRankList}
                >
                  Submit
              </button>
              </div>


              {/* 
              <div className='input-group-append'>
                <button
                  className='btn btn-primary'
                  onClick={this.testClick}
                >
                  Test
              </button>
              </div> */}
            </div>



            {/* RANKING & LIKE DISLIKE & FEELING PART*/}
            <div className='input-group'>
              <div className=' input-group-append'>
                <div className='btn btn-default'>
                  message ranking: {this.state.likeId}
                </div>
                <button className='btn btn-default'>
                  <img
                    src={"https://loremflickr.com/30/30?random=100"}
                    alt="users"
                    onClick={this.onclickAddList} />
                  -Like
                </button>
                <button className='btn btn-default'>
                  <img
                    src={"https://loremflickr.com/30/30?random=50"}
                    alt="users"
                    onClick={this.onclickMinusList} />
                  -Dislike
                </button>
              </div>
            </div>
            {/* ranking end*/}
            <div className='col-6'>
              <h3>Users Sorting</h3>
              <select onChange={this.onchangeUserNames}>
                <option>Choose</option>
                {
                  this.state.userList.map((item, index) =>
                    <option key={new Date().getTime() + index} style={{ margin: 10, marginRight: 5 }}>
                      -{item.uname} {"\n"} </option>
                  )
                }
              </select>
            </div>
          </div>
        </div>
        {/* COMMENT INPUT PART */}
        <textarea
                      type='text'
                      className='form-control'
                      rows="2"
                      placeholder='Input your comments here and click the comment button where you want to send it'
                      value={this.state.replycommentContents}
                      onChange={this.onchangeReplyContents }
                      
                    />




        {/* Posting Part Start */}
        <div className='row' style={{ marginTop: 20 }}>
          <h3> My Social Communication  </h3>
          {/* main posting articles mapping start */}

          {
            this.state.rankList.map((item, index) =>
              <div key={new Date().getTime() + index} className={`container${item.rankid}`}  >
                <div className='row' style={{ float: 'left' }}>
                  <img
                    src={`https://loremflickr.com/120/120?random=${item.uname}`}
                    alt="users" />
                </div>
                <div className='row border border-primary' key={item.rankid} style={{ marginLeft: 120, marginTop: 40 }} >
                  <div className='col-sm'>Message Scores: {item.rankid}{"\n"}</div>
                  <div className='input-group'>
                    <div className=' input-group-append'>
                      <div className='btn btn-default'>
                        message Voting: {this.state.likeId}
                      </div>
                      <button
                        className='btn btn-default'
                      >
                        <img
                          src={`https://loremflickr.com/30/30?random=100`}
                          alt="users"
                          onClick={this.onclickAddList} />
                        -Like
                        </button>
                      <button
                        className='btn btn-default'
                      >
                        <img
                          src={`https://loremflickr.com/30/30?random=50`}
                          alt="users"
                          onClick={this.onclickMinusList} />
                        -Dislike
                        </button>
                    </div>
                  </div>
                  <div className='col-sm' style={{ marginRight: 5, whiteSpace: "pre-wrap" }}>
                    {/*  Date Displaying
                         {item.date.toLocaleDateString('en-US')} {item.date.toLocaleTimeString('en-US')} */} {"\n"}

                  </div>
                  <p className='w-100'>{item.rankMessage}</p>

                  {/* user image */}
                  <div style={{ float: 'left' }}>
                    <img
                      src={`https://loremflickr.com/40/40?random=${item.uname}`}
                      alt="users" />
                  </div>
                  <div>
                    Usernames : {item.uname}
                  </div>
                  <div>{CancelButton(item)}</div>


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
                  <div key={new Date().getTime() + index}>
                    {/* to generate reply message */}
                    <div>
                      <p className='form-control border border-white' /* defaultValue='Display Comments Here' */>
                        {reply.replyMessage}
                      </p>
                      {/* <button onclick={e => this.onclickreplytest(e)}>
                        reply test
                      </button> */}
                    </div>
                  </div>
                ))}

              </div>

            )
          }
        </div>



      </div>
    );
  }
}
export default App;