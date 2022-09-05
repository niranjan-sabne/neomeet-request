const getDashboardDetails = async () => {
  try {
    return {
      data: {
        totalrooms: 20,
        availablerooms: 13,
        bookedrooms: 7,
      },
    };
  } catch (err) {
    return {
      data: {
        totalrooms: 20,
        availablerooms: 15,
        bookedrooms: 5,
      },
    };
  }
};

export { getDashboardDetails };
