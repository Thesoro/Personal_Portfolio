feature "As a site owner, I should be able to delete my projects to curate the content" do
	scenario "when i click on 'delete' for a project" do
		#when i am looking at a project
		visit projects_path
		click_on "New Project"
		fill_in "Name", with: "Rob's Portfolio"
		fill_in "Technologies used", with: "Ruby, Rails, JS, Foundation"
		click_on "Create Project"
		#and i click on delete
		click_on "Delete"
		#it should delete the project and redirect me to the projects page
		current_path.must_include "/projects"
		page.wont_have_content "Rob's Portfolio"
	end
end