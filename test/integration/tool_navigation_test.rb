require "test_helper"

class ToolNavigationTest < ActionDispatch::IntegrationTest
  test "header and footer expose the same working public tools on every destination" do
    tools = {
      "Generator" => "/", "Image" => "/image", "Contrast" => "/contrast",
      "Gradient" => "/gradient", "Gradient palette" => "/gradient-palette",
      "Visualizer" => "/visualize/6195ed-f4a261-e9c46a-2a9d8f-264653",
      "Colors" => "/colors", "Tailwind" => "/tailwind"
    }

    (tools.values + [ "/privacy", "/ff0000-ffffff", "/color/6195ed" ]).each do |path|
      get path
      assert_response :success
      [ 'nav[aria-label="Tools"]', 'footer nav[aria-label="Footer"]' ].each do |selector|
        assert_select selector do
          tools.each do |name, href|
            assert_select "a[href=?]", href, text: name, count: 1
          end
        end
      end
      assert_select 'footer a[href="/privacy"]', text: "Privacy Policy", count: 1
    end
  end
end
