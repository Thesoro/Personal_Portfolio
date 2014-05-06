require "test_helper"

feature "An online web page" do
	scenario "it should include my site" do
    visit "http://rob-whitehead-portfolio.herokuapp.com"
    page.text.must_include "LOOGIES"
  end
end
