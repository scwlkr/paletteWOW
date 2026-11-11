require "test_helper"

class GradientPaletteWorkflowsTest < ActionDispatch::IntegrationTest
  test "gradient palette is public, linked and separate from shared palettes" do
    get root_path
    assert_select 'a[href="/gradient-palette"]', text: "Gradient palette"

    get gradient_palette_path
    assert_response :success
    assert_select "h1", "Gradient palette"
    assert_select 'input#blend-start[value="#ff6b6b"]'
    assert_select 'input#blend-end[value="#6c5ce7"]'
    assert_select "select#blend-count option", count: 8
    assert_select 'option[value="3"]'
    assert_select 'option[value="10"]'
    assert_select 'option[value="5"][selected]'
    assert_select 'a[href="/"]', text: "Generator"

    get shared_palette_path(colors: "ff0000-0000ff")
    assert_response :success
    assert_select '[data-controller="palette"]'
    assert_select '[data-controller="gradient-palette"]', count: 0
  end
end
