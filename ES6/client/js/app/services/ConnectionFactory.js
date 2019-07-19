var stores = ['negociacoes'];
var version = 4;
var dbName = 'aluraframe';

class ConnectionFactory {

  constructor(){

    throw new Error('Esta classe não pode ser instanciada.');
  }

  static getConnection(){

    return new Promise((resolve, reject) => {

      const openRequest = window.indexedDB.open(dbName, version);
  
      openRequest.onupgradeneeded = e => {
  
  
      };
  
      openRequest.onsuccess = e => {
  
  
      };
  
      openRequest.onerror = e => {
  
  
      };
    });
  };
}