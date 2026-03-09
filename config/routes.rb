Rails.application.routes.draw do
  get "privacy", to: "pages#privacy"
  get "profile", to: "profiles#show", as: :profile
  get "dashboard", to: "dashboard#index", as: :dashboard

  resources :palettes, only: [ :index, :show, :create, :update, :destroy ]

  # OmniAuth Google Routes
  get "auth/:provider/callback", to: "sessions#create"
  post "auth/:provider/callback", to: "sessions#create"
  get "auth/failure", to: "sessions#failure"
  delete "sign_out", to: "sessions#destroy", as: :sign_out
  get "sign_out", to: "sessions#destroy" # graceful fallback for some links

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "palettes#index"

  # Catch-all for shared palettes, allowing 2 to 10 hex codes separated by hyphens (e.g. 1a1a1a-ffffff)
  get "/:colors", to: "palettes#show", constraints: { colors: /([a-fA-F0-9]{6}-){1,9}[a-fA-F0-9]{6}/ }, as: :shared_palette
end
