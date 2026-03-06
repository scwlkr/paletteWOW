class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @palettes = current_user.palettes.includes(:colors).order(created_at: :desc)
  end
end
