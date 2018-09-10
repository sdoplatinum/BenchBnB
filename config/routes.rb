Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users
    resources :benches, only: [:index, :create, :show]
    resource :session
  end
end
