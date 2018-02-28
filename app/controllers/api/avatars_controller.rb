class Api::AvatarsController < ApplicationController
  def create
    @avatar = Avatar.new(avatar_params)

    if @avatar.save
      render json: ["hello"]
    else
      render json: ['Failed avatar']
    end
  end

  def index
    @avatars = Avatar.all
  end
end
