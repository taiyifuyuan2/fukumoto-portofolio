class CreateSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :skills do |t|
      t.string :name
      t.text :description
      t.string :category
      t.integer :proficiency
      t.string :icon

      t.timestamps
    end
  end
end
