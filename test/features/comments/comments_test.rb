require "test_helper"

•
RED: Write some tests for these stories...
•
As a site visitor I want to write a comment from a blog post page so that I can troll the author
•
As an author or editor I want to approve comments so that my blog does not have spam comments
•
Comments should not display until they are approved by an author or editor
•
How do you want approval to work? A checkbox on an edit form? A button that PATCHes to CommentsController#update?

feature "comments" do
  scenario "posting a new comment" do
    #given i'm a site visitor
    visit posts_path

    #when i click on comment, fill in text, and submit
    click_on "Comment"
    fill_in "Username", with: comments(:troll).author
    fill_in "Comment", with: comments(:troll).comment
    click_on "Submit"

    #then I should be told my comment has been submitted
    page.text.must_include "Your comment has been submitted."
  end

  scenario "approving new comments" do
    #given a user makes a comment
    visit posts_path
    click_on "Comment"
    fill_in "Username", with: comments(:troll).author
    fill_in "Comment", with: comments(:troll).comment
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
    visit posts_path(post)

    #and I make a dumb comment
    click_on "Comment"
    fill_in "Username", with: comments(:troll).author
    fill_in "Comment", with: comments(:troll).comment
    click_on "Submit"

    #it should not be displayed yet
    page.text.must_not_include "websote"
  end



end


