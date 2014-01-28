require "test_helper"

feature "Editing a post" do
  scenario "submit updates to an exisitng post" do
    #given an existing post
    post = posts(:http)

    #when i click on edit post and make changes
    click_on "Edit"
    fill_in "Title", with: "Coding Any High Level Language"
    click_on "Update Post"

    #then the changes should be made to the original post
    page.text.must_include "Post was successfully updated"
    page.text.must_include "High Level Language"
  end
end
