class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)

    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @post = Post.find(params[:id])
    render 'api/posts/show'
  end

  def index
    @posts = Post.includes(:user)
    render 'api/posts/index'
  end

  private

  def post_params
    params.require(:post).permit(:title, :description,:user_id,:location,:keywords,:category,:nsfw, :photo)
  end
end
