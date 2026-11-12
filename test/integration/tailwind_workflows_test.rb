require "test_helper"

class TailwindWorkflowsTest < ActionDispatch::IntegrationTest
  test "all default Tailwind scales render with copy controls and usable links" do
    get root_path
    assert_select 'a[href="/tailwind"]', text: "Tailwind"

    get "/tailwind"
    assert_response :success
    assert_select "title", text: "Tailwind colors · paletteWOW"
    assert_select "h1", text: "Tailwind colors"
    # Tailwind 4.3 has 26 scales of 11 shades, plus black and white.
    assert_select "article section", count: 27
    assert_select "article button[data-hex]", count: 288
    assert_select 'article a[href^="/color/"]', count: 288
    assert_select 'section[aria-labelledby="mauve-title"] h2', text: "Mauve"
    assert_select 'section[aria-labelledby="olive-title"] h2', text: "Olive"
    assert_select 'section[aria-labelledby="mist-title"] h2', text: "Mist"
    assert_select 'section[aria-labelledby="taupe-title"] h2', text: "Taupe"
    assert_select 'section[aria-labelledby="red-title"] button[data-name="red-500"][data-hex="#fb2c36"]'
    assert_select 'section[aria-labelledby="blue-title"] button[data-name="blue-500"][data-hex="#2b7fff"]'
    assert_select 'section[aria-labelledby="base-colors-title"] a[href="/color/000000"]'
    assert_select 'section[aria-labelledby="base-colors-title"] a[href="/color/ffffff"]'

    assert_select 'section:not([aria-labelledby="base-colors-title"])' do |sections|
      sections.each do |section|
        assert_select section, "button[data-hex]" do |swatches|
          assert_equal %w[50 100 200 300 400 500 600 700 800 900 950], swatches.map { |swatch| swatch["data-name"].split("-").last }
          swatches.each do |swatch|
            hex = swatch["data-hex"]
            assert_match(/\A#[0-9a-f]{6}\z/, hex)
            assert_select section, "a[href='/color/#{hex.delete_prefix('#')}']"
          end
          colors = swatches.drop(1).map { |swatch| swatch["data-hex"].delete_prefix("#") }.join("-")
          assert_select section, "a[href='/#{colors}']", text: "Open in generator"
        end
      end
    end

    # Opening a scale must fit the generator's ten-color limit and preserve order.
    links = css_select('a[aria-label^="Open "]')
    assert_equal 26, links.length
    links.each do |link|
      colors = link["href"].delete_prefix("/")
      assert_equal 10, colors.split("-").length
      get link["href"]
      assert_response :success
      assert_select '[data-controller="palette"]' do |generators|
        assert_equal colors.split("-").map { |hex| "##{hex}" }, JSON.parse(generators.first["data-palette-initial-colors-value"])
      end
    end
  end
end
