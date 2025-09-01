class Project < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :technologies, presence: true
  
  scope :featured, -> { where(featured: true) }
  scope :by_category, ->(category) { where(category: category) }
  
  def technologies_array
    technologies.split(',').map(&:strip)
  end
end
