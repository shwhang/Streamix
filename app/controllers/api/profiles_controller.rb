class Api::ProfilesController < ApplicationController
  def create
    @profile = Profile.new(profile_params)

    @profile.user_id = current_user.id

    if @profile.save
      render :show
    else
      render json: ['Failed Identity. Try again.']
    end
  end

  #@avatar_url = Avatar.find(@profile.avatar_id)
  def index
    @profiles = Profile.all.where(user_id: current_user.id).map do |profile|
      {
        id: profile.id,
        name: profile.name,
        avatar_url: Avatar.find(profile.avatar_id).image.url
      }
    end
  end

  def show
    @profile = Profile.find(params[:id])
  end

  def update

  end

  def destroy

  end

  private

  def profile_params
    params.require(:profile).permit(:name)
  end
end
