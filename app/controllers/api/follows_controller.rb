class Api::FollowsController < ApplicationController
    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            render :index
        else
            render json: @follow.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
      @follow = Follow.find_by(follower_id: params[:follower_id], followee_id: params[:followee_id])
    # debugger
      if @follow && @follow.destroy
          render :index
      else
          render json: ['Not found'], status: :unprocessable_entity
      end
    end

    def show
      @following = User.find(params[:id]).following
      @followers = User.find(params[:id]).followers
      render :show
    end

    private

    def follow_params
        params.require(:follow).permit(:followee_id, :follower_id)
    end
end
