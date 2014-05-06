require "test_helper"

feature("AS a site visitor I want to be able to sign up for an ccount so that I can perform more restricted actions") do
	scenario "sign up" do
		#given a registration form
		visit root_path
		click_link "Sign Up"

		#when i register with valid info
		fill_in "Email", with: "test@example.com"
		fill_in "Password", with: "password"
		fill_in "Password", with: "password"
		click_button "Sign up"

		#then I should be signed up
		page.wont_have_content "There has been a problem with your signup."
	end
end
