require "test_helper"

class GradientWorkflowsTest < ActionDispatch::IntegrationTest
  test "gradient tool is public, linked and separate from shared palettes" do
    get root_path
    assert_select 'a[href="/gradient"]', text: "Gradient"

    get gradient_path(type: "radial", angle: "45", stops: "ff0000:0,0000ff:100")
    assert_response :success
    assert_select "h1", "Gradient maker"
    assert_select "select#gradient-type option", count: 2
    assert_select 'input#gradient-angle[min="0"][max="360"]'
    assert_select "textarea#gradient-css[readonly]"
    assert_select "button", text: "Add stop"
    assert_select "button", text: "Copy CSS"
    assert_select "button", text: "Download PNG"
    assert_select 'a[href="/"]', text: "Generator"

    get shared_palette_path(colors: "ff0000-0000ff")
    assert_response :success
    assert_select '[data-controller="palette"]'
    assert_select '[data-controller="gradient"]', count: 0
  end
end
