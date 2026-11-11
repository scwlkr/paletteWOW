class ToolsController < ApplicationController
  def contrast
    @text_color = normalize_color(params[:text], "#000000")
    @background_color = normalize_color(params[:bg], "#ffffff")
  end

  private

  def normalize_color(value, fallback)
    return fallback unless value.is_a?(String)

    hex = value.strip.delete_prefix("#")
    return fallback unless hex.match?(/\A(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6})\z/)

    hex = hex.chars.map { |char| char * 2 }.join if hex.length == 3
    "##{hex.downcase}"
  end
end
