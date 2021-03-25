const get = currency => {
    if (currency === 'dolar') {
        fetch('../src/dolar')
        .then(data => data.json())
        .then(res => {
            document.getElementById('data').innerHTML = `
                ${res.map(el => `<li>${el.fecha} - ${el.valor}</li>`)}
            `;
        });
    } else if(currency === 'euro') {
        fetch('../src/euro')
        .then(data => data.json())
        .then(res => {
            document.getElementById('data').innerHTML = `
                ${res.map(el => `<li>${el.fecha} - ${el.valor}</li>`)}
            `;
        });
    }
};