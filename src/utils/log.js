export const logErr = (err, place) => {
  console.error(`[${place}]`, {
    message: err.message,
    stack: err.stack,
    raw: err,
  });
};
