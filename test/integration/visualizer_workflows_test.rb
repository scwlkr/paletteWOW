require "test_helper"

class VisualizerWorkflowsTest < ActionDispatch::IntegrationTest
  test "visualizer is public and renders four colored designs for two to ten colors without JavaScript" do
    palette = %w[000000 FFFFFF ff0000 00ff00 0000ff ffff00 00ffff ff00ff 777777 123456]
    (2..10).each do |count|
      colors = palette.first(count).join("-")
      get visualize_path(colors: colors)
      assert_response :success
      assert_select "h1", "Palette visualizer"
      assert_select 'svg[role="img"]', count: 4
      %w[Website Phone\ app Poster Pattern].each do |label|
        assert_select "svg[aria-label=?]", "#{label} palette preview"
      end
      assert_select 'ul[aria-label="Palette colors"] li', count: count
      assert_select "a[href=?]", shared_palette_path(colors: colors.downcase), text: "Generator"
      assert_select "section[style]" do |sections|
        (0...5).each do |index|
          assert_includes sections.first["style"], "--c#{index + 1}: ##{palette[index % count].downcase}"
        end
      end
    end
  end

  test "visualizer rejects malformed palettes and stays separate from the generator" do
    [ "ff0000", Array.new(11, "ff0000").join("-"), "gggggg-ffffff", "fff-000", "ff0000-ffffff-extra" ].each do |colors|
      get "/visualize/#{colors}"
      assert_response :not_found
    end
    get shared_palette_path(colors: "ff0000-ffffff")
    assert_response :success
    assert_select 'button[data-action="click->palette#visualize"]', text: "Visualize", count: 2
    assert_select 'svg[aria-label="Website palette preview"]', count: 0
  end
end
