require "test_helper"

feature "Visitng the Post Index" do
  scenario "with existing posts" do
    #given existing posts
    post = posts(:cr)
    #when i visit posts
    visit posts_path

    #then the existing posts should be loaded
    page.text.must_include posts(:cr).title
  end
end
