require "test_helper"

feature "checking for zurb foundation" do
  scenario "making sure zurb is loaded" do
    #given I visit the site
    visit root_path
    #when I look at the page

    #then there should be columns indicating zurb's presence
    page.html.must_include("columns")
  end
end
