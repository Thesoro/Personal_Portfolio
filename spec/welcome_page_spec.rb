describe "A local web page" do
	it "has a welcome headline" do
		visit "file:///home/robw/RubyWinter2014/Personal_Portfolio/public/index.html"
		page.text.must_include "Welcome aboard"
	end
end