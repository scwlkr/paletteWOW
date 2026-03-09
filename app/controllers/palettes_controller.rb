class PalettesController < ApplicationController
  def index
    load_saved_patterns
  end

  def show
    @hex_codes = params[:colors].split("-").map { |hex| "\##{hex}" }
    @colors = @hex_codes
    load_saved_patterns
  end

  def create
    @palette = Palette.new(palette_params)
    @palette.user = current_user

    if @palette.save
      render json: { message: "Palette saved successfully", palette: @palette }, status: :created
    else
      render json: { errors: @palette.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @palette = Palette.find(params[:id])
    if current_user && @palette.user == current_user
      if @palette.update(palette_params)
        render json: { message: "Palette updated successfully", palette: @palette }, status: :ok
      else
        render json: { errors: @palette.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def destroy
    @palette = Palette.find(params[:id])
    if current_user && @palette.user == current_user
      @palette.destroy
      render json: { message: "Palette deleted successfully" }, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  private

  def load_saved_patterns
    if current_user
      @saved_hex_patterns = current_user.palettes.pluck(:hex_codes).map { |codes| codes.map { |h| h.delete('#').upcase }.join('-') }
    else
      @saved_hex_patterns = []
    end
  end

  def palette_params
    params.require(:palette).permit(:name, hex_codes: [])
  end
end
