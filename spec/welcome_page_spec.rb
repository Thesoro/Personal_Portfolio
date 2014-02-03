describe "A local web page" do
	it "should include my name" do
		visit "file:///home/robw/RubyWinter2014/Personal_Portfolio/public/index.html"
		page.text.must_include "Rob Whitehead"
	end
end
