export const sendResponse = (res, code, success, message) => {
  res.status(code).json({
    success,
    message,
  });
};

export const validEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
