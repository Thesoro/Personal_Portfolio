require 'rake/testtask'
require File.expand_path('../config/application', __FILE__)

PersonalPortfolio::Application.load_tasks

task default: 'test'

Rake::TestTask.new do |t|
  t.libs << "test"
  t.pattern = "test/**/*_test.rb"
end

# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

#require File.expand_path('../config/application', __FILE__)

#PersonalPortfolio::Application.load_tasks

# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.


