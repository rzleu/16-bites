class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :description
      t.string :location
      t.string :keywords
      t.string :category
      t.boolean :nsfw

      t.timestamps
    end
  end
end
