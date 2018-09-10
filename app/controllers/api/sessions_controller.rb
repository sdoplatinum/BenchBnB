class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid User Credentials"], status: 401
    end
  end

  def destroy
    logout!
    render json: ["#{current_user}"], status: 200
  end
end
