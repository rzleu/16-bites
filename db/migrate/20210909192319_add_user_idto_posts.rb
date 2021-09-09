class AddUserIdtoPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :user_id, :string, index: true
  end
end
