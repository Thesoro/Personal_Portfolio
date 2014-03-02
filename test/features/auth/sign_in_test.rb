require "test_helper"

feature("As a visitor i want to sign in") do
	scenario "sign in" do
		#given a sign-in form
		visit "/"
		click_on "Sign in"

		#when i sign in with valid info
		fill_in "Email", with: users(:janet).email
		fill_in "Password", with: users(:janet).password
		click_button "Sign in"

		#then i should see the logout link
		page.should have_content "Sign out"
	end
end