class Api::VideosController < ApplicationController
  def create

  end

  def index
    @videos = Video.all
    # @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

  private

  def video_params
    params.require(:video).permit(:id, :medium_id)
  end
end
