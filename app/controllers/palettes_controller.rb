class PalettesController < ApplicationController
  before_action :authenticate_palette_user!, only: [ :create, :update, :destroy ]

  def index
    load_saved_patterns
  end

  def show
    if params[:colors]
      @hex_codes = params[:colors].split("-").map { |hex| "##{hex}" }
    else
      unless current_user
        authenticate_user!
        return
      end
      @hex_codes = current_user.palettes.find(params[:id]).hex_codes
    end
    @colors = @hex_codes
    load_saved_patterns
  end

  def create
    @palette = current_user.palettes.new(palette_params)

    if @palette.save
      render json: { message: "Palette saved successfully", palette: @palette }, status: :created
    else
      render json: { errors: @palette.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @palette = current_user.palettes.find(params[:id])
    if @palette.update(palette_params)
      render json: { message: "Palette updated successfully", palette: @palette }, status: :ok
    else
      render json: { errors: @palette.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @palette = current_user.palettes.find(params[:id])
    @palette.destroy!
    render json: { message: "Palette deleted successfully" }, status: :ok
  end

  private

  def authenticate_palette_user!
    render json: { error: "Please sign in to save palettes." }, status: :unauthorized unless current_user
  end

  def load_saved_patterns
    if current_user
      @saved_hex_patterns = current_user.palettes.pluck(:hex_codes).map { |codes| codes.map { |h| h.delete("#").upcase }.join("-") }
    else
      @saved_hex_patterns = []
    end
  end

  def palette_params
    params.require(:palette).permit(:name, hex_codes: [])
  end
end
