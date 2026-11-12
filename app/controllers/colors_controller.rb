class ColorsController < ApplicationController
  def show
    @color = ColorDetails.new(params[:hex])
  end
end
