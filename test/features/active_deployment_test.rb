describe "An online web page" do
  it "should include my site" do
    visit "http://www.robwhitehead.net"
    page.text.must_include "Rob Whitehead"
  end
end
