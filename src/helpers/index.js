module.exports = {
  validateEmail: (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  },
  validateIfIsAnUsjtEmail: (email) => {
    const domain = email.split('@')[1];
    const result = domain.split('.').includes('saojudas') ? true : false;
    return result
  }
}
