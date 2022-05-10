const fsp = require('fs').promises;
const { join } = require('path');

const buildingsPath = join(__dirname, 'buildings.json');

const loadData = async () => {
    const rawJson = await fsp.readFile(buildingsPath, 'utf8');
    return JSON.parse(rawJson);
};

const storeData = async (list = []) => {
    const rawJson = JSON.stringify(list);
    await fsp.writeFile(buildingsPath, rawJson, 'utf8');
};

const getAll = async () => {
    const list = await loadData();
    return list;
};

const getOne = async (id = 0) => {
    const list = await loadData();
    return list.find( item => item.id === id );
};

const update = async (entity = {id: 0}) => {
    const list = await loadData();
    const index = list.findIndex( i => i.id === entity.id );

    if (index > -1) {
        list.splice(index, 1, entity);
        await storeData(list);
        return true;
    }
    
    return false;
};

const create = async (entity = {id: 0}) => {
    const list = await loadData();
    const nextID = list[list.length - 1].id + 1;
    entity.id = nextID;

    list.push(entity);

    await storeData(list);
    
    return true;
};

const remove = async (id = 0) => {
    const list = await loadData();
    const index = list.findIndex( i => i.id === id );

    if (index > -1) {
        list.splice(index, 1);
        await storeData(list);
        return true;
    }
    
    return false;
};

module.exports = Object.freeze({
    buildingsPath,
    loadData,
    storeData,
    getOne,
    getAll,
    create,
    update,
    remove,
});

// ( async () => {
//     // {"id":5,"name":"Charles River Laboratories International, Inc.","year":1943,"address":"76 Mariners Cove Avenue","active":true},
//     const entity = {"name":"Havanna Torony","year":1965,"address":"Budapest","active":true};
//     const response = await remove(101);
//     console.log(response);
// })();
