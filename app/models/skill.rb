class Skill < ApplicationRecord
  validates :name, presence: true
  validates :category, presence: true
  validates :proficiency, inclusion: { in: 1..5 }
  
  scope :by_category, ->(category) { where(category: category) }
  scope :high_proficiency, -> { where('proficiency >= ?', 4) }
  
  def proficiency_stars
    '★' * proficiency + '☆' * (5 - proficiency)
  end
end
