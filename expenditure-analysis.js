function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  for (let transaction of transactions) {
    const { category, price } = transaction;

    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  const result = [];

  for (let category in categoryMap) {
    result.push({
      category: category,
      totalSpent: categoryMap[category]
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
