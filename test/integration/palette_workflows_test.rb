require "test_helper"

class PaletteWorkflowsTest < ActionDispatch::IntegrationTest
  test "generator is public and has no account or save controls" do
    get root_path
    assert_response :success
    assert_select '[data-controller="palette"]'
    assert_select '[data-action="click->palette#openExportModal"]'
    assert_select '[data-action="click->palette#save"]', count: 0
    assert_select 'form[action^="/auth"]', count: 0
    assert_select 'a[href="/dashboard"]', count: 0
  end

  test "shared palette links preserve the requested colors" do
    get "/123456-abcdef"
    assert_response :success
    assert_includes response.body, "#123456"
    assert_includes response.body, "#abcdef"
    get "/" + Array.new(10, "123456").join("-")
    assert_response :success
  end

  test "invalid shared palettes are not routed" do
    [ "/123456", "/123456-not-a-color", "/" + Array.new(11, "123456").join("-") ].each do |path|
      get path
      assert_response :not_found
    end
  end

  test "retired authentication and library routes expose no account data" do
    [ "/auth/google_oauth2", "/auth/google_oauth2/callback", "/auth/failure", "/dashboard", "/profile", "/sign_out", "/palettes/#{palettes(:saved).id}" ].each do |path|
      get path
      assert_response :not_found
    end
    assert_no_difference "Palette.count" do
      post "/auth/google_oauth2"
      assert_response :not_found
      post "/palettes", params: { palette: { hex_codes: [ "#123456", "#abcdef" ] } }, as: :json
      assert_response :not_found
      patch "/palettes/#{palettes(:saved).id}", params: { palette: { name: "Changed" } }, as: :json
      assert_response :not_found
      delete "/palettes/#{palettes(:saved).id}", as: :json
      assert_response :not_found
    end
  end

  test "privacy page reflects the account-free release" do
    get privacy_path
    assert_response :success
    assert_includes response.body, "currently disabled"
  end
end
