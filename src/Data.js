let dataJson = {
  likeId: 0,
  peopleLike: 0,
  peopleDislike: 0,
  feelSmile:0,
  feelCry:0,
  feelPleading:0,
  doitList: [],
  docontents: '',
  userNames: '',
  rankContents: '',
  replycommentContents: '',
  replyMessage: '',
  
  //////////////selection user
  selectedUser: 'JS',
  selectedImage: 'http://placekitten.com/50/50',

  userList: [
    { uid: 0, uname: "JS", uImage: "http://placekitten.com/50/50" },
    { uid: 1, uname: "Cplus", uImage: "http://placekitten.com/50/51" },
    { uid: 2, uname: "Python", uImage: "http://placekitten.com/50/52" },
    { uid: 3, uname: "Basic", uImage: "http://placekitten.com/50/53" },
  ],
  rankList: [
    {
      date: "2020-01-30T22:28:34.",
      uname: "JS",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 3,
      id: 4,
      uid: 5,
      peopleLike: 7,
      peopleDislike: 2,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',

      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    },
    {
      date: "2020-01-25T22:28:34.",
      uname: "Cplus",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 8,
      id: 3,
      uid: 5,
      peopleLike: 4,
      peopleDislike: 2,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',

      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    },
    {
      date: "2020-01-22T22:28:34.",
      uname: "Basic",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 3,
      id: 2,
      uid: 5,
      peopleLike: 8,
      peopleDislike: 10,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',

      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    }, {
      date: "2020-01-15T22:28:34.",
      uname: "Python",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 2,
      id: 1,
      uid: 5,
      peopleLike: 5,
      peopleDislike: 21,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',

      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    }, {
      date: "2020-01-11T22:28:34.",
      uname: "Cplus",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 4,
      id: 0,
      uid: 5,
      peopleLike: 12,
      peopleDislike: 23,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',

      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    },
  ],

  recoveryOriginalState : [
    {
      date: "2020-01-30T22:28:34.",
      uname: "JS",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 3,
      id: 4,
      uid: 5,
      peopleLike: 7,
      peopleDislike: 2,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',
      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    },
    {
      date: "2020-01-25T22:28:34.",
      uname: "Cplus",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 8,
      id: 3,
      uid: 5,
      peopleLike: 4,
      peopleDislike: 2,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',
      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          ununame: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    },
    {
      date: "2020-01-22T22:28:34.",
      uname: "Basic",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 3,
      id: 2,
      uid: 5,
      peopleLike: 8,
      peopleDislike: 10,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',
      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    }, {
      date: "2020-01-15T22:28:34.",
      uname: "Python",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 2,
      id: 1,
      uid: 5,
      peopleLike: 5,
      peopleDislike: 21,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',
      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    }, {
      date: "2020-01-11T22:28:34.",
      uname: "Cplus",
      uImage: "http://placekitten.com/50/50",
      rankMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      completedDecision: true,
      rankid: 4,
      id: 0,
      uid: 5,
      peopleLike: 12,
      peopleDislike: 23,
      feelSmile:5,
      feelCry:5,
      feelPleading:5,
      display: '',
      replyList: [
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
        ,
        {
          date: "2020-01-30T22:28:34.",
          uname: "Cplus",
          uImage: "http://placekitten.com/50/51",
          replyMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        }
      ]
    },
  ]

  






}


export default dataJson;