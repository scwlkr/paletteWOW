require "test_helper"

class ColorPagesTest < ActionDispatch::IntegrationTest
  test "color information is rendered in the response without JavaScript" do
    get "/color/fF0000"
    assert_response :success
    assert_select "title", text: "#FF0000 · Red · paletteWOW"
    assert_select 'meta[name="description"][content*="#FF0000"]'
    assert_select "h1", text: "#FF0000"
    assert_select "header p", text: "Red"
    [ "#FF0000", "rgb(255, 0, 0)", "hsl(0, 100.0%, 50.0%)", "0°, 100.0%, 100.0%", "0.0%, 100.0%, 100.0%, 0.0%", "53.23, 80.11, 67.22" ].each do |value|
      assert_select "dd", text: value
    end
    assert_select 'section[aria-label="Tints"] a', count: 10
    assert_select 'section[aria-label="Tints"] a[href="/color/ff1a1a"]'
    assert_select 'section[aria-label="Tints"] a[href="/color/ffffff"]'
    assert_select 'section[aria-label="Shades"] a', count: 10
    assert_select 'section[aria-label="Shades"] a[href="/color/e60000"]'
    assert_select 'section[aria-label="Shades"] a[href="/color/000000"]'
    {
      "Complementary" => "ff0000-00ffff", "Analogous" => "ff0000-ff8000-ff0080",
      "Triadic" => "ff0000-00ff00-0000ff", "Tetradic" => "ff0000-ffff00-00ffff-0000ff",
      "Split-complementary" => "ff0000-00ff80-0080ff"
    }.each do |label, colors|
      assert_select "a[href='/#{colors}'] h3", text: label
    end
    assert_select 'section[aria-label="On white"] h3', text: "On white · 4.00:1"
    assert_select 'section[aria-label="On white"] tbody tr:first-child td', text: "Fail", count: 2
    assert_select 'section[aria-label="On white"] tbody tr:last-child td', text: "Pass", count: 1
    assert_select 'section[aria-label="On black"] h3', text: "On black · 5.25:1"
    assert_select 'section[aria-label="On black"] tbody tr:first-child td', text: "Pass", count: 1
    assert_select 'section[aria-label="On black"] tbody tr:last-child td', text: "Pass", count: 2
    assert_select "pre code", text: /--color: #ff0000;/
    assert_select 'section[aria-labelledby="similar-title"] a[href^="/color/"]', count: 6
    assert_select 'section[aria-labelledby="similar-title"] a[href="/color/ff0000"]', count: 0
  end

  test "black white and gray render finite formats and correct contrast" do
    { "000000" => [ "Black", "21.00", "1.00" ], "ffffff" => [ "White", "1.00", "21.00" ], "777777" => [ "Boulder", "4.48", "4.69" ] }.each do |hex, (name, white, black)|
      get "/color/#{hex}"
      assert_response :success
      assert_select "header p", text: name
      assert_select "dd", text: /NaN|Infinity/, count: 0
      assert_select 'section[aria-label="On white"] h3', text: "On white · #{white}:1"
      assert_select 'section[aria-label="On black"] h3', text: "On black · #{black}:1"
    end
    get "/color/000000"
    assert_select "dd", text: "0%, 0%, 0%, 100%"
    get "/color/777777"
    assert_select 'section[aria-label="On white"] tbody tr:first-child td', text: "Fail", count: 2
  end

  test "approximate ntc names match the generator" do
    { "6195ed" => "Cornflower Blue", "123456" => "Blue Zodiac", "ff00ff" => "Magenta / Fuchsia" }.each do |hex, name|
      get "/color/#{hex}"
      assert_response :success
      assert_select "header p", text: name
    end
  end

  test "invalid color addresses return 404" do
    %w[/color/fff /color/1234567 /color/gg0000 /color/red /color /color/123456/extra].each do |path|
      get path
      assert_response :not_found
    end
  end

  test "shared generator names link to their own color pages" do
    get "/ff0000-123456"
    assert_response :success
    assert_select '[data-palette-target="column"] a[data-palette-target="colorName"][href="/color/ff0000"]', text: "Red"
    assert_select '[data-palette-target="column"] a[data-palette-target="colorName"][href="/color/123456"]', text: "Blue Zodiac"
    assert_select 'template#column-template a[data-palette-target="colorName"]', count: 1
  end
end
