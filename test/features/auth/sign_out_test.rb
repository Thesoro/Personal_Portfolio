require "test_helper"

feature("AS a site visitor I want to be able to sign up for an ccount so that I can perform more restricted actions") do
	scenario "sign up" do
		#given a registration form
		visit "/"
		click_on "Sign Up"

		#when i register and sign in with valid info
		fill_in "Email", with: "test@example.com"
		fill_in "Password", with: "password"
		fill_in "Password", with: "password"
		click_on "Sign Up"
		visit root_path

		#then i should become logged out
		page.wont_have_content "Sign Out"
	end
end
