class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: ['Playlist Error']
    end
  end

  def show
    @playlist = Profile.find(params[:id])

    render :show
  end

  private
  def playlist_params
    params.require(:playlist).permit(:profile, :medium)
  end
end
