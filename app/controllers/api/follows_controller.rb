class Api::FollowsController < ApplicationController
  def index
        @follows = Follow.all
        render :index
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @follow = Follow.find_by(id: params[:id])
        if @follow && @follow.destroy
            render :index
        else
            render json: @board.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def follow_params
        params.require(:follow).permit(:user_id, :follower_id)
    end
end
