require "test_helper"

class ImageWorkflowsTest < ActionDispatch::IntegrationTest
  test "image tool is public and offers local image input and two to ten colors" do
    get image_path
    assert_response :success
    assert_select "h1", "Palette from image"
    assert_select 'input[type="file"][id="palette-image"]'
    assert_select 'label[for="palette-image"]', text: /Choose image/
    assert_select "select#image-count option", count: 9
    assert_select 'select#image-count option[selected][value="5"]'
    assert_select 'a[href="/"]', text: "Generator"
    assert_select "form", count: 0
  end
end
