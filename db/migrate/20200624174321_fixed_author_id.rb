class FixedAuthorId < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :author_id
    add_column :posts, :author_id, :integer, null: false
    add_index :posts, :author_id
  end
end
