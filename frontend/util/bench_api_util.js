export const fetchBenches = (filter) => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: {
      bounds: filter
    }
  });
};
