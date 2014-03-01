require "test_helper"

feature "Creating a post" do
  scenario "submit form data to create a new post" do
    #given a completed 'new post' form
    sign_in(:author)
    visit new_post_path
    fill_in "Title", with: posts(:cr).title
    fill_in "Body", with: posts(:cr).body

    # when i submit the form
    click_on "Create Post"

    #then a post should be created and displayed
    page.text.must_include "Post was successfully created"
    page.text.must_include posts(:cr).title
    page.text.must_include "Status: unpublished"
  end

  scenario "unauthenticated users cannot visit new_post_path" do
    visit new_post_path
    page.text.must_include "Please sign in before continuing."
  end

  scenario "unauthenticaed users cannot see the new post button" do
    visit posts_path
    page.wont_have_link "New post"
  end


  scenario "authors cannot publish" do
    sign_in(:author)

    visit new_post_path

    page.wont_have_field "Published"
  end

  scenario "editors can publish" do
    sign_in(:editor)

    visit new_post_path

    page.must_have_field "Published"

    fill_in "Title", with: posts(:cr).title
    fill_in "Body", with: posts(:cr).body
    check "Published"
    click_on "Create Post"

    page.text.must_include "Status: Published"
  end


end


