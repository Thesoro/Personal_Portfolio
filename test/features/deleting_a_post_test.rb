require "test_helper"

feature "deleting a post" do
  scenario "delete an existing post" do
    #given an embarrassing existing post
    post=posts(:cr)

    #when i click "delete post"
    click_on "Destroy"

    #then the post should be deleted
    page.wont_have_content posts(:cr).title
  end
end
