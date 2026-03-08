class PalettesController < ApplicationController
  before_action :authenticate_user!, only: [ :create, :destroy ]

  def index
  end

  def create
    # Expected payload: { hex_codes: ["#123456", "#234567", ...] }
    hex_codes = params[:hex_codes]

    if hex_codes.present? && hex_codes.is_a?(Array)
      palette = current_user.palettes.create!(name: "Palette ##{rand(1000..9999)}")

      hex_codes.each_with_index do |hex, index|
        palette.colors.create!(hex_code: hex, position: index)
      end

      render json: { success: true, message: "Palette saved successfully!" }, status: :created
    else
      render json: { success: false, error: "Invalid palette data provided." }, status: :unprocessable_entity
    end
  end

  def show
    @hex_codes = params[:colors].split("-").map { |hex| "\##{hex}" }

    # We create a structured response for the stimulus JSON if needed
    @colors = @hex_codes
  end

  def destroy
    palette = current_user.palettes.find(params[:id])
    palette.destroy
    redirect_to dashboard_path, notice: "Palette was successfully deleted."
  end
end
