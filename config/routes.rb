PersonalPortfolio::Application.routes.draw do
  devise_for :users
  resources :posts, :projects

  root to: 'posts#index'

  namespace :api do
    namespace :v1 do
      resources :posts, :only => [ :create ]
    end
  end

end
