class ProjectController < ApplicationController
  def get
    projects = Project.all
    puts projects
    render :json => projects
  end

  def getProjectId
    project_id = params[:id]
    puts project_id
    if Project.exists?(:id => project_id)
      project = Project.find(project_id)
      render :json => project
    else
      render :json => {"exists":false}
    end

  end

  def post
    projects = Project.all
    puts projects
    render :json => projects
  end
end
