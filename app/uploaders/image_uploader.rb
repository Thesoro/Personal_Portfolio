# encoding: utf-8

class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick
 # include Sprockets::Helpers::RailsHelper
 # include Sprockets::Helpers::IsolatedHelper
  include CarrierWave::MimeTypes
  storage :fog

  process :set_content_type

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Create different versions of your uploaded files:
  version :thumb do
    process :resize_to_limit => [200, 200]
  end

end
