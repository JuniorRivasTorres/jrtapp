Rails.application.routes.draw do
  root to: 'pages#home'

  get "/services", to: 'pages#home'
  get "/products", to: 'pages#home'
  get "/sign-up", to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
