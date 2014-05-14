class CommentMailer < ActionMailer::Base
  default from: "rob.whitehead@gmail.com"



  def new_comment(comment, commentable)
    @comment = comment
    @commentable = commentable
    mail to: "rob.whitehead@gmail.com"
  end

!!!!
in controller:
if @comment.save
  CommentMailer.new_comment(@comment, @commentable).deliver


!!!!
in view
<div> A new comment by <%= comment.author %>
!!!!
