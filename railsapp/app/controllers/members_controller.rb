class MembersController < ApplicationController
  def get
    project_id = params[:id]
    project = ''
    members = ''
    if Project.exists?(:id => project_id)
      project = Project.find(project_id)
      members = project.member.all
      render :json => members
    else
      render :json => {"exists":false}
    end
  end
end
