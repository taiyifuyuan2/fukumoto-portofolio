Rails.application.routes.draw do
  root 'portfolio#index'
  get 'portfolio/index'
  
  # 管理画面
  namespace :admin do
    get 'skills/index'
    get 'skills/show'
    get 'skills/new'
    get 'skills/create'
    get 'skills/edit'
    get 'skills/update'
    get 'skills/destroy'
    resources :projects
    resources :skills
  end
  
  # API
  namespace :api do
    namespace :v1 do
      get 'skills/index'
      get 'projects/index'
      get 'projects/show'
      resources :projects, only: [:index, :show]
      resources :skills, only: [:index]
    end
  end
end
