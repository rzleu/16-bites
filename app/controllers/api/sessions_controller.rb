class Api::SessionsController < ApplicationController

  def create
    # debugger
      @user = User.find_by_credentials(
        params[:user][:login],
        params[:user][:password]
      )
      if @user
          login!(@user)
          render 'api/users/show'
      else
          render json: ['Invalid credentials'], status: :unauthorized
      end
  end

  def destroy
      if current_user
          logout
          render json: { message: 'logout successful' }
      else
          render json: ['no users'], status: :not_found
      end
  end

end