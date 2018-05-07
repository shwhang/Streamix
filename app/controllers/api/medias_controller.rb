class Api::MediasController < ApplicationController
  def create
    @medium = Medium.new(media_params)

    if @medium.save
      render :show
    else
      render json: @medium.errors.full_messages, status: 422
    end
  end

  def index
    #to show only the items for each genre for sub menus.
    @medias = Medium.all
  end

  def show
    @medium = Medium.find(params[:id])
  end

  private
  def media_params
    params.require(:medium).permit(:id, :title, :year, :mpaa_rating, :description, :has_episodes, :playlist_id, :genre_id)
  end
end
