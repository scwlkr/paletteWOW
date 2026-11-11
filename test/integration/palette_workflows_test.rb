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

  test "generator renders its five default color columns" do
    get root_path
    assert_response :success
    assert_select '[data-palette-target="container"] > [data-palette-target="column"]', count: 5
  end

  test "generator renders its column controls" do
    get root_path
    assert_response :success
    assert_select '[data-action="click->palette#toggleLock"]', minimum: 1
    assert_select '[data-action="click->palette#copyHex"]', minimum: 1
    assert_select '[data-action="click->palette#viewShades"]', minimum: 1
    assert_select '[data-action="click->palette#addColumn"]', minimum: 1
    assert_select '[data-action="click->palette#removeColumn"]', minimum: 1
    assert_select '[data-palette-target="container"] > [data-palette-target="column"]' do |columns|
      columns.each do |column|
        assert_select column, 'button[aria-label="Color Info"][data-action="click->palette#viewInfo"]', count: 1
      end
    end
    assert_select 'template#column-template' do
      assert_select 'button[aria-label="Color Info"][data-action="click->palette#viewInfo"]', count: 1
    end
  end

  test "color info panel offers a copy button for each read-only value" do
    get root_path
    assert_response :success
    assert_select 'dialog[data-palette-target="infoModal"]', count: 1 do
      %w[Name HEX RGB HSL HSB CMYK LAB].each do |format|
        assert_select "dd[data-palette-target='infoValue'][data-format='#{format}']", count: 1
        assert_select "button[aria-label='Copy #{format}'][data-action='click->palette#copyInfo']", count: 1
      end
      assert_select 'input, select, textarea, [contenteditable]', count: 0
      assert_select 'button[data-action="click->palette#closeInfo"]', count: 1
    end
  end

  test "generator renders undo and redo controls" do
    get root_path
    assert_response :success
    assert_select '[data-action="click->palette#undo"]', minimum: 1
    assert_select '[data-action="click->palette#redo"]', minimum: 1
  end

  test "generator method selector offers all eight methods" do
    get root_path
    assert_response :success
    assert_select 'select[data-action="change->palette#changeMethod"]', minimum: 1

    methods = css_select('select[data-action="change->palette#changeMethod"] option')
      .map { |option| option["value"] }
      .uniq
    assert_equal %w[auto monochromatic analogous complementary split_complementary triadic tetradic square].sort, methods.sort
  end

  test "export modal offers image, document, code, swatch and URL options" do
    get root_path
    assert_response :success
    assert_select '[data-palette-target="exportModal"]', minimum: 1
    %w[
      exportImage exportPdf copySvg copyCss copyTailwind copyUrl
      exportAse copyScss copyLess copyJson copyJsArray copyEmbedHtml
    ].each do |action|
      assert_select "[data-action='click->palette##{action}']", minimum: 1
    end
  end

  test "shared palette links preserve the requested colors" do
    get "/123456-abcdef"
    assert_response :success
    assert_includes response.body, "#123456"
    assert_includes response.body, "#abcdef"
    get "/" + Array.new(10, "123456").join("-")
    assert_response :success
  end

  test "shared palette with ten colors renders all ten columns" do
    hex_codes = %w[000001 000002 000003 000004 000005 000006 000007 000008 000009 00000a]
    colors = hex_codes.map { |hex| "##{hex}" }

    get "/#{hex_codes.join('-')}"
    assert_response :success

    initial_colors = css_select("[data-palette-initial-colors-value]").first
    assert initial_colors, "expected the generator to receive the shared palette"
    assert_equal colors, JSON.parse(initial_colors["data-palette-initial-colors-value"])
    colors.each { |hex| assert_includes response.body, hex }

    assert_select 'template#column-template [data-palette-target="column"]', count: 1
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

  test "privacy and health endpoints return 200" do
    get privacy_path
    assert_response :success

    get rails_health_check_path
    assert_response :success
  end
end
