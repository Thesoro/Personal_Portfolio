require "test_helper"

  feature "has a theme" do
    scenario "loading a page" do
      #given i am a user on the site
      visit root_path
      #when I load the page

      #it should have a rad theme
      page.test.must_include "Favea"
    end
  end
