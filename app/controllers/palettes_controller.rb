class PalettesController < ApplicationController
  def index
  end

  def show
    @hex_codes = params[:colors].split("-").map { |hex| "\##{hex}" }

    # We create a structured response for the stimulus JSON if needed
    @colors = @hex_codes
  end
end
