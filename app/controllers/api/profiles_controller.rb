class Api::ProfilesController < ApplicationController
  def create
    @profile = Profile.new(profile_params
    @profile.user_id = current_user.id

    if @profile.save
      render :show
    else
      render json: ['Failed Identity. Try again.']
    end
  end

  def index
    @profile = Profile.all.where(user_id: current_user.id)
  end

  def show
    @profile = Profile.find(params[:id])
  end

  private

  def profile_params
    params.require(:profile).permit(:name)
  end
end
