class PostMailer < ActionMailer::Base
  default from: "rob@rob.cool"

  def new_comment(post)
    @post = post
    mail to: "rob@rob.cool"
  end
end
