require "test_helper"

class ContrastWorkflowsTest < ActionDispatch::IntegrationTest
  test "contrast checker is public with or without shared colours" do
    [ {}, { text: "123456", bg: "abcdef" }, { text: "invalid", bg: "#fff" } ].each do |params|
      get contrast_path, params: params
      assert_response :success
      assert_select "h1", "Contrast checker"
      assert_select '[data-controller="contrast"]' do
        assert_select 'input[type="text"]', count: 2
        assert_select 'input[type="color"]', count: 2
        assert_select 'label[for="contrast-text"]', "Text colour"
        assert_select 'label[for="contrast-bg"]', "Background colour"
        assert_select 'button[data-action="contrast#swap"]', "Swap"
        assert_select 'section[aria-label="Text preview"]'
        assert_select 'section[aria-label="WCAG contrast results"][aria-live="polite"]' do
          assert_select '[data-contrast-target="ratio"]'
          %w[aa aaa aaLarge aaaLarge].each do |level|
            assert_select "[data-level='#{level}']", count: 1
          end
        end
      end
    end
  end
end
