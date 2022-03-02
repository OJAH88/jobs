Rails.application.routes.draw do
  
  resources :applications
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/applications", to: "applications#show"
  post "/login", to: "sessions#create"

  post "/login", to: "users#login"
  post "/login", to: "users#token_authenticate"

  delete "/logout", to: "sessions#destroy"

end
