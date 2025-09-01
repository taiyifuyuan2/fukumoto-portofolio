class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.string :github_url
      t.string :live_url
      t.text :technologies
      t.string :category
      t.boolean :featured

      t.timestamps
    end
  end
end
