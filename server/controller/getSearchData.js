'use strict';
const _ = require('lodash');

module.exports = function(app, req) {
    const cardDetailsObj = require('../../mock-data/cardDetails.json');
    var modifiedList = [];

    // STEP 1: Filter the list on the searchType
    _.each(cardDetailsObj.cardDetails, (detail) => {
        if( _.get(detail, 'status') === req.body.searchKeyword ||
            _.get(detail, 'componentType') === req.body.searchKeyword ||
            _.get(detail, 'subComponentType') === req.body.searchKeyword) {
                modifiedList.push(detail);
            }
    });

    // STEP 2: Sort the list based on fieldName and sortedType
    let sortType = _.get(req, 'body.sortType.sortedType');
    switch(_.get(req, 'body.sortType.fieldName')) {

        case 'Date Updated':
            modifiedList= sortData(sortType, modifiedList, 'dateUpdated');
            break;
        case 'Component Identifier':
            modifiedList = sortData(sortType, modifiedList, 'componentIdentifier');
            break;
        case 'Status':
            modifiedList = sortData(sortType, modifiedList, 'status');
            break;
        case 'Rating Score (Populated on AMP)':
            modifiedList = sortData(sortType, modifiedList, 'ratingScore');
            break;
        default: console.log('No modifications needed');
    }

    // STEP 3: Filter on component type and ratings
    let componentTypesFilter = _.get(req, 'body.filter.componentTypesFilter');
    let ratingsFilter = _.get(req, 'body.filter.ratingsFilter');
    let filteredList = [];
    var temp = [];
    // Filter of component type if it is requested for
    if(componentTypesFilter.length > 0) {
       _.each(modifiedList, (item) => {
            _.each(componentTypesFilter, (obj) => {
                if(obj === item.componentType) {
                    temp.push(item);
                }
            })
       });
       modifiedList = temp;
       temp = [];
    }

    if(ratingsFilter) {
        _.each(modifiedList, (item) => {
            if(item.ratingScore >= ratingsFilter) {
                temp.push(item);
            }
        });
        modifiedList = temp;
        temp = [];
    }
    return modifiedList;
};

const sortData = function(sortType, modifiedList, key) {
    let orderedList;
    if(sortType.toLowerCase() === 'asc') {
        orderedList = _.orderBy(modifiedList, [key], ['asc']);
    } else {
        orderedList = _.orderBy(modifiedList, [key], ['desc']);
    }

    return orderedList;
}