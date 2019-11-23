var searchControl;
var myMap;

function init() {
    myMap = new ymaps.Map('map', {
        center: [55.7933346, 49.1030382],
        zoom: 13,
        controls: []
    });

    searchControl = new ymaps.control.SearchControl({
        options: {
            suppressYandexSearch: true,
            provider: 'yandex#search'
        }
    });

    myMap.controls.add(searchControl);

    searchControl.search('');
}

ymaps.ready(init);

function returnSearchControl() {
    return searchControl;
}

function returnMyMap() {
    return myMap;
}

function returnYmaps() {
    return ymaps;
}
