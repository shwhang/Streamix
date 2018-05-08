class Api::GenresController < ApplicationController
  def index
    @genres = all_genres
  end

  def show
    @genre = Genre.find(params[:id])
  end

  private

  def genre_params
    params.require(:genre).permit(:name, :medias)
  end
end
