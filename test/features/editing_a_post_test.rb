require "test_helper"

feature "Editing a post" do
  scenario "submit updates to an exisitng post" do
    #given an existing post
    visit posts_path

    #when i click on edit post and make changes
    click_link("Edit", :match => :first)
    fill_in "Title", with: "Coding Any High Level Language"
    click_link("Update Post", :match => :first)

    #then the changes should be made to the original post
    page.text.must_include "Post was successfully updated"
    page.text.must_include "High Level Language"
  end
end
