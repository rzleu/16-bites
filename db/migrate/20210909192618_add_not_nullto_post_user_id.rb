class AddNotNulltoPostUserId < ActiveRecord::Migration[6.1]
  def change
    change_column_null :posts, :user_id, false
  end
end
