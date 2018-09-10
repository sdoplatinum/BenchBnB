class Bench < ApplicationRecord
  validates :description, presence: true

  def self.in_bounds(bounds)
    coordinates = <<-COOR
      lat < #{bounds["northEast"]["lat"]}
      AND lat > #{bounds["southWest"]["lat"]}
      AND lng < #{bounds["northEast"]["lng"]}
      AND lng > #{bounds["southWest"]["lng"]}
    COOR

    self.where(coordinates)
  end
end
