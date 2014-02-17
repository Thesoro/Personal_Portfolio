require "test_helper"

feature "as a site owner, i want to add new projects so i can show off" do
	scenario "adding a new project" do
		#when i go to the project index
		visit projects_path
		#and I click on create a new project and fill in the fields
		click_on "New Project"
		fill_in "Name", with: "Rob's Portfolio"
		fill_in "Technologies used", with: "Ruby, Rails, JS, Foundation"
		click_on "Create Project"
		#it should create that project and redirect me
		page.text.must_include "Project has been created."
		page.text.must_include "Rob's"
		page.text.must_include "Rails"
	end

	scenario "Project has invalid data" do
		#given invalid data is submitted to the form
		visit new_project_path
		fill_in "Name", with: "Q"

		#when the form is submitted with too short a name and no techs field
		click_on "Create Project"

		#Then the form should be displayed again with an error message
		current_path.must_match /projects$/
		page.text.must_include "Project could not be saved"
		page.text.must_include "Name is too short"
		page.text.must_include "Technologies used can't be blank"
	end
end