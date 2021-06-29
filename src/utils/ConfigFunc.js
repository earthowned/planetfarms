module.exports = () => {
  const userdata = localStorage.getItem('userInfo');
    const token = JSON.parse(userdata).token;
    
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
}