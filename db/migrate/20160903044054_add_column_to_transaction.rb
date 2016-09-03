class AddColumnToTransaction < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :amount, :float
    add_column :transactions, :direction, :boolean
  end
end
