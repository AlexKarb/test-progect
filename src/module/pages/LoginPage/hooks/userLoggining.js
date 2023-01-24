const userBase = { AlexKarb: { password: '123qwe', role: 'ADMIN' } };

export const userLoggining = (name, password) => {
  const isNameInBase = Object.keys(userBase).includes(name);
  const passwordVerified = userBase[name]?.password === password;
  const role = userBase[name]?.role;

  return new Promise((resolve, reject) => {
    if (isNameInBase && passwordVerified) {
      resolve({ name, role });
    } else {
      reject();
    }
  });
};
