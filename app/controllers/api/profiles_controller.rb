class Api::ProfilesController < ApplicationController
  # TODO: Limit to 5 profiles
  def create
    @profile = Profile.new(profile_params)
    @profile.user_id = current_user.id

    if @profile.save
      render :show
    else
      render json: ['Failed Identity. Try again.']
    end
  end

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

    session[:profile_id] = @profile.id
    render :show
  end

  def update
    @profile = Profile.find(params[:id])

    if @profile.update(profile_params)
      render :show
    else
      render json: @profile.errors.full_messages, status: 422
    end
  end

  def destroy
    @profile = Profile.find(params[:id])
    if @profile
      @profile.destroy
      render json: @profile, status: 200
    end

  end

  private

  def profile_params
    params.require(:profile).permit(:name, :avatar_id)
  end
end
