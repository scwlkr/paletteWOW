class ColorsController < ApplicationController
  def index
    @query = params[:q].to_s.strip
    matches = ColorDetails.search_names(@query)
    @total = matches.length
    @pages = [ (@total / 200.0).ceil, 1 ].max
    @page = params[:page].to_i.clamp(1, @pages)
    @colors = matches.slice((@page - 1) * 200, 200)
  end

  def show
    @color = ColorDetails.new(params[:hex])
  end
end
