Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'home#index'
  get '/member', to: 'member#get'
  get '/project', to: 'project#get'
  get '/project/:id', to: 'project#getProjectId'
  post '/project', to: 'project#post'
  get '/members/:id', to: 'members#get'

  get '/projects' => redirect('/')
  get '/project-detail/:id' => redirect('/')
  get '/result/:id' => redirect('/')
  get '/grading/:id/:id' => redirect('/')
end
