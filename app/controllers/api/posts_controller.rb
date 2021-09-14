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

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: :bad_request
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: :bad_request
    end

  end

  private

  def post_params
    params.require(:post).permit(:title, :description,:user_id,:location,:keywords,:category,:nsfw, :photo)
  end
end
