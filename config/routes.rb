Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :sessions, only: [:create, :show, :destroy]
    resources :profiles, only: [:create, :index, :show, :update, :destroy]
    resources :avatars, only: [:index]
    resources :medias, only: [:create, :index, :show]
    resources :genres, only: [:index, :show]
  end
end
