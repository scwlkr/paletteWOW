Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"], {
    prompt: "select_account",
    image_aspect_ratio: "square",
    image_size: 150
  }
end

# OmniAuth configuration for Rails with Turbo
OmniAuth.config.allowed_request_methods = %i[get post]
OmniAuth.config.silence_get_warning = true
