class GoogleMapsExtension {
  getInfo() {
    return {
      id: 'googlemaps',
      name: 'Google Maps',
      color1: '#4285F4',
      color2: '#3367D6',
      color3: '#2A56C6',
      blocks: [
        {
          opcode: 'openMap',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Открыть карту [ADDRESS]',
          arguments: {
            ADDRESS: { type: Scratch.ArgumentType.STRING, defaultValue: 'Москва' }
          }
        },
        {
          opcode: 'openMapWithCoords',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Открыть карту по координатам [LAT],[LON]',
          arguments: {
            LAT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 55.7558 },
            LON: { type: Scratch.ArgumentType.NUMBER, defaultValue: 37.6173 }
          }
        },
        {
          opcode: 'getMapLink',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ссылка на карту [ADDRESS]',
          arguments: {
            ADDRESS: { type: Scratch.ArgumentType.STRING, defaultValue: 'Москва' }
          }
        },
        {
          opcode: 'getMapLinkWithCoords',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ссылка на карту по координатам [LAT],[LON]',
          arguments: {
            LAT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 55.7558 },
            LON: { type: Scratch.ArgumentType.NUMBER, defaultValue: 37.6173 }
          }
        },
        {
          opcode: 'getRouteLink',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ссылка на маршрут от [FROM] до [TO]',
          arguments: {
            FROM: { type: Scratch.ArgumentType.STRING, defaultValue: 'Москва' },
            TO: { type: Scratch.ArgumentType.STRING, defaultValue: 'Санкт-Петербург' }
          }
        },
        {
          opcode: 'getRouteLinkWithCoords',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ссылка на маршрут от [LAT1],[LON1] до [LAT2],[LON2]',
          arguments: {
            LAT1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 55.7558 },
            LON1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 37.6173 },
            LAT2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 59.9343 },
            LON2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30.3351 }
          }
        },
        {
          opcode: 'getCoordinatesByAddress',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Координаты адреса [ADDRESS]',
          arguments: {
            ADDRESS: { type: Scratch.ArgumentType.STRING, defaultValue: 'Москва' }
          }
        },
        {
          opcode: 'getAddressByCoordinates',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Адрес по координатам [LAT],[LON]',
          arguments: {
            LAT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 55.7558 },
            LON: { type: Scratch.ArgumentType.NUMBER, defaultValue: 37.6173 }
          }
        },
        {
          opcode: 'getStreetViewLink',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ссылка на Street View по координатам [LAT],[LON]',
          arguments: {
            LAT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 55.7558 },
            LON: { type: Scratch.ArgumentType.NUMBER, defaultValue: 37.6173 }
          }
        },
        {
          opcode: 'getStreetViewLinkByAddress',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ссылка на Street View по адресу [ADDRESS]',
          arguments: {
            ADDRESS: { type: Scratch.ArgumentType.STRING, defaultValue: 'Москва' }
          }
        },
        {
          opcode: 'getMapEmbedLink',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ссылка для вставки карты [ADDRESS]',
          arguments: {
            ADDRESS: { type: Scratch.ArgumentType.STRING, defaultValue: 'Москва' }
          }
        },
        {
          opcode: 'getMapEmbedLinkWithCoords',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Ссылка для вставки карты по координатам [LAT],[LON]',
          arguments: {
            LAT: { type: Scratch.ArgumentType.NUMBER, defaultValue: 55.7558 },
            LON: { type: Scratch.ArgumentType.NUMBER, defaultValue: 37.6173 }
          }
        },
        {
          opcode: 'getDistanceBetweenCoords',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Расстояние между [LAT1],[LON1] и [LAT2],[LON2] (км)',
          arguments: {
            LAT1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 55.7558 },
            LON1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 37.6173 },
            LAT2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 59.9343 },
            LON2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 30.3351 }
          }
        }
      ]
    };
  }

  openMap(args) {
    const address = encodeURIComponent(args.ADDRESS);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  }

  openMapWithCoords(args) {
    const lat = Number(args.LAT);
    const lon = Number(args.LON);
    window.open(`https://www.google.com/maps/@?api=1&map_action=map&center=${lat},${lon}`, '_blank');
  }

  getMapLink(args) {
    const address = encodeURIComponent(args.ADDRESS);
    return `https://www.google.com/maps/search/?api=1&query=${address}`;
  }

  getMapLinkWithCoords(args) {
    const lat = Number(args.LAT);
    const lon = Number(args.LON);
    return `https://www.google.com/maps/@?api=1&map_action=map&center=${lat},${lon}`;
  }

  getRouteLink(args) {
    const from = encodeURIComponent(args.FROM);
    const to = encodeURIComponent(args.TO);
    return `https://www.google.com/maps/dir/?api=1&origin=${from}&destination=${to}`;
  }

  getRouteLinkWithCoords(args) {
    const lat1 = Number(args.LAT1);
    const lon1 = Number(args.LON1);
    const lat2 = Number(args.LAT2);
    const lon2 = Number(args.LON2);
    return `https://www.google.com/maps/dir/?api=1&origin=${lat1},${lon1}&destination=${lat2},${lon2}`;
  }

  async getCoordinatesByAddress(args) {
    try {
      const address = encodeURIComponent(args.ADDRESS);
      const response = await fetch(`https://geocode.maps.co/search?q=${address}`);
      if (!response.ok) {
        const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${address}&format=json`;
        const nominatimResponse = await fetch(nominatimUrl);
        if (!nominatimResponse.ok) throw new Error('Оба сервиса недоступны');
        const data = await nominatimResponse.json();
        if (!data.length) throw new Error('Адрес не найден');
        const lat = data[0].lat;
        const lon = data[0].lon;
        return `${lat}, ${lon}`;
      }
      const data = await response.json();
      if (!data.length) throw new Error('Адрес не найден');
      const lat = data[0].lat;
      const lon = data[0].lon;
      return `${lat}, ${lon}`;
    } catch (e) {
      return 'Ошибка: ' + e.message;
    }
  }

  async getAddressByCoordinates(args) {
    try {
      const lat = Number(args.LAT);
      const lon = Number(args.LON);
      const response = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`);
      if (!response.ok) {
        const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
        const nominatimResponse = await fetch(nominatimUrl);
        if (!nominatimResponse.ok) throw new Error('Оба сервиса недоступны');
        const data = await nominatimResponse.json();
        if (!data.display_name) throw new Error('Адрес не найден');
        return data.display_name;
      }
      const data = await response.json();
      if (!data.display_name) throw new Error('Адрес не найден');
      return data.display_name;
    } catch (e) {
      return 'Ошибка: ' + e.message;
    }
  }

  getStreetViewLink(args) {
    const lat = Number(args.LAT);
    const lon = Number(args.LON);
    return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lon}`;
  }

  getStreetViewLinkByAddress(args) {
    const address = encodeURIComponent(args.ADDRESS);
    return `https://www.google.com/maps/search/?api=1&query=${address}&layer=c&basemap=pano`;
  }

  getMapEmbedLink(args) {
    const address = encodeURIComponent(args.ADDRESS);
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${address}`;
    // ВНИМАНИЕ: Для работы требуется API-ключ Google Maps!
  }

  getMapEmbedLinkWithCoords(args) {
    const lat = Number(args.LAT);
    const lon = Number(args.LON);
    return `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lon}&zoom=15`;
    // ВНИМАНИЕ: Для работы требуется API-ключ Google Maps!
  }

  getDistanceBetweenCoords(args) {
    // Формула гаверсинусов для расчёта расстояния между двумя точками на сфере
    const lat1 = Number(args.LAT1) * (Math.PI / 180);
    const lon1 = Number(args.LON1) * (Math.PI / 180);
    const lat2 = Number(args.LAT2) * (Math.PI / 180);
    const lon2 = Number(args.LON2) * (Math.PI / 180);
    const R = 6371; // Радиус Земли в км
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance * 100) / 100;
  }
}

Scratch.extensions.register(new GoogleMapsExtension());
