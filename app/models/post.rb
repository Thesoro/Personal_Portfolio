class Post < ActiveRecord::Base
	  belongs_to :author, class_name: "User"
end
