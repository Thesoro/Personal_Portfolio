require "test_helper"

feature "creating a project" do
	scenario "it should create the portfolio with parameters i define" do
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
end