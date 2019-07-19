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
  
        ConnectionFactory._createStores(e.target.result);
      };
  
      openRequest.onsuccess = e => {
  
        resolve(e.target.result);
      };
  
      openRequest.onerror = e => {
  
        console.log(e.target.error);
        reject(e.target.error.name);
      };
    });
  };

  static _createStores(connection){

    stores.forEach(store => {

      if(connection.objectStoreNames.contains(store)){

        connection.deleteObjectStore(store);
      }

      connection.createObjectStore(store, { autoIncrement: true });
    });
  };
}