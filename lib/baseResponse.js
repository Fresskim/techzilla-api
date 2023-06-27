module.exports = {
    success: (value) => {
      return {
        confirm: true,
        results: value
      } 
    },
    fail: (err) => {
      return {
        confirm: false,
        results: err
      }
    } 
  }