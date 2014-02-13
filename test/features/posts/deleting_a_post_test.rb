require "test_helper"

feature "deleting a post" do
  scenario "delete an existing post" do
    #given an embarrassing existing post
    visit posts_path
    #when i click "delete post"
    post_title = posts(:cr).title
    page.find("[href='#{post_path(posts(:cr))}'][data-method]").click

    #then the post should be deleted
    page.wont_have_content post_title
  end
end
