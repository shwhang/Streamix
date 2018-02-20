class Api::SessionsController < ApplicationController
  # create new session when users login
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials", status: 401]
    end
  end

  # remove sessions when users logout
  def destroy
    @user = current_user

    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["Nobody is signed in."], status: 404
      )
    end
  end
end
