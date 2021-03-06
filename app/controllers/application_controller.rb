class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :current_profile, :all_genres

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def current_profile
    @current_profile ||= Profile.find_by(id: session[:profile_id])
  end

  def all_genres
    @all_genres ||= Genre.all
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: {base: ['Invalid Crendentials']}, status: 401
    end
  end

end
