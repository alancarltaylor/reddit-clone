// var moment = require('moment');
var app = angular.module("redditClone", []);

app.controller("MainController", ["$scope", "postService", function($scope, postService){
  console.log(postService);
  $scope.view = {};
  $scope.view.score = 0;
  $scope.newPost = {};
  $scope.posts = postService.posts;
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



  $scope.upVote = function(id) {
    ++$scope.posts[id].score
  };
  $scope.downVote = function(id) {
    --$scope.posts[id].score
  };
}])
