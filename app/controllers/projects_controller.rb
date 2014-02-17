class ProjectsController < ApplicationController
	def index
		@projects = Project.all
	end

	def new
		@project = Project.new
	end

	def create
		@project = Project.new(project_params)
		if @project.save
			flash[:notice] = "Project has been created."
			redirect_to @project
		else
			flash.now[:error] = "Project could not be saved."
			render :new
		end
	end

	def show
		@project = Project.find(params[:id])
	end

    def destroy
      @project = Project.find(params[:id])
      @project.delete
      respond_to do |format|
        format.html { redirect_to projects_url }
        format.json { head :no_content }
      end
    end

private

	def project_params
		params.require(:project).permit(:name, :technologies_used)
	end
end
