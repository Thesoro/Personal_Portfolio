require "test_helper"


feature "comments" do
  scenario "posting a new comment" do
    #given i'm a site visitor
    visit posts_path

    #when i click on comment, fill in text, and submit
    click_on "Comment"
    fill_in "Username", with: comments(:troll).author
    fill_in "Comment", with: comments(:troll).content
    click_on "Submit"

    #then I should be told my comment has been submitted
    page.text.must_include "Your comment has been submitted."
  end

  scenario "approving new comments" do
    #given a user makes a comment
    visit posts_path
    click_on "Comment"
    fill_in "Username", with: comments(:troll).author
    fill_in "Comment", with: comments(:troll).content
    click_on "Submit"
    #and i'm signed in as an admin
    visit "/"
    click_on "Sign in"
    fill_in "Email", with: users(:janet).email
    fill_in "Password", with: users(:janet).password
    click_button "Sign in"

    #when i check out a pending comment
    visit posts_path
    click_on "Pending Comments"

    #then I should have the options to show or not show certain comments
    page.text.must_include "Approve"
    page.text.must_include "Deny"

  end

  scenario "unapproved comments should not be displayed" do
    #given i'm a visitor
    visit posts_path

    #and I make a dumb comment
    click_on "Comment"
    fill_in "Username", with: comments(:troll).author
    fill_in "Comment", with: comments(:troll).content
    click_on "Submit"

    #it should not be displayed yet
    page.text.must_not_include "websote"
  end



end


