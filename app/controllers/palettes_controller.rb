class PalettesController < ApplicationController
  def index
  end

  def show
    @hex_codes = params[:colors].split("-").map { |hex| "\##{hex}" }

    # We create a structured response for the stimulus JSON if needed
    @colors = @hex_codes
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

  def palette_params
    params.require(:palette).permit(:name, hex_codes: [])
  end
end
