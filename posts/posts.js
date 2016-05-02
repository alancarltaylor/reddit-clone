angular.module("redditClone")
.directive("posts", function(){
return {
  restrict: 'E',
  templateUrl: '/posts/posts.html'
}

});
