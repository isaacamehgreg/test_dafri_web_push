const openpgpModule = import(
  /* webpackChunkName: "openpgp,  webpackPrefetch: true" */ 'openpgp'
);

const encrypt = async (publicKey, dataToEncrypt) => {
  const decodedPublicKey = atob(publicKey.encryptedData);
  const openpgp = await openpgpModule;

  const options = {
    message: openpgp.message.fromText(JSON.stringify(dataToEncrypt)),
    publicKeys: (await openpgp.key.readArmored(decodedPublicKey)).keys,
  };

  return openpgp.encrypt(options).then(ciphertext => {
    return {
      encryptedMessage: btoa(ciphertext.data),
    };
  });
};

export const fetchEncryptedData = async (publicKeyData, cardData, codeData) => {
  const encryptedData = await encrypt(
    {
      encryptedData: publicKeyData.publicKey,
      keyId: publicKeyData.keyId,
    },
    {
      number: cardData.value,
      cvv: codeData.value,
    },
  );

  return encryptedData.encryptedMessage;
};
