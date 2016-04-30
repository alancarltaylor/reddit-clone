var moment = require('moment');
var app = angular.module("redditClone", []);

app.controller("Posts", ["$scope", function($scope){
  $scope.view = {};
  $scope.view.score = 0;
  $scope.newPost = {};
  // $scope.view.createPost = true;

  $scope.view.showPostForm = function(){
    console.log('in showForm n stuff');
    $scope.view.createPost = !$scope.view.createPost;
  }

  $scope.addPost = function(newPost){

    newPost.dateAdded = moment().calendar();
    newPost.id = $scope.posts.length;
    newPost.score = 0;
    newPost.comments = [];
    newPost.date = new Date();
    newPost.addComment = false;
    newPost.showComments = false;
    newPost.newCommentAuthor = "";
    newPost.newCommentComment = "";
    $scope.posts.push(newPost);
    console.log(newPost);
    console.log($scope.posts);
    $scope.newPost = {};
    $scope.view.createPost = false;

  }
  $scope.addComment = function(id){
    var index = id;
    var commentObj = {
      author: $scope.posts[index].newCommentAuthor,
      comment: $scope.posts[index].newCommentComment
    };
    for(var i = 0; i < $scope.posts.length; i++){
      if($scope.posts[i].id === id){
        $scope.posts[i].comments.push(commentObj);
      }
    }
    $scope.newCommentAuthor = "";
    $scope.newCommentComment = "";
    $scope.posts[index].addComment = false;
  }

  $scope.posts = [
    {
      id: 0,
      dateAdded: moment().calendar(),
      title: "Outside of Aspen",
      author: "Ned Stark",
      image: "http://l7.alamy.com/zooms/4e6ed20aab9e4c18a19a5ef2081bf70f/maroon-bells-area-outside-aspen-in-the-maroon-bells-snowmass-wilderness-eb3man.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      score: 0,
      comments: [],
      date: new Date(),
      addComment: false,
      showComments: false,
      newCommentAuthor: "",
      newCommentComment: ""
    },
    {
      id: 1,
      dateAdded: moment().calendar(),
      title: "Cliffs of Moher",
      author: "Cersei Lannister",
      image: "http://media.mnn.com/assets/images/2014/12/cliffs-of-moher.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      score: 0,
      comments: [],
      date: new Date(),
      addComment: false,
      showComments: false,
      newCommentAuthor: "",
      newCommentComment: ""
    },
    {
      id: 2,
      dateAdded: moment().calendar(),
      title: "Olympic National Park",
      author: "Bear Grylls",
      image: "http://whc.unesco.org/uploads/thumbs/site_0151_0001-750-0-20090914164402.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      score: 0,
      comments: [],
      date: new Date(),
      addComment: false,
      showComments: false,
      newCommentAuthor: "",
      newCommentComment: ""
    },
    {
      id: 3,
      dateAdded: moment().calendar(),
      title: "Mountain stuff",
      author: "Alan",
      image: "http://www.daviddarling.info/images/mountain.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      score: 0,
      comments: [],
      date: new Date(),
      addComment: false,
      showComments: false,
      newCommentAuthor: "",
      newCommentComment: ""
    }
  ];

  $scope.upVote = function(id) {
    ++$scope.posts[id].score
  };
  $scope.downVote = function(id) {
    --$scope.posts[id].score
  };
}])
