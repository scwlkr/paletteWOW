module ApplicationHelper
  def tool_navigation_links
    [
      [ "Generator", root_path ],
      [ "Image", image_path ],
      [ "Contrast", contrast_path ],
      [ "Gradient", gradient_path ],
      [ "Gradient palette", gradient_palette_path ],
      [ "Visualizer", visualize_path(colors: "6195ed-f4a261-e9c46a-2a9d8f-264653") ],
      [ "Colors", colors_path ],
      [ "Tailwind", tailwind_path ]
    ]
  end
end
