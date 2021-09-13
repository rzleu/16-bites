class AddIndexPostUser < ActiveRecord::Migration[6.1]
  def change
    add_index :posts, :user_id
  end
end
