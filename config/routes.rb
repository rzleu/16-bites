Rails.application.routes.draw do
  
  resources :follows
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get '/users/validate_email_uniqueness/', to: 'users#validate_email_uniqueness', as: 'validate_email_uniqueness'
    resources :posts, only: %i(show create index destroy update)
    resources :users, only: %i(create show index)
    resource :session, only: %i(create destroy)
    resources :follows, only: %i( show create destroy)
  end
  
end
