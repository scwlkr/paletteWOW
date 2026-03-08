class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env["omniauth.auth"])
    if user.valid?
      session[:user_id] = user.id
      redirect_to dashboard_path, notice: "Signed in successfully via Google!"
    else
      redirect_to root_path, alert: "Authentication failed. Please try again."
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Signed out successfully."
  end

  # Added for omniauth failure cases
  def failure
    redirect_to root_path, alert: "Authentication with Google failed. Please try again."
  end
end
