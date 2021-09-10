class PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    render render 'api/users/show'
  end

  def index
    @post = Post.all
    render 'api/posts/index'
  end
end
