import React from "react";
import Icon from "../Elements/Icon";

const iconMap = {
  housing: Icon.House,
  food: Icon.Food,
  transportation: Icon.Transport,
  entertainment: Icon.Movie,
  shopping: Icon.Shopping,
  others: Icon.Other,
};

const categoryLabels = {
  housing: "Housing",
  food: "Food",
  transportation: "Transportation",
  entertainment: "Entertainment",
  shopping: "Shopping",
  others: "Others",
};

function CardExpenseCategory({ category, amount, percentage, trend, detail }) {
  const CategoryIcon = iconMap[category] || Icon.Other;
  const isUp = trend === "up";

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-05 rounded-lg">
            <CategoryIcon size={24} />
          </div>
          <div>
            <div className="text-gray-03 text-sm">{categoryLabels[category] || category}</div>
            <div className="text-xl font-bold">${amount}</div>
          </div>
        </div>
        <div className="text-right">
          <div className={`flex items-center justify-end gap-1 text-gray-03 ${isUp ? "text-red-500" : "text-green-500"}`}>
            <span className="text-sm text-gray-03">{percentage}%</span>
            {isUp ? <Icon.ArrowUp size={16} /> : <Icon.ArrowDown size={16} />}
          </div>
          <div className="text-xs text-gray-03">Compare to the last month</div>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {(detail || []).map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-t border-gray-05"
          >
            <div className="text-gray-02">{item.item}</div>
            <div className="text-right">
              <div className="font-semibold text-gray-03">${item.amount}</div>
              <div className="text-xs text-gray-03">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExpenseCategory;
