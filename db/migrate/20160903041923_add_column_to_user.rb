class AddColumnToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string
    add_column :users, :address, :string
    add_column :users, :ssn, :string
    add_column :users, :band, :integer
  end
end
