class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  helper_method :current_user, :user_signed_in?

  private

  def current_user
    if session[:user_id]
      @current_user ||= User.find_by(id: session[:user_id])
    elsif Rails.env.development?
      @current_user ||= User.find_or_create_by(email: 'dev@palettewow.local') do |u|
        u.full_name = 'Local Developer'
        u.provider = 'developer'
        u.uid = '12345'
      end
    end
  end

  def user_signed_in?
    current_user.present?
  end

  def authenticate_user!
    unless user_signed_in?
      redirect_to root_path, alert: "Please sign in to access this page."
    end
  end
end
