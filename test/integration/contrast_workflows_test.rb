require "test_helper"

class ContrastWorkflowsTest < ActionDispatch::IntegrationTest
  test "contrast page is public and starts with black text on white" do
    get contrast_path
    assert_response :success
    assert_select "h1", "Contrast checker"
    assert_select 'input#contrast-text[value="#000000"]'
    assert_select 'input#contrast-bg[value="#ffffff"]'
    assert_select 'input[type="color"]', count: 2
    assert_select "button", "Swap colors"
    assert_select "table caption", "WCAG 2.2 text contrast results"
    assert_select "a[href='/']", text: "Generator"
  end

  test "shared contrast links normalize each requested color and render the preview safely" do
    get contrast_path, params: { text: "#AbC", bg: " 123456 " }
    assert_response :success
    assert_select 'input#contrast-text[value="#aabbcc"]'
    assert_select 'input#contrast-bg[value="#123456"]'
    assert_select '[data-contrast-target="preview"][style="color: #aabbcc; background-color: #123456;"]'
  end

  test "invalid or structured URL colors fall back independently without raising" do
    [ "bad-color", "#12345", "red; background: url(x)", [ "abc" ], { bad: "abc" } ].each do |invalid|
      get contrast_path, params: { text: invalid, bg: "#def" }
      assert_response :success
      assert_select 'input#contrast-text[value="#000000"]'
      assert_select 'input#contrast-bg[value="#ddeeff"]'

      get contrast_path, params: { text: "ABCDEF", bg: invalid }
      assert_response :success
      assert_select 'input#contrast-text[value="#abcdef"]'
      assert_select 'input#contrast-bg[value="#ffffff"]'
    end
  end
end
