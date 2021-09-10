Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :posts, only: %i(show create index destroy update)
    resources :users, only: [:create]
    get '/users/validate_email_uniqueness/', to: 'users#validate_email_uniqueness', as: 'validate_email_uniqueness'
    resource :session, only: [:create, :destroy]
  end
  
end
