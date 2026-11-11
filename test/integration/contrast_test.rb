require "test_helper"

class ContrastTest < ActionDispatch::IntegrationTest
  test "contrast checker is public with default colors and accessible controls" do
    get contrast_path

    assert_response :success
    assert_select "h1", "Contrast checker"
    assert_select '[data-controller="contrast"]' do
      assert_select 'input[type="text"][value="#000000"][aria-label="Text color hex"]'
      assert_select 'input[type="text"][value="#ffffff"][aria-label="Background color hex"]'
      assert_select 'input[type="color"]', count: 2
      assert_select "button", "Swap"
      assert_select '[aria-label="Text preview"]'
      assert_select '[aria-label="WCAG contrast results"][aria-live="polite"]'
    end
  end

  test "shared contrast URLs render the checker instead of the palette generator" do
    get contrast_path(text: "123456", bg: "abcdef")

    assert_response :success
    assert_select "title", "Contrast checker | paletteWOW"
    assert_select '[data-controller="contrast"]'
    assert_select '[data-controller="palette"]', count: 0
  end
end
