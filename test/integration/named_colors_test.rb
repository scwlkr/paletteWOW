require "test_helper"

class NamedColorsTest < ActionDispatch::IntegrationTest
  test "the complete named color list is paginated and links to color details" do
    get "/"
    assert_select 'nav a[href="/colors"]', text: "Colors"

    seen = []
    path = "/colors"
    8.times do |index|
      get path
      assert_response :success
      assert_select "h1", text: "Named colors"
      assert_select 'form[method="get"][action="/colors"][role="search"]'
      assert_select 'label[for="q"]', text: "Name or hex"
      assert_select 'ul[aria-label="Named colors"] a', count: index == 7 ? 167 : 200 do |links|
        hrefs = links.map { |link| link["href"] }
        assert_empty seen & hrefs
        seen.concat(hrefs)
        assert hrefs.all? { |href| href.match?(%r{\A/color/[0-9a-f]{6}\z}) }
      end
      assert_select '[aria-current="page"]', text: "Page #{index + 1} of 8"
      assert_select 'a[rel="prev"]', count: index.zero? ? 0 : 1
      if index == 7
        assert_select 'a[rel="next"]', count: 0
      else
        assert_select 'a[rel="next"]', count: 1 do |links|
          path = links.first["href"]
        end
      end
    end
    assert_equal 1567, seen.length
    get seen.first
    assert_response :success
    assert_select "header p", text: "Abbey"
  end

  test "name search ignores case and whitespace and uses literal substrings" do
    get "/colors", params: { q: "  cornFLOWER  " }
    assert_response :success
    assert_select 'input[name="q"][value="cornFLOWER"]'
    assert_select 'ul[aria-label="Named colors"] a', count: 3
    assert_select 'a[href="/color/6495ed"]', text: /Cornflower Blue/
    assert_select 'a[href="/color/93ccea"]', text: /Cornflower/
    assert_select 'a[href="/color/ffb0ac"]', text: /Cornflower Lilac/
    assert_select 'a[rel="next"]', count: 0

    [ "no such color name", "<script>alert(1)</script>", "#nothex" ].each do |query|
      get "/colors", params: { q: query }
      assert_response :success
      assert_select 'input[name="q"]' do |inputs|
        assert_equal query, inputs.first["value"]
      end
      assert_select '[role="status"]', text: "No colors found."
      assert_select 'ul[aria-label="Named colors"]', count: 0
      assert_select "article script", count: 0
      assert_select 'a[href="/colors"]', text: "Clear"
    end
  end

  test "hex search ranks exact or nearest ntc names first and preserves the query across pages" do
    { "#fF0000" => "ff0000", "6195ed" => "6495ed", "#f0f" => "ff00ff", "000000" => "000000", "ffffff" => "ffffff" }.each do |query, first_hex|
      get "/colors", params: { q: query }
      assert_response :success
      assert_select 'ul[aria-label="Named colors"] a', count: 200 do |links|
        assert_equal "/color/#{first_hex}", links.first["href"]
      end
      assert_select 'a[rel="next"]' do |links|
        get links.first["href"]
      end
      assert_response :success
      assert_select 'input[name="q"]' do |inputs|
        assert_equal query, inputs.first["value"]
      end
      assert_select '[aria-current="page"]', text: "Page 2 of 8"
      assert_select "a[href='/color/#{first_hex}']", count: 0
      assert_select 'a[rel="prev"]' do |links|
        get links.first["href"]
      end
      assert_select 'ul[aria-label="Named colors"] li:first-child a' do |links|
        assert_equal "/color/#{first_hex}", links.first["href"]
      end
    end
  end

  test "name pagination retains its filter and page inputs stay in range" do
    get "/colors", params: { q: "a" }
    assert_select 'a[rel="next"]' do |links|
      get links.first["href"]
    end
    assert_response :success
    assert_select 'input[name="q"][value="a"]'
    assert_select 'ul[aria-label="Named colors"] a', count: 200 do |links|
      assert links.all? { |link| link.text.downcase.include?("a") }
    end

    { "-5" => 1, "oops" => 1, "999999999999999999999" => 8 }.each do |page, expected|
      get "/colors", params: { page: page }
      assert_response :success
      assert_select '[aria-current="page"]', text: "Page #{expected} of 8"
    end
  end
end
